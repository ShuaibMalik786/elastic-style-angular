import {UserStyleGuideService} from './../../user/shared/_service/user-style-guide.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {ToasterService} from 'src/app/admin/shared/_service/toaster.service';
import {saveAs} from 'file-saver';

declare var $: any;
import {AuthService} from '../../shared/service/auth.service';
import {LoginService} from '../../login/service/login.service';
import {Router} from '@angular/router';
import {ValidationManager} from 'ng2-validation-manager';
import {StyleGuideService} from '../../admin/shared/_service/style-guide.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Options} from 'ng5-slider';

@Component({
    selector: 'app-style-guide',
    templateUrl: './style-guide.component.html',
    styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {
    primaryColor = 'red';
    secondaryColor = '#6c757d';
    successColor = '#28a745';
    infoColor = '#17a2b8';
    warningColor = '#FFC10D';
    dangerColor = '#dc3545';
    darkColor = '#343a40';
    lightColor = '#f8f9fa';
    primaryGradientColor = 'rgba(0,0,0,0.45)';
    secondaryGradientColor = 'rgba(191, 190,190,0.45)';
    successGradientColor = 'rgba(0,0,0,0.45)';
    infoGradientColor = 'rgba(0,0,0,0.45)';
    warningGradientColor = 'rgba(191, 190,190,0.45)';
    dangerGradientColor = 'rgba(222, 222,222,0.45)';
    html: any;
    loginForm: any;
    errorMessage: any;
    config: any;
    fontSizeDefault = 12;
    options: Options = {
        floor: 5,
        ceil: 20
    };

    constructor(
        private styleGuideService: UserStyleGuideService,
        private toasterService: ToasterService,
        private authService: AuthService,
        private loginService: LoginService,
        private router: Router,
        private sanatizer: DomSanitizer,
    ) {
    }

    components: any;

    styleGuideForm = new FormGroup({
        primaryColor: new FormControl(this.primaryColor),
        secondaryColor: new FormControl(this.secondaryColor),
        successColor: new FormControl(this.successColor),
        infoColor: new FormControl(this.infoColor),
        warningColor: new FormControl(this.warningColor),
        dangerColor: new FormControl(this.dangerColor),
        darkColor: new FormControl(this.secondaryColor),
        lightColor: new FormControl(this.secondaryColor),
        primaryGradientColor: new FormControl(this.primaryGradientColor),
        secondaryGradientColor: new FormControl(this.secondaryGradientColor),
        successGradientColor: new FormControl(this.successGradientColor),
        infoGradientColor: new FormControl(this.infoGradientColor),
        warningGradientColor: new FormControl(this.warningGradientColor),
        dangerGradientColor: new FormControl(this.dangerGradientColor),

        button: new FormControl(''),
        buttonCss: new FormControl(''),
        tab: new FormControl(''),
        tabCss: new FormControl(''),
        form: new FormControl(''),
        formCss: new FormControl(''),
        badge: new FormControl(''),
        badgeCss: new FormControl(''),
        card: new FormControl(''),
        cardCss: new FormControl(''),
        tooltip: new FormControl(''),
        tooltipCss: new FormControl(''),
        popover: new FormControl(''),
        popoverCss: new FormControl(''),
        alert: new FormControl(''),
        alertCss: new FormControl(''),
        typography: new FormControl(''),
        typographyCss: new FormControl(''),
        css: new FormControl('', Validators.required),
        userId: new FormControl('unRegistered', Validators.required),
        config: new FormControl(''),
    });

    ngOnInit() {
        this.getUiComponents();
    }

    getUiComponents() {
        this.styleGuideService.getUiComponents().subscribe(
            success => {
                this.components = success;
                this.initializeForm();
            },
            fail => {
                console.log(fail);
            }
        );
    }

    PrimaryColorSelected(color) {
        this.styleGuideForm.controls['primaryColor'].setValue(color);
        this.initializeConfig();
    }

    secondaryColorSelected(color) {
        this.styleGuideForm.controls['secondaryColor'].setValue(color);
        this.initializeConfig();
    }

    successColorSelected(color) {
        this.styleGuideForm.controls['successColor'].setValue(color);
        this.initializeConfig();
    }

    infoColorSelected(color) {
        this.styleGuideForm.controls['infoColor'].setValue(color);
        this.initializeConfig();
    }

    warningColorSelected(color) {
        this.styleGuideForm.controls['warningColor'].setValue(color);
        this.initializeConfig();
    }

    dangerColorSelected(color) {
        this.styleGuideForm.controls['dangerColor'].setValue(color);
        this.initializeConfig();
    }

    darkColorSelected(color) {
        this.styleGuideForm.controls['darkColor'].setValue(color);
        this.initializeConfig();
    }

    lightColorSelected(color) {
        this.styleGuideForm.controls['lightColor'].setValue(color);
    }

    primaryGradientColorSelected(color) {
        this.styleGuideForm.controls['successGradientColor'].setValue(color);
    }

    successGradientColorSelected(color) {
        this.styleGuideForm.controls['successGradientColor'].setValue(color);
    }

    infoGradientColorSelected(color) {
        this.styleGuideForm.controls['infoGradientColor'].setValue(color);
    }

    warningGradientColorSelected(color) {
        this.styleGuideForm.controls['warningGradientColor'].setValue(color);
    }

    dangerGradientColorSelected(color) {
        this.styleGuideForm.controls['dangerGradientColor'].setValue(color);
    }

    secondaryGradientColorSelected(color) {
        this.styleGuideForm.controls['secondaryGradientColor'].setValue(color);
    }

    onSubmit() {
        let userId = JSON.parse(localStorage.getItem('user'));
        userId ? userId = userId._id : userId = 'unRegisteredUser';
        console.log(userId);
        this.genrateCss();
        if (!this.styleGuideForm.valid) {
            this.toasterService.error('No styles selected');
        }
        console.log(this.styleGuideForm.value);
        this.styleGuideForm.controls['userId'].setValue(userId);
        if (this.styleGuideForm.valid) {
            this.styleGuideService.create(this.styleGuideForm.value).subscribe(
                success => {
                    console.log(success);
                    saveAs(success, `${'elasticStyle'}.min.css`);
                },
                fail => {
                    console.log(fail);
                }
            );
        }
    }


    getFormControlName(name) {
        return name.toLowerCase();
    }

    styleSelected(css, name) {
        const formControlName = `${name.toLowerCase()}Css`;
        console.log(formControlName);
        this.styleGuideForm.controls[formControlName].setValue(css);
    }

    displayHtml(html) {
        this.html = html;
    }

    slideToggle() {
        $('.colors').slideToggle();
    }

    slideToggle2() {
        $('.config').slideToggle();
    }


    genrateCss() {
        let css =
            this.styleGuideForm.controls['config'].value +
            this.styleGuideForm.controls['buttonCss'].value +
            this.styleGuideForm.controls['tabsCss'].value +
            this.styleGuideForm.controls['formCss'].value +
            this.styleGuideForm.controls['badgeCss'].value +
            this.styleGuideForm.controls['cardCss'].value +
            this.styleGuideForm.controls['tooltipCss'].value +
            this.styleGuideForm.controls['popoverCss'].value +
            this.styleGuideForm.controls['alertCss'].value;

        css = css.replace(/primary-color/g, this.primaryColor);
        css = css.replace(/secondary-color/g, this.secondaryColor);
        css = css.replace(/success-color/g, this.successColor);
        css = css.replace(/warning-color/g, this.warningColor);
        css = css.replace(/danger-color/g, this.dangerColor);
        // Gradient colors
        css = css.replace(/primary-gradient-color/g, this.primaryGradientColor);
        css = css.replace(/secondary-gradient-color/g, this.secondaryGradientColor);
        css = css.replace(/success-gradient-color/g, this.successGradientColor);
        css = css.replace(/warning-gradient-color/g, this.warningGradientColor);
        css = css.replace(/danger-gradient-color/g, this.dangerGradientColor);

        this.styleGuideForm.controls['css'].setValue(css);

        for (const propName in this.styleGuideForm.value) {
            if (
                this.styleGuideForm.value[propName] === null ||
                this.styleGuideForm.value[propName] === undefined ||
                this.styleGuideForm.value[propName] === ''
            ) {
                delete this.styleGuideForm.value[propName];
            }
        }
    }

    initializeForm() {
        if (this.components.colors) {
            this.primaryColor = this.components.colors[0].primaryColor;
            this.successColor = this.components.colors[0].successColor;
            this.warningColor = this.components.colors[0].warningColor;
            this.dangerColor = this.components.colors[0].dangerColor;
            this.secondaryColor = this.components.colors[0].secondaryColor;
            this.infoColor = this.components.colors[0].infoColor;
            this.darkColor = this.components.colors[0].darkColor;
            this.lightColor = this.components.colors[0].lightColor;
            this.primaryGradientColor = this.components.colors[0].primaryGradientColor;
            this.secondaryGradientColor = this.components.colors[0].secondaryGradientColor;
            this.successGradientColor = this.components.colors[0].successGradientColor;
            this.infoGradientColor = this.components.colors[0].infoGradientColor;
            this.warningGradientColor = this.components.colors[0].warningGradientColor;
            this.dangerGradientColor = this.components.colors[0].dangerGradientColor;

            this.styleGuideForm = new FormGroup({
                primaryColor: new FormControl(this.primaryColor),
                secondaryColor: new FormControl(this.secondaryColor),
                successColor: new FormControl(this.successColor),
                infoColor: new FormControl(this.infoColor),
                warningColor: new FormControl(this.warningColor),
                dangerColor: new FormControl(this.dangerColor),
                darkColor: new FormControl(this.secondaryColor),
                lightColor: new FormControl(this.secondaryColor),
                primaryGradientColor: new FormControl(this.primaryGradientColor),
                secondaryGradientColor: new FormControl(this.secondaryGradientColor),
                successGradientColor: new FormControl(this.successGradientColor),
                infoGradientColor: new FormControl(this.infoGradientColor),
                warningGradientColor: new FormControl(this.warningGradientColor),
                dangerGradientColor: new FormControl(this.dangerGradientColor),

                button: new FormControl(''),
                buttonCss: new FormControl(''),
                tab: new FormControl(''),
                tabsCss: new FormControl(''),
                form: new FormControl(''),
                formCss: new FormControl(''),
                badge: new FormControl(''),
                badgeCss: new FormControl(''),
                card: new FormControl(''),
                cardCss: new FormControl(''),
                tooltip: new FormControl(''),
                tooltipCss: new FormControl(''),
                popover: new FormControl(''),
                popoverCss: new FormControl(''),
                alert: new FormControl(''),
                alertCss: new FormControl(''),
                typography: new FormControl(''),
                typographyCss: new FormControl(''),
                css: new FormControl('', Validators.required),
                userId: new FormControl('unRegistered', Validators.required),
                config: new FormControl(''),
            });
        }
        this.loginForm = new ValidationManager({
            'email': 'required|email',
            'password': 'required|rangeLength:5,255',
        });
        this.initializeConfig();
    }


    saveSg() {
        if (!this.authService.isLoggedIn()) {
            $('#loginModal').modal('show');
        } else {
            // Save style sheet
            this.onSubmit();
        }
    }


    login() {
        if (this.loginForm.isValid()) {
            this.loginService.login(this.loginForm.getData())
                .subscribe(
                    (success: any) => {
                        localStorage.setItem('token', success.access_token);
                        localStorage.setItem('user', JSON.stringify(success.user));
                        this.onSubmit();
                        $('#loginModal').modal('hide');
                    },
                    fail => {
                        console.log(fail);
                        this.errorMessage = fail.error.error;
                    }
                );
        }
    }

    initializeConfig() {
        this.styleGuideForm.controls['config'].setValue(`
        body {font-size: ${this.fontSizeDefault}px;}
        .bg-primary { background-color: ${this.primaryColor};}
        .bg-success { background-color: ${this.successColor};}
        .bg-info { background-color: ${this.infoColor};}
        .bg-warning { background-color: ${this.warningColor};}
        .bg-danger { background-color: ${this.dangerColor};}
        .bg-secondary { background-color: ${this.secondaryColor};}
        .bg-light { background-color: ${this.lightColor};}
        .bg-dark { background-color: ${this.darkColor};}
        .text-primary { color: ${this.primaryColor};}
        .text-success { color: ${this.successColor};}
        .text-info { color: ${this.infoColor};}
        .text-warning { color: ${this.warningColor};}
        .text-danger { color: ${this.dangerColor};}
        .text-secondary { color: ${this.secondaryColor};}
        .text-light { color: ${this.lightColor};}
        .text-dark { color: ${this.darkColor};}
        `);
    }

    fontSizeChanged() {
        this.initializeConfig();
        this.config = `<style>body {font-size: ${this.fontSizeDefault}px }</style>`;
        this.config = this.sanatizer.bypassSecurityTrustHtml(this.config);
        console.log(this.fontSizeDefault);
    }
}
