import { Injectable } from '@angular/core'
import { OrganizationsServiceInterface } from '@geonetwork-ui/common/domain/organizations.service.interface'
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs'
import { UserModel } from '@geonetwork-ui/common/domain/model/user/user.model'
import { PlatformServiceInterface } from '@geonetwork-ui/common/domain/platform.service.interface'

@Injectable({
  providedIn: 'root',
})
export class MyOrgService {
  myOrgData$: Observable<{
    orgName: string
    logoUrl: string
    recordCount: number
    userCount: number
    userList: UserApiModel[]
  }>

  private myOrgDataSubject = new BehaviorSubject<{
    orgName: string
    logoUrl: string
    recordCount: number
    userCount: number
    userList: UserApiModel[]
  }>({
    orgName: '',
    logoUrl: '',
    recordCount: 0,
    userCount: 0,
    userList: [],
  })

  constructor(
    private authService: AuthService,
    private orgService: OrganizationsServiceInterface
  ) {
    this.myOrgData$ = combineLatest([
      this.authService.user$,
      this.authService.allUsers$,
      this.orgService.organisations$,
    ]).pipe(
      map(([user, allUsers, orgs]) => {
        const orgName = user.organisation
        const org = orgs.find((org) => org.name === orgName)
        const logoUrl = org?.logoUrl?.toString()
        const recordCount = org?.recordCount
        const userList = allUsers.filter(
          (user) => user.organisation === orgName
        )
        const userCount = userList.length
        return {
          orgName,
          logoUrl,
          recordCount,
          userList,
          userCount,
        }
      })
    )
  }
}
