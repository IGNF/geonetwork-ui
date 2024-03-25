import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'gn-ui-ign-api-produit',
  template: `
    <div class="overflow-auto h-60 w-65 bg-white-300 m-2">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr
            class="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300"
          >
            <div
              class="py-2 pr-2 text-xl border-b border-slate-200 dark:border-slate-400/20"
            >
              Produit
            </div>
          </tr>
        </thead>

        <tbody class="align-baseline">
          <tr>
            <div
              class="py-2 pr-2 font-mono font-medium text-s leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400"
              *ngFor="let produit of ListProduits; let i = index"
            >
              <a [href]="produit['id']">{{ i }}</a>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrls: ['./ign-api-produit.component.css'],
})
export class IgnApiProduitComponent {
  // @Input() produits: Array<any> //|[{id :'1'},{id :'2'},{id :'3'}];

  // ngOnInit(): void {
  //   console.log(this.produits);
  // }

  @Input() set produits(value: Array<any>) {
    this.setProduits(value)
  }

  ListProduits: Array<any>

  setProduits(value) {
    this.ListProduits = value
    console.log('r', value)
  }

  showProduits(value) {
    console.log('y', value)
  }

  // trackById(index: number, obj: any): number {
  //   console.log(obj.id)
  //   return obj.id
  // }
  // get getProduits() {
  //   console.log('r', this.produits)

  //   return this.produits ? this.produits : null
  // }
}
