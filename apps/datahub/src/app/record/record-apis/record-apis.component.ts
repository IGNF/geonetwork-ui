import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { DatasetServiceDistribution } from '@geonetwork-ui/common/domain/model/record'
import { MdViewFacade } from '@geonetwork-ui/feature/record'

@Component({
  selector: 'datahub-record-apis',
  templateUrl: './record-apis.component.html',
  styleUrls: ['./record-apis.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordApisComponent implements OnInit {
  maxHeight = '0px'
  opacity = 0
  selectedApiLink: DatasetServiceDistribution
  constructor(public facade: MdViewFacade) {}

  ngOnInit():void {
    const link: DatasetServiceDistribution = {
    type: 'service',
    url: new URL('https://data.geopf.fr/telechargement/resource/BDORTHO'),
    accessServiceProtocol: 'wms',
    identifierInService: 'pas identification services ',
    description: 'pas de description',
  }
  this.setStyle(link)
  this.selectedApiLink = link
}

  openRecordApiForm(link: DatasetServiceDistribution) {
    this.selectedApiLink = link
    this.setStyle(link)
  }

  closeRecordApiForm() {
    this.selectedApiLink = undefined
    this.setStyle(undefined)
  }

  setStyle(link: DatasetServiceDistribution) {
    this.maxHeight = link === undefined ? '0px' : '500px'
    this.opacity = link === undefined ? 0 : 1
  }
}
