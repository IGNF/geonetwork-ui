import {
  DatasetRecord,
  ServiceRecord,
} from '@geonetwork-ui/common/domain/model/record'

export const METAWAL_DATASET_RECORD: DatasetRecord = {
  uniqueIdentifier: '2d974612-70b1-4662-a9f4-c43cbe453773',
  abstract: `Cette donnée ponctuelle reprend la localisation des passages pour piétons sur l’ensemble des routes régionales du territoire.

Les passages pour piétons constituent un élément spécifique du réseau et font l'objet d'une attention particulière du gestionnaire de la voirie. L’implantation d’un passage piéton est régi par un arrêté ministériel.

Une distinction est faite entre les passages aux abords des écoles et les autres ; les premiers cités étant dotés d’aménagements spécifiques (éclairage, barrières,…).

Parmi les données attributaires de chaque élément, sont mentionnés la localisation de l’élément (route , BK, coordonnées XY) ainsi que le District gestionnaire. D’autres informations sont présentes dans la base de données : environnement, vitesse autorisée, aménagements, éléments de signalisation, distances de visibilité, …

Toutes ces données sont reprises dans BDR.`,
  contacts: [
    {
      firstName: 'Frédéric',
      lastName: 'Plumier',
      position: 'Attaché',
      email: 'frederic.plumier@spw.wallonie.be',
      address: 'Boulevard du Nord, 8, Namur, 5000, Belgique',
      organization: {
        name: 'Direction Asset Management (SPW - Mobilité et Infrastructures - Direction Asset Management)',
      },
      role: 'point_of_contact',
    },
  ],
  contactsForResource: [
    {
      email: 'helpdesk.carto@spw.wallonie.be',
      organization: {
        name: "Helpdesk carto du SPW (SPW - Secrétariat général - SPW Digital - Département de la Géomatique - Direction de l'Intégration des géodonnées)",
      },
      role: 'point_of_contact',
    },
    {
      firstName: 'Frédéric',
      lastName: 'Plumier',
      position: 'Attaché',
      email: 'frederic.plumier@spw.wallonie.be',
      address: 'Boulevard du Nord, 8, NAMUR, 5000, Belgique',
      phone: '+32 (0)81/772760',
      organization: {
        name: 'Direction Asset Management (SPW - Mobilité et Infrastructures - Direction Asset Management)',
      },
      role: 'custodian',
    },
    {
      email: 'missing@missing.com',
      organization: {
        name: 'Service public de Wallonie (SPW)',
        website: new URL('https://geoportail.wallonie.be'),
      },
      role: 'owner',
    },
    {
      email: 'helpdesk.carto@spw.wallonie.be',
      organization: {
        name: 'Service public de Wallonie (SPW)',
      },
      role: 'distributor',
    },
  ],
  recordCreated: new Date('2019-04-02T12:34:35'),
  recordUpdated: new Date('2022-06-16T05:01:21'),
  resourceCreated: new Date('2002-01-01'),
  resourceUpdated: new Date('2022-06-16'),
  resourcePublished: new Date('2022-06-16'),
  onlineResources: [
    {
      description:
        "Application de consultation des routes et autoroutes de Wallonie. Cette application est sécurisée et n'est accessible que pour les agents de la DGO1 du SPW.",
      name: 'Portail cartographique des routes - Application sécurisée',
      type: 'link',
      url: new URL('http://geoapps.spw.wallonie.be/portailRoutes/'),
    },
    {
      description:
        "Application sécurisée permettant d'accéder aux rapports pour les passages pour piétons dans la BDR",
      name: 'Rapport pour les passages pour piétons dans la BDR - Application sécurisée',
      type: 'link',
      url: new URL('http://rapport.papiweb.spw.wallonie.be/RapportPaPi/'),
    },
    {
      description:
        'Portail de la DGO1 - Routes et Bâtiments relatif aux autoroutes et routes de Wallonie',
      name: 'Portail autouroutes et routes de Wallonie',
      type: 'link',
      url: new URL('http://routes.wallonie.be/'),
    },
  ],
  keywords: [
    {
      label: 'Routes',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.Themes_geoportail_wallon_hierarchy',
        name: 'Thèmes du géoportail wallon',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.Themes_geoportail_wallon_hierarchy'
        ),
      },
      type: 'theme',
    },
    {
      label: 'géographie',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet-theme',
        name: 'GEMET themes',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet-theme'
        ),
      },
      type: 'theme',
    },
    {
      label: 'transport',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet-theme',
        name: 'GEMET themes',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet-theme'
        ),
      },
      type: 'theme',
    },
    {
      label: 'infrastructure routière',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet',
        name: 'GEMET',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet'
        ),
      },
      type: 'theme',
    },
    {
      label: 'contrôle de la circulation',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet',
        name: 'GEMET',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet'
        ),
      },
      type: 'theme',
    },
    {
      label: 'réseau routier',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet',
        name: 'GEMET',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet'
        ),
      },
      type: 'theme',
    },
    {
      label: 'route',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet',
        name: 'GEMET',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet'
        ),
      },
      type: 'theme',
    },
    {
      label: 'route',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet',
        name: 'GEMET',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet'
        ),
      },
      type: 'theme',
    },
    {
      label: 'surveillance du trafic',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet',
        name: 'GEMET',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet'
        ),
      },
      type: 'theme',
    },
    {
      label: 'réglementation de la circulation',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet',
        name: 'GEMET',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet'
        ),
      },
      type: 'theme',
    },
    {
      label: 'trafic routier',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet',
        name: 'GEMET',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet'
        ),
      },
      type: 'theme',
    },
    {
      label: 'transport terrestre',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet',
        name: 'GEMET',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet'
        ),
      },
      type: 'theme',
    },
    {
      label: 'véhicule',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet',
        name: 'GEMET',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet'
        ),
      },
      type: 'theme',
    },
    {
      label: 'autoroute',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet',
        name: 'GEMET',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet'
        ),
      },
      type: 'theme',
    },
    {
      label: 'route à grande circulation',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet',
        name: 'GEMET',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet'
        ),
      },
      type: 'theme',
    },
    {
      label: 'transport en commun',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet',
        name: 'GEMET',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet'
        ),
      },
      type: 'theme',
    },
    {
      label: 'BDInfraSIG',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.infraSIG',
        name: 'Mots-clés InfraSIG',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.infraSIG'
        ),
      },
      type: 'theme',
    },
    {
      label: 'passage piéton',
      type: 'theme',
    },
    {
      label: 'voirie régionale',
      type: 'theme',
    },
    {
      label: 'route régionale',
      type: 'theme',
    },
    {
      label: 'voie de communication',
      type: 'theme',
    },
    {
      label: 'code de la rue',
      type: 'theme',
    },
    {
      label: 'aménagement routier',
      type: 'theme',
    },
    {
      label: 'usager faible',
      type: 'theme',
    },
    {
      label: 'piéton',
      type: 'theme',
    },
    {
      label: 'gestion de la circulation',
      type: 'theme',
    },
    {
      label: 'visibilité',
      type: 'theme',
    },
    {
      label: 'code de la route',
      type: 'theme',
    },
    {
      label: 'accotement',
      type: 'theme',
    },
    {
      label: 'marquage',
      type: 'theme',
    },
    {
      label: 'pied',
      type: 'theme',
    },
    {
      label: 'signalisation',
      type: 'theme',
    },
    {
      label: 'Régional',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.httpinspireeceuropaeumetadatacodelistSpatialScope-SpatialScope',
        name: 'Champ géographique',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.httpinspireeceuropaeumetadatacodelistSpatialScope-SpatialScope'
        ),
      },
      type: 'theme',
    },
  ],
  kind: 'dataset',
  legalConstraints: [],
  licenses: [
    {
      text: "Les conditions générales d'accès s’appliquent.",
      url: new URL(
        'https://geoportail.wallonie.be/files/documents/ConditionsSPW/DataSPW-CGA.pdf'
      ),
    },
    {
      text: "Les conditions générales d'utilisation s'appliquent.",
      url: new URL(
        'https://geoportail.wallonie.be/files/documents/ConditionsSPW/DataSPW-CGU.pdf'
      ),
    },
  ],
  lineage: `En 2002, la Direction de le Sécurité des aménagements de voiries a décidé de mener une analyse approfondie de la sécurité sur les passages piétons. En effet, depuis 1996 (loi du 21/12/2006), le piéton manifestant clairement son intention de traverser au droit d'un passage piéton bénéficie d'une priorité absolue sur les automobilistes.

La première démarche de cette direction a été de créer une base de données. Un relevé de tous les passages a donc été effectué de 2003 à 2005 et un peu moins de 6000 passages ont été répertoriés via une fiche de terrain qui est toujours utilisée actuellement.

Cette donnée a été intégrée dans la base de données routière (BDR). Les Districts routiers font la mise à jour directement dans cette base de données.

Ces données, intégrées dans la Banque de Données routières (BDR), ont fait l’objet d’une mise à jour massive en 2014-2015.
Depuis, ce sont les Districts routiers qui assurent la tenue à jour de ces informations directement dans la base de données.`,
  otherConstraints: [],
  overviews: [
    {
      description: 'PASSAGES_PIETONS',
      url: new URL(
        'https://metawal.wallonie.be/geonetwork/srv/api/records/2d974612-70b1-4662-a9f4-c43cbe453773/attachments/PASSAGES_PIETONS.png'
      ),
    },
  ],
  ownerOrganization: {
    name: 'Direction Asset Management (SPW - Mobilité et Infrastructures - Direction Asset Management)',
  },
  securityConstraints: [],
  spatialExtents: [
    {
      bbox: [2.75, 49.45, 6.5, 50.85],
    },
  ],
  spatialRepresentation: 'vector',
  status: 'ongoing',
  temporalExtents: [],
  title: 'Passages pour piéton',
  topics: ['transportation'],
  updateFrequency: 'continual',
  landingPage: new URL(
    'https://metawal.wallonie.be/geonetwork/srv/api/records/2d974612-70b1-4662-a9f4-c43cbe453773'
  ),
  languages: [],
}

