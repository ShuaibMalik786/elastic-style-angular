import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../../shared/_service/alert.service';
import {ActivatedRoute} from '@angular/router';
import {CardService} from '../../../shared/_service/card.service';

@Component({
    selector: 'app-edit-card',
    templateUrl: './edit-card.component.html',
    styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
    cardId: string;
    card: any;
    form = new FormGroup({
        name: new FormControl('', Validators.required),
        css: new FormControl('', Validators.required),
        scss: new FormControl('', Validators.required),
        html: new FormControl('', Validators.required)
    });

    constructor(
        private service: CardService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.cardId = this.route.snapshot.paramMap.get('id');
        this.loadOne();
    }

    loadOne() {
        this.service.getOne(this.cardId).subscribe(
            success => {
                console.log(success);
                this.card = success;
                this.initializeForm(success);
            },
            fail => {
                console.log(fail);
            }
        );
    }

    initializeForm(card) {
        this.form = new FormGroup({
            name: new FormControl(card.name, Validators.required),
            css: new FormControl(card.css, Validators.required),
            scss: new FormControl(card.scss, Validators.required),
            html: new FormControl(card.html, Validators.required)
        });
    }

    onSubmit() {
        if (this.form.valid) {
            this.service
                .update(this.cardId, this.form.value)
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
