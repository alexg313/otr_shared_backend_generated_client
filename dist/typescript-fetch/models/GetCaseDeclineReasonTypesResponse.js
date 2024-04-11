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
import { CaseDeclineCategoryReasonsModelFromJSON, CaseDeclineCategoryReasonsModelToJSON, } from './';
export function GetCaseDeclineReasonTypesResponseFromJSON(json) {
    return GetCaseDeclineReasonTypesResponseFromJSONTyped(json, false);
}
export function GetCaseDeclineReasonTypesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'caseDeclineReasonTypes': !exists(json, 'caseDeclineReasonTypes') ? undefined : CaseDeclineCategoryReasonsModelFromJSON(json['caseDeclineReasonTypes']),
    };
}
export function GetCaseDeclineReasonTypesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'caseDeclineReasonTypes': CaseDeclineCategoryReasonsModelToJSON(value.caseDeclineReasonTypes),
    };
}
