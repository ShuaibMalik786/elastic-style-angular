import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {throwError as observableThrowError, Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {environment} from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserStyleSheetService {

    constructor(private http: HttpClient) {
    }

    getSGs(userId) {
        const url = `${environment.apiBaseUrl}/style-guide/user/${userId}`;
        return this.http
            .get(url)
            .pipe(map(response => response, catchError(this.handleError)));
    }


  download(id): Observable<any> {
    const url = `${environment.apiBaseUrl}/style-guide/genrate/${id}`;
    return this.http
        .get(url, {responseType: 'blob'})
        .pipe(map(response => response, catchError(this.handleError)));
  }


    public handleError(error: Response) {
        return observableThrowError(error.json());
    }
}
