import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PetComponent } from '../../_models/pet/pet.component';
import { Pet } from '../../_models/pet/pet';
import { SpecieComponent } from '../../_models/species/species.component';

import { apiUrl } from '../../url.constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class SpecieService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getSpecies(): Observable<SpecieComponent[]> {
    return this.http.get<any[]>(apiUrl + '/species').pipe(
      tap((pet) => console.log(`getSpecies`)),
      catchError(this.handleError<any>('getSpecies'))
    );
  }

  getSpecie(id): Observable<any> {
    return this.http.get(apiUrl + '/species/' + id).pipe(
      tap((pet) => console.log(`getSpecie w/ id=${id}`)),
      catchError(this.handleError<any>('getSpecie'))
    );
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

