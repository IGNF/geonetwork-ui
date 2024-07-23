import { CatalogRecordKeys } from '@geonetwork-ui/common/domain/model/record'

// Expressions should be enclosed in `${}` to be recognized as such
// eg. ${dateNow()}
export type EditorFieldExpression = `$\{${string}}`

export type EditorFieldValue = string | number | boolean | unknown

export interface FormFieldConfig {
  labelKey?: string
  hintKey?: string
  tooltipKey?: string
  required?: boolean
  locked?: boolean
  invalid?: boolean
  invalidHintKey?: string
}

export interface EditorField {
  // configuration of the form field used as presentation
  formFieldConfig: FormFieldConfig

  // name of the target field in the record; will not change the record directly if not defined
  model?: CatalogRecordKeys

  // a hidden field won't show but can still be used to modify the record
  // FIXME: currently this is redundant with an absence of formFieldConfig but necessary for clarity
  hidden?: boolean

  // the result of this expression will replace the field value on save
  onSaveProcess?: EditorFieldExpression

  // value?: EditorFieldValue
}

export interface EditorSection {
  labelKey?: string
  descriptionKey?: string
  hidden: boolean
  fields: EditorField[]
}

export interface EditorFieldPage {
  labelKey?: string
  sections: EditorSection[]
}

export interface EditorConfig {
  pages: EditorFieldPage[]
}

export interface EditorFieldState {
  model: string
  value: EditorFieldValue
}
