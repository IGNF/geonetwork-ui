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
  context: MapContext

  openUrl() {
    this.exportUrl.emit(this.link.url.toString())
  }

  ngOnInit(): void {
    this.isModalGPF = false

    this.context = {
      layers: [
        {
          type: 'wfs',
          url: 'https://data.geopf.fr/private/wfs/?service=WFS&version=2.0.0&apikey=interface_catalogue&request=GetFeature&typeNames=IGNF_LIDAR-HD_TA:mns-dalle&outputFormat=application/json&srsName=EPSG:2154',
          featureType: '',
          style: {
            'stroke-color': 'rgba(112, 119, 122)',
            'fill-color': '#20bf0a',
            'stroke-width': 2,
            'shape-fill-color': '#e8f54a',
            'shape-stroke-color': 'black',
            'shape-stroke-width': 2,
          },
        },
      ],
      view: null,
    }
  }

  openModalLayer() {
    this.isModalGPF = true
  }

  closeModalLayer() {
    this.isModalGPF = false
  }
}
