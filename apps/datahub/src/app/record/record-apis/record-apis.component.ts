import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core'
import { DatasetServiceDistribution } from '@geonetwork-ui/common/domain/model/record'
import { MdViewFacade } from '@geonetwork-ui/feature/record'
import { CarouselComponent } from '@geonetwork-ui/ui/layout'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

@Component({
  selector: 'datahub-record-apis',
  templateUrl: './record-apis.component.html',
  styleUrls: ['./record-apis.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordApisComponent implements OnInit {
  @ViewChild(CarouselComponent) carousel: CarouselComponent

  maxHeight = '700px'
  opacity = 1
  displayApiIgnForm: boolean
  displayLayer: boolean
  selectedApiLink: DatasetServiceDistribution

  apiLinks$ = this.facade.apiLinks$

  planIgn =
    'https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&TILEMATRIXSET=PM&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&STYLE=normal&FORMAT=image/png'

  constructor(
    private facade: MdViewFacade,
    private changeDetector: ChangeDetectorRef
  ) {}

  map = new Map({
    layers: [new TileLayer({ source: new OSM() })],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
    target: 'maptest',
  })

  ngOnInit(): void {
    this.selectedApiLink = undefined
    this.displayApiIgnForm = false
    this.displayLayer = false
  }

  get hasPagination() {
    return this.carousel?.stepsCount > 1
  }

  updateView() {
    this.changeDetector.detectChanges()
  }

  get isFirstStep() {
    return this.carousel?.isFirstStep
  }

  get isLastStep() {
    return this.carousel?.isLastStep
  }

  openRecordApiForm(link: DatasetServiceDistribution) {
    this.displayApiIgnForm =
      link.accessServiceProtocol === 'GPFDL' ? true : false
    this.selectedApiLink = link
  }

  openModalLayer(link: DatasetServiceDistribution) {
    this.displayLayer = link.accessServiceProtocol === 'GPFDL' ? true : false
  }

  closeRecordApiForm() {
    this.selectedApiLink = undefined
    this.displayApiIgnForm = false
  }

  closeModalLayer() {
    this.displayLayer = false
  }

  changeStepOrPage(direction: string) {
    if (direction === 'next') {
      this.carousel?.slideToNext()
    } else {
      this.carousel?.slideToPrevious()
    }
  }
}
