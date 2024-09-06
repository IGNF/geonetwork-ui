import {
  findChildElement,
  findChildrenElement,
  findNestedElement,
  findNestedElements,
  findParent,
  readAttribute,
  XmlElement,
} from '../xml-utils'
import {
  ChainableFunction,
  combine,
  filterArray,
  flattenArray,
  getAtIndex,
  map,
  mapArray,
  pipe,
} from '../function-utils'
import {
  extractCharacterString,
  extractDatasetOnlineResources,
  extractDateTime,
  extractRole,
  extractServiceOnlineResources,
  extractUrl,
  findIdentification,
} from '../iso19139/read-parts'
import {
  Individual,
  OnlineResource,
  Organization,
  RecordKind,
  Role,
} from '@geonetwork-ui/common/domain/model/record'
import { matchMimeType } from '../common/distribution.mapper'
import { fullNameToParts } from '../iso19139/utils/individual-name'

export function readKind(rootEl: XmlElement): RecordKind {
  return pipe(
    findNestedElement(
      'mdb:metadataScope',
      'mdb:MD_MetadataScope',
      'mdb:resourceScope',
      'mcc:MD_ScopeCode'
    ),
    readAttribute('codeListValue'),
    map(
      (scopeCode): RecordKind =>
        scopeCode === 'service' ? 'service' : 'dataset'
    )
  )(rootEl)
}

export function findDistribution() {
  return findNestedElement('mdb:distributionInfo', 'mrd:MD_Distribution')
}

// from cit:CI_Organisation
export function extractOrganization(): ChainableFunction<
  XmlElement,
  Organization
> {
  const getUrl = pipe(
    findNestedElements(
      'cit:contactInfo',
      'cit:CI_Contact',
      'cit:onlineResource',
      'cit:CI_OnlineResource',
      'cit:linkage'
    ),
    getAtIndex(0),
    extractUrl()
  )
  return pipe(
    combine(
      pipe(findChildElement('cit:name', false), extractCharacterString()),
      getUrl
    ),
    map(([name, website]) => ({
      name,
      ...(website && { website }),
    }))
  )
}

// from cit:CI_Individual or cit:CI_Organisation
export function extractIndividual(
  role: Role,
  organization?: Organization,
  orgContact?: Individual
): ChainableFunction<XmlElement, Individual> {
  const getPosition = pipe(
    findChildElement('cit:positionName'),
    extractCharacterString()
  )
  const getNameParts = pipe(
    findChildElement('cit:name'),
    extractCharacterString(),
    map((fullName) => {
      if (!fullName) return []
      return fullNameToParts(fullName)
    })
  )
  const getContact = findNestedElement('cit:contactInfo', 'cit:CI_Contact')
  const getAddressRoot = pipe(
    getContact,
    findNestedElement('cit:address', 'cit:CI_Address')
  )
  const getAddress = pipe(
    getAddressRoot,
    combine(
      pipe(
        findChildElement('cit:deliveryPoint', false),
        extractCharacterString()
      ),
      pipe(findChildElement('cit:city', false), extractCharacterString()),
      pipe(findChildElement('cit:postalCode', false), extractCharacterString()),
      pipe(findChildElement('cit:country', false), extractCharacterString())
    ),
    map((parts) => parts.filter((p) => !!p).join(', '))
  )
  const getPhone = pipe(
    getContact,
    findNestedElement('cit:phone', 'cit:CI_Telephone', 'cit:number'),
    extractCharacterString()
  )
  const getEmail = pipe(
    getAddressRoot,
    findChildElement('cit:electronicMailAddress', false),
    extractCharacterString()
  )
  const defaultOrg: Organization = {
    name: 'Missing Organization',
  }

  let defaultIndividual: Partial<Individual> = {}
  if (orgContact) {
    defaultIndividual = {
      email: orgContact.email,
      ...(orgContact.address && { address: orgContact.address }),
      ...(orgContact.phone && { phone: orgContact.phone }),
      ...(orgContact.position && { position: orgContact.position }),
      organization,
    }
  }

  return pipe(
    combine(getPosition, getNameParts, getEmail, getAddress, getPhone),
    map(([position, [firstName, lastName], email, address, phone]) => ({
      ...defaultIndividual,
      email: email || defaultIndividual.email || 'missing@missing.com',
      role,
      organization: organization || defaultOrg,
      ...(position && { position }),
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(address && { address }),
      ...(phone && { phone }),
    }))
  )
}

