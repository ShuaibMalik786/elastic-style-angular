import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { AddFormsComponent } from './add-forms/add-forms.component';
import { EditFormsComponent } from './edit-forms/edit-forms.component';
import { ViewFormsComponent } from './view-forms/view-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './form-routing.module';

@NgModule({
  declarations: [FormsComponent, AddFormsComponent, EditFormsComponent, ViewFormsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormModule { }
