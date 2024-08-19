import 'jest-preset-angular/setup-jest'
import '../../../../jest.setup'

import { CommonModule } from '@angular/common'
import { getTestBed } from '@angular/core/testing'
import { MatIconModule } from '@angular/material/icon'
import { BrowserModule } from '@angular/platform-browser'
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing'
import { RouterModule } from '@angular/router'
import { RecordsRepositoryInterface } from '@geonetwork-ui/common/domain/repository/records-repository.interface'
import { TranslateModule } from '@ngx-translate/core'
import { ngMocks } from 'ng-mocks'
import { BehaviorSubject } from 'rxjs'
import { SearchFacade } from './lib/state/search.facade'
import { SearchService } from './lib/utils/service/search.service'

getTestBed().resetTestEnvironment()
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  { teardown: { destroyAfterEach: false } }
)

// ng-mocks global configuration
ngMocks.autoSpy('jest')

ngMocks.globalKeep(CommonModule, true)
ngMocks.globalKeep(BrowserModule, true)
ngMocks.globalKeep(RouterModule, true)
ngMocks.globalKeep(TranslateModule, true)
ngMocks.globalKeep(MatIconModule, true)

ngMocks.defaultMock(RecordsRepositoryInterface, () => ({
  clearRecordDraft: jest.fn(),
  recordHasDraft: jest.fn(),
}))

ngMocks.defaultMock(SearchFacade, () => ({
  results$: new BehaviorSubject([]),
}))

ngMocks.defaultMock(SearchService, () => ({
  setSortBy: jest.fn(),
}))
