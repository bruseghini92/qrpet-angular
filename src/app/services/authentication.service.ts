import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { UserComponent } from '../_models/user/user.component';
import { User } from '../_models/user/user';
import { Role } from '../_models/role/role';
import { signUpModel } from '../register/signUpModel';

import { apiUrl } from '../url.constants';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UserComponent>;
    public currentUser: Observable<UserComponent>;
    user: User;
    constructor(private http: HttpClient,private route:ActivatedRoute) {
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
        return this.http.post<UserComponent>(apiUrl+'/auth/signin', { usernameOrEmail, password }, { observe: 'response' }).pipe(tap(res => {
            localStorage.setItem('accessToken', res.headers.get('Authorization'));
            if (res) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(res.body));
                this.currentUserSubject.next(res.body);

                let jwt = localStorage.getItem("accessToken")
                let jwtData = jwt.split('.')[1]
                let decodedJwtJsonData = window.atob(jwtData)
                let decodedJwtData = JSON.parse(decodedJwtJsonData)

                let isAdmin = decodedJwtData.scopes[0].authority

                //console.log('jwtData: ' + jwtData)
                //console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
                //console.log('decodedJwtData: ' + decodedJwtData)
                //console.log('Is admin: ' + isAdmin)

                if (isAdmin == 'ROLE_ADMIN'){
                    localStorage.setItem('role',isAdmin)
                }

            }
        }))
    }

    register(signupmodel: signUpModel) {
        return this.http.post(apiUrl + '/auth/signup', JSON.stringify(signupmodel), httpOptions).pipe(
            tap(_ => console.log(`User registered successfully` + signUpModel.name)),
            catchError(this.handleError<any>('registerUser'))
        );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('role');
        this.currentUserSubject.next(null);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}