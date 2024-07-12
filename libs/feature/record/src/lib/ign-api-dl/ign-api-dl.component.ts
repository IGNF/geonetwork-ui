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
  startWith,
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
  // a passer en config
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
    this.bucketPromisesZone = [{ value: '', label: 'ZONE' }]
    this.bucketPromisesFormat = [{ value: '', label: 'FORMAT' }]
    this.bucketPromisesCrs = [{ value: '', label: 'CRS' }]
    this.getFields()
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
      console.log(zone, format, editionDate, crs, pageSize, page)

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
      } else {
        console.error('erreur apibaseUrl null')
      }
      return outputUrl
    })
    // startWith(() => this.apiBaseUrl)
  )

  listFilteredProduct$ = this.apiQueryUrl$.pipe(
    mergeMap((url) => {
      console.log(url)

      return this.getFilteredProduct$(url).pipe(
        map((response) => response['entry'])
        // startWith([])
      )
    })
  )
  numberFilteredProduct$ = this.apiQueryUrl$.pipe(
    mergeMap((url) => {
      return this.getFilteredProduct$(url).pipe(
        map((response) => response['totalentries'])
        // startWith(0)
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
    this.editionDate$.next(value)
    this.resetPage()
  }

  setZone(value: string) {
    this.zone$.next(value)
    this.resetPage()
  }

  setCrs(value: string) {
    this.crs$.next(value)
    this.resetPage()
  }

  setFormat(value: string) {
    this.format$.next(value)
    this.resetPage()
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

  async getCapabilities() {
    let page = 0
    let choicesTest = undefined
    let pageCount = 1

    while (choicesTest === undefined && pageCount > page) {
      const response = await axios.get(
        this.url.concat(`&pagesize=200&page=${page}`)
      )

      choicesTest = response.data.entry.filter(
        (element) => element['id'] == this.apiBaseUrl
      )[0]
      page += 1
      pageCount = response.data.pagecount
    }

    return choicesTest
  }
  async getFields() {
    this.choices = await this.getCapabilities()

    const tempZone = this.choices.zone.map((bucket) => ({
      value: bucket.label,
      label: bucket.term,
    }))
    tempZone.sort((a, b) => (a.label > b.label ? 1 : -1))
    tempZone.unshift({ value: 'null', label: 'ZONE' })

    this.bucketPromisesZone = tempZone

    const tempFormat = this.choices.format.map((bucket) => ({
      value: bucket.label,
      label: bucket.term,
    }))
    tempFormat.sort((a, b) => (a.label > b.label ? 1 : -1))
    tempFormat.unshift({ value: 'null', label: 'FORMAT' })

    this.bucketPromisesFormat = tempFormat

    const tempCrs = this.choices.category.map((bucket) => ({
      value: bucket.label,
      label: bucket.label,
    }))
    tempCrs.sort((a, b) => (a.label > b.label ? 1 : -1))
    tempCrs.unshift({ value: 'null', label: 'CRS' })

    this.bucketPromisesCrs = tempCrs

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  }
}
