import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component, Input, OnInit, inject } from '@angular/core'
import { NgIcon, provideIcons, provideNgIconsConfig } from '@ng-icons/core'
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core'
import { EMPTY, Observable, from, of } from 'rxjs'
import { concatMap, delay, map, switchMap, take, tap } from 'rxjs/operators'
import { matCloudDownloadOutline } from '@ng-icons/material-icons/outline'
import { CdkAccordionModule } from '@angular/cdk/accordion'

@Component({
  selector: 'gn-ui-gpf-api-dl-list-item',
  templateUrl: './gpf-api-dl-list-item.component.html',
  styleUrls: ['./gpf-api-dl-list-item.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateDirective,
    TranslatePipe,
    NgIcon,
    CdkAccordionModule,
  ],
  providers: [
    provideIcons({ matCloudDownloadOutline }),
    provideNgIconsConfig({ size: '1.5em' }),
  ],
})
export class GpfApiDlListItemComponent implements OnInit {
  protected http = inject(HttpClient)

  @Input() link
  @Input() color: string
  @Input() format: string
  @Input() isFromWfs: boolean

  liste$: Observable<{ id: string }[]>
  isOpen = false

  ngOnInit(): void {
    this.liste$ = this.http
      .get(`${this.link['id']}?limit=50`)
      .pipe(map((response) => response['entry']))
  }
}