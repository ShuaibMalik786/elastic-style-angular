import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ButtonService {
  constructor(private http: HttpClient) {}

  getButtons(): Observable<any> {
    const url = `${environment.apiBaseUrl}/admin/button`;
    return this.http
      .get(url)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  getButton(id: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/admin/button/${id}`;
    return this.http
      .get(url)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  addButton(button: any): Observable<any> {
    const url = `${environment.apiBaseUrl}/admin/button`;
    return this.http
      .post(url, button)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  updateButton(id: string, button: any): Observable<any> {
    const url = `${environment.apiBaseUrl}/admin/button/${id}`;
    return this.http
      .put(url, button)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  removeButton(id: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/admin/button/${id}`;
    return this.http
      .delete(url)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  public handleError(error: Response) {
    return observableThrowError(error.json());
  }
}
