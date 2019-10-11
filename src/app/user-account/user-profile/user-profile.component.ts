import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../service/user-account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ValidationManager} from 'ng2-validation-manager';
import {ToasterService} from '../../shared/service/toaster.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    userId: string;
    user: any;
    form: any;

    constructor(private userAccountService: UserAccountService,
                private route: ActivatedRoute,
                private router: Router,
                private toasterService: ToasterService,
    ) {
    }

    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
        this.loadUser();
        this.initiateForm();
    }

    loadUser() {
        this.userAccountService.getUser(this.userId)
            .subscribe(
                (success: any) => {
                    this.user = success;
                    this.form.setValue({
                        'userName': this.user.userName,
                        'email': this.user.email,
                    });
                },
                fail => {
                    this.toasterService.error('Failed to load data');
                }
            );
    }

    logout() {
        this.userAccountService.logOut();
        this.router.navigate(['/']);
    }

    onSubmit() {
        if (this.form.isValid()) {
            this.userAccountService.update(this.userId, this.form.getData())
                .subscribe(
                    (success: any) => {
                        this.toasterService.success('Profile updated');
                        this.loadUser();
                    },
                    fail => {
                        this.toasterService.error('Failed to update profile');
                    }
                );
        }
    }

    initiateForm() {
        this.form = new ValidationManager({
            'userName': 'required|rangeLength:1,255',
            'email': 'required|email',
        });
    }

}
