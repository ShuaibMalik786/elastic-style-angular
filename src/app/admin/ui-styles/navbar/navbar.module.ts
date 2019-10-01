import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AddNavbarComponent } from './add-navbar/add-navbar.component';
import { EditNavbarComponent } from './edit-navbar/edit-navbar.component';
import { ViewNavbarComponent } from './view-navbar/view-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarRoutingModule } from './navbar-routing.module';

@NgModule({
  declarations: [NavbarComponent, AddNavbarComponent, EditNavbarComponent, ViewNavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarRoutingModule
  ]
})
export class NavbarModule { }
