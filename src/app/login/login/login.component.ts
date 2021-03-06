import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationManager} from 'ng2-validation-manager';
import {LoginService} from '../service/login.service';
import {AlertService} from '../../admin/shared/_service/alert.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: any;
    errorMessage: string;

    constructor(private loginService: LoginService,
                private alertService: AlertService,
                private router: Router
    ) {
    }

    ngOnInit() {
        this.initializeForm();
    }

    onSubmit() {
        if (this.form.isValid()) {
            this.loginService.login(this.form.getData())
                .subscribe(
                    (success: any) => {
                        localStorage.setItem('token', success.access_token);
                        localStorage.setItem('user', JSON.stringify(success.user));
                        this.router.navigate(['/']);
                    },
                    fail => {
                        console.log(fail);
                        this.errorMessage = fail.error.error;
                    }
                );
        }
    }

    initializeForm() {
        this.form = new ValidationManager({
            'email': 'required|email',
            'password': 'required|rangeLength:5,255',
        });
    }
}
