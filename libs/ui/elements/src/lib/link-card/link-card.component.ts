import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { DatasetDistribution } from '@geonetwork-ui/common/domain/model/record'

@Component({
  selector: 'gn-ui-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkCardComponent {
  @Input() link: DatasetDistribution

  ngOnInit() {
    console.log("je suis le link de lien", this.link)
  }
}
