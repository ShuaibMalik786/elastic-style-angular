import { NpmDemosRoutinModule } from './npm-demos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { EuPopupComponent } from './eu-popup/eu-popup.component';
import { EuLoaderComponent } from './eu-loader/eu-loader.component';

// Third party


@NgModule({
    declarations: [
        EuPopupComponent,
        EuLoaderComponent,
    ],
    exports: [
    ],
    imports: [  
        CommonModule,
        NpmDemosRoutinModule,
        FormsModule,
        ReactiveFormsModule,
        ColorPickerModule,
    ]
})
export class NpmDemosModule {
}
