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
export function SaveDriverLicensePictureRequestFromJSON(json) {
    return SaveDriverLicensePictureRequestFromJSONTyped(json, false);
}
export function SaveDriverLicensePictureRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'base64ImageData': !exists(json, 'base64ImageData') ? undefined : json['base64ImageData'],
        'driverLicenseId': !exists(json, 'driverLicenseId') ? undefined : json['driverLicenseId'],
        'imageContentType': !exists(json, 'imageContentType') ? undefined : json['imageContentType'],
        'isBackOfLicense': !exists(json, 'isBackOfLicense') ? undefined : json['isBackOfLicense'],
    };
}
export function SaveDriverLicensePictureRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'base64ImageData': value.base64ImageData,
        'driverLicenseId': value.driverLicenseId,
        'imageContentType': value.imageContentType,
        'isBackOfLicense': value.isBackOfLicense,
    };
}
