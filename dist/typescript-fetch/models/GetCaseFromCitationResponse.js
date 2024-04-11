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
import { CaseModelFromJSON, CaseModelToJSON, } from './';
export function GetCaseFromCitationResponseFromJSON(json) {
    return GetCaseFromCitationResponseFromJSONTyped(json, false);
}
export function GetCaseFromCitationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chanceOfSuccess': !exists(json, 'chanceOfSuccess') ? undefined : json['chanceOfSuccess'],
        'projectedInsuranceCostInCents': !exists(json, 'projectedInsuranceCostInCents') ? undefined : json['projectedInsuranceCostInCents'],
        'theCase': !exists(json, 'theCase') ? undefined : CaseModelFromJSON(json['theCase']),
    };
}
export function GetCaseFromCitationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chanceOfSuccess': value.chanceOfSuccess,
        'projectedInsuranceCostInCents': value.projectedInsuranceCostInCents,
        'theCase': CaseModelToJSON(value.theCase),
    };
}
