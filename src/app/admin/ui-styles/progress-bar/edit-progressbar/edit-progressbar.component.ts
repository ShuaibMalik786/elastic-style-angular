import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ProgressBarService} from '../../../shared/_service/progress-bar.service';

@Component({
  selector: 'app-edit-progressbar',
  templateUrl: './edit-progressbar.component.html',
  styleUrls: ['./edit-progressbar.component.scss']
})
export class EditProgressbarComponent implements OnInit {
  progressBarId: string;
  progressBar: any;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    css: new FormControl('', Validators.required),
    scss: new FormControl('', Validators.required),
    html: new FormControl('', Validators.required)
  });

  constructor(
      private service: ProgressBarService,
      private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.progressBarId = this.route.snapshot.paramMap.get('id');
    this.loadOne();
  }

  loadOne() {
    this.service.getOne(this.progressBarId).subscribe(
        success => {
          console.log(success);
          this.progressBar = success;
          this.initializeForm(success);
        },
        fail => {
          console.log(fail);
        }
    );
  }

  initializeForm(progressBar) {
    this.form = new FormGroup({
      name: new FormControl(progressBar.name, Validators.required),
      css: new FormControl(progressBar.css, Validators.required),
      scss: new FormControl(progressBar.scss, Validators.required),
      html: new FormControl(progressBar.html, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service
          .update(this.progressBarId, this.form.value)
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
