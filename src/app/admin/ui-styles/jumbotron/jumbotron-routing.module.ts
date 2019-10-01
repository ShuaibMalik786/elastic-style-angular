import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JumbotronComponent } from './jumbotron.component';
import { AddJumbotronComponent } from './add-jumbotron/add-jumbotron.component';
import { EditJumbotronComponent } from './edit-jumbotron/edit-jumbotron.component';

const routes: Routes = [
    {
        path: "",
        component: JumbotronComponent
    },
    {
        path: "add",
        component: AddJumbotronComponent
    },
    {
        path: "edit/:id",
        component: EditJumbotronComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class JumbotronRoutingModule { }
