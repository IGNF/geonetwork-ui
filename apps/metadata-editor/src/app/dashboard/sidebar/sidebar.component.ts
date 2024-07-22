import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { DashboardMenuComponent } from '../dashboard-menu/dashboard-menu.component'
import { PlatformServiceInterface } from '@geonetwork-ui/common/domain/platform.service.interface'
import { AvatarServiceInterface } from '@geonetwork-ui/api/repository'
import { LetDirective } from '@ngrx/component'
import { UiElementsModule } from '@geonetwork-ui/ui/elements'
import { OrganizationsServiceInterface } from '@geonetwork-ui/common/domain/organizations.service.interface'
import { Observable, combineLatest } from 'rxjs'
import { Organization } from '@geonetwork-ui/common/domain/model/record'

@Component({
  selector: 'md-editor-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DashboardMenuComponent,
    CommonModule,
    TranslateModule,
    LetDirective,
    UiElementsModule,
  ],
})
export class SidebarComponent implements OnInit {
  public placeholder$ = this.avatarService.getPlaceholder()
  organisations$: Observable<Organization[]>

  constructor(
    public platformService: PlatformServiceInterface,
    private avatarService: AvatarServiceInterface,
    public organisationsService: OrganizationsServiceInterface
  ) {}

  ngOnInit(): void {
    this.organisations$ = combineLatest(
      this.organisationsService.organisations$,
      this.platformService.getMe(),
      (orgs, me) => orgs.filter((org) => org.name === me.organisation)
    )
  }
}
