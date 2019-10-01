import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {PaginationService} from '../../../shared/_service/pagination.service';

@Component({
  selector: 'app-edit-pagination',
  templateUrl: './edit-pagination.component.html',
  styleUrls: ['./edit-pagination.component.scss']
})
export class EditPaginationComponent implements OnInit {
  paginationId: string;
  pagination: any;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    css: new FormControl('', Validators.required),
    scss: new FormControl('', Validators.required),
    html: new FormControl('', Validators.required)
  });

  constructor(
      private service: PaginationService,
      private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.paginationId = this.route.snapshot.paramMap.get('id');
    this.loadOne();
  }

  loadOne() {
    this.service.getOne(this.paginationId).subscribe(
        success => {
          console.log(success);
          this.pagination = success;
          this.initializeForm(success);
        },
        fail => {
          console.log(fail);
        }
    );
  }

  initializeForm(pagination) {
    this.form = new FormGroup({
      name: new FormControl(pagination.name, Validators.required),
      css: new FormControl(pagination.css, Validators.required),
      scss: new FormControl(pagination.scss, Validators.required),
      html: new FormControl(pagination.html, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service
          .update(this.paginationId, this.form.value)
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
