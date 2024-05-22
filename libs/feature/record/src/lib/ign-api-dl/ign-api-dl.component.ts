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
  iif,
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
  editionDate: string
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
    console.log(this.apiBaseUrl)
    this.resetUrl()
  }

  editionDate$ = new BehaviorSubject('')
  zone$ = new BehaviorSubject('')
  format$ = new BehaviorSubject('')
  spatialDatasetIdentifierCode$ = new BehaviorSubject('')


  choicesFormat$: Observable<Choice[]>
  choicesZone$: Observable<Choice[]>
  choicesEditionDate$: Observable<Choice[]>
  choicesSpatialDatasetIdentifierCode$: Observable<Choice[]>
  // listProduit$: Observable<any>
  // subProducts$: Observable <Array<string>>

  constructor(protected http: HttpClient) {}

  isOpen = false
  apiBaseUrl: string

  ngOnInit(): void {
    this.choicesZone$ = this.getFields('BDORTHO', 'zone');
    this.choicesFormat$ = this.getFields('BDORTHO', 'format');
    this.choicesEditionDate$ = this.getFields('BDORTHO', 'editionDate')
    this.choicesSpatialDatasetIdentifierCode$ = this.getFields('BDORTHO', 'spatialDatasetIdentifierCode')
  }

  apiQueryUrl$ = combineLatest([this.zone$, this.format$,this.editionDate$,this.spatialDatasetIdentifierCode$]).pipe(
    map(([zone, format, editionDate,spatialDatasetIdentifierCode]) => {
      console.log('on change de valeur')
      if(!this.apiBaseUrl){
        return null;
      }
      const url = new URL(this.apiBaseUrl) // initialisation de l'url avec l'url de base
      const params = { zone: zone, format: format, editionDate: editionDate ,spatialDatasetIdentifierCode: spatialDatasetIdentifierCode} // initialisation des paramètres de filtres
      for (const [key, value] of Object.entries(params)) {
        if (value && value !== '0') {
          url.searchParams.set(key, value)
        } else {
          url.searchParams.delete(key)
        }
      }
      let outputUrl = url.toString()
      console.log(outputUrl)
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

  setEditionDate(value: string) {
    this.editionDate$.next(value)
  }

  setZone(value: string) {
    this.zone$.next(value)
  }

  setSpatialDatasetIdentifierCode(value: string) {
    this.spatialDatasetIdentifierCode$.next(value)
  }


  setFormat(value: string) {
    this.format$.next(value)
  }

  resetUrl() {
    this.zone$.next(this.choicesZone$[0])
    this.format$.next(this.choicesFormat$[0])
  }

  url = 'https://data.geopf.fr/telechargement/capabilities'

  getFields(produit: string, param: string): Observable<FieldAvailableValue[]> {
    return this.http.get(this.url).pipe(
      map((response) =>
        (response as Field).entry.filter(
          (element) =>
            element['id'] ==
            'https://data.geopf.fr/telechargement/resource/'.concat(produit)
        )[0]
      ),
      tap((el) => console.log(el)),
      switchMap((buckets: FormatProduit) => {
        if (param != 'editionDate' && param != 'spatialDatasetIdentifierCode' ) {
          console.log(typeof(buckets[param]));
          const bucketPromises = buckets[param].map((bucket) => ({
            value: bucket.label,
            label: bucket.term || param,
          }))
          return Promise.all(bucketPromises);
        }
        else{
          console.log(typeof(buckets[param]));
          const bucketPromises = [{
            value: buckets[param] ||"",
            label: buckets[param] || param
          }]
          console.log(bucketPromises);
          return Promise.all(bucketPromises)
        }
      })
    )
  }
}
