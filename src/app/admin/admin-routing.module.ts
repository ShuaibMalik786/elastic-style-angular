import {ViewButtonComponent} from './ui-styles/buttons/view-button/view-button.component';
import {AddButtonComponent} from './ui-styles/buttons/add-button/add-button.component';
import {ButtonsComponent} from './ui-styles/buttons/buttons.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {EditButtonComponent} from './ui-styles/buttons/edit-button/edit-button.component';
import {StyleGuideComponent} from './style-guide/style-guide.component';
import {AddStyleGuideComponent} from './style-guide/add-style-guide/add-style-guide.component';
import {ViewStyleGuideComponent} from './style-guide/view-style-guide/view-style-guide.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: ButtonsComponent
            },
            {
                path: 'button',
                component: ButtonsComponent
            },
            {
                path: 'button/add',
                component: AddButtonComponent
            },
            {
                path: 'button/:id',
                component: ViewButtonComponent
            },
            {
                path: 'button/edit/:id',
                component: EditButtonComponent
            },
            {
                path: 'alerts',
                loadChildren: './ui-styles/alert/alert.module#AlertModule'
            },
            {
                path: 'tabs',
                loadChildren: './ui-styles/tabs/tabs.module#TabsModule'
            },
            {
                path: 'forms',
                loadChildren: './ui-styles/forms/forms.module#FormModule'
            },
            {
                path: 'badge',
                loadChildren: './ui-styles/badge/badge.module#BadgeModule'
            },
            {
                path: 'card',
                loadChildren: './ui-styles/card/card.module#CardModule'
            },
            {
                path: 'jumbotron',
                loadChildren: './ui-styles/jumbotron/jumbotron.module#JumbotronModule'
            },
            {
                path: 'modal',
                loadChildren: './ui-styles/modal/modal.module#ModalModule'
            },
            {
                path: 'navbar',
                loadChildren: './ui-styles/navbar/navbar.module#NavbarModule'
            },
            {
                path: 'pagination',
                loadChildren: './ui-styles/pagination/pagination.module#PaginationModule'
            },
            {
                path: 'pills',
                loadChildren: './ui-styles/pills/pills.module#PillsModule'
            },
            {
                path: 'popover',
                loadChildren: './ui-styles/popover/popover.module#PopoverModule'
            },
            {
                path: 'progressbar',
                loadChildren: './ui-styles/progress-bar/progress-bar.module#ProgressBarModule'
            },
            {
                path: 'table',
                loadChildren: './ui-styles/tables/tables.module#TablesModule'
            },
            {
                path: 'tooltip',
                loadChildren: './ui-styles/tooltip/tooltip.module#TooltipModule'
            },
            {
                path: 'typography',
                loadChildren: './ui-styles/typography/typography.module#TypographyModule'
            },
            {
                path: 'style-guide',
                component: StyleGuideComponent
            },
            {
                path: 'style-guide/add',
                component: AddStyleGuideComponent
            },
            {
                path: 'style-guide/:id',
                component: ViewStyleGuideComponent
            },
            {
                path: 'style-guide-config',
                loadChildren: './style-guide-config/style-guide-config.module#StyleGuideConfigModule'
            },
            {
                path: '**',
                redirectTo: 'button'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AdminRoutingModule {
}
