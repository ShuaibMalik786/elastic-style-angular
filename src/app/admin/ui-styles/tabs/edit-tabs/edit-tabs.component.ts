import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TabsService } from 'src/app/admin/shared/_service/tabs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-tabs',
  templateUrl: './edit-tabs.component.html',
  styleUrls: ['./edit-tabs.component.scss']
})
export class EditTabsComponent implements OnInit {
  tabId: string;
  tab: any;
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl("", Validators.required),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });

  constructor(
    private tabsService: TabsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tabId = this.route.snapshot.paramMap.get("id");
    this.loadTab();
  }

  loadTab() {
    this.tabsService.getOne(this.tabId).subscribe(
      success => {
        console.log(success);
        this.tab = success;
        this.initializeForm(success);
      },
      fail => {
        console.log(fail);
      }
    );
  }

  initializeForm(tab) {
    this.form = new FormGroup({
      name: new FormControl(tab.name, Validators.required),
      css: new FormControl(tab.css, Validators.required),
      scss: new FormControl(tab.scss, Validators.required),
      html: new FormControl(tab.html, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.tabsService
        .update(this.tabId, this.form.value)
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
