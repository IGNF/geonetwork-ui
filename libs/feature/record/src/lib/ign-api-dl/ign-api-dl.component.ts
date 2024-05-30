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
  apiBaseUrl: string
  editionDate$ = new BehaviorSubject('')
  zone$ = new BehaviorSubject('')
  format$ = new BehaviorSubject('')
  crs$ = new BehaviorSubject('')
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
  ]).pipe(
    map(([zone, format, editionDate, crs]) => {
      let outputUrl
      if (this.apiBaseUrl) {
        const url = new URL(this.apiBaseUrl) // initialisation de l'url avec l'url de base
        console.log(zone)
        const params = {
          zone: zone,
          format: format,
          editionDate: editionDate,
          crs: crs,
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

  listeProduitFiltree$ = this.apiQueryUrl$.pipe(
    mergeMap((url) => {
      return this.getProduits(url)
    })
  )


  getProduits(url): Observable<Array<any>> {
    return this.http.get(url).pipe(
      map((response) => response['entry']),
      tap((el) => console.log(el))
    )
  }
  getLinkFormat(produit): string {
    return produit['format'][0]['label']
  }

  setEditionDate(value: string) {
    this.editionDate$.next(value)
  }

  setZone(value: string) {
    this.zone$.next(value)
  }

  setCrs(value: string) {
    this.crs$.next(value)
  }

  setFormat(value: string) {
    this.format$.next(value)
  }

  resetUrl() {
    // this.offset$.next(DEFAULT_PARAMS.OFFSET)
    this.zone$.next('null')
    this.format$.next('null')
    this.crs$.next('null')
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
    this.bucketPromisesZone.unshift({ value: 'null', label: 'ZONE' })

    this.bucketPromisesFormat = this.choices.format.map((bucket) => ({
      value: bucket.label,
      label: bucket.term,
    }))
    this.bucketPromisesFormat.unshift({ value: 'null', label: 'FORMAT' })

    this.bucketPromisesCrs = this.choices.category.map((bucket) => ({
      value: bucket.label,
      label: bucket.term,
    }))
    this.bucketPromisesCrs.unshift({ value: 'null', label: 'CRS' })
  }
}
