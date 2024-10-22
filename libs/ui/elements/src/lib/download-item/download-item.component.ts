import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { DatasetOnlineResource } from '@geonetwork-ui/common/domain/model/record'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

@Component({
  selector: 'gn-ui-download-item',
  templateUrl: './download-item.component.html',
  styleUrls: ['./download-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadItemComponent implements OnInit {
  @Input() link: DatasetOnlineResource
  @Input() color: string
  @Input() format: string
  @Input() isFromWfs: boolean
  @Output() exportUrl = new EventEmitter<string>()
  map: Map
  isModalGPF: boolean

  openUrl() {
    this.exportUrl.emit(this.link.url.toString())
  }

  ngOnInit(): void {
    this.isModalGPF = false
    this.map = new Map({
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      target: 'maptest',
    })
  }

  openModalLayer() {
    this.isModalGPF = true
  }

  closeModalLayer() {
    this.isModalGPF = false
  }
}
