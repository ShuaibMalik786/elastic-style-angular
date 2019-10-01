import {Component, OnInit} from '@angular/core';
import {AlertService} from '../../shared/_service/alert.service';
import {StyleGuideConfigService} from '../../shared/_service/style-guide-config.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    config: any;

    constructor(private alertService: StyleGuideConfigService) {
    }

    ngOnInit() {
        this.loadAll();
    }

    loadAll() {
        this.alertService.getAll().subscribe(
            success => {
                this.config = success;
                console.log(success);
            },
            fail => {
                console.log(fail);
            }
        );
    }

    delete(id: string) {
        this.alertService.delete(id).subscribe(
            success => {
                this.loadAll();
                console.log(success);
            },
            fail => {
                console.log(fail);
            }
        );
    }

    changeStatus(id: string, status) {
        const data = {active: status};
        this.alertService.update(id, data).subscribe(
            success => {
                this.loadAll();
                console.log(success);
            },
            fail => {
                console.log(fail);
            }
        );
    }
}
