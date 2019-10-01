import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TypographyComponent } from './typography.component';
import { AddTypographyComponent } from './add-typography/add-typography.component';
import { EditTypographyComponent } from './edit-typography/edit-typography.component';

const routes: Routes = [
    {
        path: "",
        component: TypographyComponent
    },
    {
        path: "add",
        component: AddTypographyComponent
    },
    {
        path: "edit/:id",
        component: EditTypographyComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TypographyRoutingModule { }
