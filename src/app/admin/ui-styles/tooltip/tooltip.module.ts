import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { AddTooltipComponent } from './add-tooltip/add-tooltip.component';
import { EditTooltipComponent } from './edit-tooltip/edit-tooltip.component';
import { ViewTooltipComponent } from './view-tooltip/view-tooltip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipRoutingModule } from './tooltip-routing.module';

@NgModule({
  declarations: [TooltipComponent, AddTooltipComponent, EditTooltipComponent, ViewTooltipComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipRoutingModule
  ]
})
export class TooltipModule { }
