import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { getGlobalConfig } from '@geonetwork-ui/util/app-config'

@Component({
  selector: 'gn-ui-check-toggle',
  templateUrl: './check-toggle.component.html',
  styleUrls: ['./check-toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormsModule],
})
export class CheckToggleComponent {
  @Input() title: string
  @Input() label: string
  @Input() set value(v) {
    if (v.length) {
      const isOpenData = getGlobalConfig().LICENSES.includes(v[0].text)
      this.toggled.emit(isOpenData)
      this.checked = isOpenData
    } else {
      this.checked = v
    }
  }
  @Input() color: 'primary' | 'secondary' = 'primary'
  @Input() model: string
  @Output() toggled = new EventEmitter()
  checked = false

  toggle(event: Event) {
    let isHidden = false
    let value = []
    if (this.model === 'licenses') {
      if (event) {
        // TODO : empty the constraints field and hide the field
        isHidden = true
        if (this.model === 'licenses')
          value = [{ text: getGlobalConfig().LICENSES[0] }]
      } else {
        // TODO : show the constraints field
        isHidden = false
      }
      this.toggled.emit([isHidden, value])
    } else {
      this.toggled.emit(event)
    }
  }
}
