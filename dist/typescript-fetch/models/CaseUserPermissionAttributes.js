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
export function CaseUserPermissionAttributesFromJSON(json) {
    return CaseUserPermissionAttributesFromJSONTyped(json, false);
}
export function CaseUserPermissionAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hasFinancialAccess': !exists(json, 'hasFinancialAccess') ? undefined : json['hasFinancialAccess'],
    };
}
export function CaseUserPermissionAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hasFinancialAccess': value.hasFinancialAccess,
    };
}
