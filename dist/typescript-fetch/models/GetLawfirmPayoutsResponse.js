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
import { LawfirmPayoutDomainFromJSON, LawfirmPayoutDomainToJSON, } from './';
export function GetLawfirmPayoutsResponseFromJSON(json) {
    return GetLawfirmPayoutsResponseFromJSONTyped(json, false);
}
export function GetLawfirmPayoutsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'payouts': !exists(json, 'payouts') ? undefined : (json['payouts'].map(LawfirmPayoutDomainFromJSON)),
    };
}
export function GetLawfirmPayoutsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'payouts': value.payouts === undefined ? undefined : (value.payouts.map(LawfirmPayoutDomainToJSON)),
    };
}
