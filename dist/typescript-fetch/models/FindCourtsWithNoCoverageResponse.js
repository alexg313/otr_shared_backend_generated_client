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
import { CourtDomainResFromJSON, CourtDomainResToJSON, } from './';
export function FindCourtsWithNoCoverageResponseFromJSON(json) {
    return FindCourtsWithNoCoverageResponseFromJSONTyped(json, false);
}
export function FindCourtsWithNoCoverageResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'courtsWithNoCoverage': !exists(json, 'courtsWithNoCoverage') ? undefined : (json['courtsWithNoCoverage'].map(CourtDomainResFromJSON)),
        'numRecords': !exists(json, 'numRecords') ? undefined : json['numRecords'],
    };
}
export function FindCourtsWithNoCoverageResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'courtsWithNoCoverage': value.courtsWithNoCoverage === undefined ? undefined : (value.courtsWithNoCoverage.map(CourtDomainResToJSON)),
        'numRecords': value.numRecords,
    };
}
