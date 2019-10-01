import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../shared/_service/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  paginations: any;

  constructor(private service: PaginationService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.service.getAll().subscribe(
      success => {
        this.paginations = success;
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