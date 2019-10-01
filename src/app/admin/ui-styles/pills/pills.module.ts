import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillsComponent } from './pills.component';
import { AddPillsComponent } from './add-pills/add-pills.component';
import { AditPillsComponent } from './adit-pills/adit-pills.component';
import { ViewPillsComponent } from './view-pills/view-pills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PillsRoutingModule } from './pills-routing.module';

@NgModule({
  declarations: [PillsComponent, AddPillsComponent, AditPillsComponent, ViewPillsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PillsRoutingModule
  ]
})
export class PillsModule { }
