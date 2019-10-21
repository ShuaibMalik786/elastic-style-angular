import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {TokenInterceptor} from './shared/interceptors/auth.interceptors';
import {FormModule} from './admin/ui-styles/forms/forms.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './shared/service/auth.service';

// third party modules
import {ToastrModule} from 'ngx-toastr';
import {Ng5SliderModule} from 'ng5-slider';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        FormModule,
        Ng5SliderModule,
        ReactiveFormsModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    },
        AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
