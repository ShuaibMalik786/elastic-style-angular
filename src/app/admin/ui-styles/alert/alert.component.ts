import {Component, OnInit} from '@angular/core';
import {AlertService} from '../../shared/_service/alert.service';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    alerts: any;

    constructor(private alertService: AlertService) {
    }

    ngOnInit() {
        this.loadAll();
    }

    loadAll() {
        this.alertService.getAll().subscribe(
            success => {
                this.alerts = success;
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
}
