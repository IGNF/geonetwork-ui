import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'gn-ui-ign-api-produit',
  templateUrl: './ign-api-produit.component.html',
  styleUrls: ['./ign-api-produit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IgnApiProduitComponent {
  @Input() produits: Array<string>

  // @Input() set produits(value: Array<any>) {
  //   this.setProduits(value)
  // }

  // ListProduits = ['1']

  // setProduits(value) {
  //   this.ListProduits = value
  //   console.log('r',this.ListProduits)
  //}
  showProduits(value) {
    console.log('y', value)
  }
  // get getProduits() {
  //   console.log('r', this.produits)

  //   return this.produits ? this.produits : null
  // }
}
