import { InjectionToken, Type } from '@angular/core'

export interface RouterConfigModel {
  searchStateId: string
  searchRouteComponent: Type<any>
  recordRouteComponent: Type<any>
  organizationRouteComponent: Type<any>
}

export const ROUTER_CONFIG = new InjectionToken<RouterConfigModel>(
  'router.config'
)
