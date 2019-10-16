import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {throwError as observableThrowError, Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {environment} from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() {
    }


    isLoggedIn() {
        if (localStorage.getItem('token')) {
            return true;
        } else {
            return false;
        }
    }
}
