import { ButtonService } from "./../../../shared/_service/button.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-button",
  templateUrl: "./add-button.component.html",
  styleUrls: ["./add-button.component.scss"]
})
export class AddButtonComponent implements OnInit {
  buttonForm = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl(""),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });

  constructor(private buttonService: ButtonService) {}

  ngOnInit() {}

  onSubmit() {
    if (this.buttonForm.valid) {
      this.buttonService.addButton(this.buttonForm.value).subscribe(
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
