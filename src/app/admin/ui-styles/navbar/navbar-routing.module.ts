import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from './navbar.component';
import { AddNavbarComponent } from './add-navbar/add-navbar.component';
import { EditNavbarComponent } from './edit-navbar/edit-navbar.component';

const routes: Routes = [
    {
        path: "",
        component: NavbarComponent
    },
    {
        path: "add",
        component: AddNavbarComponent
    },
    {
        path: "edit/:id",
        component: EditNavbarComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class NavbarRoutingModule { }
