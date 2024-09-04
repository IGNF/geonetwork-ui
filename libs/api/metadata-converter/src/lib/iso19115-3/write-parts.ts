import {
  CatalogRecord,
  DatasetRecord,
  Individual,
} from '@geonetwork-ui/common/domain/model/record'
import {
  addAttribute,
  allChildrenElement,
  appendChildren,
  appendChildTree,
  createChild,
  createElement,
  findChildElement,
  findChildOrCreate,
  findChildrenElement,
  findNestedChildOrCreate,
  findNestedElement,
  findNestedElements,
  readAttribute,
  removeAllChildren,
  removeChildren,
  removeChildrenByName,
  setTextContent,
  XmlElement,
} from '../xml-utils'
import {
  fallback,
  filterArray,
  getAtIndex,
  map,
  mapArray,
  noop,
  pipe,
} from '../function-utils'
import {
  appendKeywords,
  appendOnlineResource,
  appendServiceOnlineResources,
  createDistributionInfo,
  findOrCreateDistribution,
  findOrCreateIdentification,
  getProgressCode,
  getRoleCode,
  removeKeywords,
  writeCharacterString,
  writeDateTime,
  writeLinkage,
} from '../iso19139/write-parts'
import { findIdentification } from '../iso19139/read-parts'
import { namePartsToFull } from '../iso19139/utils/individual-name'

export function writeUniqueIdentifier(
  record: CatalogRecord,
  rootEl: XmlElement
) {
  pipe(
    findChildOrCreate('mdb:metadataIdentifier'),
    findChildOrCreate('mcc:MD_Identifier'),
    findChildOrCreate('mcc:code'),
    writeCharacterString(record.uniqueIdentifier)
  )(rootEl)
}

export function writeKind(record: CatalogRecord, rootEl: XmlElement) {
  pipe(
    findNestedChildOrCreate(
      'mdb:metadataScope',
      'mdb:MD_MetadataScope',
      'mdb:resourceScope',
      'mcc:MD_ScopeCode'
    ),
    addAttribute(
      'codeList',
      'https://standards.iso.org/iso/19115/resources/Codelists/cat/codelists.xml#MD_ScopeCode'
    ),
    addAttribute('codeListValue', record.kind),
    setTextContent(record.kind)
  )(rootEl)
}

function removeRecordDate(type: 'revision' | 'creation' | 'publication') {
  return removeChildren(
    pipe(
      findChildrenElement('mdb:dateInfo', false),
      filterArray(
        pipe(
          findChildElement('cit:CI_DateTypeCode'),
          readAttribute('codeListValue'),
          map((value) => value === type)
        )
      )
    )
  )
}

function appendRecordDate(
  date: Date,
  type: 'revision' | 'creation' | 'publication'
) {
  return appendChildren(
    pipe(
      createElement('mdb:dateInfo'),
      createChild('cit:CI_Date'),
      appendChildren(
        pipe(createElement('cit:date'), writeDateTime(date)),
        pipe(
          createElement('cit:dateType'),
          createChild('cit:CI_DateTypeCode'),
          addAttribute(
            'codeList',
            'https://standards.iso.org/iso/19115/resources/Codelists/cat/codelists.xml#CI_DateTypeCode'
          ),
          addAttribute('codeListValue', type),
          setTextContent(type)
        )
      )
    )
  )
}

export function writeRecordUpdated(record: CatalogRecord, rootEl: XmlElement) {
  removeRecordDate('revision')(rootEl)
  appendRecordDate(record.recordUpdated, 'revision')(rootEl)
}

export function writeRecordCreated(record: CatalogRecord, rootEl: XmlElement) {
  removeRecordDate('creation')(rootEl)
  if (!('recordCreated' in record)) return
  appendRecordDate(record.recordCreated, 'creation')(rootEl)
}

export function writeRecordPublished(
  record: CatalogRecord,
  rootEl: XmlElement
) {
  removeRecordDate('publication')(rootEl)
  if (!('recordPublished' in record)) return
  appendRecordDate(record.recordPublished, 'publication')(rootEl)
}

function removeResourceDate(type: 'revision' | 'creation' | 'publication') {
  return pipe(
    findIdentification(),
    findNestedElement('mri:citation', 'cit:CI_Citation'),
    removeChildren(
      pipe(
        findChildrenElement('cit:date', false),
        filterArray(
          pipe(
            findChildElement('cit:CI_DateTypeCode'),
            readAttribute('codeListValue'),
            map((value) => value === type)
          )
        )
      )
    )
  )
}

