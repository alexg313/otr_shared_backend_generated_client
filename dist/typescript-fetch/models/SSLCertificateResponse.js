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
export function SSLCertificateResponseFromJSON(json) {
    return SSLCertificateResponseFromJSONTyped(json, false);
}
export function SSLCertificateResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rawPublicCert': !exists(json, 'rawPublicCert') ? undefined : json['rawPublicCert'],
    };
}
export function SSLCertificateResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'rawPublicCert': value.rawPublicCert,
    };
}
