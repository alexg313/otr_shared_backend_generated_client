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
import { AccountLevelFeeFromJSON, AccountLevelFeeToJSON, DefaultClassModelFromJSON, DefaultClassModelToJSON, } from './';
export function AccountLevelFeeResponseFromJSON(json) {
    return AccountLevelFeeResponseFromJSONTyped(json, false);
}
export function AccountLevelFeeResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'defaultClassByRegions': !exists(json, 'defaultClassByRegions') ? undefined : (json['defaultClassByRegions'].map(DefaultClassModelFromJSON)),
        'fees': !exists(json, 'fees') ? undefined : (json['fees'].map(AccountLevelFeeFromJSON)),
    };
}
export function AccountLevelFeeResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'defaultClassByRegions': value.defaultClassByRegions === undefined ? undefined : (value.defaultClassByRegions.map(DefaultClassModelToJSON)),
        'fees': value.fees === undefined ? undefined : (value.fees.map(AccountLevelFeeToJSON)),
    };
}
