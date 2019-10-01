import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PopoverComponent } from './popover.component';
import { AddPopoverComponent } from './add-popover/add-popover.component';
import { EditPopoverComponent } from './edit-popover/edit-popover.component';

const routes: Routes = [
    {
        path: "",
        component: PopoverComponent
    },
    {
        path: "add",
        component: AddPopoverComponent
    },
    {
        path: "edit/:id",
        component: EditPopoverComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class PopoverRoutingModule { }
