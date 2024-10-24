import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { DatasetOnlineResource } from '@geonetwork-ui/common/domain/model/record'
import { MapContext } from '@geospatial-sdk/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'gn-ui-download-item',
  templateUrl: './download-item.component.html',
  styleUrls: ['./download-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadItemComponent implements OnInit {
  onMapFeatureSelect($event: Event) {
    throw new Error('Method not implemented.')
  }
  @Input() link: DatasetOnlineResource
  @Input() color: string
  @Input() format: string
  @Input() isFromWfs: boolean
  @Output() exportUrl = new EventEmitter<string>()
  isModalGPF: boolean
  mapContext$: Observable<MapContext>

  openUrl() {
    this.exportUrl.emit(this.link.url.toString())
  }

  ngOnInit(): void {
    this.isModalGPF = false
  }

  openModalLayer() {
    this.isModalGPF = true
  }

  closeModalLayer() {
    this.isModalGPF = false
  }
}
