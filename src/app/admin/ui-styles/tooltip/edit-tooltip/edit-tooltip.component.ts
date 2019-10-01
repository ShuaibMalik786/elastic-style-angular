import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TablesService} from '../../../shared/_service/tables.service';
import {ActivatedRoute} from '@angular/router';
import {TooltipService} from '../../../shared/_service/tooltip.service';

@Component({
  selector: 'app-edit-tooltip',
  templateUrl: './edit-tooltip.component.html',
  styleUrls: ['./edit-tooltip.component.scss']
})
export class EditTooltipComponent implements OnInit {
  tooltipId: string;
  tooltip: any;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    css: new FormControl('', Validators.required),
    scss: new FormControl('', Validators.required),
    html: new FormControl('', Validators.required)
  });

  constructor(
      private service: TooltipService,
      private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.tooltipId = this.route.snapshot.paramMap.get('id');
    this.loadOne();
  }

  loadOne() {
    this.service.getOne(this.tooltipId).subscribe(
        success => {
          console.log(success);
          this.tooltip = success;
          this.initializeForm(success);
        },
        fail => {
          console.log(fail);
        }
    );
  }

  initializeForm(tooltip) {
    this.form = new FormGroup({
      name: new FormControl(tooltip.name, Validators.required),
      css: new FormControl(tooltip.css, Validators.required),
      scss: new FormControl(tooltip.scss, Validators.required),
      html: new FormControl(tooltip.html, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service
          .update(this.tooltipId, this.form.value)
          .subscribe(
              success => {
                console.log(success);
              },
              fail => {
                console.log(fail);
              }
          );
    }
  }
}
