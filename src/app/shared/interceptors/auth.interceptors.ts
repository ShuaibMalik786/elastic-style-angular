import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {throwError as observableThrowError, Observable} from 'rxjs';
import {LoginService} from '../../login/service/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public loginService: LoginService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.loginService.getToken()}`
            }
        });
        return next.handle(request);
    }
}
