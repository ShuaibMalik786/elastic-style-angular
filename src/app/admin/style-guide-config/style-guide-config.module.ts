import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewComponent} from './view/view.component';
import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {StyleGuideConfigRoutingModule} from './style-guide-config-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [ViewComponent, ListComponent, AddComponent, EditComponent],
    imports: [
        CommonModule,
        StyleGuideConfigRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class StyleGuideConfigModule {
}
