import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModalComponent } from './modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';

const routes: Routes = [
    {
        path: "",
        component: ModalComponent
    },
    {
        path: "add",
        component: AddModalComponent
    },
    {
        path: "edit/:id",
        component: EditModalComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ModalRoutingModule { }
