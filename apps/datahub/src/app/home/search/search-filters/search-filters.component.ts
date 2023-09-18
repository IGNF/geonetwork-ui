import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core'
import { marker } from '@biesbjerg/ngx-translate-extract-marker'
import {
  FieldsService,
  FilterDropdownComponent,
  SearchFacade,
  SearchService,
} from '@geonetwork-ui/feature/search'
import { getOptionalSearchConfig } from '@geonetwork-ui/util/app-config'

marker('search.filters.format')
marker('search.filters.inspireKeyword')
marker('search.filters.isSpatial')
marker('search.filters.license')
marker('search.filters.publisher')
marker('search.filters.representationType')
marker('search.filters.resourceType')
marker('search.filters.standard')
marker('search.filters.topic')

@Component({
  selector: 'datahub-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersComponent implements OnInit {
  @ViewChildren(FilterDropdownComponent)
  filters: QueryList<FilterDropdownComponent>
  searchConfig: { fieldName: string; title: string }[]
  isOpen = false

  constructor(
    public searchFacade: SearchFacade,
    private searchService: SearchService,
    private fieldsService: FieldsService
  ) {}

  ngOnInit(): void {
    this.searchConfig = (
      getOptionalSearchConfig().ADVANCED_FILTERS || [
        'publisher',
        'format',
        'publicationYear',
        'topic',
        'isSpatial',
        'license',
      ]
    )
      .filter((adv_filter) => {
        if (this.fieldsService.supportedFields?.includes(adv_filter)) {
          return true
        } else {
          console.warn(
            `WARNING: the configuration file contains an unsupported filter field: '${adv_filter}'. This field will be ignored.`
          )
          return false
        }
      })
      .map((filter) => ({
        fieldName: filter,
        title: `search.filters.${filter}`,
      }))
  }

  open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

  toggleSpatialFilter(enabled: boolean) {
    this.searchFacade.setSpatialFilterEnabled(enabled)
  }

  clearFilters() {
    const fieldNames = this.filters.map((component) => component.fieldName)
    const fieldValues = fieldNames.reduce(
      (prev, curr) => ({ ...prev, [curr]: [] }),
      {}
    )
    this.fieldsService
      .buildFiltersFromFieldValues(fieldValues)
      .subscribe((filters) => {
        this.searchService.updateFilters(filters)
      })
  }

  getClassForFilter(index: number) {
    return (
      (this.isOpen ? 'block' : 'hidden') + ' ' + (index < 2 ? 'sm:block' : '')
    )
  }
}
