import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core'
import { MapUtilsService } from '@geonetwork-ui/feature/map'
import { getLinkLabel } from '@geonetwork-ui/util/shared'
import {
  BehaviorSubject,
  combineLatest,
  from,
  Observable,
  of,
  startWith,
  throwError,
  withLatestFrom,
} from 'rxjs'
import {
  catchError,
  distinctUntilChanged,
  finalize,
  map,
  switchMap,
  tap,
} from 'rxjs/operators'
import { MdViewFacade } from '../state/mdview.facade'
import { DataService } from '@geonetwork-ui/feature/dataviz'
import { DatasetOnlineResource } from '@geonetwork-ui/common/domain/model/record'
import {
  createViewFromLayer,
  MapContext,
  MapContextLayer,
} from '@geospatial-sdk/core'
import {
  MapContainerComponent,
  prioritizePageScroll,
} from '@geonetwork-ui/ui/map'
import { Feature } from 'geojson'

@Component({
  selector: 'gn-ui-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapContainer') mapContainer: MapContainerComponent

  selection: Feature

  compatibleMapLinks$ = combineLatest([
    this.mdViewFacade.mapApiLinks$,
    this.mdViewFacade.geoDataLinksWithGeometry$,
  ]).pipe(
    map(([mapApiLinks, geoDataLinksWithGeometry]) => {
      return [...mapApiLinks, ...geoDataLinksWithGeometry]
    })
  )

  dropdownChoices$ = this.compatibleMapLinks$.pipe(
    map((links) =>
      links.length
        ? links.map((link, index) => ({
            label: getLinkLabel(link),
            value: index,
          }))
        : [{ label: 'No preview layer', value: 0 }]
    )
  )
  selectedLinkIndex$ = new BehaviorSubject(0)

  loading = false
  error = null

  selectedLink$ = combineLatest([
    this.compatibleMapLinks$,
    this.selectedLinkIndex$.pipe(distinctUntilChanged()),
  ]).pipe(map(([links, index]) => links[index]))

  currentLayers$ = this.selectedLink$.pipe(
    switchMap((link) => {
      if (!link) {
        return of([])
      }
      this.loading = true
      this.error = null
      return this.getLayerFromLink(link).pipe(
        map((layer) => [layer]),
        catchError((e) => {
          this.error = e.message
          console.warn(e.stack || e.message)
          return of([])
        }),
        finalize(() => (this.loading = false))
      )
    })
  )

  mapContext$: Observable<MapContext> = this.currentLayers$.pipe(
    switchMap((layers) =>
      from(createViewFromLayer(layers[0])).pipe(
        catchError(() => of(null)), // could not zoom on the layer: use the record extent
        map((view) => ({
          layers,
          view,
        })),
        tap(() => {
          this.resetSelection()
        })
      )
    ),
    startWith({
      layers: [],
      view: null,
    }),
    withLatestFrom(this.mdViewFacade.metadata$),
    map(([context, metadata]) => {
      if (context.view) return context
      const extent = this.mapUtils.getRecordExtent(metadata)
      const view = extent ? { extent } : null
      return {
        ...context,
        view,
      }
    })
  )

  constructor(
    private mdViewFacade: MdViewFacade,
    private mapUtils: MapUtilsService,
    private dataService: DataService,
    private changeRef: ChangeDetectorRef
  ) {}

  async ngAfterViewInit() {
    const map = await this.mapContainer.openlayersMap
    prioritizePageScroll(map.getInteractions())
  }

  onMapFeatureSelect(features: Feature[]): void {
    this.resetSelection()
    this.selection = features?.length > 0 && features[0]
    if (this.selection) {
      // FIXME: restore styling of selected feature
      // this.selection.setStyle(this.selectionStyle)
    }
    this.changeRef.detectChanges()
  }

  resetSelection(): void {
    if (this.selection) {
      // FIXME: restore styling of selected feature
      // this.selection.setStyle(null)
    }
    this.selection = null
  }

  getLayerFromLink(link: DatasetOnlineResource): Observable<MapContextLayer> {
    if (link.type === 'service' && link.accessServiceProtocol === 'wms') {
      return of({
        url: link.url.toString(),
        type: 'wms',
        name: link.name,
      })
    } else if (
      link.type === 'service' &&
      link.accessServiceProtocol === 'wmts'
    ) {
      return of({
        url: link.url.toString(),
        type: 'wmts',
        name: link.name,
      })
    } else if (
      (link.type === 'service' &&
        (link.accessServiceProtocol === 'wfs' ||
          link.accessServiceProtocol === 'esriRest' ||
          link.accessServiceProtocol === 'ogcFeatures')) ||
      link.type === 'download'
    ) {
      return this.dataService.readAsGeoJson(link).pipe(
        map((data) => ({
          type: 'geojson',
          data,
        }))
      )
    }
    return throwError(() => 'protocol not supported')
  }

  selectLinkToDisplay(link: number) {
    this.selectedLinkIndex$.next(link)
  }
}
