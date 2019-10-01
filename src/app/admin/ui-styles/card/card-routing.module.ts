import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardModule } from './card.module';
import { AddCardComponent } from './add-card/add-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { CardComponent } from './card.component';

const routes: Routes = [
    {
        path: "",
        component: CardComponent
    },
    {
        path: "add",
        component: AddCardComponent
    },
    {
        path: "edit/:id",
        component: EditCardComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class CardsRoutingModule { }
