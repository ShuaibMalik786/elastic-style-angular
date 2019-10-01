import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaginationComponent } from './pagination.component';
import { AddPaginationComponent } from './add-pagination/add-pagination.component';
import { EditPaginationComponent } from './edit-pagination/edit-pagination.component';

const routes: Routes = [
    {
        path: "",
        component: PaginationComponent
    },
    {
        path: "add",
        component: AddPaginationComponent
    },
    {
        path: "edit/:id",
        component: EditPaginationComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class PaginationRoutingModule { }
