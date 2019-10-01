import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PopoverService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    const url = `${environment.apiBaseUrl}/popover`;
    return this.http
      .get(url)
      .pipe(map(response => response, catchError(this.handleError)));
  }


  getOne(id): Observable<any> {
    const url = `${environment.apiBaseUrl}/popover/${id}`;
    return this.http
      .get(url)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  create(data) {
    const url = `${environment.apiBaseUrl}/popover`;
    return this.http
      .post(url, data)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  update(id, data) {
    const url = `${environment.apiBaseUrl}/popover/${id}`;
    return this.http
      .put(url, data)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  delete(id) {
    const url = `${environment.apiBaseUrl}/popover/${id}`;
    return this.http
      .delete(url)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  public handleError(error: Response) {
    return observableThrowError(error.json());
  }
}
