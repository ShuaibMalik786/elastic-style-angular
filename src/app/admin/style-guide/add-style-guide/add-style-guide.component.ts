import { ToasterService } from "./../../shared/_service/toaster.service";
import { Component, OnInit } from "@angular/core";
import { StyleGuideService } from "../../shared/_service/style-guide.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-style-guide",
  templateUrl: "./add-style-guide.component.html",
  styleUrls: ["./add-style-guide.component.scss"]
})
export class AddStyleGuideComponent implements OnInit {
  color = '#007bff';
  successColor = '#28a745';
  warningColor = '#FFC10D';
  dangerColor = '#dc3545';
  secondaryColor = '#6c757d';

  constructor(
    private styleGuideService: StyleGuideService,
    private toasterService: ToasterService
  ) {}
  components: any;

  styleGuideForm = new FormGroup({
    primaryColor: new FormControl(""),
    button: new FormControl(""),
    buttonCss: new FormControl(""),
    tab: new FormControl(""),
    tabsCss: new FormControl(""),
    form: new FormControl(""),
    formCss: new FormControl(""),
    badge: new FormControl(""),
    badgeCss: new FormControl(""),
    card: new FormControl(""),
    cardCss: new FormControl(""),
    css: new FormControl("", Validators.required)
  });

  ngOnInit() {
    this.getUiComponents();
  }

  getUiComponents() {
    this.styleGuideService.getUiComponents().subscribe(
      success => {
        this.components = success;
      },
      fail => {
        console.log(fail);
      }
    );
  }

  colorSelected(color) {
    this.styleGuideForm.controls["primaryColor"].setValue(color);
  }

  onSubmit() {
    this.genrateCss();
    if (!this.styleGuideForm.valid) {
      this.toasterService.warning('please select atleast one component');
    }
    console.log(this.styleGuideForm.value);
    // if (this.styleGuideForm.valid) {
    // this.styleGuideService.create(this.styleGuideForm.value).subscribe(
    //   success => {
    //     console.log(success);
    //   },
    //   fail => {
    //     console.log(fail);
    //   }
    // );
    // }
  }

  buttonSelected(css) {
    this.styleGuideForm.controls["buttonCss"].setValue(css);
  }

  tabSelected(css) {
    let color = this.styleGuideForm.controls["primaryColor"].value;
    css = css.replace(/primary-color/g, color ? color : "#007bff");
    console.log(css);
    this.styleGuideForm.controls["tabsCss"].setValue(css);
  }

  formSelected(css) {
    this.styleGuideForm.controls["formCss"].setValue(css);
  }

  badgeSelected(css) {
    this.styleGuideForm.controls["badgeCss"].setValue(css);
  }

  cardSelected(css) {
    this.styleGuideForm.controls["cardCss"].setValue(css);
  }

  genrateCss() {
    let css =
      this.styleGuideForm.controls["buttonCss"].value +
      this.styleGuideForm.controls["buttonCss"].value +
      this.styleGuideForm.controls["tabsCss"].value +
      this.styleGuideForm.controls["formCss"].value +
      this.styleGuideForm.controls["badgeCss"].value +
      this.styleGuideForm.controls["cardCss"].value;

    let color = this.styleGuideForm.controls["primaryColor"].value;
    css = css.replace(/primary-color/g, color ? color : "#007bff");

    this.styleGuideForm.controls["css"].setValue(css);
  }
}
