import { Component, OnInit } from '@angular/core';
import {BadgeService} from '../../shared/_service/badge.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  badges: any;

  constructor(private service: BadgeService) {}

  ngOnInit() {
    this.loadButtons();
  }

  loadButtons() {
    this.service.getAll().subscribe(
      success => {
        this.badges = success;
        console.log(success);
      },
      fail => {
        console.log(fail);
      }
    );
  }

  delete(id: string) {
    this.service.delete(id).subscribe(
      success => {
        this.loadButtons();
        console.log(success);
      },
      fail => {
        console.log(fail);
      }
    );
  }
}
