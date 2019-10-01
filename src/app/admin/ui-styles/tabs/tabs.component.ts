import { Component, OnInit } from '@angular/core';
import { TabsService } from '../../shared/_service/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabs: any;

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    console.log('tabs');
    this.loadAll();
  }

  loadAll() {
    this.tabsService.getAll().subscribe(
      success => {
        this.tabs = success;
        console.log(success);
      },
      fail => {
        console.log(fail);
      }
    );
  }

  delete(id: string) {
    this.tabsService.delete(id).subscribe(
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
