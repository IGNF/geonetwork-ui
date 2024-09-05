import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'gn-ui-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FigureComponent {
  @Input() icon!: string
  @Input() title!: string
  @Input() figure!: string | number
  @Input() unit = ''
  @Input() color: 'primary' | 'secondary' = 'primary'

  get textClass() {
    return this.color === 'primary' ? 'text-primary' : 'text-secondary'
  }

  get bgClass() {
    return this.color === 'primary' ? 'bg-primary-white' : 'bg-secondary-white'
  }
}
