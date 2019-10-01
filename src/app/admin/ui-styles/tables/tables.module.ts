import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { AddTablesComponent } from './add-tables/add-tables.component';
import { EditTablesComponent } from './edit-tables/edit-tables.component';
import { ViewTablesComponent } from './view-tables/view-tables.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablesRoutingModule } from './tables-routing.module';

@NgModule({
  declarations: [TablesComponent, AddTablesComponent, EditTablesComponent, ViewTablesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TablesRoutingModule
  ]
})
export class TablesModule { }
