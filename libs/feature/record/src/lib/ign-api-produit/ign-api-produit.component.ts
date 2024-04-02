import { HttpClient } from '@angular/common/http'
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { Observable, map, tap } from 'rxjs'

@Component({
  selector: 'gn-ui-ign-api-produit',
  templateUrl: './ign-api-produit.component.html',
  styleUrls: ['./ign-api-produit.component.css'],
})
export class IgnApiProduitComponent {
  @Input() urlProduit

  listeProduit: Observable<any>

  constructor(protected http: HttpClient) {}

  ngOnInit() {
    this.listeProduit = this.http.get(this.urlProduit).pipe(
      map(
        (reponse) => reponse['entry'],
      )
    )
  }

  // (value: Array<any>) {
  //   this.setProduits(value)
  // }

  // setProduits(value) {
  //   console.log('r', value)
  // }

  // showProduits(value) {
  //   console.log('y', value)
  // }

  // trackById(index: number, obj: any): number {
  //   console.log(obj.id)
  //   return obj.id
  // }
  // get getProduits() {
  //   console.log('r', this.produits)

  //   return this.produits ? this.produits : null
  // }
}
