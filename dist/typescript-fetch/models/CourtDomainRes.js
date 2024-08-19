/* tslint:disable */
/* eslint-disable */
/**
 * OffTheRecord Rest Service API - Devo
 * A service to handle your traffic tickets
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { exists } from '../runtime';
import { AddressDomainResFromJSON, AddressDomainResToJSON, CountyDomainFromJSON, CountyDomainToJSON, TimeZoneResFromJSON, TimeZoneResToJSON, } from './';
export function CourtDomainResFromJSON(json) {
    return CourtDomainResFromJSONTyped(json, false);
}
export function CourtDomainResFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': !exists(json, 'address') ? undefined : AddressDomainResFromJSON(json['address']),
        'county': !exists(json, 'county') ? undefined : json['county'],
        'countyId': !exists(json, 'countyId') ? undefined : json['countyId'],
        'countyObj': !exists(json, 'countyObj') ? undefined : CountyDomainFromJSON(json['countyObj']),
        'courtCode': !exists(json, 'courtCode') ? undefined : json['courtCode'],
        'courtId': !exists(json, 'courtId') ? undefined : json['courtId'],
        'courtName': !exists(json, 'courtName') ? undefined : json['courtName'],
        'courtNameAdditional': !exists(json, 'courtNameAdditional') ? undefined : json['courtNameAdditional'],
        'courtType': !exists(json, 'courtType') ? undefined : json['courtType'],
        'lookupCaseInfoLink': !exists(json, 'lookupCaseInfoLink') ? undefined : json['lookupCaseInfoLink'],
        'otrTargetFee': !exists(json, 'otrTargetFee') ? undefined : json['otrTargetFee'],
        'timeZone': !exists(json, 'timeZone') ? undefined : TimeZoneResFromJSON(json['timeZone']),
        'unserviceableRequests': !exists(json, 'unserviceableRequests') ? undefined : json['unserviceableRequests'],
        'website': !exists(json, 'website') ? undefined : json['website'],
    };
}
export function CourtDomainResToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': AddressDomainResToJSON(value.address),
        'county': value.county,
        'countyId': value.countyId,
        'countyObj': CountyDomainToJSON(value.countyObj),
        'courtCode': value.courtCode,
        'courtId': value.courtId,
        'courtName': value.courtName,
        'courtNameAdditional': value.courtNameAdditional,
        'courtType': value.courtType,
        'lookupCaseInfoLink': value.lookupCaseInfoLink,
        'otrTargetFee': value.otrTargetFee,
        'timeZone': TimeZoneResToJSON(value.timeZone),
        'unserviceableRequests': value.unserviceableRequests,
        'website': value.website,
    };
}
/**
* @export
* @enum {string}
*/
export var CourtDomainResCourtTypeEnum;
(function (CourtDomainResCourtTypeEnum) {
    CourtDomainResCourtTypeEnum["CIRCUIT"] = "CIRCUIT";
    CourtDomainResCourtTypeEnum["COUNTYCLERK"] = "COUNTY_CLERK";
    CourtDomainResCourtTypeEnum["DISTRICT"] = "DISTRICT";
    CourtDomainResCourtTypeEnum["JUVENILE"] = "JUVENILE";
    CourtDomainResCourtTypeEnum["MUNICIPAL"] = "MUNICIPAL";
    CourtDomainResCourtTypeEnum["PROBATION"] = "PROBATION";
    CourtDomainResCourtTypeEnum["SUPERIOR"] = "SUPERIOR";
    CourtDomainResCourtTypeEnum["VIOLATIONSBUREAU"] = "VIOLATIONS_BUREAU";
})(CourtDomainResCourtTypeEnum || (CourtDomainResCourtTypeEnum = {}));
