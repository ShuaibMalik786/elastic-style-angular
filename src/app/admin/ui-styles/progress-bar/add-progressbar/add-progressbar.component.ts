import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProgressBarService } from 'src/app/admin/shared/_service/progress-bar.service';

@Component({
  selector: 'app-add-progressbar',
  templateUrl: './add-progressbar.component.html',
  styleUrls: ['./add-progressbar.component.scss']
})
export class AddProgressbarComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl(""),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });
  constructor(private progressBarService: ProgressBarService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.progressBarService.create(this.form.value).subscribe(
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
