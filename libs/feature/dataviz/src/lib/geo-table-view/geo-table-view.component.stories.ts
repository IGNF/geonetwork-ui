import { TranslateModule } from '@ngx-translate/core'
import {
  applicationConfig,
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular'
import { GeoTableViewComponent } from './geo-table-view.component'
import { importProvidersFrom } from '@angular/core'
import {
  FeatureDetailComponent,
  MapContainerComponent,
} from '@geonetwork-ui/ui/map'
import { pointFeatureCollectionFixture } from '@geonetwork-ui/common/fixtures'
import { TableComponent } from '@geonetwork-ui/ui/dataviz'
import { HttpClientModule } from '@angular/common/http'
import { TRANSLATE_DEFAULT_CONFIG } from '@geonetwork-ui/util/i18n'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

export default {
  title: 'Map/GeoTable',
  component: GeoTableViewComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FeatureDetailComponent,
        MapContainerComponent,
        TableComponent,
        BrowserAnimationsModule,
      ],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(TranslateModule.forRoot(TRANSLATE_DEFAULT_CONFIG)),
        importProvidersFrom(HttpClientModule),
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div style="height: 400px">${story}</div>`
    ),
  ],
} as Meta<GeoTableViewComponent>

export const Primary: StoryObj<GeoTableViewComponent> = {
  args: {
    data: pointFeatureCollectionFixture(),
  },
}
