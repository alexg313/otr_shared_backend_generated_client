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
import { CaseActionDomainFromJSON, CaseActionDomainToJSON, } from './';
export function GetCaseActionTimelineResponseFromJSON(json) {
    return GetCaseActionTimelineResponseFromJSONTyped(json, false);
}
export function GetCaseActionTimelineResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actionsNotTaken': !exists(json, 'actionsNotTaken') ? undefined : (json['actionsNotTaken'].map(CaseActionDomainFromJSON)),
        'actionsTaken': !exists(json, 'actionsTaken') ? undefined : (json['actionsTaken'].map(CaseActionDomainFromJSON)),
    };
}
export function GetCaseActionTimelineResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actionsNotTaken': value.actionsNotTaken === undefined ? undefined : (value.actionsNotTaken.map(CaseActionDomainToJSON)),
        'actionsTaken': value.actionsTaken === undefined ? undefined : (value.actionsTaken.map(CaseActionDomainToJSON)),
    };
}
