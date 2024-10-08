import { DatasetServiceDistribution } from '@geonetwork-ui/common/domain/model/record'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'

@Component({
  selector: 'gn-ui-api-card',
  templateUrl: './api-card.component.html',
  styleUrls: ['./api-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiCardComponent implements OnInit, OnChanges {
  @Input() link: DatasetServiceDistribution
  @Input() currentLink: DatasetServiceDistribution
  displayApiFormButton: boolean
  displayModalLayer: boolean
  currentlyActive = false
  currentlyAcitveModal = false
  @Output() openRecordApiForm: EventEmitter<DatasetServiceDistribution> =
    new EventEmitter<DatasetServiceDistribution>()
  @Output() openModalLayer: EventEmitter<DatasetServiceDistribution> =
    new EventEmitter<DatasetServiceDistribution>()

  ngOnInit() {
    this.displayApiFormButton =
      this.link.accessServiceProtocol === 'ogcFeatures' ||
      this.link.accessServiceProtocol === 'wfs' ||
      this.link.accessServiceProtocol === 'GPFDL'
    this.displayModalLayer = this.link.accessServiceProtocol === 'GPFDL'
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentlyActive =
      changes.currentLink.currentValue === this.link ? true : false
  }

  openRecordApiFormPanel() {
    if (this.displayApiFormButton) {
      this.currentlyActive = !this.currentlyActive
      this.openRecordApiForm.emit(this.currentlyActive ? this.link : undefined)
    }
  }

  openModalLayerPanel() {
    if (this.displayModalLayer) {
      this.currentlyAcitveModal = !this.currentlyAcitveModal
      this.openModalLayer.emit(
        this.currentlyAcitveModal ? this.link : undefined
      )
    }
  }
}
