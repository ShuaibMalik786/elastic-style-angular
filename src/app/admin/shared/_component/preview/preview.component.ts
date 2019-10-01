import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"]
})
export class PreviewComponent implements OnInit, OnChanges {
  @Input("html") html: string;
  @Input("css") css: string;
  @Input("id") id: string;
  @Input("color") color: string;
  content: any;
  previewCss: any;

  constructor(private sanatizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.previewCss = this.css.replace(/primary-color/g, this.color ? this.color : '#007bff');
    this.content = `${this.html}<style>${this.previewCss}</style>`;
    this.content = this.sanatizer.bypassSecurityTrustHtml(this.content);
  }
}
