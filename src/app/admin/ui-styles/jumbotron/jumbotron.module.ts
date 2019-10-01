import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './jumbotron.component';
import { AddJumbotronComponent } from './add-jumbotron/add-jumbotron.component';
import { EditJumbotronComponent } from './edit-jumbotron/edit-jumbotron.component';
import { ViewJumbotronComponent } from './view-jumbotron/view-jumbotron.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JumbotronRoutingModule } from './jumbotron-routing.module';

@NgModule({
  declarations: [JumbotronComponent, AddJumbotronComponent, EditJumbotronComponent, ViewJumbotronComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JumbotronRoutingModule
  ]
})
export class JumbotronModule { }
