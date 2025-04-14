/**
 * GeoNetwork 4.0.3 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.0.3
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export interface IProcessingReportApiModel {
  running?: boolean
  uuid?: string
  startIsoDateTime?: string
  endIsoDateTime?: string
  ellapsedTimeInSeconds?: number
  totalTimeInSeconds?: number
  type?: string
}
