import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JumbotronService} from '../../../shared/_service/jumbotron.service';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '../../../shared/_service/modal.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  modalId: string;
  modal: any;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    css: new FormControl(''),
    scss: new FormControl(''),
    html: new FormControl('', Validators.required)
  });

  constructor(
      private service: ModalService,
      private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.modalId = this.route.snapshot.paramMap.get('id');
    this.loadOne();
  }

  loadOne() {
    this.service.getOne(this.modalId).subscribe(
        success => {
          console.log(success);
          this.modal = success;
          this.initializeForm(success);
        },
        fail => {
          console.log(fail);
        }
    );
  }

  initializeForm(modal) {
    this.form = new FormGroup({
      name: new FormControl(modal.name, Validators.required),
      css: new FormControl(modal.css),
      scss: new FormControl(modal.scss),
      html: new FormControl(modal.html, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.service
          .update(this.modalId, this.form.value)
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
