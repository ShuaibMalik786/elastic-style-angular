import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpRoutingModule} from './sign-up-routing.module';
import {FormModule} from '../admin/ui-styles/forms/forms.module';
import {ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up.component/sign-up.component';

@NgModule({
    declarations: [SignUpComponent],
    imports: [
        CommonModule,
        SignUpRoutingModule,
        FormModule,
        ReactiveFormsModule
    ]
})
export class SignUpModule {
}
