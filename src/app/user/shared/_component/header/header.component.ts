import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-user-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    user: any;

    constructor() {
    }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

}
