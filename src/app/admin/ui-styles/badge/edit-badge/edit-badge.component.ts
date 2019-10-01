import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BadgeService} from '../../../shared/_service/badge.service';

@Component({
  selector: 'app-edit-badge',
  templateUrl: './edit-badge.component.html',
  styleUrls: ['./edit-badge.component.scss']
})
export class EditBadgeComponent implements OnInit {
  badgeId: string;
  badge: any;
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl("", Validators.required),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });

  constructor(
      private service: BadgeService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.badgeId = this.route.snapshot.paramMap.get("id");
    this.loadOne();
  }

  loadOne() {
    this.service.getOne(this.badgeId).subscribe(
        success => {
          console.log(success);
          this.badge = success;
          this.initializeForm(success);
        },
        fail => {
          console.log(fail);
        }
    );
  }

  initializeForm(badge) {
    this.form = new FormGroup({
      name: new FormControl(badge.name, Validators.required),
      css: new FormControl(badge.css, Validators.required),
      scss: new FormControl(badge.scss, Validators.required),
      html: new FormControl(badge.html, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service
          .update(this.badgeId, this.form.value)
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
