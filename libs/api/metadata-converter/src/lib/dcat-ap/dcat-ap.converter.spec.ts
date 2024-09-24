/* eslint-disable @typescript-eslint/ban-ts-comment */
import { DcatApConverter } from './dcat-ap.converter'
import { EU_SURVEY_DATASET_RECORD } from '../fixtures/eu.dcat-ap.records'
// @ts-ignore
import EU_SURVEY_DATASET from '../fixtures/eu.dcat-ap.survey.xml'
// @ts-ignore
import SEXTANT_BATHYMETRY_DATASET from '../fixtures/sextant.dcat.bathymetry.xml'
// @ts-ignore
import OPENDATASWISS_DATASET from '../fixtures/opendataswiss.dcat-ap.dataset.xml'
// @ts-ignore
import VLAANDEREN_DATASET from '../fixtures/vlaanderen.dcat-ap.dataset.xml'
// @ts-ignore
import GENERIC_DATASET_PLUS_EU_SURVEY_DATASET from '../fixtures/generic-dataset+eu.dcat-ap.survey.xml'
import { GENERIC_DATASET_RECORD } from '../fixtures/generic.records'
import { graph, parse } from 'rdflib'
import { SEXTANT_BATHYMETRY_DATASET_RECORD } from '../fixtures/sextant.records'
import { OPENDATASWISS_DATASET_RECORD } from '../fixtures/opendataswiss.records'
import { VLAANDEREN_DATASET_RECORD } from '../fixtures/vlaanderen.dcat-ap.records'

// this makes the xml go through the same formatting as the converter
async function formatRdf(rdfString: string) {
  const dataStore = graph()
  await new Promise((resolve) =>
    parse(
      rdfString,
      dataStore,
      'http://data.europa.eu/',
      'application/rdf+xml',
      resolve
    )
  )
  return dataStore.serialize('', 'application/rdf+xml', null)
}

describe('DCAT-AP converter', () => {
  let converter: DcatApConverter

  beforeEach(() => {
    converter = new DcatApConverter()
  })

  describe('from RDF to model', () => {
    it('produces the corresponding record (EU survey)', async () => {
      const record = await converter.readRecord(EU_SURVEY_DATASET)
      expect(record).toStrictEqual(EU_SURVEY_DATASET_RECORD)
    })
    it('produces the corresponding record (Sextant)', async () => {
      const record = await converter.readRecord(SEXTANT_BATHYMETRY_DATASET)
      expect(record).toStrictEqual(SEXTANT_BATHYMETRY_DATASET_RECORD)
    })
    it('produces the corresponding record (OpenDataSwiss)', async () => {
      const record = await converter.readRecord(OPENDATASWISS_DATASET)
      expect(record).toStrictEqual(OPENDATASWISS_DATASET_RECORD)
    })
    it('produces the corresponding record (Vlaanderen)', async () => {
      const record = await converter.readRecord(VLAANDEREN_DATASET)
      expect(record).toStrictEqual(VLAANDEREN_DATASET_RECORD)
    })
  })

  describe('from model to RDF', () => {
    // TODO: WRITE GENERIC DATASET FIXTURE
    // it('produces a valid XML document based on a generic record', async () => {
    //   // parse and output xml to guarantee identical formatting
    //   const ref = xmlToString(parseXmlString(GENERIC_DATASET))
    //   const xml = await converter.writeRecord(GENERIC_DATASET_RECORD)
    //   expect(xml).toStrictEqual(ref)
    // })
    it('produces a valid XML document by combining a generic record and a third-party XML', async () => {
      // parse and output xml to guarantee identical formatting
      const ref = await formatRdf(GENERIC_DATASET_PLUS_EU_SURVEY_DATASET)
      const output = await converter.writeRecord(
        GENERIC_DATASET_RECORD,
        EU_SURVEY_DATASET
      )
      expect(output).toStrictEqual(ref)
    })
  })

  describe('idempotency', () => {
    describe('with a third-party XML record', () => {
      describe('when converting to a native record and back to XML', () => {
        it('keeps the record unchanged (dataset)', async () => {
          const backAndForth = await converter.writeRecord(
            await converter.readRecord(EU_SURVEY_DATASET),
            EU_SURVEY_DATASET
          )
          expect(backAndForth).toStrictEqual(await formatRdf(EU_SURVEY_DATASET))
        })
      })
    })
    describe('with a native record', () => {
      // FIXME: restore this test once we can write RDF XML as well!
      describe.skip('when converting to XML and back', () => {
        it('keeps the record unchanged', async () => {
          const backAndForth = await converter.readRecord(
            await converter.writeRecord(GENERIC_DATASET_RECORD)
          )
          expect(backAndForth).toStrictEqual(GENERIC_DATASET_RECORD)
        })
      })
    })
  })
})
