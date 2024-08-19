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
export function VerifyCaptchaTokenRequestFromJSON(json) {
    return VerifyCaptchaTokenRequestFromJSONTyped(json, false);
}
export function VerifyCaptchaTokenRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'ipAddress': !exists(json, 'ipAddress') ? undefined : json['ipAddress'],
        'token': json['token'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}
export function VerifyCaptchaTokenRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ipAddress': value.ipAddress,
        'token': value.token,
        'version': value.version,
    };
}
/**
* @export
* @enum {string}
*/
export var VerifyCaptchaTokenRequestVersionEnum;
(function (VerifyCaptchaTokenRequestVersionEnum) {
    VerifyCaptchaTokenRequestVersionEnum["V2GOOGLE"] = "V2_GOOGLE";
    VerifyCaptchaTokenRequestVersionEnum["V3GOOGLE"] = "V3_GOOGLE";
})(VerifyCaptchaTokenRequestVersionEnum || (VerifyCaptchaTokenRequestVersionEnum = {}));
