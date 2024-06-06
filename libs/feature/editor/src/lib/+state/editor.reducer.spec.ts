import { Action } from '@ngrx/store'
import * as EditorActions from './editor.actions'
import {
  EditorState,
  initialEditorState,
  editorReducer,
} from './editor.reducer'
import { DATASET_RECORDS } from '@geonetwork-ui/common/fixtures'

describe('Editor Reducer', () => {
  describe('valid Editor actions', () => {
    it('openRecord', () => {
      const action = EditorActions.openRecord({
        record: DATASET_RECORDS[0],
      })
      const result: EditorState = editorReducer(
        { ...initialEditorState, changedSinceSave: true },
        action
      )

      expect(result.record).toBe(DATASET_RECORDS[0])
      expect(result.changedSinceSave).toBe(false)
    })
    it('saveRecord action', () => {
      const action = EditorActions.saveRecord()
      const result: EditorState = editorReducer(
        { ...initialEditorState, changedSinceSave: true, saveError: 'oopsie' },
        action
      )

      expect(result.saving).toBe(true)
      expect(result.saveError).toBe(null)
    })
    it('saveRecordSuccess action', () => {
      const action = EditorActions.saveRecordSuccess()
      const result: EditorState = editorReducer(
        {
          ...initialEditorState,
          saving: true,
          saveError: 'oopsie',
          changedSinceSave: true,
        },
        action
      )

      expect(result.saving).toBe(false)
      expect(result.saveError).toBe(null)
      expect(result.changedSinceSave).toBe(false)
    })
    it('saveRecordFailure action', () => {
      const action = EditorActions.saveRecordFailure({
        error: 'oopsie',
      })
      const result: EditorState = editorReducer(
        { ...initialEditorState, saving: true },
        action
      )

      expect(result.saving).toBe(false)
      expect(result.saveError).toEqual('oopsie')
    })
    it('updateRecordField action', () => {
      const action = EditorActions.updateRecordField({
        field: 'title',
        value: 'new title',
      })
      const result: EditorState = editorReducer(
        { ...initialEditorState, record: DATASET_RECORDS[0] },
        action
      )

      expect(result.record.title).toEqual('new title')
    })
    it('markRecordAsChanged action', () => {
      const action = EditorActions.markRecordAsChanged()
      const result: EditorState = editorReducer(
        { ...initialEditorState, changedSinceSave: false },
        action
      )

      expect(result.changedSinceSave).toBe(true)
    })
  })

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action

      const result = editorReducer(initialEditorState, action)

      expect(result).toBe(initialEditorState)
    })
  })
})
