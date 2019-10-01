import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {StyleGuideConfigService} from '../../shared/_service/style-guide-config.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    configId: string;
    config: any;
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        primaryColor: new FormControl('', Validators.required),
        secondaryColor: new FormControl('', Validators.required),
        successColor: new FormControl('', Validators.required),
        infoColor: new FormControl('', Validators.required),
        warningColor: new FormControl('', Validators.required),
        dangerColor: new FormControl('', Validators.required),
        darkColor: new FormControl('', Validators.required),
        lightColor: new FormControl('', Validators.required),
        primaryGradientColor: new FormControl('', Validators.required),
        secondaryGradientColor: new FormControl('', Validators.required),
        successGradientColor: new FormControl('', Validators.required),
        infoGradientColor: new FormControl('', Validators.required),
        warningGradientColor: new FormControl('', Validators.required),
        dangerGradientColor: new FormControl('', Validators.required),
        darkGradientColor: new FormControl('', Validators.required),
        lightGradientColor: new FormControl('', Validators.required),
    });

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
                this.initializeForm(success);
            },
            fail => {
                console.log(fail);
            }
        );
    }

    initializeForm(alert) {
        this.form = new FormGroup({
            name: new FormControl(this.config.name, Validators.required),
            primaryColor: new FormControl(this.config.primaryColor, Validators.required),
            secondaryColor: new FormControl(this.config.secondaryColor),
            successColor: new FormControl(this.config.successColor, Validators.required),
            infoColor: new FormControl(this.config.infoColor, Validators.required),
            warningColor: new FormControl(this.config.warningColor, Validators.required),
            dangerColor: new FormControl(this.config.dangerColor),
            darkColor: new FormControl(this.config.darkColor, Validators.required),
            lightColor: new FormControl(this.config.lightColor, Validators.required),
            primaryGradientColor: new FormControl(this.config.primaryGradientColor, Validators.required),
            secondaryGradientColor: new FormControl(this.config.secondaryGradientColor),
            successGradientColor: new FormControl(this.config.successGradientColor, Validators.required),
            infoGradientColor: new FormControl(this.config.infoGradientColor, Validators.required),
            warningGradientColor: new FormControl(this.config.warningGradientColor, Validators.required),
            dangerGradientColor: new FormControl(this.config.dangerGradientColor),
            darkGradientColor: new FormControl(this.config.darkGradientColor, Validators.required),
            lightGradientColor: new FormControl(this.config.lightGradientColor, Validators.required),
        });

    }

    onSubmit() {
        if (this.form.valid) {
            this.service
                .update(this.configId, this.form.value)
                .subscribe(
                    success => {
                        console.log(success);
                    },
                    fail => {
                        console.log(fail);
                    }
                );
        }
    }
}
