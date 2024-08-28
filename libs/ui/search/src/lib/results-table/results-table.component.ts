import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { CatalogRecord } from '@geonetwork-ui/common/domain/model/record'
import {
  FieldSort,
  SortByField,
} from '@geonetwork-ui/common/domain/model/search'
import { BadgeComponent, UiInputsModule } from '@geonetwork-ui/ui/inputs'
import {
  InteractiveTableColumnComponent,
  InteractiveTableComponent,
} from '@geonetwork-ui/ui/layout'
import {
  FileFormat,
  getBadgeColor,
  getFileFormat,
  getFormatPriority,
} from '@geonetwork-ui/util/shared'
import { TranslateModule } from '@ngx-translate/core'
import { ActionMenuComponent } from './action-menu/action-menu.component'

@Component({
  selector: 'gn-ui-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    UiInputsModule,
    InteractiveTableComponent,
    InteractiveTableColumnComponent,
    MatIconModule,
    TranslateModule,
    BadgeComponent,
    ActionMenuComponent,
  ],
})
export class ResultsTableComponent {
  @Input() records: CatalogRecord[] = []
  @Input() selectedRecordsIdentifiers: string[] = []
  @Input() sortOrder: SortByField = null
  @Input() hasDraft: (record: CatalogRecord) => boolean = () => false
  @Input() canDuplicate: (record: CatalogRecord) => boolean = () => true
  @Input() isUnsavedDraft: (record: CatalogRecord) => boolean = () => true

  // emits the column (field) as well as the order
  @Output() sortByChange = new EventEmitter<[string, 'asc' | 'desc']>()
  @Output() recordClick = new EventEmitter<CatalogRecord>()
  @Output() duplicateRecord = new EventEmitter<CatalogRecord>()
  @Output() deleteRecord = new EventEmitter<CatalogRecord>()
  @Output() recordsSelectedChange = new EventEmitter<
    [CatalogRecord[], boolean]
  >()

  dateToString(date: Date): string {
    return date?.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    })
  }

  getRecordFormats(record: CatalogRecord): FileFormat[] {
    if (record.kind === 'service' || !('distributions' in record)) {
      return []
    }
    const formats = Array.from(
      new Set(
        record.distributions.map((distribution) => getFileFormat(distribution))
      )
    ).filter((format) => !!format)
    formats.sort((a, b) => getFormatPriority(b) - getFormatPriority(a))
    return formats
  }

  formatUserInfo(userInfo: string | unknown): string {
    const infos = (typeof userInfo === 'string' ? userInfo : '').split('|')
    if (infos && infos.length === 4) {
      return `${infos[2]} ${infos[1]}`
    }
    return undefined
  }

  getBadgeColor(format: FileFormat): string {
    return getBadgeColor(format)
  }

  handleRecordClick(item: unknown) {
    this.recordClick.emit(item as CatalogRecord)
  }

  handleDuplicate(item: unknown) {
    this.duplicateRecord.emit(item as CatalogRecord)
  }

  handleDelete(item: unknown) {
    this.deleteRecord.emit(item as CatalogRecord)
  }

  setSortBy(col: string, order: 'asc' | 'desc') {
    this.sortByChange.emit([col, order])
  }

  isSortedBy(col: string): 'desc' | 'asc' | null {
    if (!this.sortOrder) {
      return null
    }
    const sortArray = Array.isArray(this.sortOrder[0])
      ? (this.sortOrder as FieldSort[])
      : ([this.sortOrder] as FieldSort[])
    for (const sort of sortArray) {
      if (sort[1] === col) {
        return sort[0]
      }
    }
    return null
  }

  isChecked(record: CatalogRecord): boolean {
    return this.selectedRecordsIdentifiers.includes(record.uniqueIdentifier)
  }

  handleRecordSelectedChange(selected: boolean, record: CatalogRecord) {
    this.recordsSelectedChange.emit([[record], selected])
  }

  async toggleSelectAll() {
    this.recordsSelectedChange.emit([this.records, !this.isAllSelected()])
  }

  isAllSelected(): boolean {
    return this.records.every((record) =>
      this.selectedRecordsIdentifiers.includes(record.uniqueIdentifier)
    )
  }

  isSomeSelected(): boolean {
    const allSelected = this.records.every((record) =>
      this.selectedRecordsIdentifiers.includes(record.uniqueIdentifier)
    )
    const someSelected = this.records.some((record) =>
      this.selectedRecordsIdentifiers.includes(record.uniqueIdentifier)
    )
    return !allSelected && someSelected
  }
}
