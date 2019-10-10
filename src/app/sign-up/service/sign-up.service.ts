import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {throwError as observableThrowError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SignUpService {

    constructor(private http: HttpClient) {
    }

    signUp(data) {
        const url = `${environment.apiBaseUrl}/user/signUp`;
        return this.http
            .post(url, data)
            .pipe(map(response => response, catchError(this.handleError)));
    }

    public handleError(error: Response) {
        return observableThrowError(error.json());
    }
}