import { ChangeDetectionStrategy, Component } from '@angular/core'
import { SearchFacade, SearchService } from '@geonetwork-ui/feature/search'
import { map, pluck } from 'rxjs/operators'

@Component({
  selector: 'datahub-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersComponent {
  publisher$ = this.searchFacade.searchFilters$.pipe(
    pluck('OrgForResource'),
    map((orgState) => orgState && Object.keys(orgState)[0])
  )
  constructor(
    public searchFacade: SearchFacade,
    private searchService: SearchService
  ) {}

  isOpen = false

  open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

  removeOrg() {
    this.searchService.updateSearch({
      OrgForResource: {},
    })
  }

  toggleSpatialFilter(enabled: boolean) {
    this.searchFacade.setSpatialFilterEnabled(enabled)
  }
}
