import { Component, OnInit } from '@angular/core';
import { JumbotronService } from '../../shared/_service/jumbotron.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  jumbotrons: any;

  constructor(private service: JumbotronService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.service.getAll().subscribe(
      success => {
        this.jumbotrons = success;
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
