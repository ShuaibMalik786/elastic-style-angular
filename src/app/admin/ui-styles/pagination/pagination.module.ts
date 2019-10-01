import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { AddPaginationComponent } from './add-pagination/add-pagination.component';
import { EditPaginationComponent } from './edit-pagination/edit-pagination.component';
import { ViewPaginationComponent } from './view-pagination/view-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationRoutingModule } from './pagination-routing.module';

@NgModule({
  declarations: [PaginationComponent, AddPaginationComponent, EditPaginationComponent, ViewPaginationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationRoutingModule
  ]
})
export class PaginationModule { }
