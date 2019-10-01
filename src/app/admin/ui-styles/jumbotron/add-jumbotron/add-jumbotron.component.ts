import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JumbotronService } from 'src/app/admin/shared/_service/jumbotron.service';

@Component({
  selector: 'app-add-jumbotron',
  templateUrl: './add-jumbotron.component.html',
  styleUrls: ['./add-jumbotron.component.scss']
})
export class AddJumbotronComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl(""),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });

  constructor(private jumbotronService: JumbotronService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.jumbotronService.create(this.form.value).subscribe(
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
