import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProgressBarComponent } from './progress-bar.component';
import { AddProgressbarComponent } from './add-progressbar/add-progressbar.component';
import {EditProgressbarComponent} from './edit-progressbar/edit-progressbar.component';

const routes: Routes = [
    {
        path: "",
        component: ProgressBarComponent
    },
    {
        path: "add",
        component: AddProgressbarComponent
    },
    {
        path: "edit/:id",
        component: EditProgressbarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class ProgressbarRoutingModule { }
