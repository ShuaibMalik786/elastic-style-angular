import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {throwError as observableThrowError, Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {environment} from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserAccountService {

    constructor(private http: HttpClient) {
    }

    getUser(id) {
        const url = `${environment.apiBaseUrl}/user/${id}`;
        return this.http
            .get(url)
            .pipe(map(response => response, catchError(this.handleError)));
    }

    update(id, data) {
        const url = `${environment.apiBaseUrl}/user/${id}`;
        return this.http
            .put(url, data)
            .pipe(map(response => response, catchError(this.handleError)));
    }


    logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    public handleError(error: Response) {
        return observableThrowError(error.json());
    }

}
