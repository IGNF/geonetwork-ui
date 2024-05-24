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

export interface FieldAvailableValue {
  value: string | number
  label: string
}
export interface listFieldAvailableValue {
  zone: FieldAvailableValue[]
  format: FieldAvailableValue[]
  editionDate: FieldAvailableValue[]
  crs : FieldAvailableValue[]
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

  editionDate$ = new BehaviorSubject('')
  zone$ = new BehaviorSubject('')
  format$ = new BehaviorSubject('')
  category$ = new BehaviorSubject('')


  choicesFormat$: Observable<Choice[]>
  choicesZone$: Observable<Choice[]>
  choicesEditionDate$: Observable<Choice[]>
  choicesCategory$: Observable<Choice[]>

  choice$: Observable<listFieldAvailableValue[]>
  // listProduit$: Observable<any>
  // subProducts$: Observable <Array<string>>

  constructor(protected http: HttpClient) {}

  isOpen = false
  apiBaseUrl: string

  ngOnInit(): void {

    this.choice$ = this.getFields2('BDORTHO')

    this.choicesZone$ = this.choice$.pipe(

      mergeMap(rep=>rep),

      map( rep=> rep['zone'])
      );
    this.choicesFormat$ = this.choice$.pipe(

      mergeMap(rep=>rep),

      map( rep=> rep['format'])
      );

  this.choicesCategory$ = this.choice$.pipe(

    mergeMap(rep=>rep),

    map( rep=> rep['crs'])
    );
  }

  apiQueryUrl$ = combineLatest([this.zone$, this.format$,this.editionDate$,this.category$]).pipe(
    map(([zone, format, editionDate,category]) => {
      let outputUrl: string
      if (this.apiBaseUrl) {
        const url = new URL(this.apiBaseUrl) // initialisation de l'url avec l'url de base
        const params = { zone: zone, format: format, editionDate: editionDate ,crs: category} // initialisation des paramètres de filtres
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
      map((response) => response['entry']),
      tap((el) => console.log(el))
    )
  }
  getLinkFormat(produit):string{
    //console.log(produit['format'][0])
    return produit['format'][0]['label']
  }


  setEditionDate(value: string) {
    this.editionDate$.next(value)
  }

  setZone(value: string) {
    this.zone$.next(value)
  }

  setCategory(value: string) {
    this.category$.next(value)
  }


  setFormat(value: string) {
    this.format$.next(value)
  }

  resetUrl() {
    this.zone$.next(this.choicesZone$[0])
    this.format$.next(this.choicesFormat$[0])
    this.category$.next(this.choicesFormat$[0])
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
      //tap((el) => console.log(el)),
      switchMap((buckets: FormatProduit) => {
        //console.log(buckets)
        const bucketPromises = buckets[param].map((bucket) => (
          {
          value: bucket.label,
          label: bucket.term
        }))
        bucketPromises.unshift({value: "",label: param});
        console.log(bucketPromises);

        return Promise.all(bucketPromises)}
      )
    )
  }

  getFields2(produit: string): Observable<listFieldAvailableValue[]> {
    console.log('lancement de la requete')
    return this.http.get(this.url).pipe(
      map((response) =>
        (response as Field).entry.filter(
          (element) =>
            element['id'] ==
            'https://data.geopf.fr/telechargement/resource/'.concat(produit)
        )[0]
      ),
      switchMap((buckets: FormatProduit) => {

        const bucketPromisesZone : FieldAvailableValue[]= buckets['zone'].map((bucket) => (
          {
          value: bucket.label,
          label: bucket.term
        }))
        bucketPromisesZone.unshift({value: "",label: 'zone'});

        const bucketPromisesFormat: FieldAvailableValue[] = buckets['format'].map((bucket) => (
          {
          value: bucket.label,
          label: bucket.term
        }))
        bucketPromisesFormat.unshift({value: "",label: 'format'});

        const bucketPromisesEditionDate : FieldAvailableValue [] =
          [{
          value: buckets['updated']|| "null",
          label: buckets['updated'] || "null"
        }]
        // bucketPromisesEditionDate.unshift({value: "",label: 'editionDate'});

        const bucketPromisesCrs : FieldAvailableValue[] = buckets['category'].map((bucket) => (
          {
          value: bucket.label,
          label: bucket.term
        }))
        bucketPromisesCrs.unshift({value: "",label: 'crs'});

        const  bucketPromises :listFieldAvailableValue = {
          zone : bucketPromisesZone,
          format : bucketPromisesFormat,
          editionDate : bucketPromisesEditionDate,
          crs : bucketPromisesCrs
        }
        return Promise.all([bucketPromises])}
      )
    )
  }
}
