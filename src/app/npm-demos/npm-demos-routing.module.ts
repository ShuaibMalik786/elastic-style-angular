import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EuPopupComponent } from './eu-popup/eu-popup.component';
import { EuLoaderComponent } from './eu-loader/eu-loader.component';

const routes: Routes = [
    {
        path: 'eu-popup',
        component: EuPopupComponent
    },
    {
        path: 'eu-loader',
        component: EuLoaderComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NpmDemosRoutinModule {
}
