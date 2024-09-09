import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import {
  DatasetSpatialExtent,
  Keyword,
} from '@geonetwork-ui/common/domain/model/record'
import { GenericKeywordsComponent } from '../../../generic-keywords/generic-keywords.component'
import { PlatformServiceInterface } from '@geonetwork-ui/common/domain/platform.service.interface'
import { firstValueFrom, from, map, Observable, shareReplay } from 'rxjs'
import { EditorFacade } from '../../../../+state/editor.facade'
import { switchMap } from 'rxjs/operators'
import { FormFieldMapContainerComponent } from '../form-field-map-container/form-field-map-container.component'
import { TranslateService } from '@ngx-translate/core'
import {
  SwitchToggleComponent,
  SwitchToggleOption,
} from '@geonetwork-ui/ui/inputs'
import { SPATIAL_SCOPES } from '../../../../fields.config'

// This intermediary type will let us keep track of which keyword is bound to
// which extent; these properties will not be persisted
type KeywordWithExtent = Keyword & {
  _linkedExtent: DatasetSpatialExtent
  _doNotSave: boolean
}

/**
 * This form field is not like the others, as it will read directly from the state to handle both spatial extents
 * and place keywords.
 * Other types of keywords will not be touched by this field.
 */

@Component({
  selector: 'gn-ui-form-field-spatial-extent',
  templateUrl: './form-field-spatial-extent.component.html',
  styleUrls: ['./form-field-spatial-extent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    GenericKeywordsComponent,
    FormFieldMapContainerComponent,
    SwitchToggleComponent,
  ],
})
export class FormFieldSpatialExtentComponent implements OnInit {
  spatialExtents$ = this.editorFacade.record$.pipe(
    map((record) => ('spatialExtents' in record ? record?.spatialExtents : []))
  )

  allKeywords$ = this.editorFacade.record$.pipe(
    map((record) => record?.keywords)
  )

  shownKeywords$ = this.editorFacade.record$.pipe(
    map((record) => record?.keywords.filter((k) => k.type === 'place')),
    // look for full keywords in the thesauri
    switchMap((keywords) =>
      Promise.all(
        keywords.map(async (keyword) => {
          if (!keyword.thesaurus) return keyword
          const allKeywords = await firstValueFrom(
            this.platformService.searchKeywordsInThesaurus(
              keyword.label,
              keyword.thesaurus.id
            )
          )
          const found = allKeywords.find((k) => k.label === keyword.label)
          return found ?? keyword
        })
      )
    ),
    // add additional "unnamed" keywords for extents without a matching keyword
    switchMap(async (keywords) => {
      const spatialExtents = await firstValueFrom(this.spatialExtents$)
      const keywordsFromExtents = await Promise.all(
        spatialExtents.map(async (extent) => {
          const existingKeyword =
            extent.description &&
            (keywords.find(
              (k) => k.key === extent.description
            ) as KeywordWithExtent)
          if (existingKeyword) {
            existingKeyword._linkedExtent = extent
            return null
          }
          let bbox = null
          if ('geometry' in extent) {
            bbox = extent.geometry // FIXME: this should be a bbox too but for now it works...
          } else if ('bbox' in extent) {
            bbox = extent.bbox
          }
          const label = await firstValueFrom(
            this.translateService.get('editor.record.placeKeywordWithoutLabel')
          )
          return {
            label,
            type: 'place',
            ...(bbox && { bbox }),
            _linkedExtent: extent,
            _doNotSave: true,
          } as KeywordWithExtent
        })
      ).then((keywords) => keywords.filter((k) => !!k))

      return [...keywords, ...keywordsFromExtents]
    }),
    shareReplay(1)
  )

  switchToggleOptions$: Observable<SwitchToggleOption[]>

  constructor(
    private platformService: PlatformServiceInterface,
    private editorFacade: EditorFacade,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.editorFacade.record$.subscribe((data) => {
      const allKeywords = data.keywords

      allKeywords.forEach((keyword) => {
        this.switchToggleOptions$ = from([
          SPATIAL_SCOPES.map((scope) => {
            return {
              label: scope.label,
              value: { ...scope },
              checked: keyword.label === scope.label,
            }
          }),
        ])
      })
    })
  }

  async handleKeywordDelete(keyword: Keyword) {
    const spatialExtents = await firstValueFrom(this.spatialExtents$)
    const shownKeywords = (await firstValueFrom(
      this.shownKeywords$
    )) as KeywordWithExtent[]
    const newKeywords = shownKeywords.filter((k) => k !== keyword)
    const linkedExtent =
      '_linkedExtent' in keyword ? keyword._linkedExtent : null
    const newExtents = linkedExtent
      ? spatialExtents.filter((extent) => linkedExtent !== extent)
      : spatialExtents
    return this.emitChanges(newKeywords, newExtents)
  }

  async handleKeywordAdd(keyword: Keyword) {
    const spatialExtents = await firstValueFrom(this.spatialExtents$)
    const shownKeywords = await firstValueFrom(this.shownKeywords$)
    const newKeywords = [...shownKeywords, keyword] as KeywordWithExtent[]
    let newExtents = spatialExtents
    if (keyword.bbox) {
      newExtents = [
        ...spatialExtents,
        {
          bbox: keyword.bbox,
          description: keyword.key ?? undefined,
        },
      ]
    }
    return this.emitChanges(newKeywords, newExtents)
  }

  async emitChanges(
    placeKeywords: KeywordWithExtent[],
    spatialExtents: DatasetSpatialExtent[]
  ) {
    // some keywords are only present to allow control over extents; they **should not** be saved!
    const filteredPlaceKeywords = placeKeywords
      .filter((keyword) => !keyword._doNotSave)
      .map(
        ({ label, thesaurus, type }) =>
          ({
            label,
            type,
            ...(thesaurus && { thesaurus }),
          } as Keyword)
      )
    const notPlaceKeywords = await firstValueFrom(
      this.editorFacade.record$.pipe(
        map((record) => record.keywords.filter((k) => k.type !== 'place'))
      )
    )

    this.editorFacade.updateRecordField('keywords', [
      ...notPlaceKeywords,
      ...filteredPlaceKeywords,
    ])
    this.editorFacade.updateRecordField('spatialExtents', spatialExtents)
  }

  async onSpatialScopeChange(selectedOption: SwitchToggleOption) {
    // remove all existing spatial scope keywords
    const allKeywords = await firstValueFrom(this.allKeywords$)
    const filteredKeywords = allKeywords.filter((keyword) => {
      const spatialScopeLabels = SPATIAL_SCOPES.map((scope) => scope.label)
      return !spatialScopeLabels.includes(keyword.label)
    })

    // add the selected spatial scope keyword
    this.editorFacade.updateRecordField('keywords', [
      ...filteredKeywords,
      { ...selectedOption.value },
    ])
  }
}