export const METAWAL_SERVICE_RECORD: ServiceRecord = {
  uniqueIdentifier: '6d2b6fdb-f1ea-4d48-8697-a0c05512f1dc',
  abstract:
    "Ce service permet de visualiser les données du bâti et du parcellaire CADMAP 2016 fournies par l'Administration Générale de la Documentation Patrimoniale (AGDP - tous droits réservés) au Service public de Wallonie.",
  contacts: [
    {
      email: 'helpdesk.carto@spw.wallonie.be',
      organization: {
        name: "Direction de l'Intégration des géodonnées (SPW - Secrétariat général - SPW Digital - Département de la Géomatique - Direction de l'Intégration des géodonnées)",
      },
      role: 'point_of_contact',
    },
  ],
  contactsForResource: [
    {
      email: 'helpdesk.carto@spw.wallonie.be',
      organization: {
        name: "Helpdesk carto du SPW (SPW - Secrétariat général - SPW Digital - Département de la Géomatique - Direction de l'Intégration des géodonnées)",
      },
      role: 'point_of_contact',
    },
    {
      email: 'helpdesk.carto@spw.wallonie.be',
      organization: {
        name: "Direction de l'Intégration des géodonnées (SPW - Secrétariat général - SPW Digital - Département de la Géomatique - Direction de l'Intégration des géodonnées)",
      },
      role: 'custodian',
    },
    {
      email: 'missing@missing.com',
      organization: {
        name: 'Service public de Wallonie (SPW)',
        website: new URL('https://geoportail.wallonie.be/'),
      },
      role: 'owner',
    },
    {
      email: 'helpdesk.carto@spw.wallonie.be',
      organization: {
        name: 'Service public de Wallonie (SPW)',
      },
      role: 'distributor',
    },
  ],
  keywords: [
    {
      label: 'Plans et règlements',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.Themes_geoportail_wallon_hierarchy',
        name: 'Thèmes du géoportail wallon',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.Themes_geoportail_wallon_hierarchy'
        ),
      },
      type: 'theme',
    },
    {
      label: 'Données de base',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.Themes_geoportail_wallon_hierarchy',
        name: 'Thèmes du géoportail wallon',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.Themes_geoportail_wallon_hierarchy'
        ),
      },
      type: 'theme',
    },
    {
      label: 'administration',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.gemet-theme',
        name: 'GEMET themes',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.gemet-theme'
        ),
      },
      type: 'theme',
    },
    {
      label: 'Reporting INSPIRENO',
      thesaurus: {
        id: 'geonetwork.thesaurus.external.theme.infraSIG',
        name: 'Mots-clés InfraSIG',
        url: new URL(
          'https://metawal.wallonie.be/geonetwork/srv/api/registries/vocabularies/external.theme.infraSIG'
        ),
      },
      type: 'theme',
    },
    {
      label: 'Ministère des Finances',
      type: 'theme',
    },
    {
      label: 'SPF Finances',
      type: 'theme',
    },
    {
      label: 'Cadastre',
      type: 'theme',
    },
    {
      label: 'Administration Générale de la Documentation Patrimoniale',
      type: 'theme',
    },
    {
      label: 'Etat Fédéral',
      type: 'theme',
    },
    {
      label: 'Cadmap',
      type: 'theme',
    },
    {
      label: 'Cadgis',
      type: 'theme',
    },
    {
      label: 'Propriété',
      type: 'theme',
    },
    {
      label: 'Plan cadastral',
      type: 'theme',
    },
    {
      label: 'Fiscal',
      type: 'theme',
    },
    {
      label: 'Zonage',
      type: 'theme',
    },
    {
      label: 'Privé',
      type: 'theme',
    },
    {
      label: 'Parcellaire cadastral',
      type: 'theme',
    },
  ],
  kind: 'service',
  legalConstraints: [],
  licenses: [
    {
      text: "Les conditions d'utilisation du service sont régies par les Conditions d’accès et d’utilisation des services web géographiques de visualisation du Service public de Wallonie consultables à l'adresse https://geoportail.wallonie.be/files/documents/ConditionsSPW/LicServicesSPW.pdf\n\n                            Elles s'appliquent sans préjudice des conditions d'accès à la donnée décrites dans la fiche de la donnée.",
    },
  ],
  onlineResources: [
    {
      description:
        'Ce service ESRI-REST permet de visualiser la couche de données "Plan parcellaire cadastral - situation 01/01/2016" (uniquement les données du bâti et le parcellaire)',
      endpointUrl: new URL(
        'https://geoservices.wallonie.be/arcgis/rest/services/PLAN_REGLEMENT/CADMAP_2016_PARCELLES/MapServer'
      ),
      protocol: 'esriRest',
      type: 'endpoint',
    },
  ],
  otherConstraints: [],
  overviews: [],
  ownerOrganization: {
    name: "Direction de l'Intégration des géodonnées (SPW - Secrétariat général - SPW Digital - Département de la Géomatique - Direction de l'Intégration des géodonnées)",
  },
  recordCreated: new Date('2019-04-02T12:31:58'),
  recordUpdated: new Date('2022-02-09T11:31:06.766Z'),
  resourcePublished: new Date('2016-12-01'),
  securityConstraints: [],
  title:
    'Plan parcellaire cadastral - situation au 01/01/2016 - Service de visualisation REST',
  topics: [],
  languages: [],
  landingPage: new URL(
    'https://metawal.wallonie.be/geonetwork/srv/api/records/6d2b6fdb-f1ea-4d48-8697-a0c05512f1dc'
  ),
}
