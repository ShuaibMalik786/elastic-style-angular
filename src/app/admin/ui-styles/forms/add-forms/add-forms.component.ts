import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/admin/shared/_service/forms.service';

@Component({
  selector: 'app-add-forms',
  templateUrl: './add-forms.component.html',
  styleUrls: ['./add-forms.component.scss']
})
export class AddFormsComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl(""),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });

  constructor(private formsService: FormsService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.formsService.create(this.form.value).subscribe(
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
