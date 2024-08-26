import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { OgcApiEndpoint } from '@camptocamp/ogc-client'
import { debounceTime, Subject } from 'rxjs'
import {
  MapContextLayerModel,
  MapContextLayerTypeEnum,
} from '../map-context/map-context.model'
import { TranslateModule } from '@ngx-translate/core'
import {
  DropdownChoice,
  TextInputComponent,
  UiInputsModule,
} from '@geonetwork-ui/ui/inputs'
import { CommonModule } from '@angular/common'
import { MapLayer } from '../+state/map.models'

@Component({
  selector: 'gn-ui-add-layer-from-ogc-api',
  templateUrl: './add-layer-from-ogc-api.component.html',
  styleUrls: ['./add-layer-from-ogc-api.component.css'],
  standalone: true,
  imports: [CommonModule, TranslateModule, UiInputsModule, TextInputComponent],
})
export class AddLayerFromOgcApiComponent implements OnInit {
  @Input() ogcUrl: string
  @Output() layerAdded = new EventEmitter<MapLayer>()

  urlChange = new Subject<string>()
  loading = false
  layers: any[] = []
  errorMessage: string | null = null
  selectedLayerTypes: { [key: string]: DropdownChoice['value'] } = {}

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.urlChange.pipe(debounceTime(700)).subscribe(() => {
      this.loadLayers()
    })
  }

  async loadLayers() {
    this.errorMessage = null
    try {
      this.loading = true
      if (!this.ogcUrl.trim()) {
        this.layers = []
        return
      }
      const ogcEndpoint = await new OgcApiEndpoint(this.ogcUrl)
      this.layers = await ogcEndpoint.allCollections
      this.setDefaultLayerTypes()
    } catch (error) {
      const err = error as Error
      this.layers = []
      this.errorMessage = 'Error loading layers: ' + err.message
    } finally {
      this.loading = false
      this.changeDetectorRef.markForCheck()
    }
  }

  setDefaultLayerTypes() {
    this.layers.forEach((layer) => {
      const choices = this.getLayerChoices(layer)
      if (choices.length > 0) {
        this.selectedLayerTypes[layer.name] = choices[0].value
      }
    })
  }

  getLayerChoices(layer: any) {
    const choices = []
    if (layer.hasRecords) {
      choices.push({ label: 'Records', value: 'record' })
    }
    if (layer.hasFeatures) {
      choices.push({ label: 'Features', value: 'features' })
    }
    if (layer.hasVectorTiles) {
      choices.push({ label: 'Vector Tiles', value: 'vectorTiles' })
    }
    if (layer.hasMapTiles) {
      choices.push({ label: 'Map Tiles', value: 'mapTiles' })
    }
    return choices
  }

  shouldDisplayLayer(layer: any) {
    return (
      layer.hasRecords ||
      layer.hasFeatures ||
      layer.hasVectorTiles ||
      layer.hasMapTiles
    )
  }

  onLayerTypeSelect(layerName: string, selectedType: any) {
    this.selectedLayerTypes[layerName] = selectedType
      ? selectedType
      : this.getLayerChoices(layerName)[0]?.value
  }

  async addLayer(layer: string, layerType: any) {
    try {
      const ogcEndpoint = await new OgcApiEndpoint(this.ogcUrl)
      let layerUrl: string

      if (layerType === 'vectorTiles') {
        layerUrl = await ogcEndpoint.getVectorTilesetUrl(layer)
      } else if (layerType === 'mapTiles') {
        layerUrl = await ogcEndpoint.getMapTilesetUrl(layer)
      } else {
        layerUrl = await ogcEndpoint.getCollectionItemsUrl(layer, {
          outputFormat: 'json',
        })
      }

      const layerToAdd: MapContextLayerModel = {
        name: layer,
        url: layerUrl,
        type: MapContextLayerTypeEnum.OGCAPI,
        layerType: layerType,
      }
      this.layerAdded.emit({ ...layerToAdd, title: layer })
    } catch (error) {
      const err = error as Error
      console.error('Error adding layer:', err.message)
    }
  }
}
