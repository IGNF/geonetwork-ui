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
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { HttpClient } from '@angular/common/http'
import { Choice, DropdownChoice } from '@geonetwork-ui/ui/inputs'

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
    //this.resetUrl()
  }

  offset$ = new BehaviorSubject('')
  zone$ = new BehaviorSubject('')
  format$ = new BehaviorSubject('')
  zoneFiltree: string
  formatFiltree: string

  choicesFormat$: Observable<Choice[]>
  choicesZone$: Observable<Choice[]>
  // listProduit$: Observable<any>
  // subProducts$: Observable <Array<string>>

  constructor(protected http: HttpClient) {}

  isOpen = false
  apiBaseUrl: string

  ngOnInit(): void {
    this.choicesZone$ = this.getFields('BDORTHO', 'zone')
    this.choicesFormat$ = this.getFields('BDORTHO', 'format')
  }

  apiQueryUrl$ = combineLatest([this.zone$, this.format$]).pipe(
    map(([zone, format]) => {
      console.log('on change de valeur')
      let outputUrl
      if (this.apiBaseUrl) {
        const url = new URL(this.apiBaseUrl) // initialisation de l'url avec l'url de base
        const params = { zone: zone, format: format } // initialisation des paramètres de filtres
        for (const [key, value] of Object.entries(params)) {
          if (value && value !== '0') {
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
      map((response) => response['entry'].map((el) => el['id'])),
      tap((el) => console.log(el))
    )
  }
  // getSubProduct(url: string) {
  //   return this.http
  //     .get(url, { headers: { accept: 'application/json' } })
  //     .pipe(map((response) => response['entry'].map((el) => el['id'])))
  // }

  // getDownloadLink(url: string) {
  //   return this.http
  //     .get(url, { headers: { accept: 'application/json' } })
  //     .pipe(map((response) => response['entry']))
  // }
  // getProduct(){
  //   return this.apiQueryUrl$.pipe(
  //     concatMap(url=> this.getSubProduct(url).pipe(
  //       map((link) => {
  //         const element = [] as Array<string>
  //         for (let indexLink = 0; indexLink < link.length; indexLink++) {
  //           const elementToAdd = this.getDownloadLink(link[indexLink]).subscribe(
  //             // eslint-disable-next-line prefer-spread
  //             (linkDownload) => element.push.apply(element, linkDownload)
  //           )
  //         }
  //         console.log("sortie de requete produit : ",element)
  //         return element
  //       })
  //     )))
  // }

  // getClassForFilter(index: number) {
  //   return (
  //     (this.isOpen ? 'block' : 'hidden') + ' ' + (index < 2 ? 'sm:block' : '')
  //   )
  // }

  // setOffset(value: string) {
  //   this.offset$.next(value)
  // }

  setZone(value: string) {
    this.zone$.next(value)
  }

  setFormat(value: string) {
    this.format$.next(value)
  }

  // resetUrl() {
  //   // this.offset$.next(DEFAULT_PARAMS.OFFSET)
  //   this.zone$.next(DEFAULT_PARAMS.LIMIT)
  //   this.format$.next(DEFAULT_PARAMS.FORMAT)
  // }

  // getProduit(response){

  //   console.log('produit dans le html',response)
  // }

  // rechercheProduit(){
  //   console.log('bouton apuyer');
  //   //this.zone$.next(this.zoneFiltree)
  //   this.format$.next(this.formatFiltree)
  // }

  url = 'https://data.geopf.fr/telechargement/capabilities'

  getFields(produit: string, param: string): Observable<FieldAvailableValue[]> {
    return this.http.get(this.url).pipe(
      map((response) =>
        (response as Field).entry.filter(
          (element) =>
            element['id'] ==
            'https://data.geopf.fr/telechargement/resource/'.concat(produit)
        )
      ),
      //tap((el) => console.log(el)),
      switchMap((buckets: Array<FormatProduit>) => {
        const bucketPromises = buckets[0][param].map((bucket) => ({
          value: bucket.label,
          label: bucket.term || 'Pas de valeur',
        }))
        //console.log('bucket', bucketPromises)
        return Promise.all(bucketPromises)
      })
    )
  }
}
