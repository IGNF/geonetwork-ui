import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { OgcApiEndpoint, WfsEndpoint } from '@camptocamp/ogc-client'
import {
  DatasetServiceDistribution,
  ServiceProtocol,
} from '@geonetwork-ui/common/domain/model/record'
import { mimeTypeToFormat } from '@geonetwork-ui/util/shared'
import { BehaviorSubject, combineLatest, map, switchMap } from 'rxjs'

const DEFAULT_PARAMS = {
  OFFSET: '',
  LIMIT: '-1',
  FORMAT: 'json',
}

interface OutputFormats {
  itemFormats?: any[]
  outputFormats?: any[]
}

@Component({
  selector: 'gn-ui-record-api-form',
  templateUrl: './record-api-form.component.html',
  styleUrls: ['./record-api-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordApiFormComponent {
  @Input() set apiLink(value: DatasetServiceDistribution) {
    this.outputFormats = [{ value: 'json', label: 'JSON' }]
    this.accessServiceProtocol = value ? value.accessServiceProtocol : undefined
    this.apiFeatureType = value ? value.name : undefined
    if (value) {
      this.apiBaseUrl = value.url.href
      this.createEndpoint().then(() => this.parseOutputFormats())
    }
    this.resetUrl()
  }

  offset$ = new BehaviorSubject(DEFAULT_PARAMS.OFFSET)
  limit$ = new BehaviorSubject(DEFAULT_PARAMS.LIMIT)
  format$ = new BehaviorSubject(DEFAULT_PARAMS.FORMAT)
  endpoint$ = new BehaviorSubject<WfsEndpoint | OgcApiEndpoint | undefined>(
    undefined
  )
  apiBaseUrl: string
  apiFeatureType: string
  supportOffset = true
  accessServiceProtocol: ServiceProtocol | undefined
  outputFormats = [{ value: 'json', label: 'JSON' }]
  endpoint: WfsEndpoint | OgcApiEndpoint | undefined

  apiQueryUrl$ = combineLatest([
    this.offset$,
    this.limit$,
    this.format$,
    this.endpoint$,
  ]).pipe(
    switchMap(([offset, limit, format, endpoint]) =>
      this.generateApiQueryUrl(offset, limit, format)
    )
  )

  noLimitChecked$ = this.limit$.pipe(
    map((limit) => limit === '-1' || limit === '')
  )
  displayLimit$ = this.limit$.pipe(
    map((limit) => (limit !== '-1' ? limit : ''))
  )

  setOffset(value: string) {
    this.offset$.next(value)
  }

  setLimit(value: string) {
    this.limit$.next(value === '' ? '-1' : value)
  }

  setFormat(value: string | unknown) {
    this.format$.next(String(value))
  }

  resetUrl() {
    this.offset$.next(DEFAULT_PARAMS.OFFSET)
    this.limit$.next(DEFAULT_PARAMS.LIMIT)
    this.format$.next(DEFAULT_PARAMS.FORMAT)
  }

  async parseOutputFormats() {
    if (!this.endpoint) return
    const apiUrl = this.apiBaseUrl.endsWith('?')
      ? this.apiBaseUrl.slice(0, -1)
      : this.apiBaseUrl
    const outputFormats = await this.getOutputFormats(apiUrl)

    const formatsList = outputFormats.itemFormats
      ? this.mapFormats(outputFormats.itemFormats)
      : this.mapFormats(outputFormats.outputFormats || [])

    this.outputFormats = this.outputFormats
      .concat(formatsList.filter(Boolean))
      .filter(
        (format, index, self) =>
          index === self.findIndex((t) => t.value === format.value)
      )
      .sort((a, b) => a.label.localeCompare(b.label))
  }

  mapFormats(formats: any[]) {
    return formats.map((format) => {
      const normalizedFormat = mimeTypeToFormat(format)
      return normalizedFormat
        ? { label: normalizedFormat.toUpperCase(), value: normalizedFormat }
        : null
    })
  }

  async getOutputFormats(url: string): Promise<OutputFormats> {
    if (!this.endpoint) return {}
    if (this.endpoint instanceof WfsEndpoint) {
      this.supportOffset = this.endpoint.supportsStartIndex()
      return this.endpoint.getServiceInfo() as OutputFormats
    } else {
      {
        const firstCollection = (await this.endpoint.featureCollections)[0]
        return (await this.endpoint.getCollectionInfo(
          firstCollection
        )) as OutputFormats
      }
    }
  }

  async createEndpoint() {
    if (!this.apiBaseUrl || !this.accessServiceProtocol) return
    if (this.accessServiceProtocol === 'wfs') {
      this.endpoint = new WfsEndpoint(this.apiBaseUrl)
      await (this.endpoint as WfsEndpoint).isReady()
    } else {
      this.endpoint = new OgcApiEndpoint(this.apiBaseUrl)
    }
    this.endpoint$.next(this.endpoint)
  }

  async generateApiQueryUrl(
    offset: string,
    limit: string,
    format: string
  ): Promise<string> {
    if (!this.apiBaseUrl || !this.endpoint || !this.apiFeatureType) return ''

    const options = {
      outputFormat: format,
      startIndex: offset ? Number(offset) : undefined,
      maxFeatures: limit !== '-1' ? Number(limit) : undefined,
      limit: limit !== '-1' ? Number(limit) : undefined,
      offset: offset !== '' ? Number(offset) : undefined,
    }

    if (this.endpoint instanceof WfsEndpoint) {
      return this.endpoint.getFeatureUrl(this.apiFeatureType, options)
    } else {
      const firstCollection = (await this.endpoint.featureCollections)[0]
      return await this.endpoint.getCollectionItemsUrl(firstCollection, options)
    }
  }
}
