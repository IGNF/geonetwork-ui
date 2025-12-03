import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core'
import { getThemeConfig } from '@geonetwork-ui/util/app-config'
import { ThemeService } from '@geonetwork-ui/util/shared'

@Component({
  selector: 'datahub-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(public renderer: Renderer2) {}

  ngOnInit(): void {
    const favicon = getThemeConfig().FAVICON
    if (favicon) ThemeService.setFavicon(favicon)
  }

  ngAfterViewInit(): void {
    const title = document
      .getElementsByClassName('fr-badge--green-emeraude')
      .item(0)
    const spanBadge = document.createElement('span')
    spanBadge.classList.add('fr-icon-search-fill')
    spanBadge.style.scale = '0.5'
    this.renderer.setProperty(title, 'innerText', 'RECHERCHER')
    this.renderer.removeClass(title, 'fr-badge--green-emeraude')
    this.renderer.insertBefore(title, spanBadge, title.firstChild)
    this.renderer.addClass(title, 'fr-badge--blue-cumulus')
    console.log(title)
  }
}
