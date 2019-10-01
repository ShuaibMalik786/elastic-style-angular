import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';
import { AddBadgeComponent } from './add-badge/add-badge.component';
import { EditBadgeComponent } from './edit-badge/edit-badge.component';
import { ViewBadgeComponent } from './view-badge/view-badge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeRoutingModule } from './badge-routing.module';

@NgModule({
  declarations: [BadgeComponent, AddBadgeComponent, EditBadgeComponent, ViewBadgeComponent],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    BadgeRoutingModule
  ]
})
export class BadgeModule { }
