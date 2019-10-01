import { ButtonService } from "./../../../shared/_service/button.service";
import { FormControl, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-button",
  templateUrl: "./edit-button.component.html",
  styleUrls: ["./edit-button.component.scss"]
})
export class EditButtonComponent implements OnInit {
  buttonId: string;
  button: any;

  buttonForm = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl("", Validators.required),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });

  constructor(
    private buttonService: ButtonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buttonId = this.route.snapshot.paramMap.get("id");
    this.loadButtons();
  }

  loadButtons() {
    this.buttonService.getButton(this.buttonId).subscribe(
      success => {
        console.log(success);
        this.button = success;
        this.initializeForm(success);
      },
      fail => {
        console.log(fail);
      }
    );
  }

  initializeForm(button) {
    this.buttonForm = new FormGroup({
      name: new FormControl(button.name, Validators.required),
      css: new FormControl(button.css, Validators.required),
      scss: new FormControl(button.scss, Validators.required),
      html: new FormControl(button.html, Validators.required)
    });
  }

  onSubmit() {
    if (this.buttonForm.valid) {
      this.buttonService
        .updateButton(this.buttonId, this.buttonForm.value)
        .subscribe(
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
