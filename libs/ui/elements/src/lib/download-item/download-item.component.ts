import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { DatasetOnlineResource } from '@geonetwork-ui/common/domain/model/record'

@Component({
  selector: 'gn-ui-download-item',
  templateUrl: './download-item.component.html',
  styleUrls: ['./download-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadItemComponent implements OnInit {
  @Input() link: DatasetOnlineResource
  @Input() color: string
  @Input() format: string
  @Input() isFromWfs: boolean
  @Output() exportUrl = new EventEmitter<string>()
  isModalGPF: boolean

  openUrl() {
    this.exportUrl.emit(this.link.url.toString())
  }

  ngOnInit(): void {
    this.isModalGPF = false
  }

  openModalLayer() {
    this.isModalGPF = true
  }

  closeModalLayer() {
    this.isModalGPF = false
  }
}
