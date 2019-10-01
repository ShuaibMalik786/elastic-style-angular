import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './alert.component';
import { AddAlertComponent } from './add-alert/add-alert.component';
import { EditAlertComponent } from './edit-alert/edit-alert.component';

const routes: Routes = [
    {
        path: '',
        component: AlertComponent
    },
    {
        path: 'add',
        component: AddAlertComponent
    },
    {
        path: 'edit/:id',
        component: EditAlertComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AlertRoutingModule { }
