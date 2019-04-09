import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { UserComponent } from '../_models/user/user.component';
import { User } from '../_models/user/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UserComponent>;
    public currentUser: Observable<UserComponent>;
    user: User;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<UserComponent>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UserComponent {
        return this.currentUserSubject.value;
    }

    public get loggedIn(): boolean {
        return localStorage.getItem('accessToken') !== null;
    }

    login(usernameOrEmail: string, password: string) {
        return this.http.post<UserComponent>('http://localhost:8080/api/auth/signin', { usernameOrEmail, password }, { observe: 'response' }).pipe(tap(res => {
            localStorage.setItem('accessToken', res.headers.get('authorization'));
            if (res) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(res.body));
                this.currentUserSubject.next(res.body);
            }
        }))
    }

    logout() {
        // remove user from local storage to log user out
        console.log(localStorage);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}