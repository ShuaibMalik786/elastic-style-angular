import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationManager} from 'ng2-validation-manager';
import {AlertService} from '../../admin/shared/_service/alert.service';
import {SignUpService} from '../service/sign-up.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    form: any;
    errorMessage: string;

    constructor(private signUpService: SignUpService,
                private alertService: AlertService,
                private router: Router
    ) {
    }

    ngOnInit() {
        this.initializeForm();
    }

    onSubmit() {
        if (this.form.isValid()) {
            this.signUpService.signUp(this.form.getData())
                .subscribe(
                    (success: any) => {
                        console.log(success);
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
            'userName': 'required|rangeLength:1,255',
            'email': 'required|email',
            'password': 'required|rangeLength:5,255',
        });
    }
}
