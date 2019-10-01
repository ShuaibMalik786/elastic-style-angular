import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../shared/_service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbars: any;

  constructor(private service: NavbarService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.service.getAll().subscribe(
      success => {
        this.navbars = success;
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