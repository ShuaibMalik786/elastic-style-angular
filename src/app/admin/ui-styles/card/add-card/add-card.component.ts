import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardService } from 'src/app/admin/shared/_service/card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl(""),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.cardService.create(this.form.value).subscribe(
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
