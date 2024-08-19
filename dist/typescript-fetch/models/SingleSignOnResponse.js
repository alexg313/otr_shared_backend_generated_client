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
export function SingleSignOnResponseFromJSON(json) {
    return SingleSignOnResponseFromJSONTyped(json, false);
}
export function SingleSignOnResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'jwt': !exists(json, 'jwt') ? undefined : json['jwt'],
        'redirectUrl': !exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}
export function SingleSignOnResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'emailAddress': value.emailAddress,
        'jwt': value.jwt,
        'redirectUrl': value.redirectUrl,
        'userId': value.userId,
    };
}
