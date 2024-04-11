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
import { AvailablePaymentPlanFromJSON, AvailablePaymentPlanToJSON, } from './';
export function GetAvailablePaymentPlansResponseFromJSON(json) {
    return GetAvailablePaymentPlansResponseFromJSONTyped(json, false);
}
export function GetAvailablePaymentPlansResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'plans': !exists(json, 'plans') ? undefined : (json['plans'].map(AvailablePaymentPlanFromJSON)),
    };
}
export function GetAvailablePaymentPlansResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'plans': value.plans === undefined ? undefined : (value.plans.map(AvailablePaymentPlanToJSON)),
    };
}
