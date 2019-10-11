import {ButtonService} from './shared/_service/button.service';
import {AdminRoutingModule} from './admin-routing.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './shared/_component/header/header.component';
import {SidenavComponent} from './shared/_component/sidenav/sidenav.component';
import {ButtonsComponent} from './ui-styles/buttons/buttons.component';
import {AddButtonComponent} from './ui-styles/buttons/add-button/add-button.component';
import {EditButtonComponent} from './ui-styles/buttons/edit-button/edit-button.component';
import {ViewButtonComponent} from './ui-styles/buttons/view-button/view-button.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PreviewComponent} from './shared/_component/preview/preview.component';
import {StyleGuideComponent} from './style-guide/style-guide.component';
import {AddStyleGuideComponent} from './style-guide/add-style-guide/add-style-guide.component';
import {ViewStyleGuideComponent} from './style-guide/view-style-guide/view-style-guide.component';
import {EditStyleGuideComponent} from './style-guide/edit-style-guide/edit-style-guide.component';
import {StyleGuideService} from './shared/_service/style-guide.service';
import {ColorPickerModule} from 'ngx-color-picker';
import {TabsModule} from './ui-styles/tabs/tabs.module';
import {FormModule} from './ui-styles/forms/forms.module';
import {AlertModule} from './ui-styles/alert/alert.module';
import {BadgeModule} from './ui-styles/badge/badge.module';
import {CardModule} from './ui-styles/card/card.module';
import {JumbotronModule} from './ui-styles/jumbotron/jumbotron.module';
import {ModalModule} from './ui-styles/modal/modal.module';
import {NavbarModule} from './ui-styles/navbar/navbar.module';
import {PaginationModule} from './ui-styles/pagination/pagination.module';
import {PillsModule} from './ui-styles/pills/pills.module';
import {PopoverModule} from './ui-styles/popover/popover.module';
import {ProgressBarModule} from './ui-styles/progress-bar/progress-bar.module';
import {TablesModule} from './ui-styles/tables/tables.module';
import {TooltipModule} from './ui-styles/tooltip/tooltip.module';
import {TypographyModule} from './ui-styles/typography/typography.module';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidenavComponent,
        ButtonsComponent,
        AddButtonComponent,
        EditButtonComponent,
        ViewButtonComponent,
        PreviewComponent,
        StyleGuideComponent,
        AddStyleGuideComponent,
        ViewStyleGuideComponent,
        EditStyleGuideComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ColorPickerModule,
        TabsModule,
        AlertModule,
        FormModule,
        BadgeModule,
        CardModule,
        JumbotronModule,
        ModalModule,
        NavbarModule,
        PaginationModule,
        PillsModule,
        PopoverModule,
        ProgressBarModule,
        TablesModule,
        TabsModule,
        TooltipModule,
        TypographyModule
    ],
    exports: [
        HeaderComponent
    ],
    providers: [ButtonService, StyleGuideService]
})
export class AdminModule {
}
