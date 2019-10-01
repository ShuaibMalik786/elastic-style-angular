  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { ViewModalComponent } from './view-modal/view-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalRoutingModule } from './modal-routing.module';

@NgModule({
  declarations: [ModalComponent, AddModalComponent, EditModalComponent, ViewModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalRoutingModule
  ]
})
export class ModalModule { }
