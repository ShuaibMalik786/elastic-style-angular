import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from 'src/app/admin/shared/_service/modal.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl(""),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });


  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.modalService.create(this.form.value).subscribe(
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
