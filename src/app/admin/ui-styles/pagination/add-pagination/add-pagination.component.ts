import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaginationService } from 'src/app/admin/shared/_service/pagination.service';

@Component({
  selector: 'app-add-pagination',
  templateUrl: './add-pagination.component.html',
  styleUrls: ['./add-pagination.component.scss']
})
export class AddPaginationComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl(""),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });
  constructor(private paginationService: PaginationService) {}

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.paginationService.create(this.form.value).subscribe(
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
