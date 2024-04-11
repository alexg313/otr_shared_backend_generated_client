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
import { TimestampFromJSON, TimestampToJSON, } from './';
export function SocialPhoneNumberFromJSON(json) {
    return SocialPhoneNumberFromJSONTyped(json, false);
}
export function SocialPhoneNumberFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'creationDateUtc': !exists(json, 'creationDateUtc') ? undefined : TimestampFromJSON(json['creationDateUtc']),
        'lastUpdatedDateUtc': !exists(json, 'lastUpdatedDateUtc') ? undefined : TimestampFromJSON(json['lastUpdatedDateUtc']),
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}
export function SocialPhoneNumberToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'creationDateUtc': TimestampToJSON(value.creationDateUtc),
        'lastUpdatedDateUtc': TimestampToJSON(value.lastUpdatedDateUtc),
        'phoneNumber': value.phoneNumber,
        'type': value.type,
    };
}
/**
* @export
* @enum {string}
*/
export var SocialPhoneNumberTypeEnum;
(function (SocialPhoneNumberTypeEnum) {
    SocialPhoneNumberTypeEnum["HOME"] = "HOME";
    SocialPhoneNumberTypeEnum["MOBILE"] = "MOBILE";
    SocialPhoneNumberTypeEnum["NOTSPECIFIED"] = "NOT_SPECIFIED";
    SocialPhoneNumberTypeEnum["OFFICE"] = "OFFICE";
})(SocialPhoneNumberTypeEnum || (SocialPhoneNumberTypeEnum = {}));
