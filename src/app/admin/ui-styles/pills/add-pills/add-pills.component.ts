import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PillsService } from 'src/app/admin/shared/_service/pills.service';

@Component({
  selector: 'app-add-pills',
  templateUrl: './add-pills.component.html',
  styleUrls: ['./add-pills.component.scss']
})
export class AddPillsComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl(""),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });
  constructor(private pillsService: PillsService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.pillsService.create(this.form.value).subscribe(
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
