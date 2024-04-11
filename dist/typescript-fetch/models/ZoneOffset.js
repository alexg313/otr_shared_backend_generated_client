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
import { ZoneRulesFromJSON, ZoneRulesToJSON, } from './';
export function ZoneOffsetFromJSON(json) {
    return ZoneOffsetFromJSONTyped(json, false);
}
export function ZoneOffsetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'rules': !exists(json, 'rules') ? undefined : ZoneRulesFromJSON(json['rules']),
        'totalSeconds': !exists(json, 'totalSeconds') ? undefined : json['totalSeconds'],
    };
}
export function ZoneOffsetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'rules': ZoneRulesToJSON(value.rules),
        'totalSeconds': value.totalSeconds,
    };
}
