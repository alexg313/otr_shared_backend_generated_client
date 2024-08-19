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
import { AppearanceAttorneyDomainFromJSON, AppearanceAttorneyDomainToJSON, } from './';
export function GetAppearanceAttorneysResponseFromJSON(json) {
    return GetAppearanceAttorneysResponseFromJSONTyped(json, false);
}
export function GetAppearanceAttorneysResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attorneys': !exists(json, 'attorneys') ? undefined : (json['attorneys'].map(AppearanceAttorneyDomainFromJSON)),
    };
}
export function GetAppearanceAttorneysResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attorneys': value.attorneys === undefined ? undefined : (value.attorneys.map(AppearanceAttorneyDomainToJSON)),
    };
}
