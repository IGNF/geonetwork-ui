import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { DatasetDistribution } from '@geonetwork-ui/common/domain/model/record'
import { Observable, catchError, map, mergeMap, tap, throwError } from 'rxjs'

@Component({
  selector: 'gn-ui-ign-api-produit',
  templateUrl: './ign-api-produit.component.html',
  styleUrls: ['./ign-api-produit.component.css'],
})
export class IgnApiProduitComponent implements OnInit {
  @Input() link
  @Input() color: string
  @Input() format: string
  @Input() isFromWfs: boolean

  constructor(protected http: HttpClient) {}
  liste$: Observable<any>

  ngOnInit(): void {
    this.liste$ = this.http.get(this.link['id']).pipe(

      map((response) => response['entry'],
      // tap(el=> console.log(el)),
      )
    )
    }

  downloadListe():void{
    this.http.get(this.link['id']).pipe(
      map((response) => response['entry']),
      mergeMap((response) => response)
    ).subscribe(reponse=>this.download(reponse['id']))
  }

  download(url):void{
    console.log(url)
    this.http.get(url).subscribe()
  }
}
