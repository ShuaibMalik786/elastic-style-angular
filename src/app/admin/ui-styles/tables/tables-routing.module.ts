import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TablesComponent } from './tables.component';
import { AddTablesComponent } from './add-tables/add-tables.component';
import { EditTablesComponent } from './edit-tables/edit-tables.component';

const routes: Routes = [
    {
        path: "",
        component: TablesComponent
    },
    {
        path: "add",
        component: AddTablesComponent
    },
    {
        path: "edit/:id",
        component: EditTablesComponent
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TablesRoutingModule { }
