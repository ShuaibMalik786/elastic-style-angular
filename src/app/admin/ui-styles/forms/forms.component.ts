import {Component, OnInit} from '@angular/core';
import {FormsService} from '../../shared/_service/forms.service';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
    forms: any;

    constructor(private service: FormsService) {
    }

    ngOnInit() {
        this.loadAll();
    }

    loadAll() {
        this.service.getAll().subscribe(
            success => {
                this.forms = success;
                console.log(success);
            },
            fail => {
                console.log(fail);
            }
        );
    }

    delete(id: string) {
        this.service.delete(id).subscribe(
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
