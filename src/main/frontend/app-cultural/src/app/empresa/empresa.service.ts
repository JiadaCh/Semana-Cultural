import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Empresa} from "./empresa";

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private apiURL = "http://localhost:8080/empresas/";

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<Empresa[]> {

    return this.httpClient.get<Empresa[]>(this.apiURL)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(empresa: Empresa): Observable<Empresa> {
    return this.httpClient.post<Empresa>(this.apiURL, JSON.stringify(empresa), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: number): Observable<Empresa> {
    return this.httpClient.get<Empresa>(this.apiURL + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: number, empresa: Empresa): Observable<Empresa> {
    return this.httpClient.put<Empresa>(this.apiURL + id, JSON.stringify(empresa), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: number) {
    return this.httpClient.delete<Empresa>(this.apiURL + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(() => errorMessage);
  }

}
