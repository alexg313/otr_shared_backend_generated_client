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
export function PriceMatchRequestFromJSON(json) {
    return PriceMatchRequestFromJSONTyped(json, false);
}
export function PriceMatchRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attorneyContactInfo': !exists(json, 'attorneyContactInfo') ? undefined : json['attorneyContactInfo'],
        'attorneyName': !exists(json, 'attorneyName') ? undefined : json['attorneyName'],
        'clientEmailAddress': !exists(json, 'clientEmailAddress') ? undefined : json['clientEmailAddress'],
        'clientName': !exists(json, 'clientName') ? undefined : json['clientName'],
        'details': !exists(json, 'details') ? undefined : json['details'],
        'priceToMatch': !exists(json, 'priceToMatch') ? undefined : json['priceToMatch'],
        'website': !exists(json, 'website') ? undefined : json['website'],
    };
}
export function PriceMatchRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attorneyContactInfo': value.attorneyContactInfo,
        'attorneyName': value.attorneyName,
        'clientEmailAddress': value.clientEmailAddress,
        'clientName': value.clientName,
        'details': value.details,
        'priceToMatch': value.priceToMatch,
        'website': value.website,
    };
}
