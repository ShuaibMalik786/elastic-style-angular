import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserSgComponent} from './user-sg/user-sg.component';

const routes: Routes = [
    {
        path: '',
        component: UserProfileComponent
    },
    {
        path: 'style-guide',
        component: UserSgComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class UserAccountRoutingModule {
}
