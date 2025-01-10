import { Inject, Injectable, InjectionToken, Optional } from '@angular/core'
import { LANG_2_TO_3_MAPPER } from '@geonetwork-ui/util/i18n'
import { TranslateService } from '@ngx-translate/core'

export const DEFAULT_GN4_LOGIN_URL = `/geonetwork/srv/\${lang3}/catalog.signin?redirect=\${current_url}`
export const LOGIN_URL = new InjectionToken<string>('loginUrl')

export const DEFAULT_GN4_LOGOUT_URL = `/geonetwork/signout`
export const LOGOUT_URL = new InjectionToken<string>('logoutUrl')

export const DEFAULT_GN4_SETTINGS_URL = `/geonetwork/srv/\${lang3}/admin.console#/organization/users?userOrGroup=`
export const SETTINGS_URL = new InjectionToken<string>('settingsUrl')

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseLoginUrl = this.baseLoginUrlToken || DEFAULT_GN4_LOGIN_URL
  baseLogoutUrl = this.baseLogoutUrlToken || DEFAULT_GN4_LOGOUT_URL
  baseSettingsUrl = this.baseSettingsUrlToken || DEFAULT_GN4_SETTINGS_URL

  get loginUrl() {
    let baseUrl = this.baseLoginUrl
    const locationHasQueryParams = !!window.location.search
    // this is specific to georchestra login URL based on a ?login query param
    if (baseUrl.startsWith('${current_url}?') && locationHasQueryParams) {
      baseUrl = baseUrl.replace('?', '&')
    }
    return baseUrl
      .replace('${current_url}', window.location.toString())
      .replace('${lang2}', this.translateService.currentLang)
      .replace(
        '${lang3}',
        LANG_2_TO_3_MAPPER[this.translateService.currentLang]
      )
  }

  get logoutUrl() {
    return this.baseLogoutUrl
  }

  get settingsUrl() {
    return this.baseSettingsUrl.replace(
      '${lang3}',
      LANG_2_TO_3_MAPPER[this.translateService.currentLang]
    )
  }

  constructor(
    @Optional() @Inject(LOGIN_URL) private baseLoginUrlToken: string,
    @Optional() @Inject(LOGOUT_URL) private baseLogoutUrlToken: string,
    @Optional() @Inject(SETTINGS_URL) private baseSettingsUrlToken: string,
    private translateService: TranslateService
  ) {}
}
