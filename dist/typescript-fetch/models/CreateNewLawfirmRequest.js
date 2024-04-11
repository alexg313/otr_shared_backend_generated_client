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
import { CountryRegionFromJSON, CountryRegionToJSON, CreateLawfirmModelFromJSON, CreateLawfirmModelToJSON, } from './';
export function CreateNewLawfirmRequestFromJSON(json) {
    return CreateNewLawfirmRequestFromJSONTyped(json, false);
}
export function CreateNewLawfirmRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'defaultTrafficFeeInCents': !exists(json, 'defaultTrafficFeeInCents') ? undefined : json['defaultTrafficFeeInCents'],
        'lawfirm': !exists(json, 'lawfirm') ? undefined : CreateLawfirmModelFromJSON(json['lawfirm']),
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'referralRate': !exists(json, 'referralRate') ? undefined : json['referralRate'],
        'supportedRegions': !exists(json, 'supportedRegions') ? undefined : (json['supportedRegions'].map(CountryRegionFromJSON)),
    };
}
export function CreateNewLawfirmRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'defaultTrafficFeeInCents': value.defaultTrafficFeeInCents,
        'lawfirm': CreateLawfirmModelToJSON(value.lawfirm),
        'priority': value.priority,
        'referralRate': value.referralRate,
        'supportedRegions': value.supportedRegions === undefined ? undefined : (value.supportedRegions.map(CountryRegionToJSON)),
    };
}
