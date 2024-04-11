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
export function InitiateCaseAndChargeCustomerResponseFromJSON(json) {
    return InitiateCaseAndChargeCustomerResponseFromJSONTyped(json, false);
}
export function InitiateCaseAndChargeCustomerResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'otre': !exists(json, 'otre') ? undefined : json['otre'],
        'rs': !exists(json, 'rs') ? undefined : json['rs'],
    };
}
export function InitiateCaseAndChargeCustomerResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'otre': value.otre,
        'rs': value.rs,
    };
}
