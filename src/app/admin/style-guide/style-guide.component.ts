import { Component, OnInit } from '@angular/core';
import { StyleGuideService } from '../shared/_service/style-guide.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {
  styleGuides: any;

  constructor(private styleGuideService: StyleGuideService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.styleGuideService.getAll().subscribe(
      success => {
        this.styleGuides = success;
        console.log(success);
      },
      fail => {
        console.log(fail);
      }
    );
  }

  delete(id: string) {
    this.styleGuideService.delete(id).subscribe(
      success => {
        console.log(success);
        this.loadAll();
      },
      fail => {
        console.log(fail);
      }
    );
  }

  download(id: string) {
    this.styleGuideService.download(id).subscribe(
      success => {
        console.log(success);
        saveAs(success, `${'elasticStyle'}.css`);
      },
      fail => {
        console.log(fail);
      }
    );
  }

}
