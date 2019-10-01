import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {TypographyService} from '../../../shared/_service/typography.service';

@Component({
  selector: 'app-edit-typography',
  templateUrl: './edit-typography.component.html',
  styleUrls: ['./edit-typography.component.scss']
})
export class EditTypographyComponent implements OnInit {
  typographyId: string;
  typography: any;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    css: new FormControl('', Validators.required),
    scss: new FormControl('', Validators.required),
    html: new FormControl('', Validators.required)
  });

  constructor(
      private service: TypographyService,
      private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.typographyId = this.route.snapshot.paramMap.get('id');
    this.loadOne();
  }

  loadOne() {
    this.service.getOne(this.typographyId).subscribe(
        success => {
          console.log(success);
          this.typography = success;
          this.initializeForm(success);
        },
        fail => {
          console.log(fail);
        }
    );
  }

  initializeForm(typography) {
    this.form = new FormGroup({
      name: new FormControl(typography.name, Validators.required),
      css: new FormControl(typography.css, Validators.required),
      scss: new FormControl(typography.scss, Validators.required),
      html: new FormControl(typography.html, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service
          .update(this.typographyId, this.form.value)
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
