import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StyleGuideService } from '../../shared/_service/style-guide.service';

@Component({
  selector: 'app-view-style-guide',
  templateUrl: './view-style-guide.component.html',
  styleUrls: ['./view-style-guide.component.scss']
})
export class ViewStyleGuideComponent implements OnInit {
  styleGuideId: string;
  styleGuide: any;

  constructor(
    private styleGuideService: StyleGuideService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.styleGuideId = this.route.snapshot.paramMap.get("id");
    this.loadTab();
  }

  loadTab() {
    this.styleGuideService.getOne(this.styleGuideId).subscribe(
      success => {
        console.log(success);
        this.styleGuide = success;
      },
      fail => {
        console.log(fail);
      }
    );
  }
}

