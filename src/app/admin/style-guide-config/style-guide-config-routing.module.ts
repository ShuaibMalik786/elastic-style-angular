import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {ViewComponent} from './view/view.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'add',
        component: AddComponent
    },


    {
        path: 'edit/:id',
        component: EditComponent
    },
    {
        path: ':id',
        component: ViewComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class StyleGuideConfigRoutingModule {
}
