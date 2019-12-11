import { Component, OnInit } from '@angular/core';
import { EuPopupService } from 'eu-popup';

@Component({
  selector: 'app-eu-popup',
  templateUrl: './eu-popup.component.html',
  styleUrls: ['./eu-popup.component.scss']
})
export class EuPopupComponent implements OnInit {
  options = {
    type: 'success',
    title: 'Title',
    text: 'Hi, this is eu-popup text.',
    cancelButtonText: 'CANCEL',
    confirmButtonText: 'OK',
    confirmButtonTextColor: 'black',
    cancelButtonTextColor: 'black',
    cancelButtonBgColor: 'white',
    confirmButtonBgColor: 'white',
    showCancelButton: true,
    dismissOnClickOutside: false,
  }
  constructor(private euPopupService: EuPopupService) { }

  ngOnInit() {
  }

  openPopp() {
    this.euPopupService.open({
      type: this.options.type,
      title: this.options.title,
      text: this.options.text,
      showCancelButton: this.options.showCancelButton,
      cancelButtonText: this.options.cancelButtonText,
      confirmButtonText: this.options.confirmButtonText,
      dismissOnClickOutside: this.options.dismissOnClickOutside,
      confirmButtonTextColor: this.options.confirmButtonTextColor,
      cancelButtonTextColor: this.options.cancelButtonTextColor,
      cancelButtonBgColor: this.options.cancelButtonBgColor,
      confirmButtonBgColor: this.options.confirmButtonBgColor,
    })
  }
}
