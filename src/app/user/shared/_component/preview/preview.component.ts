import {Component, OnInit, Input, OnChanges} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: "app-user-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"]
})
export class UserPreviewComponent implements OnInit, OnChanges {
  @Input("html") html: string;
  @Input("css") css: string;
  @Input("id") id: string;
  @Input("primaryColor") primaryColor: string;
  @Input("successColor") successColor?: string;
  @Input("warningColor") warningColor?: string;
  @Input("dangerColor") dangerColor?: string;
  @Input("secondaryColor") secondaryColor?: string;
  @Input("infoColor") infoColor?: string;
  @Input("darkColor") darkColor?: string;
  @Input("lightColor") lightColor?: string;
  @Input("primaryGradientColor") primaryGradientColor?: string;
  @Input("secondaryGradientColor") secondaryGradientColor?: string;
  @Input("successGradientColor") successGradientColor?: string;
  @Input("infoGradientColor") infoGradientColor?: string;
  @Input("warningGradientColor") warningGradientColor?: string;
  @Input("dangerGradientColor") dangerGradientColor?: string;

  content: any;
  previewCss: any;

  constructor(private sanatizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.previewCss = this.css.replace(/primary-color/g, this.primaryColor ? this.primaryColor : "#007bff");
    this.previewCss = this.previewCss.replace(/success-color/g, this.successColor ? this.successColor : "#28a745");
    this.previewCss = this.previewCss.replace(/warning-color/g, this.warningColor ? this.warningColor : "#FFC10D");
    this.previewCss = this.previewCss.replace(/danger-color/g, this.dangerColor ? this.dangerColor : "#28a745");
    this.previewCss = this.previewCss.replace(/secondary-color/g, this.secondaryColor ? this.secondaryColor : "#28a745");
    this.previewCss = this.previewCss.replace(/info-color/g, this.infoColor ? this.infoColor : "#28a745");
    this.previewCss = this.previewCss.replace(/dark-color/g, this.darkColor ? this.darkColor : "#28a745");
    this.previewCss = this.previewCss.replace(/light-color/g, this.lightColor ? this.lightColor : "#28a745");
    this.previewCss = this.previewCss.replace(/primary-gradient-color/g, this.primaryGradientColor ? this.primaryGradientColor : "#28a745");
    this.previewCss = this.previewCss.replace(/secondary-gradient-color/g, this.secondaryGradientColor ? this.secondaryGradientColor : "#28a745");
    this.previewCss = this.previewCss.replace(/success-gradient-color/g, this.successGradientColor ? this.successGradientColor : "#28a745");
    this.previewCss = this.previewCss.replace(/info-gradient-color/g, this.infoGradientColor ? this.infoGradientColor : "#28a745");
    this.previewCss = this.previewCss.replace(/warning-gradient-color/g, this.warningGradientColor ? this.warningGradientColor : "#28a745");
    this.previewCss = this.previewCss.replace(/danger-gradient-color/g, this.dangerGradientColor ? this.dangerGradientColor : "#28a745");
    this.content = `${this.html}<style>${this.previewCss}</style>`;
    this.content = this.sanatizer.bypassSecurityTrustHtml(this.content);
  }
}
