import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TooltipService } from 'src/app/admin/shared/_service/tooltip.service';

@Component({
  selector: 'app-add-tooltip',
  templateUrl: './add-tooltip.component.html',
  styleUrls: ['./add-tooltip.component.scss']
})
export class AddTooltipComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    css: new FormControl(""),
    scss: new FormControl("", Validators.required),
    html: new FormControl("", Validators.required)
  });
  constructor(private tooltipService: TooltipService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.tooltipService.create(this.form.value).subscribe(
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
