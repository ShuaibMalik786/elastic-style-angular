import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {PillsService} from '../../../shared/_service/pills.service';

@Component({
  selector: 'app-adit-pills',
  templateUrl: './adit-pills.component.html',
  styleUrls: ['./adit-pills.component.scss']
})
export class AditPillsComponent implements OnInit {
  pillId: string;
  pill: any;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    css: new FormControl('', Validators.required),
    scss: new FormControl('', Validators.required),
    html: new FormControl('', Validators.required)
  });

  constructor(
      private service: PillsService,
      private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.pillId = this.route.snapshot.paramMap.get('id');
    this.loadOne();
  }

  loadOne() {
    this.service.getOne(this.pillId).subscribe(
        success => {
          console.log(success);
          this.pill = success;
          this.initializeForm(success);
        },
        fail => {
          console.log(fail);
        }
    );
  }

  initializeForm(pill) {
    this.form = new FormGroup({
      name: new FormControl(pill.name, Validators.required),
      css: new FormControl(pill.css, Validators.required),
      scss: new FormControl(pill.scss, Validators.required),
      html: new FormControl(pill.html, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service
          .update(this.pillId, this.form.value)
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

