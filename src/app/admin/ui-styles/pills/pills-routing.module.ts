import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PillsComponent } from './pills.component';
import { AddPillsComponent } from './add-pills/add-pills.component';
import { AditPillsComponent } from './adit-pills/adit-pills.component';

const routes: Routes = [
    {
        path: "",
        component: PillsComponent
    },
    {
        path: "add",
        component: AddPillsComponent
    },
    {
        path: "edit/:id",
        component: AditPillsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class PillsRoutingModule { }
