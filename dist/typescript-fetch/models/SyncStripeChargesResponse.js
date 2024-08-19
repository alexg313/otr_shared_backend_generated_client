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
import { exists, mapValues } from '../runtime';
import { StripeChargeSyncResultsFromJSON, StripeChargeSyncResultsToJSON, } from './';
export function SyncStripeChargesResponseFromJSON(json) {
    return SyncStripeChargesResponseFromJSONTyped(json, false);
}
export function SyncStripeChargesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'output': !exists(json, 'output') ? undefined : (mapValues(json['output'], StripeChargeSyncResultsFromJSON)),
    };
}
export function SyncStripeChargesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'output': value.output === undefined ? undefined : (mapValues(value.output, StripeChargeSyncResultsToJSON)),
    };
}
