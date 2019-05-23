import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PetComponent } from '../_models/pet/pet.component';

import { apiUrl } from '../url.constants';
import { UserComponent } from '../_models/user/user.component';
import { SpecieComponent } from '../_models/species/species.component';
import { RaceComponent } from '../_models/races/races.component';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class AdminService {

    constructor(private http: HttpClient) { }

    getPets(): Observable<PetComponent[]> {
        console.log("apiUrl"+ '/admin/pets')
        return this.http.get<PetComponent[]>(apiUrl + '/admin/pets');
    }

    getUsers(): Observable<UserComponent[]> {
        return this.http.get<UserComponent[]>(apiUrl + '/admin/users');
    }

    getSpecies(): Observable<SpecieComponent[]> {
        return this.http.get<SpecieComponent[]>(apiUrl + '/admin/species');
    }

    getRaces(): Observable<RaceComponent[]> {
        return this.http.get<RaceComponent[]>(apiUrl + '/admin/races');
    }
}