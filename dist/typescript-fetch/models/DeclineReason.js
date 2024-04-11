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
export function DeclineReasonFromJSON(json) {
    return DeclineReasonFromJSONTyped(json, false);
}
export function DeclineReasonFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'declineReasonId': !exists(json, 'declineReasonId') ? undefined : json['declineReasonId'],
        'declineReasonName': !exists(json, 'declineReasonName') ? undefined : json['declineReasonName'],
        'uiFriendlyDescription': !exists(json, 'uiFriendlyDescription') ? undefined : json['uiFriendlyDescription'],
    };
}
export function DeclineReasonToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'declineReasonId': value.declineReasonId,
        'declineReasonName': value.declineReasonName,
        'uiFriendlyDescription': value.uiFriendlyDescription,
    };
}
