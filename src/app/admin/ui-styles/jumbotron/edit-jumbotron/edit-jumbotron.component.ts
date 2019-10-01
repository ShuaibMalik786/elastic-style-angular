import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {JumbotronService} from '../../../shared/_service/jumbotron.service';

@Component({
  selector: 'app-edit-jumbotron',
  templateUrl: './edit-jumbotron.component.html',
  styleUrls: ['./edit-jumbotron.component.scss']
})
export class EditJumbotronComponent implements OnInit {
  jumbotronId: string;
  jumbotron: any;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    css: new FormControl('', Validators.required),
    scss: new FormControl('', Validators.required),
    html: new FormControl('', Validators.required)
  });

  constructor(
      private service: JumbotronService,
      private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.jumbotronId = this.route.snapshot.paramMap.get('id');
    this.loadOne();
  }

  loadOne() {
    this.service.getOne(this.jumbotronId).subscribe(
        success => {
          console.log(success);
          this.jumbotron = success;
          this.initializeForm(success);
        },
        fail => {
          console.log(fail);
        }
    );
  }

  initializeForm(jumbotron) {
    this.form = new FormGroup({
      name: new FormControl(jumbotron.name, Validators.required),
      css: new FormControl(jumbotron.css, Validators.required),
      scss: new FormControl(jumbotron.scss, Validators.required),
      html: new FormControl(jumbotron.html, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service
          .update(this.jumbotronId, this.form.value)
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
