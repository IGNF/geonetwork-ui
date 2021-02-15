import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import {
  DEFAULT_WIZARD_CONFIGURATION,
  DEFAULT_CHIPS_ITEMS_URL,
} from '../../../configs/wizard.config'

@Component({
  selector: 'app-forms-page',
  templateUrl: './forms-page.component.html',
  styleUrls: ['./forms-page.component.css'],
})
export class FormsPageComponent implements OnInit, OnDestroy {
  rootId: number

  currentStep: number
  numSteps = 6

  wizardConfig = DEFAULT_WIZARD_CONFIGURATION

  private routeParamsSub: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.routeParamsSub = this.activatedRoute.params.subscribe(({ id }) => {
      this.rootId = id
    })
    this.cd.detectChanges()
  }

  handleStepChanges(step: number) {
    let route
    if (this.currentStep === 1 && step === 1) {
      route = ['/', this.rootId, 'validation']
    } else if (this.currentStep === 4 && step === 4) {
      route = ['/', this.rootId, 'confirm']
    } else {
      this.currentStep = step
      route = ['/', this.rootId, 'step', step]
    }
    this.router.navigate(route)
  }

  handleStepNumberChanges(steps: number) {
    this.numSteps = steps
  }

  ngOnDestroy() {
    this.routeParamsSub.unsubscribe()
  }
}
