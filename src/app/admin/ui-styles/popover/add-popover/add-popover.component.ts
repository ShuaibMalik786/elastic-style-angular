import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverService } from 'src/app/admin/shared/_service/popover.service';

@Component({
  selector: 'app-add-popover',
  templateUrl: './add-popover.component.html',
  styleUrls: ['./add-popover.component.scss']
})
export class AddPopoverComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl(""),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });
  constructor(private popoverService: PopoverService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.popoverService.create(this.form.value).subscribe(
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
