declare module 'keycloak-js' {
  export interface KeycloakConfig {
    url?: string
    realm?: string
    clientId?: string
    [key: string]: any
  }

  export interface KeycloakInitOptions {
    onLoad?: string
    flow?: string
    pkceMethod?: string
    checkLoginIframe?: boolean
    silentCheckSsoRedirectUri?: string
    [key: string]: any
  }

  export interface KeycloakTokenParsed {
    exp?: number
    iat?: number
    nonce?: string
    sub?: string
    session_state?: string
    realm_access?: { roles: string[] }
    resource_access?: { [key: string]: { roles: string[] } }
    name?: string
    given_name?: string
    family_name?: string
    preferred_username?: string
    email?: string
    [key: string]: any
  }

  export default class Keycloak {
    constructor(config?: KeycloakConfig | string)
    init(options?: KeycloakInitOptions): Promise<boolean>
    login(options?: { redirectUri?: string; [key: string]: any }): Promise<void>
    logout(options?: {
      redirectUri?: string
      [key: string]: any
    }): Promise<void>
    updateToken(minValidity?: number): Promise<boolean>

    token?: string
    tokenParsed?: KeycloakTokenParsed
    idToken?: string
    idTokenParsed?: KeycloakTokenParsed
    authenticated?: boolean
  }
}
