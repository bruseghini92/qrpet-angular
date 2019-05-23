import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { apiUrl } from '../../url.constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getProducts(): Observable<any> {
    return this.http.get(apiUrl + 'users').pipe(
      map(this.extractData));
  }

  getProduct(id): Observable<any> {
    return this.http.get(apiUrl + 'users/' + id).pipe(
      map(this.extractData));
  }

  addProduct(product): Observable<any> {
    console.log(product);
    return this.http.post<any>(apiUrl + 'users', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added user w/ id=${product.id}`)),
      catchError(this.handleError<any>('addUser'))
    );
  }

  updateUser(user): Observable<any> {
    return this.http.put(apiUrl + 'users/', JSON.stringify(user), httpOptions).pipe(
      tap(_ => console.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser' + "elusuariocomecaca" + JSON.stringify(user)))
    );
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete<any>(apiUrl + 'products/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted user id=${id}`)),
      catchError(this.handleError<any>('deleteUser'))
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




