import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TypographyService } from 'src/app/admin/shared/_service/typography.service';

@Component({
  selector: 'app-add-typography',
  templateUrl: './add-typography.component.html',
  styleUrls: ['./add-typography.component.scss']
})
export class AddTypographyComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl(""),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });
  constructor(private typographyService: TypographyService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.typographyService.create(this.form.value).subscribe(
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
