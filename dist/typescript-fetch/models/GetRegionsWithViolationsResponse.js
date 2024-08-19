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
import { AvailableRegionFromJSON, AvailableRegionToJSON, } from './';
export function GetRegionsWithViolationsResponseFromJSON(json) {
    return GetRegionsWithViolationsResponseFromJSONTyped(json, false);
}
export function GetRegionsWithViolationsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'regions': !exists(json, 'regions') ? undefined : (json['regions'].map(AvailableRegionFromJSON)),
    };
}
export function GetRegionsWithViolationsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'regions': value.regions === undefined ? undefined : (value.regions.map(AvailableRegionToJSON)),
    };
}
