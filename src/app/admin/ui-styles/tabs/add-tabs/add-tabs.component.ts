import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TabsService } from 'src/app/admin/shared/_service/tabs.service';

@Component({
  selector: 'app-add-tabs',
  templateUrl: './add-tabs.component.html',
  styleUrls: ['./add-tabs.component.scss']
})
export class AddTabsComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl(""),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });

  constructor(private tabsService: TabsService) { }

  ngOnInit() { }

  onSubmit() {
    if (this.form.valid) {
      this.tabsService.create(this.form.value).subscribe(
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

