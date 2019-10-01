import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StyleGuideConfigService} from '../../shared/_service/style-guide-config.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    configId: string;
    config: any;

    constructor(
        private service: StyleGuideConfigService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.configId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    }

    loadOne() {
        this.service.getOne(this.configId).subscribe(
            success => {
                console.log(success);
                this.config = success;
            },
            fail => {
                console.log(fail);
            }
        );
    }
}
