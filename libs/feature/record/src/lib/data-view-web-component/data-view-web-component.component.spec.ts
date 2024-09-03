import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DataViewWebComponentComponent } from './data-view-web-component.component'
import { BehaviorSubject, firstValueFrom } from 'rxjs'
import { MdViewFacade } from '../state'
import { TranslateModule } from '@ngx-translate/core'
import { Component, Input } from '@angular/core'
import { GN_UI_VERSION } from '../gn-ui-version.token'
import { provideRepositoryUrl } from '@geonetwork-ui/api/repository'

const chartConfig1 = {
  aggregation: 'sum',
  xProperty: 'anneeappro',
  yProperty: 'nbre_com',
  chartType: 'bar',
}

const chartConfig2 = {
  aggregation: 'min',
  xProperty: 'pro',
  yProperty: 'number',
  chartType: 'line',
}

const metadata = {
  uniqueIdentifier: 'md_record_1234',
}

const gnUiVersion = 'v1.2.3'

class MdViewFacadeMock {
  chartConfig$ = new BehaviorSubject(chartConfig1)
  metadata$ = new BehaviorSubject(metadata)
}

@Component({
  selector: 'gn-ui-copy-text-button',
  template: '<div></div>',
})
export class MockCopyTextButtonComponent {
  @Input() text: string
  @Input() tooltipText: string
  @Input() rows: number
}

describe('DataViewWebComponentComponent', () => {
  let component: DataViewWebComponentComponent
  let fixture: ComponentFixture<DataViewWebComponentComponent>
  let facade

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DataViewWebComponentComponent,
        MockCopyTextButtonComponent,
      ],
      imports: [TranslateModule.forRoot()],
      providers: [
        provideRepositoryUrl('http://gn-api.url/'),
        {
          provide: MdViewFacade,
          useClass: MdViewFacadeMock,
        },
        {
          provide: GN_UI_VERSION,
          useValue: gnUiVersion,
        },
      ],
    }).compileComponents()
    facade = TestBed.inject(MdViewFacade)
    fixture = TestBed.createComponent(DataViewWebComponentComponent)
    component = fixture.componentInstance
    component.viewType$.next('chart')
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('Chart view', () => {
    describe('init webComponentHtml$', () => {
      it('should generate HTML based on configs', async () => {
        const html = await firstValueFrom(component.webComponentHtml$)
        expect(html).toBe(
          `<script src="https://cdn.jsdelivr.net/gh/geonetwork/geonetwork-ui@wc-dist-${gnUiVersion}/gn-wc.js"></script>
  <gn-dataset-view-chart
          api-url="http://gn-api.url/"
          dataset-id="${metadata.uniqueIdentifier}"
          aggregation="${chartConfig1.aggregation}"
          x-property="${chartConfig1.xProperty}"
          y-property="${chartConfig1.yProperty}"
          chart-type="${chartConfig1.chartType}"
          primary-color="#0f4395"
          secondary-color="#8bc832"
          main-color="#555"
          background-color="#fdfbff"
          main-font="'Inter', sans-serif"
          title-font="'DM Serif Display', serif"
  ></gn-dataset-view-chart>`
        )
      })
    })
    describe('update webComponentHtml$', () => {
      beforeEach(() => {
        facade.chartConfig$.next(chartConfig2)
      })
      it('should update HTML based on configs', async () => {
        const html = await firstValueFrom(component.webComponentHtml$)
        expect(html).toBe(
          `<script src="https://cdn.jsdelivr.net/gh/geonetwork/geonetwork-ui@wc-dist-${gnUiVersion}/gn-wc.js"></script>
  <gn-dataset-view-chart
          api-url="http://gn-api.url/"
          dataset-id="${metadata.uniqueIdentifier}"
          aggregation="${chartConfig2.aggregation}"
          x-property="${chartConfig2.xProperty}"
          y-property="${chartConfig2.yProperty}"
          chart-type="${chartConfig2.chartType}"
          primary-color="#0f4395"
          secondary-color="#8bc832"
          main-color="#555"
          background-color="#fdfbff"
          main-font="'Inter', sans-serif"
          title-font="'DM Serif Display', serif"
  ></gn-dataset-view-chart>`
        )
      })
    })
  })
  describe('Map view', () => {
    beforeEach(() => {
      component.viewType$.next('map')
    })
    describe('init webComponentHtml$', () => {
      it('should generate HTML based on configs', async () => {
        const html = await firstValueFrom(component.webComponentHtml$)
        expect(html).toBe(
          `<script src="https://cdn.jsdelivr.net/gh/geonetwork/geonetwork-ui@wc-dist-${gnUiVersion}/gn-wc.js"></script>
<gn-dataset-view-map
        api-url="http://gn-api.url/"
        dataset-id="${metadata.uniqueIdentifier}"
        primary-color="#0f4395"
        secondary-color="#8bc832"
        main-color="#555"
        background-color="#fdfbff"
        main-font="'Inter', sans-serif"
        title-font="'DM Serif Display', serif"
></gn-dataset-view-map>`
        )
      })
    })
  })
  describe('Table view', () => {
    beforeEach(() => {
      component.viewType$.next('table')
    })
    describe('init webComponentHtml$', () => {
      it('should generate HTML based on configs', async () => {
        const html = await firstValueFrom(component.webComponentHtml$)
        expect(html).toBe(
          `<script src="https://cdn.jsdelivr.net/gh/geonetwork/geonetwork-ui@wc-dist-${gnUiVersion}/gn-wc.js"></script>
  <gn-dataset-view-table
          api-url="http://gn-api.url/"
          dataset-id="${metadata.uniqueIdentifier}"
          primary-color="#0f4395"
          secondary-color="#8bc832"
          main-color="#555"
          background-color="#fdfbff"
          main-font="'Inter', sans-serif"
          title-font="'DM Serif Display', serif"
  ></gn-dataset-view-table>`
        )
      })
    })
  })
})
