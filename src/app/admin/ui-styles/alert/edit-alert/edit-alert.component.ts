import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../../../shared/_service/alert.service';

@Component({
  selector: 'app-edit-alert',
  templateUrl: './edit-alert.component.html',
  styleUrls: ['./edit-alert.component.scss']
})
export class EditAlertComponent implements OnInit {
  alertId: string;
  alert: any;
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl("", Validators.required),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });

  constructor(
      private service: AlertService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.alertId = this.route.snapshot.paramMap.get("id");
    this.loadOne();
  }

  loadOne() {
    this.service.getOne(this.alertId).subscribe(
        success => {
          console.log(success);
          this.alert = success;
          this.initializeForm(success);
        },
        fail => {
          console.log(fail);
        }
    );
  }

  initializeForm(alert) {
    this.form = new FormGroup({
      name: new FormControl(alert.name, Validators.required),
      css: new FormControl(alert.css, Validators.required),
      scss: new FormControl(alert.scss, Validators.required),
      html: new FormControl(alert.html, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service
          .update(this.alertId, this.form.value)
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
