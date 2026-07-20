import { DOCUMENT } from '@angular/common'
import { Injectable, inject } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'

interface DsfrAnalyticsPage {
  name?: string
  path?: string
  template?: string
  title?: string
}

interface DsfrAnalyticsSite {
  entity?: string
}

interface DsfrAnalytics {
  page?: DsfrAnalyticsPage
  site?: DsfrAnalyticsSite
  collect?: () => void
}

interface DsfrWindow extends Window {
  dsfr?: {
    analytics?: DsfrAnalytics
  }
}

@Injectable({
  providedIn: 'root',
})
export class DsfrAnalyticsService {
  private readonly router = inject(Router)
  private readonly document = inject(DOCUMENT)
  private initialized = false

  init(): void {
    if (this.initialized) return
    this.initialized = true

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        this.syncPage(event.urlAfterRedirects)
      })
  }

  private syncPage(url: string): void {
    const win = window as DsfrWindow & {
      dsfr?: {
        analytics?: DsfrAnalytics & {
          readiness?: Promise<void>
          isReady?: boolean
        }
      }
    }
    const analytics = win.dsfr?.analytics

    if (!analytics) {
      console.warn('[DSFR Analytics] analytics module not found on window.dsfr')
      return
    }

    // DSFR analytics module initialization is asynchronous
    // Wait for readiness promise if available
    const readinessPromise = (analytics as any).readiness
    if (readinessPromise && typeof readinessPromise.then === 'function') {
      readinessPromise
        .then(() => {
          this.updatePage(url)
        })
        .catch(() => {
          // If readiness fails, still try to update
          this.updatePage(url)
        })
    } else {
      // If no readiness promise, try immediate update
      // Guard against collector not being ready
      try {
        this.updatePage(url)
      } catch {
        // Silently fail if collector isn't ready
      }
    }
  }

  private updatePage(url: string): void {
    const win = window as DsfrWindow
    const analytics = win.dsfr?.analytics

    if (!analytics?.page) {
      // Page property doesn't exist yet, skip update
      return
    }

    analytics.page.path = url
    analytics.page.title = this.document.title
    analytics.page.template = this.getTemplate(url)
    analytics.page.name = this.getPageName(url)

    // Déclenche l'envoi des données à Eulerian
    if (typeof analytics.collect === 'function') {
      analytics.collect()
    }
  }

  private getTemplate(url: string): string {
    if (this.hasAnySegment(url, ['dataset', 'service', 'reuse'])) {
      return 'article'
    }

    if (this.hasAnySegment(url, ['organization'])) {
      return 'list'
    }

    if (this.hasAnySegment(url, ['search', 'rechercher'])) {
      return 'search'
    }

    return 'home'
  }

  private getPageName(url: string): string {
    if (this.hasAnySegment(url, ['dataset'])) {
      return 'record_dataset'
    }

    if (this.hasAnySegment(url, ['service'])) {
      return 'record_service'
    }

    if (this.hasAnySegment(url, ['reuse'])) {
      return 'record_reuse'
    }

    if (this.hasAnySegment(url, ['organization'])) {
      return 'organization'
    }

    if (this.hasAnySegment(url, ['search', 'rechercher'])) {
      return 'search'
    }

    return 'home'
  }

  private hasAnySegment(url: string, segments: string[]): boolean {
    return segments.some((segment) => url.includes(`/${segment}`))
  }
}
