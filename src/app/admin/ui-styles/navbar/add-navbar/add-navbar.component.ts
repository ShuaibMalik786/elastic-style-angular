import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/admin/shared/_service/navbar.service';

@Component({
  selector: 'app-add-navbar',
  templateUrl: './add-navbar.component.html',
  styleUrls: ['./add-navbar.component.scss']
})
export class AddNavbarComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl(""),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });

  constructor(private navbarService: NavbarService) {}
  
  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.navbarService.create(this.form.value).subscribe(
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
