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
import { GetHouseHoldMateModelFromJSON, GetHouseHoldMateModelToJSON, } from './';
export function GetHouseholdMatesResponseFromJSON(json) {
    return GetHouseholdMatesResponseFromJSONTyped(json, false);
}
export function GetHouseholdMatesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mates': !exists(json, 'mates') ? undefined : (json['mates'].map(GetHouseHoldMateModelFromJSON)),
    };
}
export function GetHouseholdMatesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mates': value.mates === undefined ? undefined : (value.mates.map(GetHouseHoldMateModelToJSON)),
    };
}
