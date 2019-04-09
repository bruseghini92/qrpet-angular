import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PetComponent } from 'src/app/_models/pet/pet.component';
import { Pet } from 'src/app/_models/pet/pet';

const endpoint = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PetService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getPets(): Observable<PetComponent[]> {
    return this.http.get<PetComponent[]>(endpoint + 'pets');
  }

  getPet(id): Observable<any> {
    return this.http.get(endpoint + 'pets/info/' + id).pipe(
      map(this.extractData));
  }

  addPet(pet): Observable<any> {
    console.log(pet);
    return this.http.post<any>(endpoint + 'pets', JSON.stringify(pet), httpOptions).pipe(
      tap((pet) => console.log(`added pet w/ id=${pet.id}`)),
      catchError(this.handleError<any>('addPet'))
    );
  }

  updatePet(pet: Pet): Observable<any> {
    return this.http.put(endpoint + 'pets/', JSON.stringify(pet), httpOptions).pipe(
      tap(_ => console.log(`updated pet id=${pet.id}`)),
      catchError(this.handleError<any>('updatePet'))
    );
  }

  deletePet(id): Observable<any> {
    return this.http.delete<any>(endpoint + 'pets/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted pet id=${id}`)),
      catchError(this.handleError<any>('deletePet'))
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

