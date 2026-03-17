import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core'
import { getThemeConfig } from '@geonetwork-ui/util/app-config'
import { ThemeService } from '@geonetwork-ui/util/shared'
import Keycloak from 'keycloak-js'

@Component({
  selector: 'datahub-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(public renderer: Renderer2) { }

  ngOnInit(): void {
    const favicon = getThemeConfig().FAVICON
    if (favicon) ThemeService.setFavicon(favicon)
  }

  ngAfterViewInit(): void {
    const title = document
      .getElementsByClassName('fr-badge--green-emeraude')
      .item(0)
    const spanBadge = document.createElement('span')
    spanBadge.classList.add('fr-icon-search-fill')
    spanBadge.style.scale = '0.5'
    this.renderer.setProperty(title, 'innerText', 'RECHERCHER')
    this.renderer.removeClass(title, 'fr-badge--green-emeraude')
    this.renderer.insertBefore(title, spanBadge, title.firstChild)
    this.renderer.addClass(title, 'fr-badge--blue-cumulus')
    this.keycloakCheckAuth()
  }

  keycloakCheckAuth(): void {
    const authContainer = document.getElementById('header-auth')
    if (!authContainer) return

    const client_id = 'cartes-gouv-public';
    let sso_url;
    if (
      encodeURIComponent(window.location.href).includes('mut-dev')
    ) {
      sso_url = 'sso-qua.priv.geopf.fr'
    } else {
      sso_url = 'sso.geopf.fr'
    }

    const renderLoggedOut = () => {
      document.querySelectorAll('.login-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          keycloak.login({ redirectUri: window.location.href })
        })
      })
    }

    const renderLoggedIn = async () => {
      const claims = keycloak.idTokenParsed || keycloak.tokenParsed || {}

      const displayName =
        (typeof claims.name === 'string' && claims.name) ||
        [claims.given_name, claims.family_name].filter(Boolean).join(' ') ||
        (typeof claims.preferred_username === 'string' &&
          claims.preferred_username) ||
        (typeof claims.email === 'string' && claims.email) ||
        'Compte'

      const generateUserMenuHTML = (collapseId) => {
        const currentUrl = encodeURIComponent(window.location.href)
        return `
                <li>
                    <div class="fr-translate fr-nav">
                        <div class="fr-nav__item">
                            <button aria-controls="${collapseId}" aria-expanded="false" title="Mon espace" class="fr-nav__btn fr-btn fr-px-2w">
                                <span class="fr-icon-account-circle-fill fr-icon--sm fr-mr-1w" aria-hidden="true"></span>Mon espace</button>
                            <div class="fr-collapse fr-translate__menu fr-menu" id="${collapseId}">
                                <ul class="fr-menu__list">
                                    <li style="pointer-events: none;">
                                        <div class="fr-text--sm">
                                            <p class="custom-center-btn fr-text--bold fr-mx-2w fr-text--sm fr-mt-3v fr-mb-2v">${displayName}</p>
                                            <p class="fr-text--xs fr-mb-3v fr-mx-2w fr-text-mention--grey" style="text-align: left;">${claims.email}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <a class="fr-nav__link fr-mr-3w" href="https://cartes.gouv.fr/tableau-de-bord">
                                            <span class="fr-icon-dashboard-3-line fr-icon--sm">&emsp;Tableau de bord</span></a>
                                    </li>
                                    <li>
                                        <a class="fr-nav__link fr-mr-3w" href="https://cartes.gouv.fr/mon-compte">
                                            <span class="fr-icon-user-line fr-icon--sm">&emsp;Mon compte</span></a>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="https://${sso_url}/realms/geoplateforme/protocol/openid-connect/logout?post_logout_redirect_uri=${currentUrl}&client_id=${client_id}"
                                                class="fr-icon-logout-box-r-line fr-icon--sm custom-center-btn fr-btn fr-btn--tertiary fr-btn--sm fr-mt-3v fr-mx-2w">
                                                Se déconnecter
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            `
      }

      authContainer.innerHTML = generateUserMenuHTML('espace-collapse')

      const authContainerMobile = document.getElementById('header-auth-mobile')
      if (authContainerMobile) {
        authContainerMobile.innerHTML = generateUserMenuHTML(
          'espace-collapse-mobile'
        )
      }
    }

    const keycloak = new Keycloak({
      url: `https://${sso_url}`,
      realm: 'geoplateforme',
      clientId: client_id,
    })

    let locationChecker;
    if (window.location.href.includes('localhost')) {
      locationChecker = `${window.location.origin}/assets/silent-check-sso.html`;
    } else {
      locationChecker = `${window.location.origin}/rechercher-une-donnee/assets/silent-check-sso.html`;
    }

    // "Authorization Code" flow avec PKCE (type de client Keycloak : Public).
    keycloak
      .init({
        onLoad: 'check-sso',
        flow: 'standard',
        pkceMethod: 'S256',
        checkLoginIframe: false,
        silentCheckSsoRedirectUri: locationChecker,
      })
      .then(async (authenticated) => {
        if (!authenticated) {
          renderLoggedOut()
          return
        }

        await renderLoggedIn()

        // Si on veut garder le token à jour pour d'éventuelles futures appels API :
        // window.setInterval(() => {
        //     keycloak.updateToken(60).catch(() => {
        //         // Si le rafraîchissement échoue, on affiche simplement l'interface déconnectée.
        //         renderLoggedOut();
        //     });
        // }, 30_000);
      })
      .catch((error) => {
        console.error('Failed to initialize Keycloak', error)
        renderLoggedOut()
      })
  }
}
