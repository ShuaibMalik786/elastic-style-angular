import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EuPopupComponent } from './npm-demos/eu-popup/eu-popup.component';

const routes: Routes = [
    {
        path: 'sign-up',
        loadChildren: './sign-up/sign-up.module#SignUpModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'profile/:id',
        loadChildren: './user-account/user-account.module#UserAccountModule'
    },
    {
        path: 'eu-popup',
        component: EuPopupComponent
    },
    {
        path: '',
        loadChildren: './user/user.module#UserModule'
    },
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
