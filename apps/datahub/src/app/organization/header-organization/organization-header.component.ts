import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { getGlobalConfig, getThemeConfig } from '@geonetwork-ui/util/app-config'
import { TranslateModule } from '@ngx-translate/core'
import { UiInputsModule } from '@geonetwork-ui/ui/inputs'
import { UiCatalogModule } from '@geonetwork-ui/ui/catalog'
import { Organization } from '@geonetwork-ui/common/domain/model/record'
import { AsyncPipe, Location, NgIf } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'datahub-organization-header',
  templateUrl: './organization-header.component.html',
  styleUrls: ['./organization-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    UiInputsModule,
    TranslateModule,
    UiCatalogModule,
    NgIf,
    MatIconModule,
    AsyncPipe,
  ],
})
export class OrganizationHeaderComponent {
  @Input() organization: Organization

  backgroundCss =
    getThemeConfig().HEADER_BACKGROUND ||
    `center /cover url('assets/img/header_bg.webp')`
  foregroundColor = getThemeConfig().HEADER_FOREGROUND_COLOR || '#ffffff'
  showLanguageSwitcher = getGlobalConfig().LANGUAGES?.length > 0

  constructor(private location: Location) {}

  back() {
    this.location.back()
  }
}
