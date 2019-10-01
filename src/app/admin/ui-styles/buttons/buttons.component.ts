import {ButtonService} from './../../shared/_service/button.service';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
    buttons: any;

    constructor(private buttonService: ButtonService) {
    }

    ngOnInit() {
        console.log('button component');
        this.loadButtons();
    }

    loadButtons() {
        this.buttonService.getButtons().subscribe(
            success => {
                this.buttons = success;
                console.log(success);
            },
            fail => {
                console.log(fail);
            }
        );
    }

    deleteButton(id: string) {
        this.buttonService.removeButton(id).subscribe(
            success => {
                this.loadButtons();
                console.log(success);
            },
            fail => {
                console.log(fail);
            }
        );
    }
}
