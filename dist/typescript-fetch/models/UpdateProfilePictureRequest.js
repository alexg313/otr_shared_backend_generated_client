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
export function UpdateProfilePictureRequestFromJSON(json) {
    return UpdateProfilePictureRequestFromJSONTyped(json, false);
}
export function UpdateProfilePictureRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'base64ImageData': !exists(json, 'base64ImageData') ? undefined : json['base64ImageData'],
        'contentType': !exists(json, 'contentType') ? undefined : json['contentType'],
    };
}
export function UpdateProfilePictureRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'base64ImageData': value.base64ImageData,
        'contentType': value.contentType,
    };
}
