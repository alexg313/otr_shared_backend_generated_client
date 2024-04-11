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
export function ValidateUserEmailResponseFromJSON(json) {
    return ValidateUserEmailResponseFromJSONTyped(json, false);
}
export function ValidateUserEmailResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'invalidEmailReason': !exists(json, 'invalidEmailReason') ? undefined : json['invalidEmailReason'],
        'isEmailAvailable': !exists(json, 'isEmailAvailable') ? undefined : json['isEmailAvailable'],
        'isEmailValid': !exists(json, 'isEmailValid') ? undefined : json['isEmailValid'],
    };
}
export function ValidateUserEmailResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'invalidEmailReason': value.invalidEmailReason,
        'isEmailAvailable': value.isEmailAvailable,
        'isEmailValid': value.isEmailValid,
    };
}
