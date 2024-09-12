import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { propagateToDocumentOnly } from '@geonetwork-ui/util/shared'

@Component({
  selector: 'gn-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonComponent {
  private btnClass = 'gn-ui-btn-default'

  @Input() set type(
    value:
      | 'primary'
      | 'secondary'
      | 'default'
      | 'outline'
      | 'light'
      | 'big-gray'
      | 'md-gray'
      | 'sm-gray'
  ) {
    // btn-classes are written in full to be picked up by tailwind
    switch (value) {
      case 'primary':
        this.btnClass = 'gn-ui-btn-primary'
        break
      case 'secondary':
        this.btnClass = 'gn-ui-btn-secondary'
        break
      case 'outline':
        this.btnClass = 'gn-ui-btn-outline'
        break
      case 'light':
        this.btnClass = 'gn-ui-btn-light'
        break
      case 'big-gray':
        this.btnClass = 'gn-ui-btn-big-gray'
        break
      case 'md-gray':
        this.btnClass = 'gn-ui-btn-md-gray'
        break
      case 'sm-gray':
        this.btnClass = 'gn-ui-btn-sm-gray'
        break
      default:
        this.btnClass = 'gn-ui-btn-default'
        break
    }
  }

  @Input() disabled = false
  @Input() extraClass = ''
  @Output() buttonClick = new EventEmitter<void>()

  get classList() {
    return `${this.btnClass} ${this.extraClass}`
  }

  handleClick(event: Event) {
    this.buttonClick.emit()
    event.preventDefault()
    propagateToDocumentOnly(event)
  }
}
