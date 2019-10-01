import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { AddPopoverComponent } from './add-popover/add-popover.component';
import { EditPopoverComponent } from './edit-popover/edit-popover.component';
import { ViewPopoverComponent } from './view-popover/view-popover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopoverRoutingModule } from './popover-routing.module';

@NgModule({
  declarations: [PopoverComponent, AddPopoverComponent, EditPopoverComponent, ViewPopoverComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverRoutingModule
  ]
})
export class PopoverModule { }
