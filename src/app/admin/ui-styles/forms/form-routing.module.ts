import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsComponent } from './forms.component';
import { AddFormsComponent } from './add-forms/add-forms.component';
import {EditFormsComponent} from './edit-forms/edit-forms.component';

const routes: Routes = [
    {
        path: "",
        component: FormsComponent
    },
    {
        path: "add",
        component: AddFormsComponent
    },
    {
        path: "edit/:id",
        component: EditFormsComponent
    },
    // {
    //     path: "**",
    //     redirectTo: "button"
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class FormsRoutingModule { }
