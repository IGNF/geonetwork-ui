import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { Router } from '@angular/router'
import { CatalogRecord } from '@geonetwork-ui/common/domain/record'
import { SearchFacade, SearchService } from '@geonetwork-ui/feature/search'
import { UiSearchModule } from '@geonetwork-ui/ui/search'
import { UiElementsModule } from '@geonetwork-ui/ui/elements'

const includes = [
  'uuid',
  'resourceTitleObject',
  'createDate',
  'changeDate',
  'userinfo',
  'cl_status',
  'isPublishedToAll',
]

@Component({
  selector: 'md-editor-all-records-list',
  templateUrl: './all-records-list.component.html',
  styleUrls: ['./all-records-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule, UiSearchModule, UiElementsModule],
})
export class AllRecordsComponent {
  constructor(
    private router: Router,
    public searchFacade: SearchFacade,
    public searchService: SearchService
  ) {
    this.searchFacade
      .setConfigRequestFields(includes)
      .setSortBy(['desc', 'changeDate'])
      .setPagination(0, 15)
  }

  paginate(page: number) {
    this.searchService.setPage(page)
  }
  createRecord() {
    this.router.navigate(['/create'])
  }

  editRecord(record: CatalogRecord) {
    this.router.navigate(['/edit', record.uniqueIdentifier])
  }
}
