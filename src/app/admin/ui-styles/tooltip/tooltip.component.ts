import { Component, OnInit } from '@angular/core';
import { TooltipService } from '../../shared/_service/tooltip.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  tooltips: any;

  constructor(private service: TooltipService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.service.getAll().subscribe(
      success => {
        this.tooltips = success;
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
