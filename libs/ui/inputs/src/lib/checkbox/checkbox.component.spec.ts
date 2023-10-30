import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CheckboxComponent } from './checkbox.component'
import { MatCheckboxModule } from '@angular/material/checkbox'

describe('CheckboxComponent', () => {
  let component: CheckboxComponent
  let fixture: ComponentFixture<CheckboxComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxComponent],
      imports: [MatCheckboxModule],
    }).compileComponents()

    fixture = TestBed.createComponent(CheckboxComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('click when unchecked', () => {
    beforeEach(() => {
      component.checked = false
    })
    it('should invert checked state when being clicked', () => {
      component.handleClick()

      expect(component.checked).toBe(true)
    })
  })

  describe('click when checked', () => {
    beforeEach(() => {
      component.checked = true
    })
    it('should invert checked state when being clicked', () => {
      component.handleClick()

      expect(component.checked).toBe(false)
    })
  })
})
