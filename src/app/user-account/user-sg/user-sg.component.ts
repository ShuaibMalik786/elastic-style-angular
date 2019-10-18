import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../service/user-account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserStyleGuideService} from '../../user/shared/_service/user-style-guide.service';
import {ToasterService} from '../../shared/service/toaster.service';
import {UserStyleSheetService} from '../service/user-style-sheet.service';
import {saveAs} from 'file-saver';

@Component({
    selector: 'app-user-sg',
    templateUrl: './user-sg.component.html',
    styleUrls: ['./user-sg.component.scss']
})
export class UserSgComponent implements OnInit {
    userId: string;
    user: any;
    SGs: any;

    constructor(private userAccountService: UserAccountService,
                private userStyleSheetService: UserStyleSheetService,
                private route: ActivatedRoute,
                private router: Router,
                private toasterService: ToasterService,
    ) {
    }

    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
        this.getUserSGs();
    }

    logout() {
        this.userAccountService.logOut();
        this.router.navigate(['/']);
    }

    getUserSGs() {
        this.userStyleSheetService.getSGs(this.userId)
            .subscribe(
                (success: any) => {
                    this.SGs = success;
                    console.log(this.SGs);
                },
                fail => {
                    this.toasterService.error('Failed to load data');
                }
            );
    }

    download(sgId: string) {
        this.userStyleSheetService.download(sgId).subscribe(
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
