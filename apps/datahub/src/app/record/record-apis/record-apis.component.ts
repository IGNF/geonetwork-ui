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
  selectedApiLink: DatasetServiceDistribution

  apiLinks$ = this.facade.apiLinks$

  constructor(
    private facade: MdViewFacade,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.selectedApiLink = undefined
    this.displayApiIgnForm = false
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

  closeRecordApiForm() {
    this.selectedApiLink = undefined
    this.displayApiIgnForm = false
  }

  changeStepOrPage(direction: string) {
    if (direction === 'next') {
      this.carousel?.slideToNext()
    } else {
      this.carousel?.slideToPrevious()
    }
  }
}
