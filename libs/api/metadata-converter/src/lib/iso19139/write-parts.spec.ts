import { DatasetRecord } from '@geonetwork-ui/common/domain/model/record'
import { XmlElement } from '@rgrove/parse-xml'
import { GENERIC_DATASET_RECORD } from '../fixtures/generic.records'
import {
  createElement,
  getRootElement,
  parseXmlString,
  xmlToString,
} from '../xml-utils'
import {
  getISODuration,
  writeDistributions,
  writeKeywords,
  writeTemporalExtents,
} from './write-parts'

describe('write parts', () => {
  let rootEl: XmlElement
  let datasetRecord: DatasetRecord

  function rootAsString() {
    return xmlToString(rootEl).trim()
  }

  beforeEach(() => {
    rootEl = createElement('root')()
    datasetRecord = { ...GENERIC_DATASET_RECORD }
  })

  describe('writeDistributions', () => {
    const distributionShp = GENERIC_DATASET_RECORD.distributions[0]
    const distributionLink = GENERIC_DATASET_RECORD.distributions[2]

    it('writes several distributions', () => {
      writeDistributions(
        {
          ...datasetRecord,
          distributions: [distributionShp, distributionLink],
        },
        rootEl
      )
      expect(rootAsString()).toEqual(`<root>
    <gmd:distributionInfo>
        <gmd:MD_Distribution>
            <gmd:distributionFormat>
                <gmd:MD_Format>
                    <gmd:name>
                        <gco:CharacterString>x-gis/x-shapefile</gco:CharacterString>
                    </gmd:name>
                    <gmd:version>
                        <gco:CharacterString>1.0</gco:CharacterString>
                    </gmd:version>
                </gmd:MD_Format>
            </gmd:distributionFormat>
            <gmd:transferOptions>
                <gmd:MD_DigitalTransferOptions>
                    <gmd:onLine>
                        <gmd:CI_OnlineResource>
                            <gmd:linkage>
                                <gmd:URL>http://my-org.net/download/1.zip</gmd:URL>
                            </gmd:linkage>
                            <gmd:description>
                                <gco:CharacterString>Dataset downloaded as a shapefile</gco:CharacterString>
                            </gmd:description>
                            <gmd:name>
                                <gco:CharacterString>Direct download</gco:CharacterString>
                            </gmd:name>
                            <gmd:protocol>
                                <gco:CharacterString>WWW:DOWNLOAD</gco:CharacterString>
                            </gmd:protocol>
                            <gmd:function>
                                <gmd:CI_OnLineFunctionCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#CI_OnLineFunctionCode" codeListValue="download"/>
                            </gmd:function>
                        </gmd:CI_OnlineResource>
                    </gmd:onLine>
                </gmd:MD_DigitalTransferOptions>
            </gmd:transferOptions>
        </gmd:MD_Distribution>
    </gmd:distributionInfo>
    <gmd:distributionInfo>
        <gmd:MD_Distribution>
            <gmd:transferOptions>
                <gmd:MD_DigitalTransferOptions>
                    <gmd:onLine>
                        <gmd:CI_OnlineResource>
                            <gmd:linkage>
                                <gmd:URL>https://my-org.net/docs/1234.pdf</gmd:URL>
                            </gmd:linkage>
                            <gmd:description>
                                <gco:CharacterString>A link to the online documentation in PDF; please forgive the typos.</gco:CharacterString>
                            </gmd:description>
                            <gmd:name>
                                <gco:CharacterString>Documentation</gco:CharacterString>
                            </gmd:name>
                            <gmd:protocol>
                                <gco:CharacterString>WWW:LINK</gco:CharacterString>
                            </gmd:protocol>
                            <gmd:function>
                                <gmd:CI_OnLineFunctionCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#CI_OnLineFunctionCode" codeListValue="information"/>
                            </gmd:function>
                        </gmd:CI_OnlineResource>
                    </gmd:onLine>
                </gmd:MD_DigitalTransferOptions>
            </gmd:transferOptions>
        </gmd:MD_Distribution>
    </gmd:distributionInfo>
</root>`)
    })

    it('removes existing ones', () => {
      // add some distributions first
      const sample = parseXmlString(`
<root>
    <gmd:distributionInfo xmlns:comp="http://www.geocat.ch/2003/05/gateway/GM03Comprehensive" xmlns:xalan="http://xml.apache.org/xalan" xmlns:geonet="http://www.fao.org/geonetwork" xmlns:che="http://www.geocat.ch/2008/che" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:srv="http://www.isotc211.org/2005/srv" xmlns:gmx="http://www.isotc211.org/2005/gmx" xmlns:gts="http://www.isotc211.org/2005/gts" xmlns:gsr="http://www.isotc211.org/2005/gsr" xmlns:gmi="http://www.isotc211.org/2005/gmi" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:xlink="http://www.w3.org/1999/xlink">
        <gmd:MD_Distribution>
            <gmd:distributionFormat xlink:show="embed" uuidref="5533f00e-57f9-4f4d-b2a2-560fee4b32ad" xlink:href="local://srv/api/registries/entries/5533f00e-57f9-4f4d-b2a2-560fee4b32ad?lang=ger,fre,ita,eng,roh&amp;">
                <gmd:MD_Format>
                    <gmd:name>
                        <gco:CharacterString>ESRI Shapefile</gco:CharacterString>
                    </gmd:name>
                    <gmd:version>
                        <gco:CharacterString>-</gco:CharacterString>
                    </gmd:version>
                </gmd:MD_Format>
            </gmd:distributionFormat>
            <gmd:transferOptions>
                <gmd:MD_DigitalTransferOptions>
                    <gmd:onLine>
                        <gmd:CI_OnlineResource>
                            <gmd:linkage>
                                <gmd:URL>https://map.geo.admin.ch/?layers=ch.are.alpenkonvention</gmd:URL>
                            </gmd:linkage>
                            <gmd:protocol>
                                <gco:CharacterString>MAP:Preview</gco:CharacterString>
                            </gmd:protocol>
                            <gmd:name xsi:type="gmd:PT_FreeText_PropertyType">
                                <gco:CharacterString>Vorschau map.geo.admin.ch</gco:CharacterString>
                                <gmd:PT_FreeText>
                                    <gmd:textGroup>
                                        <gmd:LocalisedCharacterString locale="#DE">Vorschau map.geo.admin.ch</gmd:LocalisedCharacterString>
                                    </gmd:textGroup>
                                    <gmd:textGroup>
                                        <gmd:LocalisedCharacterString locale="#FR">Aperçu map.geo.admin.ch</gmd:LocalisedCharacterString>
                                    </gmd:textGroup>
                                    <gmd:textGroup>
                                        <gmd:LocalisedCharacterString locale="#IT">Previsione map.geo.admin.ch</gmd:LocalisedCharacterString>
                                    </gmd:textGroup>
                                    <gmd:textGroup>
                                        <gmd:LocalisedCharacterString locale="#EN">Preview map.geo.admin.ch</gmd:LocalisedCharacterString>
                                    </gmd:textGroup>
                                </gmd:PT_FreeText>
                            </gmd:name>
                            <gmd:description xsi:type="gmd:PT_FreeText_PropertyType">
                                <gco:CharacterString>Vorschau map.geo.admin.ch</gco:CharacterString>
                                <gmd:PT_FreeText>
                                    <gmd:textGroup>
                                        <gmd:LocalisedCharacterString locale="#DE">Vorschau map.geo.admin.ch</gmd:LocalisedCharacterString>
                                    </gmd:textGroup>
                                    <gmd:textGroup>
                                        <gmd:LocalisedCharacterString locale="#FR">Aperçu map.geo.admin.ch</gmd:LocalisedCharacterString>
                                    </gmd:textGroup>
                                    <gmd:textGroup>
                                        <gmd:LocalisedCharacterString locale="#IT">Previsione map.geo.admin.ch</gmd:LocalisedCharacterString>
                                    </gmd:textGroup>
                                    <gmd:textGroup>
                                        <gmd:LocalisedCharacterString locale="#EN">Preview map.geo.admin.ch</gmd:LocalisedCharacterString>
                                    </gmd:textGroup>
                                </gmd:PT_FreeText>
                            </gmd:description>
                        </gmd:CI_OnlineResource>
                    </gmd:onLine>
                </gmd:MD_DigitalTransferOptions>
            </gmd:transferOptions>
        </gmd:MD_Distribution>
    </gmd:distributionInfo>
    <gmd:distributionInfo>
        <gmd:MD_Distribution>
            <gmd:transferOptions>
                <gmd:MD_DigitalTransferOptions>
                    <gmd:onLine>
                        <gmd:CI_OnlineResource>
                            <gmd:linkage>
                                <gmd:URL>https://my-org.net/wfs</gmd:URL>
                            </gmd:linkage>
                            <gmd:description>
                                <gco:CharacterString>This WFS service offers direct download capability</gco:CharacterString>
                            </gmd:description>
                            <gmd:name>
                                <gco:CharacterString>my:featuretype</gco:CharacterString>
                            </gmd:name>
                            <gmd:protocol>
                                <gco:CharacterString>OGC:WFS</gco:CharacterString>
                            </gmd:protocol>
                            <gmd:function>
                                <gmd:CI_OnLineFunctionCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#CI_OnLineFunctionCode" codeListValue="download"/>
                            </gmd:function>
                        </gmd:CI_OnlineResource>
                    </gmd:onLine>
                </gmd:MD_DigitalTransferOptions>
            </gmd:transferOptions>
        </gmd:MD_Distribution>
    </gmd:distributionInfo>
</root>`)
      rootEl = getRootElement(sample)
      writeDistributions(
        {
          ...datasetRecord,
          distributions: [distributionLink],
        },
        rootEl
      )
      expect(rootAsString()).toEqual(`<root>
    <gmd:distributionInfo>
        <gmd:MD_Distribution>
            <gmd:transferOptions>
                <gmd:MD_DigitalTransferOptions>
                    <gmd:onLine>
                        <gmd:CI_OnlineResource>
                            <gmd:linkage>
                                <gmd:URL>https://my-org.net/docs/1234.pdf</gmd:URL>
                            </gmd:linkage>
                            <gmd:description>
                                <gco:CharacterString>A link to the online documentation in PDF; please forgive the typos.</gco:CharacterString>
                            </gmd:description>
                            <gmd:name>
                                <gco:CharacterString>Documentation</gco:CharacterString>
                            </gmd:name>
                            <gmd:protocol>
                                <gco:CharacterString>WWW:LINK</gco:CharacterString>
                            </gmd:protocol>
                            <gmd:function>
                                <gmd:CI_OnLineFunctionCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#CI_OnLineFunctionCode" codeListValue="information"/>
                            </gmd:function>
                        </gmd:CI_OnlineResource>
                    </gmd:onLine>
                </gmd:MD_DigitalTransferOptions>
            </gmd:transferOptions>
        </gmd:MD_Distribution>
    </gmd:distributionInfo>
</root>`)
    })
  })

  describe('writeTemporalExtents', () => {
    it('removes and writes several temporal extents', () => {
      // add some temporal extents first
      const sample = parseXmlString(`
<root>
    <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
            <gmd:extent>
                <gmd:EX_Extent>
                    <gmd:temporalElement>
                        <gmd:EX_TemporalExtent>
                            <gmd:extent>
                                <gml:TimePeriod>
                                    <gml:beginPosition>2021-01-01</gml:beginPosition>
                                    <gml:endPosition>2021-01-31</gml:endPosition>
                                </gml:TimePeriod>
                            </gmd:extent>
                        </gmd:EX_TemporalExtent>
                    </gmd:temporalElement>
                </gmd:EX_Extent>
            </gmd:extent>
        </gmd:MD_DataIdentification>
    </gmd:identificationInfo>
</root>`)
      rootEl = getRootElement(sample)
      writeTemporalExtents(
        {
          ...datasetRecord,
          temporalExtents: [
            {
              start: new Date('2024-05-24'),
              end: null,
            },
            {
              start: new Date('2024-05-30'),
            },
          ],
        },
        rootEl
      )
      expect(rootAsString()).toEqual(`<root>
    <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
            <gmd:extent>
                <gmd:EX_Extent>
                    <gmd:temporalElement>
                        <gmd:EX_TemporalExtent>
                            <gmd:extent>
                                <gml:TimePeriod>
                                    <gml:beginPosition>2024-05-24</gml:beginPosition>
                                    <gml:endPosition indeterminatePosition="unknown"/>
                                </gml:TimePeriod>
                            </gmd:extent>
                        </gmd:EX_TemporalExtent>
                    </gmd:temporalElement>
                    <gmd:temporalElement>
                        <gmd:EX_TemporalExtent>
                            <gmd:extent>
                                <gml:TimeInstant>
                                    <gml:timePosition>2024-05-30</gml:timePosition>
                                </gml:TimeInstant>
                            </gmd:extent>
                        </gmd:EX_TemporalExtent>
                    </gmd:temporalElement>
                </gmd:EX_Extent>
            </gmd:extent>
        </gmd:MD_DataIdentification>
    </gmd:identificationInfo>
</root>`)
    })
  })

  describe('writeKeywords', () => {
    it('writes keywords grouped by thesaurus', () => {
      writeKeywords(datasetRecord, rootEl)
      expect(rootAsString()).toEqual(`<root>
    <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
            <gmd:descriptiveKeywords>
                <gmd:MD_Keywords>
                    <gmd:type>
                        <gmd:MD_KeywordTypeCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#MD_KeywordTypeCode" codeListValue="other"/>
                    </gmd:type>
                    <gmd:thesaurusName>
                        <gmd:CI_Citation>
                            <gmd:title>
                                <gco:CharacterString>geonetwork.thesaurus.local</gco:CharacterString>
                            </gmd:title>
                            <gmd:identifier>
                                <gmd:MD_Identifier>
                                    <gmd:code>
                                        <gco:CharacterString>geonetwork.thesaurus.local</gco:CharacterString>
                                    </gmd:code>
                                </gmd:MD_Identifier>
                            </gmd:identifier>
                        </gmd:CI_Citation>
                    </gmd:thesaurusName>
                    <gmd:keyword>
                        <gco:CharacterString>international</gco:CharacterString>
                    </gmd:keyword>
                    <gmd:keyword>
                        <gco:CharacterString>test</gco:CharacterString>
                    </gmd:keyword>
                    <gmd:keyword>
                        <gco:CharacterString>_another_keyword_</gco:CharacterString>
                    </gmd:keyword>
                </gmd:MD_Keywords>
            </gmd:descriptiveKeywords>
            <gmd:descriptiveKeywords>
                <gmd:MD_Keywords>
                    <gmd:type>
                        <gmd:MD_KeywordTypeCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#MD_KeywordTypeCode" codeListValue="theme"/>
                    </gmd:type>
                    <gmd:thesaurusName>
                        <gmd:CI_Citation>
                            <gmd:title>
                                <gco:CharacterString>geonetwork.thesaurus.theme</gco:CharacterString>
                            </gmd:title>
                            <gmd:identifier>
                                <gmd:MD_Identifier>
                                    <gmd:code>
                                        <gco:CharacterString>geonetwork.thesaurus.theme</gco:CharacterString>
                                    </gmd:code>
                                </gmd:MD_Identifier>
                            </gmd:identifier>
                        </gmd:CI_Citation>
                    </gmd:thesaurusName>
                    <gmd:keyword>
                        <gco:CharacterString>test theme</gco:CharacterString>
                    </gmd:keyword>
                </gmd:MD_Keywords>
            </gmd:descriptiveKeywords>
            <gmd:descriptiveKeywords>
                <gmd:MD_Keywords>
                    <gmd:type>
                        <gmd:MD_KeywordTypeCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#MD_KeywordTypeCode" codeListValue="place"/>
                    </gmd:type>
                    <gmd:thesaurusName>
                        <gmd:CI_Citation>
                            <gmd:title>
                                <gco:CharacterString>geonetwork.thesaurus.place</gco:CharacterString>
                            </gmd:title>
                            <gmd:identifier>
                                <gmd:MD_Identifier>
                                    <gmd:code>
                                        <gco:CharacterString>geonetwork.thesaurus.place</gco:CharacterString>
                                    </gmd:code>
                                </gmd:MD_Identifier>
                            </gmd:identifier>
                        </gmd:CI_Citation>
                    </gmd:thesaurusName>
                    <gmd:keyword>
                        <gco:CharacterString>test place</gco:CharacterString>
                    </gmd:keyword>
                </gmd:MD_Keywords>
            </gmd:descriptiveKeywords>
            <gmd:descriptiveKeywords>
                <gmd:MD_Keywords>
                    <gmd:type>
                        <gmd:MD_KeywordTypeCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#MD_KeywordTypeCode" codeListValue="theme"/>
                    </gmd:type>
                    <gmd:keyword>
                        <gco:CharacterString>themeNoThesaurus</gco:CharacterString>
                    </gmd:keyword>
                    <gmd:keyword>
                        <gco:CharacterString>themeNoThesaurus 2</gco:CharacterString>
                    </gmd:keyword>
                </gmd:MD_Keywords>
            </gmd:descriptiveKeywords>
            <gmd:descriptiveKeywords>
                <gmd:MD_Keywords>
                    <gmd:type>
                        <gmd:MD_KeywordTypeCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#MD_KeywordTypeCode" codeListValue="temporal"/>
                    </gmd:type>
                    <gmd:keyword>
                        <gco:CharacterString>temporalNoThesaurus</gco:CharacterString>
                    </gmd:keyword>
                </gmd:MD_Keywords>
            </gmd:descriptiveKeywords>
        </gmd:MD_DataIdentification>
    </gmd:identificationInfo>
</root>`)
    })

    it('removes existing ones', () => {
      // add some distributions first
      const sample = parseXmlString(`
<root>
    <gmd:identificationInfo >
        <gmd:MD_DataIdentification>
            <gmd:descriptiveKeywords>
                <gmd:MD_Keywords>
                    <gmd:keyword>
                        <gco:CharacterString>Usage des sols</gco:CharacterString>
                    </gmd:keyword>
                    <gmd:type>
                        <gmd:MD_KeywordTypeCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#MD_KeywordTypeCode"
                                                codeListValue="theme"/>
                    </gmd:type>
                </gmd:MD_Keywords>
            </gmd:descriptiveKeywords>
            <gmd:descriptiveKeywords>
                <gmd:MD_Keywords>
                    <gmd:keyword>
                        <gco:CharacterString>Bla</gco:CharacterString>
                    </gmd:keyword>
                </gmd:MD_Keywords>
            </gmd:descriptiveKeywords>
        </gmd:MD_DataIdentification>
    </gmd:identificationInfo>
</root>`)
      rootEl = getRootElement(sample)
      writeKeywords(
        {
          ...datasetRecord,
          keywords: [
            {
              label: 'abcd',
              type: 'place',
              thesaurus: {
                id: 'abcd',
                url: new URL('http://abcd.com'),
                name: 'A thesaurus',
              },
            },
          ],
        },
        rootEl
      )
      expect(rootAsString()).toEqual(`<root>
    <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
            <gmd:descriptiveKeywords>
                <gmd:MD_Keywords>
                    <gmd:type>
                        <gmd:MD_KeywordTypeCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#MD_KeywordTypeCode" codeListValue="place"/>
                    </gmd:type>
                    <gmd:thesaurusName>
                        <gmd:CI_Citation>
                            <gmd:title>
                                <gco:CharacterString>A thesaurus</gco:CharacterString>
                            </gmd:title>
                            <gmd:identifier>
                                <gmd:MD_Identifier>
                                    <gmd:code>
                                        <gmx:Anchor xlink:href="http://abcd.com/">abcd</gmx:Anchor>
                                    </gmd:code>
                                </gmd:MD_Identifier>
                            </gmd:identifier>
                        </gmd:CI_Citation>
                    </gmd:thesaurusName>
                    <gmd:keyword>
                        <gco:CharacterString>abcd</gco:CharacterString>
                    </gmd:keyword>
                </gmd:MD_Keywords>
            </gmd:descriptiveKeywords>
        </gmd:MD_DataIdentification>
    </gmd:identificationInfo>
</root>`)
    })

    it('correctly adds a thesaurus to an existing keyword', () => {
      // add some distributions first
      const sample = parseXmlString(`
<root>
    <gmd:identificationInfo >
        <gmd:MD_DataIdentification>
            <gmd:descriptiveKeywords>
                <gmd:MD_Keywords>
                    <gmd:keyword>
                        <gco:CharacterString>Usage des sols</gco:CharacterString>
                    </gmd:keyword>
                    <gmd:keyword>
                        <gco:CharacterString>Agriculture</gco:CharacterString>
                    </gmd:keyword>
                    <gmd:type>
                        <gmd:MD_KeywordTypeCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#MD_KeywordTypeCode"
                                                codeListValue="theme"/>
                    </gmd:type>
                </gmd:MD_Keywords>
            </gmd:descriptiveKeywords>
        </gmd:MD_DataIdentification>
    </gmd:identificationInfo>
</root>`)
      rootEl = getRootElement(sample)
      writeKeywords(
        {
          ...datasetRecord,
          keywords: [
            {
              label: 'Usage des sols',
              type: 'theme',
            },
            {
              label: 'Agriculture',
              type: 'theme',
              thesaurus: {
                id: 'abcd',
                url: new URL('http://abcd.com'),
                name: 'A thesaurus',
              },
            },
          ],
        },
        rootEl
      )
      expect(rootAsString()).toEqual(`<root>
    <gmd:identificationInfo>
        <gmd:MD_DataIdentification>
            <gmd:descriptiveKeywords>
                <gmd:MD_Keywords>
                    <gmd:type>
                        <gmd:MD_KeywordTypeCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#MD_KeywordTypeCode" codeListValue="theme"/>
                    </gmd:type>
                    <gmd:keyword>
                        <gco:CharacterString>Usage des sols</gco:CharacterString>
                    </gmd:keyword>
                </gmd:MD_Keywords>
            </gmd:descriptiveKeywords>
            <gmd:descriptiveKeywords>
                <gmd:MD_Keywords>
                    <gmd:type>
                        <gmd:MD_KeywordTypeCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#MD_KeywordTypeCode" codeListValue="theme"/>
                    </gmd:type>
                    <gmd:thesaurusName>
                        <gmd:CI_Citation>
                            <gmd:title>
                                <gco:CharacterString>A thesaurus</gco:CharacterString>
                            </gmd:title>
                            <gmd:identifier>
                                <gmd:MD_Identifier>
                                    <gmd:code>
                                        <gmx:Anchor xlink:href="http://abcd.com/">abcd</gmx:Anchor>
                                    </gmd:code>
                                </gmd:MD_Identifier>
                            </gmd:identifier>
                        </gmd:CI_Citation>
                    </gmd:thesaurusName>
                    <gmd:keyword>
                        <gco:CharacterString>Agriculture</gco:CharacterString>
                    </gmd:keyword>
                </gmd:MD_Keywords>
            </gmd:descriptiveKeywords>
        </gmd:MD_DataIdentification>
    </gmd:identificationInfo>
</root>`)
    })
  })

  describe('getISODuration', () => {
    it('keeps a partial weekly period', () => {
      expect(
        getISODuration({
          updatedTimes: 3,
          per: 'week',
        })
      ).toEqual('P0Y0M2D')
      expect(
        getISODuration({
          updatedTimes: 2,
          per: 'week',
        })
      ).toEqual('P0Y0M3D')
    })
  })
})
