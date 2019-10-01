import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BadgeComponent } from './badge.component';
import { AddBadgeComponent } from './add-badge/add-badge.component';
import { EditBadgeComponent } from './edit-badge/edit-badge.component';

const routes: Routes = [
    {
        path: "",
        component: BadgeComponent
    },
    {
        path: "add",
        component: AddBadgeComponent
    },
    {
        path: "edit/:id",
        component: EditBadgeComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class BadgeRoutingModule { }
