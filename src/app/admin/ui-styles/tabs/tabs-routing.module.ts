import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TabsComponent } from './tabs.component';
import { AddTabsComponent } from './add-tabs/add-tabs.component';
import { EditTabsComponent } from './edit-tabs/edit-tabs.component';

const routes: Routes = [
    {
        path: "",
        component: TabsComponent
    },
    {
        path: "add",
        component: AddTabsComponent
    },
    {
        path: "edit/:id",
        component: EditTabsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TabsRoutingModule { }
