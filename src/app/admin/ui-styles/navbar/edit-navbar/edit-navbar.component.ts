import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {NavbarService} from '../../../shared/_service/navbar.service';

@Component({
  selector: 'app-edit-navbar',
  templateUrl: './edit-navbar.component.html',
  styleUrls: ['./edit-navbar.component.scss']
})
export class EditNavbarComponent implements OnInit {
  navbarId: string;
  navbar: any;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    css: new FormControl('', Validators.required),
    scss: new FormControl('', Validators.required),
    html: new FormControl('', Validators.required)
  });

  constructor(
      private service: NavbarService,
      private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.navbarId = this.route.snapshot.paramMap.get('id');
    this.loadOne();
  }

  loadOne() {
    this.service.getOne(this.navbarId).subscribe(
        success => {
          console.log(success);
          this.navbar = success;
          this.initializeForm(success);
        },
        fail => {
          console.log(fail);
        }
    );
  }

  initializeForm(navbar) {
    this.form = new FormGroup({
      name: new FormControl(navbar.name, Validators.required),
      css: new FormControl(navbar.css, Validators.required),
      scss: new FormControl(navbar.scss, Validators.required),
      html: new FormControl(navbar.html, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service
          .update(this.navbarId, this.form.value)
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
