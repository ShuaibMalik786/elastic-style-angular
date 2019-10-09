import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationManager} from 'ng2-validation-manager';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: any;

    constructor() {
    }

    ngOnInit() {
        console.log('login');
        this.initializeForm();
    }

    onSubmit() {
        if (this.form.isValid()) {

        }
        console.log(this.form.getData());
    }

    initializeForm() {
        this.form = new ValidationManager({
            'email': 'required|email',
            'password': 'required|rangeLength:5,255',
        });
    }
}
