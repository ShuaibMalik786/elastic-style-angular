import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login/login.component';
import {FormModule} from '../admin/ui-styles/forms/forms.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormModule,
        ReactiveFormsModule
    ]
})
export class LoginModule {
}
