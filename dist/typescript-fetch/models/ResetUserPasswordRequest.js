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
export function ResetUserPasswordRequestFromJSON(json) {
    return ResetUserPasswordRequestFromJSONTyped(json, false);
}
export function ResetUserPasswordRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'newPasswordPlainText': !exists(json, 'newPasswordPlainText') ? undefined : json['newPasswordPlainText'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}
export function ResetUserPasswordRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'newPasswordPlainText': value.newPasswordPlainText,
        'userId': value.userId,
    };
}
