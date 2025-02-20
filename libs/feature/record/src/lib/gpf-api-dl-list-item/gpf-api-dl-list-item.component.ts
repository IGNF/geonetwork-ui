import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component, Input, OnInit } from '@angular/core'
import { NgIconsModule } from '@ng-icons/core'
import { TranslateModule } from '@ngx-translate/core'
L
import { Observable, map, mergeMap, take } from 'rxjs'
import { CdkAccordionModule } from '@angular/cdk/accordion'

@Component({
  selector: 'gn-ui-gpf-api-dl-list-item',
  templateUrl: './gpf-api-dl-list-item.component.html',
  styleUrls: ['./gpf-api-dl-list-item.component.css'],
  standalone: true,

  imports: [CommonModule, TranslateModule, NgIconsModule, CdkAccordionModule],
})
export class GpfApiDlListItemComponent implements OnInit {
  @Input() link
  @Input() color: string
  @Input() format: string
  @Input() isFromWfs: boolean

  constructor(protected http: HttpClient) {}

  liste$: Observable<any>
  isOpen = false

  ngOnInit(): void {
    this.liste$ = this.http
      .get(this.link['id'])
      .pipe(map((response) => response['entry']))
  }

  downloadMultipleFiles() {
    this.liste$.pipe(take(1)).subscribe((fileUrls: any[]) => {
      if (!fileUrls || fileUrls.length === 0) {
        console.warn('Aucun fichier à télécharger.')
        return
      }

      fileUrls.forEach((fileUrl) => {
        if (fileUrl?.id) {
          const link = document.createElement('a')
          link.href = fileUrl.id
          link.setAttribute('download', '')
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          console.warn('Fichier invalide :', fileUrl)
        }
      })
    })
  }
}
