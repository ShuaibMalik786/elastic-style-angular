import {UserStyleGuideService} from './../../user/shared/_service/user-style-guide.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {ToasterService} from 'src/app/admin/shared/_service/toaster.service';
import {saveAs} from 'file-saver';
import * as $ from 'jquery';

@Component({
    selector: 'app-style-guide',
    templateUrl: './style-guide.component.html',
    styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {
    primaryColor = '#007bff';
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

    constructor(
        private styleGuideService: UserStyleGuideService,
        private toasterService: ToasterService
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
        css: new FormControl('', Validators.required)
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
    }

    secondaryColorSelected(color) {
        this.styleGuideForm.controls['secondaryColor'].setValue(color);
    }

    successColorSelected(color) {
        this.styleGuideForm.controls['successColor'].setValue(color);
    }

    infoColorSelected(color) {
        this.styleGuideForm.controls['infoColor'].setValue(color);
    }

    warningColorSelected(color) {
        this.styleGuideForm.controls['warningColor'].setValue(color);
    }

    dangerColorSelected(color) {
        this.styleGuideForm.controls['dangerColor'].setValue(color);
    }

    darkColorSelected(color) {
        this.styleGuideForm.controls['darkColor'].setValue(color);
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
        this.genrateCss();
        if (!this.styleGuideForm.valid) {
            this.toasterService.error('No styles selected');
        }
        console.log(this.styleGuideForm.value);
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

    buttonSelected(css) {
        this.styleGuideForm.controls['buttonCss'].setValue(css);
    }

    tabSelected(css) {
        this.styleGuideForm.controls['tabsCss'].setValue(css);
    }

    formSelected(css) {
        this.styleGuideForm.controls['formCss'].setValue(css);
    }

    badgeSelected(css) {
        this.styleGuideForm.controls['badgeCss'].setValue(css);
    }

    cardSelected(css) {
        this.styleGuideForm.controls['cardCss'].setValue(css);
    }

    displayHtml(html) {
        this.html = html;
    }

    slideToggle() {
        $('.setting').slideToggle();
    }

    genrateCss() {
        let css =
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
        if (this.components.colors[0].primaryColor) {
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
                css: new FormControl('', Validators.required)
            });
        }

    }

}
