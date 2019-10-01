import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { AddProgressbarComponent } from './add-progressbar/add-progressbar.component';
import { EditProgressbarComponent } from './edit-progressbar/edit-progressbar.component';
import { ViewProgressbarComponent } from './view-progressbar/view-progressbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressbarRoutingModule } from './progressBar-routing.module';

@NgModule({
  declarations: [ProgressBarComponent, AddProgressbarComponent, EditProgressbarComponent, ViewProgressbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressbarRoutingModule
  ]
})
export class ProgressBarModule { }
