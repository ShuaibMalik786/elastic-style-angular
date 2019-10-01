import { Component, OnInit } from '@angular/core';
import { CardService } from '../../shared/_service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cards: any;

  constructor(private service: CardService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.service.getAll().subscribe(
      success => {
        this.cards = success;
        console.log(success);
      },
      fail => {
        console.log(fail);
      }
    );
  }

  remove(id: string) {
    this.service.delete(id).subscribe(
      success => {
        this.loadAll();
        console.log(success);
      },
      fail => {
        console.log(fail);
      }
    );
  }
}
