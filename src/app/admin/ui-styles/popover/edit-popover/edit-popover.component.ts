import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {PopoverService} from '../../../shared/_service/popover.service';

@Component({
  selector: 'app-edit-popover',
  templateUrl: './edit-popover.component.html',
  styleUrls: ['./edit-popover.component.scss']
})
export class EditPopoverComponent implements OnInit {
  popoverId: string;
  popover: any;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    css: new FormControl('', Validators.required),
    scss: new FormControl('', Validators.required),
    html: new FormControl('', Validators.required)
  });

  constructor(
      private service: PopoverService,
      private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.popoverId = this.route.snapshot.paramMap.get('id');
    this.loadOne();
  }

  loadOne() {
    this.service.getOne(this.popoverId).subscribe(
        success => {
          console.log(success);
          this.popover = success;
          this.initializeForm(success);
        },
        fail => {
          console.log(fail);
        }
    );
  }

  initializeForm(popover) {
    this.form = new FormGroup({
      name: new FormControl(popover.name, Validators.required),
      css: new FormControl(popover.css, Validators.required),
      scss: new FormControl(popover.scss, Validators.required),
      html: new FormControl(popover.html, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service
          .update(this.popoverId, this.form.value)
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
