import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FeatureSearchModule } from '@geonetwork-ui/feature/search'
import { UiElementsModule } from '@geonetwork-ui/ui/elements'
import { UiSearchModule } from '@geonetwork-ui/ui/search'
import {
  TRANSLATE_DEFAULT_CONFIG,
  UtilI18nModule,
} from '@geonetwork-ui/util/i18n'
import { TranslateModule } from '@ngx-translate/core'
import { AppCommonModule } from './app.common.module'

import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'
import { CreatePageComponent } from './create/create-page.component'
import { DashboardMenuComponent } from './dashboard/dashboard-menu/dashboard-menu.component'
import { DashboardPageComponent } from './dashboard/dashboard-page.component'
import { SearchHeaderComponent } from './dashboard/search-header/search-header.component'
import { SidebarComponent } from './dashboard/sidebar/sidebar.component'
import { EditPageComponent } from './edit/edit-page.component'
import { SignInPageComponent } from './sign-in/sign-in-page.component'
import { UiInputsModule } from '@geonetwork-ui/ui/inputs'
import { FeatureEditorModule } from '@geonetwork-ui/feature/editor'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    EditPageComponent,
    CreatePageComponent,
    SignInPageComponent,
    EditPageComponent,
    SidebarComponent,
    SearchHeaderComponent,
    DashboardMenuComponent,
  ],
  imports: [
    BrowserModule,
    FeatureSearchModule,
    UiElementsModule,
    UiSearchModule,
    AppCommonModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    UiInputsModule,
    FeatureEditorModule,
    UtilI18nModule,
    TranslateModule.forRoot(TRANSLATE_DEFAULT_CONFIG),
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
