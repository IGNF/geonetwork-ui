import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core'
import { DatasetServiceDistribution } from '@geonetwork-ui/common/domain/model/record'
import {
  BehaviorSubject,
  combineLatest,
  map,
  switchMap,
  Observable,
  shareReplay,
  tap,
} from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Choice, DropdownSelectorComponent } from '@geonetwork-ui/ui/inputs'
import { CommonModule } from '@angular/common'
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core'
import { GpfApiDlListItemComponent } from '../gpf-api-dl-list-item/gpf-api-dl-list-item.component'
import { de } from 'date-fns/locale'

export interface Label {
  label: string
}

export interface FormatProduit {
  title: string
  update: string
  format: Array<TermBucket>
  zone: Array<TermBucket>
}

export interface FormatSortieProduit {
  label: string
  value: string | number
}
export interface ListUrl {
  url: string
}

export interface ListChoice {
  zone: Choice[]
  format: Choice[]
  editionDate: Choice[]
  crs: Choice[]
}

export interface TermBucket {
  term: string
  label: string | number
}

export interface Field {
  entry: Array<any>
  link: any
}

@Component({
  selector: 'gn-ui-gpf-api-dl',
  templateUrl: './gpf-api-dl.component.html',
  styleUrls: ['./gpf-api-dl.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    TranslateDirective,
    TranslatePipe,
    DropdownSelectorComponent,
    GpfApiDlListItemComponent,
  ],
})
export class GpfApiDlComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container: ElementRef<HTMLElement>
  isOpen = false
  collapsed = false
  initialLimit = 50
  apiBaseUrl: string
  editionDate$ = new BehaviorSubject('')
  zone$ = new BehaviorSubject('')
  format$ = new BehaviorSubject('')
  crs$ = new BehaviorSubject('')
  page$ = new BehaviorSubject(1)
  sortEntriesBy$ = new BehaviorSubject('editionDate')
  sortEntriesOrder$ = new BehaviorSubject('desc')

  editionDateFrom$ = new BehaviorSubject<string | null>(null)
  editionDateTo$ = new BehaviorSubject<string | null>(null)

  choices: any
  bucketPromisesZone: Choice[]
  bucketPromisesFormat: Choice[]
  bucketPromisesCrs: Choice[]
  defaultEditionDate: [any, any]

  constructor(protected http: HttpClient) {}

  @Input() set apiLink(value: DatasetServiceDistribution) {
    this.apiBaseUrl = value ? value.url.href : undefined
    Promise.resolve().then(() => {
      try {
        this.container?.nativeElement?.focus()
        this.container?.nativeElement?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      } catch {
        console.error('erreur de focus sur le conteneur GPF DL')
      }
    })
  }

  ngOnInit(): void {
    this.bucketPromisesZone = [{ value: '', label: 'ZONE' }]
    this.bucketPromisesFormat = [{ value: '', label: 'FORMAT' }]
    this.bucketPromisesCrs = [{ value: '', label: 'CRS' }]
    this.defaultEditionDate = ['', '']
    this.getFields()
  }

  ngAfterViewInit(): void {
    Promise.resolve().then(() => {
      try {
        this.container?.nativeElement?.focus()
        this.container?.nativeElement?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      } catch {
        /* silencieux */
      }
    })
  }

  apiQueryUrl$ = combineLatest([
    this.zone$,
    this.format$,
    this.editionDateFrom$,
    this.editionDateTo$,
    this.crs$,
    this.page$,
    this.sortEntriesBy$,
    this.sortEntriesOrder$,
  ]).pipe(
    map(
      ([
        zone,
        format,
        editionDateFrom,
        editionDateTo,
        crs,
        page,
        sortEntriesBy,
        sortEntriesOrder,
      ]) => {
        if (!this.apiBaseUrl) {
          console.error('erreur apibaseUrl null')
          return null
        }

        const url = new URL(this.apiBaseUrl)
        const params: Record<string, string | number | null> = {
          zone,
          format,
          editionDateFrom:
            editionDateFrom === this.defaultEditionDate[0]
              ? ''
              : editionDateFrom,
          editionDateTo:
            editionDateTo === this.defaultEditionDate[1] ? '' : editionDateTo,
          crs,
          page,
          sortEntriesBy,
          sortEntriesOrder,
        }

        for (const [key, value] of Object.entries(params)) {
          if (value && value !== 'null') {
            url.searchParams.set(key, String(value))
          } else {
            url.searchParams.delete(key)
          }
        }

        return url.toString()
      }
    )
  )

  private filteredData$ = this.apiQueryUrl$.pipe(
    switchMap((url) => this.getFilteredProduct$(url)),
    shareReplay(1)
  )

  listFilteredProduct$ = this.filteredData$.pipe(
    map((r) => r['entry']),
    tap((entries) => console.log('entries count:', entries?.length, entries))
  )
  pageMax$ = this.filteredData$.pipe(map((r) => r['pagecount']))

  getFilteredProduct$(url: string): Observable<any> {
    return this.http.get(url)
  }

  getLinkFormat(produit: any): string {
    return produit['format'][0]['label']
  }

  setEditionDateFrom(value: string) {
    if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
      this.editionDateFrom$.next(value)
      this.resetPage()
    }
  }

  setEditionDateTo(value: string) {
    if (value.match(/^\d{4}-\d{2}-\d{2}$/)) {
      this.editionDateTo$.next(value)
      this.resetPage()
    }
  }

  setZone(value: string) {
    if (this.bucketPromisesZone.map((choice) => choice.value).includes(value)) {
      this.zone$.next(value)
      this.resetPage()
    }
  }

  setCrs(value: string) {
    if (this.bucketPromisesCrs.map((choice) => choice.value).includes(value)) {
      this.crs$.next(value)
      this.resetPage()
    }
  }

  setFormat(value: string) {
    if (
      this.bucketPromisesFormat.map((choice) => choice.value).includes(value)
    ) {
      this.format$.next(value)
      this.resetPage()
    }
  }

  setSortEntriesBy(value: string) {
    if (['title', 'editionDate'].includes(value)) {
      this.sortEntriesBy$.next(value)
      this.resetPage()
    }
  }

  setSortEntriesOrder(value: string) {
    if (['asc', 'desc'].includes(value)) {
      this.sortEntriesOrder$.next(value)
      this.resetPage()
    }
  }

  resetUrl() {
    this.zone$.next('null')
    this.format$.next('null')
    this.crs$.next('null')
    this.page$.next(1)
    this.editionDateFrom$.next(this.defaultEditionDate[0])
    this.editionDateTo$.next(this.defaultEditionDate[1])
    this.sortEntriesBy$.next('editionDate')
    this.sortEntriesOrder$.next('desc')
  }

  moreResult(): void {
    this.page$.next(this.page$.value + 1)
  }

  lessResult(): void {
    this.page$.next(this.page$.value - 1)
  }

  resetPage(): void {
    this.page$.next(1)
  }

  async getCapabilities() {
    const response = await this.http.get<any>(this.apiBaseUrl).toPromise()

    console.log('helloresponse', response)

    return response
  }

  async getFields() {
    this.choices = await this.getCapabilities()

    const tempZone = this.choices.zone.map((bucket: TermBucket) => ({
      value: bucket.term,
      label: bucket.label,
    }))
    tempZone.sort((a: Choice, b: Choice) => (a.label > b.label ? 1 : -1))
    tempZone.unshift({ value: 'null', label: 'ZONE' })
    this.bucketPromisesZone = tempZone

    const tempFormat = this.choices.format.map((bucket: TermBucket) => ({
      value: bucket.term,
      label: bucket.label,
    }))
    tempFormat.sort((a: Choice, b: Choice) => (a.label > b.label ? 1 : -1))
    tempFormat.unshift({ value: 'null', label: 'FORMAT' })
    this.bucketPromisesFormat = tempFormat

    const tempCrs = this.choices.categories.map((bucket: TermBucket) => ({
      value: bucket.term,
      label: bucket.label,
    }))
    tempCrs.sort((a: Choice, b: Choice) => (a.label > b.label ? 1 : -1))
    tempCrs.unshift({ value: 'null', label: 'CRS' })
    this.bucketPromisesCrs = tempCrs

    this.defaultEditionDate = [
      this.choices.editionDateStart,
      this.choices.editionDateEnd,
    ]
    console.log('this.defaultEditionDate', this.defaultEditionDate)

    this.editionDateFrom$.next(this.defaultEditionDate[0])
    this.editionDateTo$.next(this.defaultEditionDate[1])
  }
}
