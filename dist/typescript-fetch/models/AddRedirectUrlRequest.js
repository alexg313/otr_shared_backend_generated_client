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
export function AddRedirectUrlRequestFromJSON(json) {
    return AddRedirectUrlRequestFromJSONTyped(json, false);
}
export function AddRedirectUrlRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'landingPageUrl': !exists(json, 'landingPageUrl') ? undefined : json['landingPageUrl'],
        'pageType': !exists(json, 'pageType') ? undefined : json['pageType'],
        'redirectType': !exists(json, 'redirectType') ? undefined : json['redirectType'],
        'redirectUrl': !exists(json, 'redirectUrl') ? undefined : json['redirectUrl'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}
export function AddRedirectUrlRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'landingPageUrl': value.landingPageUrl,
        'pageType': value.pageType,
        'redirectType': value.redirectType,
        'redirectUrl': value.redirectUrl,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
    };
}
/**
* @export
* @enum {string}
*/
export var AddRedirectUrlRequestPageTypeEnum;
(function (AddRedirectUrlRequestPageTypeEnum) {
    AddRedirectUrlRequestPageTypeEnum["DEBUG"] = "DEBUG";
    AddRedirectUrlRequestPageTypeEnum["SEO"] = "SEO";
    AddRedirectUrlRequestPageTypeEnum["VANITY"] = "VANITY";
})(AddRedirectUrlRequestPageTypeEnum || (AddRedirectUrlRequestPageTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var AddRedirectUrlRequestRedirectTypeEnum;
(function (AddRedirectUrlRequestRedirectTypeEnum) {
    AddRedirectUrlRequestRedirectTypeEnum["PERMANENT"] = "PERMANENT";
    AddRedirectUrlRequestRedirectTypeEnum["TEMPORARY"] = "TEMPORARY";
})(AddRedirectUrlRequestRedirectTypeEnum || (AddRedirectUrlRequestRedirectTypeEnum = {}));
