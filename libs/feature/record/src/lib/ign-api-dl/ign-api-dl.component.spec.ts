import { TestBed, ComponentFixture } from '@angular/core/testing'

import { DatasetServiceDistribution } from '@geonetwork-ui/common/domain/model/record'
import { firstValueFrom } from 'rxjs'
import { Choice, UiInputsModule } from '@geonetwork-ui/ui/inputs'
import { TranslateModule } from '@ngx-translate/core'
import { IgnApiDlComponent } from './ign-api-dl.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import exp from 'constants'

const mockDatasetServiceDistribution: DatasetServiceDistribution = {
  url: new URL('https://api.example.com/data'),
  type: 'service',
  accessServiceProtocol: 'GPFDL',
}

describe('IgnApiDlComponent', () => {
  let component: IgnApiDlComponent
  let fixture: ComponentFixture<IgnApiDlComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IgnApiDlComponent],
      imports: [
        UiInputsModule,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(IgnApiDlComponent)
    component = fixture.componentInstance
    component.apiLink = mockDatasetServiceDistribution
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  describe('When panel is opened', () => {
    it('should set the links and initial values correctly', async () => {
      expect(component.apiBaseUrl).toBe('https://api.example.com/data')
      expect(component.format$.getValue()).toBe('')
      expect(component.zone$.getValue()).toBe('')
      expect(component.crs$.getValue()).toBe('')
      const url = await firstValueFrom(component.apiQueryUrl$)
      expect(url).toBe('https://api.example.com/data?pageSize=200&page=0')
      //expect(component.apiLink.accessServiceProtocol).toBe('GPFDL')
    })
  })
  describe('When URL params are changed', () => {
    describe('When Format changed', () => {
      const bucketFormat: Choice[] = [
        { value: 'SHP', label: 'SHP' },
        { value: 'json', label: 'json' },
        { value: 'SQL', label: 'SQL' },
      ]
      const mockFormat = 'SHP'
      const mockBadFormat = 'notAFormat'
      it('should be a correct format', async () => {
        jest.spyOn(component, 'resetPage')
        component.bucketPromisesFormat = bucketFormat
        component.setFormat(mockFormat)
        expect(component.format$.getValue()).toBe(mockFormat)
        expect(component.resetPage).toHaveBeenCalled()
      })

      it('should not be a correct format', async () => {
        component.bucketPromisesFormat = bucketFormat
        component.setFormat(mockFormat)
        component.setFormat(mockBadFormat)
        expect(component.format$.getValue()).toBe(mockFormat)
      })
    })
    describe('When CRS changed', () => {
      const bucketCRS: Choice[] = [
        { value: 'CRS12', label: 'CRS1' },
        { value: 'CRS2', label: 'CRS2' },
        { value: 'CRS3', label: 'CRS3' },
      ]
      const mockCRS = 'CRS12'
      const mockBadCRS = 'notACRS'
      it('should be a correct CRS', async () => {
        jest.spyOn(component, 'resetPage')
        component.bucketPromisesCrs = bucketCRS
        component.setCrs(mockCRS)
        expect(component.crs$.getValue()).toBe(mockCRS)
        expect(component.resetPage).toHaveBeenCalled()
      })

      it('should not be a correct CRS', async () => {
        component.bucketPromisesCrs = bucketCRS
        component.setCrs(mockCRS)
        component.setCrs(mockBadCRS)
        expect(component.crs$.getValue()).toBe(mockCRS)
      })
    })
    describe('When Zone changed', () => {
      const bucketZone: Choice[] = [
        { value: 'D01', label: 'D01' },
        { value: 'D02', label: 'D02' },
        { value: 'D03', label: 'D03' },
      ]
      const mockZone = 'D03'
      const mockBadZone = 'notAZone'
      it('should be a correct Zone', async () => {
        jest.spyOn(component, 'resetPage')
        component.bucketPromisesZone = bucketZone
        component.setZone(mockZone)
        expect(component.zone$.getValue()).toBe(mockZone)
        expect(component.resetPage).toHaveBeenCalled()
      })

      it('should not be a correct Zone', async () => {
        component.bucketPromisesZone = bucketZone
        component.setZone(mockZone)
        component.setZone(mockBadZone)
        expect(component.zone$.getValue()).toBe(mockZone)
      })
    })

    describe('When EditionDate changed', () => {
      const mockEditionDate = '2022-04-30'
      const mockBadEditionDate = '88-88-88'
      it('hould be a correct edition date', () => {
        jest.spyOn(component, 'resetPage')
        component.setEditionDate(mockEditionDate)
        expect(component.editionDate$.getValue()).toBe(mockEditionDate)
        expect(component.resetPage).toHaveBeenCalled()
      })
      it('should not be a correct edition date', () => {
        component.setEditionDate(mockEditionDate)
        component.setEditionDate(mockBadEditionDate)
        expect(component.editionDate$.getValue()).toBe(mockEditionDate)
      })
    })

    describe('When Url is reset', () => {
      it('Should reset zone, format, crs, page and size value', () => {
        component.resetUrl()
        expect(component.zone$.getValue()).toBe('null')
        expect(component.format$.getValue()).toBe('null')
        expect(component.crs$.getValue()).toBe('null')
        expect(component.page$.getValue()).toBe('0')
        expect(component.size$.getValue()).toBe(component.initialPageSize)
      })
    })

    describe('When page is reset', () => {
      it('Should reset page value', () => {
        component.resetPage()
        expect(component.page$.getValue()).toBe('0')
      })
    })
  })
})
