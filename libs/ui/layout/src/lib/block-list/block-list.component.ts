import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
} from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'gn-ui-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class BlockListComponent implements AfterContentInit {
  @Input() pageSize = 5
  @Input() containerClass = ''
  @Input() paginationContainerClass = 'w-full bottom-0 top-auto'
  @ContentChildren('block', { read: ElementRef }) blocks: QueryList<
    ElementRef<HTMLElement>
  >

  protected currentPage = 0
  protected get pages() {
    return new Array(this.pagesCount).fill(0).map((_, i) => i)
  }

  get isFirstPage() {
    return this.currentPage === 0
  }
  get isLastPage() {
    return this.currentPage === this.pagesCount - 1
  }
  get pagesCount() {
    return this.blocks ? Math.ceil(this.blocks.length / this.pageSize) : 1
  }

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.blocks.changes.subscribe(this.refreshBlocksVisibility)
    this.refreshBlocksVisibility()
  }

  protected refreshBlocksVisibility = () => {
    this.blocks.forEach((block, index) => {
      block.nativeElement.style.display =
        index >= this.currentPage * this.pageSize &&
        index < (this.currentPage + 1) * this.pageSize
          ? null
          : 'none'
    })
  }

  public goToPage(index: number) {
    this.currentPage = Math.max(Math.min(index, this.pagesCount - 1), 0)
    this.changeDetector.detectChanges()
    this.refreshBlocksVisibility()
  }

  public previousPage() {
    if (this.isFirstPage) return
    this.goToPage(this.currentPage - 1)
  }

  public nextPage() {
    if (this.isLastPage) return
    this.goToPage(this.currentPage + 1)
  }
}
