import { Component, OnInit } from '@angular/core';
import { EuLoaderService } from 'eu-loader';

@Component({
  selector: 'app-eu-loader',
  templateUrl: './eu-loader.component.html',
  styleUrls: ['./eu-loader.component.scss']
})
export class EuLoaderComponent implements OnInit {
  options = {
    text: 'Please wait...',
    dismissOnClickOutside: false,
    spinnerColor: 'red',
    textColor: 'black'
  }
  constructor(private euLoaderService: EuLoaderService) { }

  ngOnInit() {
  }

  openLoader() {
    this.euLoaderService.open({
      text: this.options.text,
      dismissOnClickOutside: this.options.dismissOnClickOutside,
      spinnerColor: this.options.spinnerColor,
      textColor: this.options.textColor,
    })

    setTimeout(() => {
      this.euLoaderService.close();
    }, 2000)
  }
}
