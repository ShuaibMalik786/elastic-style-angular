import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../service/user-account.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-user-sg',
    templateUrl: './user-sg.component.html',
    styleUrls: ['./user-sg.component.scss']
})
export class UserSgComponent implements OnInit {
    userId: string;
    user: any;

    constructor(private userAccountService: UserAccountService,
                private route: ActivatedRoute,
                private router: Router,
    ) {
    }

    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
    }

    logout() {
        this.userAccountService.logOut();
        this.router.navigate(['/']);
    }

}
