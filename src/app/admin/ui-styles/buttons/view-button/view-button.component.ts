import { ButtonService } from './../../../shared/_service/button.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-view-button",
  templateUrl: "./view-button.component.html",
  styleUrls: ["./view-button.component.scss"]
})
export class ViewButtonComponent implements OnInit {
  buttonId: string;
  button: any;

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
      },
      fail => {
        console.log(fail);
      }
    );
  }
}
