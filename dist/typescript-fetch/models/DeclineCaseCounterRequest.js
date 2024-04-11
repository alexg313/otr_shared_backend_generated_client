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
export function DeclineCaseCounterRequestFromJSON(json) {
    return DeclineCaseCounterRequestFromJSONTyped(json, false);
}
export function DeclineCaseCounterRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'noteToClient': !exists(json, 'noteToClient') ? undefined : json['noteToClient'],
        'noteToOtr': !exists(json, 'noteToOtr') ? undefined : json['noteToOtr'],
    };
}
export function DeclineCaseCounterRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'noteToClient': value.noteToClient,
        'noteToOtr': value.noteToOtr,
    };
}