function appendResourceDate(
  date: Date,
  type: 'revision' | 'creation' | 'publication'
) {
  return pipe(
    findIdentification(),
    findNestedElement('mri:citation', 'cit:CI_Citation'),
    appendChildren(
      pipe(
        createElement('cit:date'),
        createChild('cit:CI_Date'),
        appendChildren(
          pipe(createElement('cit:date'), writeDateTime(date)),
          pipe(
            createElement('cit:dateType'),
            createChild('cit:CI_DateTypeCode'),
            addAttribute(
              'codeList',
              'https://standards.iso.org/iso/19115/resources/Codelists/cat/codelists.xml#CI_DateTypeCode'
            ),
            addAttribute('codeListValue', type),
            setTextContent(type)
          )
        )
      )
    )
  )
}

export function writeResourceUpdated(
  record: CatalogRecord,
  rootEl: XmlElement
) {
  removeResourceDate('revision')(rootEl)
  if (!('resourceUpdated' in record)) return
  appendResourceDate(record.resourceUpdated, 'revision')(rootEl)
}

export function writeResourceCreated(
  record: CatalogRecord,
  rootEl: XmlElement
) {
  removeResourceDate('creation')(rootEl)
  if (!('resourceCreated' in record)) return
  appendResourceDate(record.resourceCreated, 'creation')(rootEl)
}

export function writeResourcePublished(
  record: CatalogRecord,
  rootEl: XmlElement
) {
  removeResourceDate('publication')(rootEl)
  if (!('resourcePublished' in record)) return
  appendResourceDate(record.resourcePublished, 'publication')(rootEl)
}

export function writeOwnerOrganization(
  record: CatalogRecord,
  rootEl: XmlElement
) {
  // if no contact matches the owner org, create an empty one
  const ownerContact: Individual = record.contacts.find(
    (contact) => contact.organization.name === record.ownerOrganization.name
  )
  pipe(
    findChildOrCreate('mdb:contact'),
    removeAllChildren(),
    appendResponsibleParty(
      ownerContact
        ? {
            ...ownerContact,
            // owner responsible party is always point of contact
            role: 'point_of_contact',
          }
        : {
            organization: record.ownerOrganization,
            email: 'missing@missing.com',
            role: 'point_of_contact',
          }
    )
  )(rootEl)
}

export function appendResponsibleParty(contact: Individual) {
  const fullName = namePartsToFull(contact.firstName, contact.lastName)

  const createIndividual = pipe(
    createElement('cit:individual'),
    createChild('cit:CI_Individual'),
    fullName
      ? appendChildren(
          pipe(createElement('cit:name'), writeCharacterString(fullName))
        )
      : noop,
    contact.position
      ? appendChildren(
          pipe(
            createElement('cit:positionName'),
            writeCharacterString(contact.position)
          )
        )
      : noop
  )

  const createContactInfo = pipe(
    createElement('cit:contactInfo'),
    createChild('cit:CI_Contact'),
    appendChildren(
      pipe(
        createElement('cit:address'),
        createChild('cit:CI_Address'),
        appendChildren(
          pipe(
            createElement('cit:electronicMailAddress'),
            writeCharacterString(contact.email)
          )
        ),
        contact.address
          ? appendChildren(
              pipe(
                createElement('cit:deliveryPoint'),
                writeCharacterString(contact.address)
              )
            )
          : noop
      )
    ),
    contact.organization?.website
      ? appendChildren(
          pipe(
            createElement('cit:onlineResource'),
            createChild('cit:CI_OnlineResource'),
            createChild('cit:linkage'),
            writeCharacterString(contact.organization.website.toString())
          )
        )
      : noop,
    contact.phone
      ? appendChildren(
          pipe(
            createElement('cit:phone'),
            createChild('cit:CI_Telephone'),
            createChild('cit:number'),
            writeCharacterString(contact.phone)
          )
        )
      : noop
  )

  const createRole = pipe(
    createElement('cit:role'),
    createChild('cit:CI_RoleCode'),
    addAttribute(
      'codeList',
      'https://standards.iso.org/iso/19115/resources/Codelists/cat/codelists.xml#CI_RoleCode'
    ),
    addAttribute('codeListValue', getRoleCode(contact.role)),
    setTextContent(getRoleCode(contact.role))
  )

  const createParty = pipe(
    createElement('cit:party'),
    createChild('cit:CI_Organisation'),
    contact.organization?.name
      ? appendChildren(
          pipe(
            createElement('cit:name'),
            writeCharacterString(contact.organization?.name)
          )
        )
      : noop,
    appendChildren(createContactInfo, createIndividual)
  )

  return appendChildren(
    pipe(
      createElement('cit:CI_Responsibility'),
      appendChildren(createRole, createParty)
    )
  )
}

export function writeContacts(record: CatalogRecord, rootEl: XmlElement) {
  pipe(
    removeChildrenByName('mdb:contact'),
    appendChildren(
      ...record.contacts.map((contact) =>
        pipe(createElement('gmd:contact'), appendResponsibleParty(contact))
      )
    )
  )(rootEl)
}

