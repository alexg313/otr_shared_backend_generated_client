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
export function SyncStripePaymentsRequestFromJSON(json) {
    return SyncStripePaymentsRequestFromJSONTyped(json, false);
}
export function SyncStripePaymentsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'isDryRun': !exists(json, 'isDryRun') ? undefined : json['isDryRun'],
        'numPaymentsToVerify': !exists(json, 'numPaymentsToVerify') ? undefined : json['numPaymentsToVerify'],
        'stripePaymentIds': !exists(json, 'stripePaymentIds') ? undefined : json['stripePaymentIds'],
    };
}
export function SyncStripePaymentsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'isDryRun': value.isDryRun,
        'numPaymentsToVerify': value.numPaymentsToVerify,
        'stripePaymentIds': value.stripePaymentIds,
    };
}
