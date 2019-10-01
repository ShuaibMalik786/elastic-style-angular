import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {throwError as observableThrowError, Observable} from "rxjs";
import {map, catchError} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";
import {environment} from "./../../../../environments/environment";


@Injectable({
  providedIn: "root"
})
export class UserStyleGuideService {
  constructor(private http: HttpClient) {
  }

  getUiComponents(): Observable<any> {
    const url = `${environment.apiBaseUrl}/style-guide/uiComponents`;
    return this.http
      .get(url)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  create(data) {
    const url = `${environment.apiBaseUrl}/style-guide`;
    return this.http
      .post(url, data, {responseType: "blob"})
      .pipe(map(response => response, catchError(this.handleError)));
  }

  getAll(): Observable<any> {
    const url = `${environment.apiBaseUrl}/style-guide`;
    return this.http
      .get(url)
      .pipe(map(response => response, catchError(this.handleError)));
  }


  getOne(id): Observable<any> {
    const url = `${environment.apiBaseUrl}/style-guide/${id}`;
    return this.http
      .get(url)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  update(id, data) {
    const url = `${environment.apiBaseUrl}/style-guide/${id}`;
    return this.http
      .put(url, data)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  delete(id): Observable<any> {
    const url = `${environment.apiBaseUrl}/style-guide/${id}`;
    return this.http
      .delete(url)
      .pipe(map(response => response, catchError(this.handleError)));
  }

  download(id): Observable<any> {
    const url = `${environment.apiBaseUrl}/style-guide/genrate/${id}`;
    return this.http
      .get(url, {responseType: "blob"})
      .pipe(map(response => response, catchError(this.handleError)));
  }

  public handleError(error: Response) {
    return observableThrowError(error.json());
  }
}
