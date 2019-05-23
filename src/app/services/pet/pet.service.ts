import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PetComponent } from '../../_models/pet/pet.component';
import { Pet } from '../../_models/pet/pet';

import { apiUrl, qrCodeUrl } from '../../url.constants';

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

  downloadQR(id: number) {
    return this.http
      .get(qrCodeUrl + id, { responseType: 'blob' })
      .toPromise();
  }

  getPets(): Observable<PetComponent[]> {
    return this.http.get<PetComponent[]>(apiUrl + '/pets');
  }

  getPet(id): Observable<PetComponent> {
    return this.http.get<PetComponent>(apiUrl + '/pets/' + id);
  }

  addPet(pet): Observable<any> {
    return this.http.post<any>(apiUrl + '/pets', JSON.stringify(pet), httpOptions).pipe(
      tap((pet) => console.log(`added pet w/ id=${pet.id}`)),
      catchError(this.handleError<any>('addPet'))
    );
  }

  updatePet(pet: Pet): Observable<any> {
    return this.http.put(apiUrl + '/pets', JSON.stringify(pet), httpOptions).pipe(
      tap(_ => console.log(`updated pet id=${pet.id}`)),
      catchError(this.handleError<any>('updatePet'))
    );
  }

  deletePet(id): Observable<any> {
    return this.http.delete<any>(apiUrl + '/pets' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted pet id=${id}`)),
      catchError(this.handleError<any>('deletePet'))
    );
  }
  
  setLostPetById(idPet) {
    return this.http.post(apiUrl + '/pets/lost-found',idPet, httpOptions).subscribe(
      tap(data => console.log(`lost pet id=${data}`)),
      catchError(this.handleError<any>('setLostPetById'))
    );
  }

  setAdoptablePetById(idPet) {
    return this.http.post(apiUrl + '/pets/adoptable', idPet, httpOptions).subscribe(
      tap(idPet => console.log(`adoptable pet id=${idPet}`)),
      catchError(this.handleError<any>('adoptablePet'))
    );
  }

  setCastrationById(idPet) {
    return this.http.post(apiUrl + '/pets/castration', idPet, httpOptions).subscribe(
      tap(idPet => console.log(`castration pet id=${idPet}`)),
      catchError(this.handleError<any>('castrationPet'))
    );
}

setMatingById(idPet) {
  return this.http.post(apiUrl + '/pets/mating', idPet, httpOptions).subscribe(
    tap(idPet => console.log(`mating pet id=${idPet}`)),
    catchError(this.handleError<any>('matingPet'))
  );
}

  lostPets(): Observable<PetComponent[]> {
    return this.http.get<PetComponent[]>(apiUrl + '/info/lost-pets');
  }

  adoptablePets(): Observable<PetComponent[]> {
    return this.http.get<PetComponent[]>(apiUrl + '/info/adoptable-pets');
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

