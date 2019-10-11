import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserAccountRoutingModule} from './user-account-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSgComponent } from './user-sg/user-sg.component';
import {UserModule} from '../user/user.module';
import {FormModule} from '../admin/ui-styles/forms/forms.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [UserProfileComponent, UserSgComponent],
    imports: [
        CommonModule,
        UserAccountRoutingModule,
        UserModule,
        FormModule,
        ReactiveFormsModule
    ]
})
export class UserAccountModule {
}
