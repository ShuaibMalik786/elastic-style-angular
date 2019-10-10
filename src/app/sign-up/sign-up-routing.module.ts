import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignUpComponent} from './sign-up.component/sign-up.component';

const routes: Routes = [
    {
        path: '',
        component: SignUpComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class SignUpRoutingModule {
}
