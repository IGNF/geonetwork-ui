import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { DatasetServiceDistribution } from '@geonetwork-ui/common/domain/model/record'
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  filter,
  first,
  iif,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { HttpClient } from '@angular/common/http'
import { Choice, DropdownChoice } from '@geonetwork-ui/ui/inputs'
import axios from 'axios'

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

export interface listChoice {
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
  selector: 'gn-ui-ign-api-dl',
  templateUrl: './ign-api-dl.component.html',
  styleUrls: ['./ign-api-dl.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IgnApiDlComponent implements OnInit {
  isOpen = false
  collapsed = false
  initialPageSize = '200'
  apiBaseUrl: string
  editionDate$ = new BehaviorSubject('')
  zone$ = new BehaviorSubject('')
  format$ = new BehaviorSubject('')
  crs$ = new BehaviorSubject('')
  pageSize$ = new BehaviorSubject(this.initialPageSize)
  page$ = new BehaviorSubject('0')
  size$ = new BehaviorSubject(this.initialPageSize)

  url =
    'https://data.geopf.fr/telechargement/capabilities?outputFormat=application/json'
  choices: any
  bucketPromisesZone: Choice[]
  bucketPromisesFormat: Choice[]
  bucketPromisesCrs: Choice[]

  constructor(protected http: HttpClient) {}

  @Input() set apiLink(value: DatasetServiceDistribution) {
    this.apiBaseUrl = value ? value.url.href : undefined
  }

  ngOnInit(): void {
    this.getFields()
    this.bucketPromisesZone = [{ value: '', label: 'ZONE' }]
    this.bucketPromisesFormat = [{ value: '', label: 'FORMAT' }]
    this.bucketPromisesCrs = [{ value: '', label: 'CRS' }]
  }

  apiQueryUrl$ = combineLatest([
    this.zone$,
    this.format$,
    this.editionDate$,
    this.crs$,
    this.pageSize$,
    this.page$,
  ]).pipe(
    map(([zone, format, editionDate, crs, pageSize, page]) => {
      let outputUrl
      if (this.apiBaseUrl) {
        const url = new URL(this.apiBaseUrl) // initialisation de l'url avec l'url de base
        const params = {
          zone: zone,
          format: format,
          editionDate: editionDate,
          crs: crs,
          pageSize: pageSize,
          page: page,
        } // initialisation des paramètres de filtres
        for (const [key, value] of Object.entries(params)) {
          if (value && value !== 'null') {
            url.searchParams.set(key, value)
          } else {
            url.searchParams.delete(key)
          }
        }
        outputUrl = url.toString()
        console.log(outputUrl)
      }
      return outputUrl
    })
  )

  listFilteredProduct$ = this.apiQueryUrl$.pipe(
    mergeMap((url) => {
      return this.getFilteredProduct$(url).pipe(
        map((response) => response['entry']),
        tap((el) => console.log(el))
      )
    })
  )
  numberFilteredProduct$ = this.apiQueryUrl$.pipe(
    mergeMap((url) => {
      return this.getFilteredProduct$(url).pipe(
        map((response) => response['totalentries'])
      )
    })
  )

  getFilteredProduct$(url): Observable<any> {
    return this.http.get(url)
  }

  getLinkFormat(produit): string {
    return produit['format'][0]['label']
  }

  setEditionDate(value: string) {
    if (value.match(/[0-9]{4}-[0-1][0-9]-[0-3][0-9]/)) {
      this.editionDate$.next(value)
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

  resetUrl() {
    // this.offset$.next(DEFAULT_PARAMS.OFFSET)
    this.zone$.next('null')
    this.format$.next('null')
    this.crs$.next('null')
    this.page$.next('0')
    this.size$.next(this.initialPageSize)
  }
  moreResult(): void {
    const page = Number(this.page$.value) + 1
    const size = (page + 1) * Number(this.initialPageSize)
    this.size$.next(String(size))
    this.page$.next(String(page))
  }
  resetPage(): void {
    this.page$.next('0')
  }

  async getFields() {
    const [firstResponse] = await Promise.all([axios.get(this.url)])
    this.choices = firstResponse.data.entry.filter(
      (element) => element['id'] == this.apiBaseUrl
    )[0]
    this.bucketPromisesZone = this.choices.zone.map((bucket) => ({
      value: bucket.label,
      label: bucket.term,
    }))
    this.bucketPromisesZone.sort((a, b) => (a.label > b.label ? 1 : -1))
    this.bucketPromisesZone.unshift({ value: 'null', label: 'ZONE' })

    this.bucketPromisesFormat = this.choices.format.map((bucket) => ({
      value: bucket.label,
      label: bucket.term,
    }))
    this.bucketPromisesFormat.sort((a, b) => (a.label > b.label ? 1 : -1))
    this.bucketPromisesFormat.unshift({ value: 'null', label: 'FORMAT' })

    this.bucketPromisesCrs = this.choices.category.map((bucket) => ({
      value: bucket.label,
      label: bucket.term,
    }))
    this.bucketPromisesCrs.sort((a, b) => (a.label > b.label ? 1 : -1))
    this.bucketPromisesCrs.unshift({ value: 'null', label: 'CRS' })
  }
}