// from cit:CI_Organisation
export function extractOrganizationIndividuals(
  role: Role
): ChainableFunction<XmlElement, Array<Individual>> {
  return pipe(
    combine(
      extractOrganization(),
      extractIndividual(role),
      findNestedElements('cit:individual', 'cit:CI_Individual')
    ),
    map(([org, orgContact, els]) =>
      els.length
        ? els.map((el) => extractIndividual(role, org, orgContact)(el))
        : [
            {
              email: orgContact.email,
              ...(orgContact.address && { address: orgContact.address }),
              ...(orgContact.phone && { phone: orgContact.phone }),
              ...(orgContact.position && { position: orgContact.position }),
              organization: org,
              role,
            },
          ]
    )
  )
}

// from cit:CI_Responsibility
export function extractIndividuals(): ChainableFunction<
  XmlElement,
  Array<Individual>
> {
  const getRole = pipe(findChildElement('cit:role'), extractRole())
  const getIndividuals = pipe(
    combine(getRole, findNestedElements('cit:party', 'cit:CI_Individual')),
    ([role, els]) => els.map((el) => extractIndividual(role)(el))
  )
  const getOrgIndividuals = pipe(
    combine(getRole, findNestedElements('cit:party', 'cit:CI_Organisation')),
    map(([role, els]) =>
      els.map((el) => extractOrganizationIndividuals(role)(el))
    ),
    flattenArray()
  )

  return pipe(combine(getIndividuals, getOrgIndividuals), flattenArray())
}

export function readUniqueIdentifier(rootEl: XmlElement): string {
  return pipe(
    findNestedElement(
      'mdb:metadataIdentifier',
      'mcc:MD_Identifier',
      'mcc:code'
    ),
    extractCharacterString()
  )(rootEl)
}

export function readOwnerOrganization(rootEl: XmlElement): Organization {
  const contacts = readContacts(rootEl)
  const pointOfContact = contacts.filter(
    (c) => c.role === 'point_of_contact'
  )[0]
  return (pointOfContact || contacts[0]).organization
}

export function readContacts(rootEl: XmlElement): Individual[] {
  return pipe(
    findNestedElements('mdb:contact', 'cit:CI_Responsibility'),
    mapArray(extractIndividuals()),
    flattenArray()
  )(rootEl)
}

export function readResourceContacts(rootEl: XmlElement): Individual[] {
  return pipe(
    combine(
      pipe(
        findIdentification(),
        findNestedElements(
          'mri:citation',
          'cit:CI_Citation',
          'cit:citedResponsibleParty'
        )
      ),
      pipe(
        findIdentification(),
        findChildrenElement('mri:pointOfContact', false)
      ),
      pipe(findDistribution(), findChildrenElement('mrd:distributorContact'))
    ),
    flattenArray(),
    mapArray(findChildElement('cit:CI_Responsibility', false)),
    mapArray(extractIndividuals()),
    flattenArray()
  )(rootEl)
}

export function readLandingPage(rootEl: XmlElement): URL {
  return pipe(
    findNestedElement(
      'mdb:metadataLinkage',
      'cit:CI_OnlineResource',
      'cit:linkage'
    ),
    extractUrl()
  )(rootEl)
}

export function readLineage(rootEl: XmlElement): string {
  return pipe(
    findNestedElement('mdb:resourceLineage', 'mrl:LI_Lineage', 'mrl:statement'),
    extractCharacterString()
  )(rootEl)
}

function extractDateInfo(
  type: 'creation' | 'revision' | 'publication'
): ChainableFunction<XmlElement, Date> {
  return pipe(
    findChildrenElement('mdb:dateInfo', false),
    filterArray(
      (el) =>
        pipe(
          findChildElement('cit:CI_DateTypeCode'),
          readAttribute('codeListValue')
        )(el) === type
    ),
    getAtIndex(0),
    findChildElement('cit:date'),
    extractDateTime()
  )
}

export function readRecordUpdated(rootEl: XmlElement): Date {
  return extractDateInfo('revision')(rootEl)
}

export function readRecordCreated(rootEl: XmlElement): Date {
  return extractDateInfo('creation')(rootEl)
}

export function readRecordPublished(rootEl: XmlElement): Date {
  return extractDateInfo('publication')(rootEl)
}

const getMimeType = pipe(
  findParent('mrd:MD_Distribution'),
  findNestedElement(
    'mrd:distributionFormat',
    'mrd:MD_Format',
    'mrd:formatSpecificationCitation',
    'cit:CI_Citation',
    'cit:title'
  ),
  extractCharacterString(),
  map(matchMimeType)
)

export function readOnlineResources(rootEl: XmlElement): OnlineResource[] {
  if (readKind(rootEl) === 'dataset') {
    return pipe(
      findNestedElements('mrd:distributionInfo', 'mrd:MD_Distribution'),
      mapArray(extractDatasetOnlineResources(getMimeType)),
      flattenArray()
    )(rootEl)
  }
  return pipe(
    findNestedElements('mrd:distributionInfo', 'mrd:MD_Distribution'),
    mapArray(extractServiceOnlineResources()),
    flattenArray()
  )(rootEl)
}
