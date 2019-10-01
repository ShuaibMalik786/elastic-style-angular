import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TooltipComponent } from './tooltip.component';
import { AddTooltipComponent } from './add-tooltip/add-tooltip.component';
import { EditTooltipComponent } from './edit-tooltip/edit-tooltip.component';

const routes: Routes = [
    {
        path: "",
        component: TooltipComponent
    },
    {
        path: "add",
        component: AddTooltipComponent
    },
    {
        path: "edit/:id",
        component: EditTooltipComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TooltipRoutingModule { }
