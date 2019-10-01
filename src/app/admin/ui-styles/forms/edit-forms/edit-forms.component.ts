import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {FormsService} from '../../../shared/_service/forms.service';

@Component({
  selector: 'app-edit-forms',
  templateUrl: './edit-forms.component.html',
  styleUrls: ['./edit-forms.component.scss']
})
export class EditFormsComponent implements OnInit {
  formId: string;
  formComponent: any;
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl("", Validators.required),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });

  constructor(
      private service: FormsService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formId = this.route.snapshot.paramMap.get("id");
    this.loadOne();
  }

  loadOne() {
    this.service.getOne(this.formId).subscribe(
        success => {
          console.log(success);
          this.formComponent = success;
          this.initializeForm(success);
        },
        fail => {
          console.log(fail);
        }
    );
  }

  initializeForm(form) {
    this.form = new FormGroup({
      name: new FormControl(form.name, Validators.required),
      css: new FormControl(form.css, Validators.required),
      scss: new FormControl(form.scss, Validators.required),
      html: new FormControl(form.html, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service
          .update(this.formId, this.form.value)
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
