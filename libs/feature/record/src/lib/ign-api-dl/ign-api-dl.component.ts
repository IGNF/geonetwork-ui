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
  catchError,
  combineLatest,
  map,
  mergeMap,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { HttpClient } from '@angular/common/http'
import { Choice, DropdownChoice } from '@geonetwork-ui/ui/inputs'

const DEFAULT_PARAMS = {
  OFFSET: '',
  LIMIT: '',
  FORMAT: 'json',
}
export interface Label {
  label: string
}

export interface FormatProduit {
  title: string
  format: Array<TermBucket>
  zone: any
}

export interface FormatSortieProduit {
  label: string
  value: string | number
}
export interface ListUrl {
  url: string
}

export interface FieldAvailableValue {
  value: string | number
  label: string
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
  @Input() set apiLink(value: DatasetServiceDistribution) {
    this.apiBaseUrl = value ? value.url.href : undefined
    this.resetUrl()
  }
  offset$ = new BehaviorSubject('')
  limit$ = new BehaviorSubject('')
  format$ = new BehaviorSubject('')

  choices$: Observable<Choice[]>
  subProducts$: Observable<any>

  constructor(protected http: HttpClient) {}

  isOpen = false
  searchConfig: { fieldName: string; title: string }[] = [
    { fieldName: 'format', title: 'Le format' },
  ]
  apiBaseUrl: string
  // formatsList : DropdownChoice[]= [
  //   { label: 'JSON', value: 'json' },
  //   { label: 'CSV', value: 'csv' },
  // ]

  // formatsList : Observable<FieldAvailableValue[]> = this.getFields('format')

  // getListFields(): DropdownChoice[]{
  //   const list = this.getFields('format').subscribe(x => {return x});
  //   console.log(list);
  //   return list
  // }

  url_produit = 'https://data.geopf.fr/telechargement/resource/BDORTHO'
  getSubProduct(url: string) {
    return this.http
      .get(url, { headers: { accept: 'application/json' } })
      .pipe(map((response) => response['entry'].map((el) => el['id'])))
  }

  getDownloadLink(url: string) {
    console.log(url)

    return this.http
      .get(url, { headers: { accept: 'application/json' } })
      .pipe(map((response) => response['entry']))
  }

  ngOnInit(): void {
    this.choices$ = this.getFields('BDORTHO', 'format')
    this.subProducts$ = this.getSubProduct(this.url_produit).pipe(
      map((link) => {
        console.log('hello')

        // eslint-disable-next-line @typescript-eslint/ban-types
        const element = [] as Array<String>

        for (let indexLink = 0; indexLink < link.length; indexLink++) {
          console.log('re')

          const elementToAdd = this.getDownloadLink(link[indexLink]).subscribe(
            // eslint-disable-next-line prefer-spread
            (linkDownload) => element.push.apply(element, linkDownload)
          )
          console.log('ee', elementToAdd)
        }
        console.log(element)

        return element
      })
    )
  }

  // getSubProduct(url: string) {
  //   const response = this.http
  //     .get(url, { headers: { accept: 'application/json' } })
  //     .pipe(
  //       mergeMap(response =>  this.getUrl(response['entry'])
  //       ),

  //       tap((el) => console.log('sort', el))
  //     )
  //   console.log('res', response)

  //   return response
  // }
  // getUrl(Url) {
  //   console.log('hello', Url)
  //   return mergeMap((el) =>
  //     this.http.get(Url, { headers: { accept: 'application/json' } }).pipe(
  //       map((response) => {
  //         console.log('grr')
  //         const data = (response as any).entry
  //         console.log('data', data)

  //         return data
  //       })
  //     )
  //   )
  // }

  getClassForFilter(index: number) {
    return (
      (this.isOpen ? 'block' : 'hidden') + ' ' + (index < 2 ? 'sm:block' : '')
    )
  }

  apiQueryUrl$ = combineLatest([this.offset$, this.limit$, this.format$]).pipe(
    map(([offset, limit, format]) => {
      let outputUrl
      if (this.apiBaseUrl) {
        const url = new URL(this.apiBaseUrl)
        const params = { offset: offset, limit: limit, format: format }
        for (const [key, value] of Object.entries(params)) {
          if (value && value !== '0') {
            url.searchParams.set(key, value)
          } else {
            url.searchParams.delete(key)
          }
        }
        outputUrl = url.toString()
      }
      return outputUrl
    })
  )

  setOffset(value: string) {
    this.offset$.next(value)
  }

  setLimit(value: string) {
    this.limit$.next(value)
  }

  setFormat(value: string) {
    this.format$.next(value)
  }

  resetUrl() {
    this.offset$.next(DEFAULT_PARAMS.OFFSET)
    this.limit$.next(DEFAULT_PARAMS.LIMIT)
    this.format$.next(DEFAULT_PARAMS.FORMAT)
  }

  url = 'https://data.geopf.fr/telechargement/capabilities'

  getFields(produit: string, param: string): Observable<FieldAvailableValue[]> {
    return this.http
      .get(this.url, { headers: { accept: 'application/json' } })
      .pipe(
        map((response) =>
          (response as Field).entry.filter(
            (element) =>
              element['id'] ==
              'https://data.geopf.fr/telechargement/resource/'.concat(produit)
          )
        ),
        //tap(el => console.log(el)),
        switchMap((buckets: Array<FormatProduit>) => {
          const bucketPromises = buckets[0][param].map((bucket) => ({
            value: bucket.label,
            label: bucket.term,
          }))
          //console.log('bucket', bucketPromises)
          return Promise.all(bucketPromises)
        })
      )
  }
}