export function writeContactsForResource(
  record: CatalogRecord,
  rootEl: XmlElement
) {
  const withoutDistributors = record.contactsForResource.filter(
    (c) => c.role !== 'distributor'
  )
  const distributors = record.contactsForResource.filter(
    (c) => c.role === 'distributor'
  )
  pipe(
    findOrCreateIdentification(),
    removeChildrenByName('mri:pointOfContact'),
    appendChildren(
      ...withoutDistributors.map((contact) =>
        pipe(
          createElement('mri:pointOfContact'),
          appendResponsibleParty(contact)
        )
      )
    )
  )(rootEl)
  if (!distributors.length) return
  pipe(
    findOrCreateDistribution(),
    removeChildrenByName('mrd:distributor'),
    createChild('mrd:distributor'),
    createChild('mrd:MD_Distributor'),
    appendChildren(
      ...distributors.map((contact) =>
        pipe(
          createElement('mrd:distributorContact'),
          appendResponsibleParty(contact)
        )
      )
    )
  )(rootEl)
}

export function writeKeywords(record: CatalogRecord, rootEl: XmlElement) {
  pipe(
    findOrCreateIdentification(),
    removeKeywords(),
    appendKeywords(record.keywords)
  )(rootEl)
}

export function writeLandingPage(record: DatasetRecord, rootEl: XmlElement) {
  pipe(
    findNestedChildOrCreate(
      'mdb:metadataLinkage',
      'cit:CI_OnlineResource',
      'cit:linkage'
    ),
    writeLinkage(record.landingPage)
  )(rootEl)
}

export function writeLineage(record: DatasetRecord, rootEl: XmlElement) {
  pipe(
    findNestedChildOrCreate(
      'mdb:resourceLineage',
      'mrl:LI_Lineage',
      'mrl:statement'
    ),
    writeCharacterString(record.lineage)
  )(rootEl)
}

export function writeStatus(record: DatasetRecord, rootEl: XmlElement) {
  const progressCode = getProgressCode(record.status)
  pipe(
    findOrCreateIdentification(),
    findNestedChildOrCreate('mri:status', 'mcc:MD_ProgressCode'),
    addAttribute(
      'codeList',
      'https://standards.iso.org/iso/19115/resources/Codelists/cat/codelists.xml#MD_ProgressCode'
    ),
    addAttribute('codeListValue', progressCode),
    setTextContent(progressCode)
  )(rootEl)
}

export function writeSpatialRepresentation(
  record: DatasetRecord,
  rootEl: XmlElement
) {
  pipe(
    findOrCreateIdentification(),
    findNestedChildOrCreate(
      'mri:spatialRepresentationType',
      'mcc:MD_SpatialRepresentationTypeCode'
    ),
    addAttribute(
      'codeList',
      'https://standards.iso.org/iso/19115/resources/Codelists/cat/codelists.xml#MD_SpatialRepresentationTypeCode'
    ),
    addAttribute('codeListValue', record.spatialRepresentation),
    setTextContent(record.spatialRepresentation)
  )(rootEl)
}

// this will remove all transfer options and formats from distribution info
// and remove empty distribution info
function removeTransferOptions(rootEl: XmlElement) {
  // remove transfer options & formats
  pipe(
    findNestedElements('mdb:distributionInfo', 'mrd:MD_Distribution'),
    mapArray(
      pipe(
        removeChildren(findChildrenElement('mrd:distributionFormat', false)),
        removeChildren(findChildrenElement('mrd:transferOptions', false))
      )
    )
  )(rootEl)
  // remove empty distributions
  removeChildren(
    pipe(
      findChildrenElement('mdb:distributionInfo', false),
      filterArray(
        pipe(
          findChildElement('mrd:MD_Distribution'),
          allChildrenElement,
          map((children) => children.length === 0)
        )
      )
    )
  )(rootEl)
}

function appendOnlineResourceFormat(mimeType: string) {
  return appendChildren(
    pipe(
      createElement('mrd:distributionFormat'),
      createChild('mrd:MD_Format'),
      createChild('mrd:formatSpecificationCitation'),
      createChild('cit:CI_Citation'),
      createChild('cit:title'),
      writeCharacterString(mimeType)
    )
  )
}

export function writeOnlineResources(
  record: CatalogRecord,
  rootEl: XmlElement
) {
  removeTransferOptions(rootEl)

  if (record.kind === 'service') {
    appendServiceOnlineResources(record, rootEl)
  }

  // for each online resource, either find an existing distribution info or create a new one
  record.onlineResources.forEach((onlineResource, index) => {
    pipe(
      fallback(
        pipe(
          findNestedElements('gmd:distributionInfo', 'gmd:MD_Distribution'),
          getAtIndex(index)
        ),
        appendChildTree(createDistributionInfo())
      ),
      appendOnlineResource(onlineResource, appendOnlineResourceFormat)
    )(rootEl)
  })
}
