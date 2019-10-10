import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {throwError as observableThrowError, Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {environment} from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {
    }

    login(data) {
        const url = `${environment.apiBaseUrl}/auth/login`;
        return this.http
            .post(url, data)
            .pipe(map(response => response, catchError(this.handleError)));
    }

    public handleError(error: Response) {
        return observableThrowError(error.json());
    }
}
