import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AddAlertComponent } from './add-alert/add-alert.component';
import { EditAlertComponent } from './edit-alert/edit-alert.component';
import { ViewAlertComponent } from './view-alert/view-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertRoutingModule } from './alert-routing.module';

@NgModule({
  declarations: [AlertComponent, AddAlertComponent, EditAlertComponent, ViewAlertComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    AlertRoutingModule
  ]
})
export class AlertModule { }
