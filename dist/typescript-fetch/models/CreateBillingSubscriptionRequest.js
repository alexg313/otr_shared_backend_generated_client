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
import { SubscriptionGuardianModelFromJSON, SubscriptionGuardianModelToJSON, } from './';
export function CreateBillingSubscriptionRequestFromJSON(json) {
    return CreateBillingSubscriptionRequestFromJSONTyped(json, false);
}
export function CreateBillingSubscriptionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cardId': !exists(json, 'cardId') ? undefined : json['cardId'],
        'guardian': !exists(json, 'guardian') ? undefined : SubscriptionGuardianModelFromJSON(json['guardian']),
        'priceIds': !exists(json, 'priceIds') ? undefined : json['priceIds'],
        'productId': !exists(json, 'productId') ? undefined : json['productId'],
        'trialEndDate': !exists(json, 'trialEndDate') ? undefined : (new Date(json['trialEndDate'])),
    };
}
export function CreateBillingSubscriptionRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cardId': value.cardId,
        'guardian': SubscriptionGuardianModelToJSON(value.guardian),
        'priceIds': value.priceIds,
        'productId': value.productId,
        'trialEndDate': value.trialEndDate === undefined ? undefined : (value.trialEndDate.toISOString().substr(0, 10)),
    };
}
