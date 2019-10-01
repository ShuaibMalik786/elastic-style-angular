import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsRoutingModule } from './card-routing.module';

@NgModule({
  declarations: [CardComponent, AddCardComponent, EditCardComponent, ViewCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardsRoutingModule
  ]
})
export class CardModule { }
