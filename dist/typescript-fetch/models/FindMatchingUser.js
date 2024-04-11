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
import { TimestampFromJSON, TimestampToJSON, UserBookingsDomainFromJSON, UserBookingsDomainToJSON, UserRoleDomainFromJSON, UserRoleDomainToJSON, } from './';
export function FindMatchingUserFromJSON(json) {
    return FindMatchingUserFromJSONTyped(json, false);
}
export function FindMatchingUserFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookings': !exists(json, 'bookings') ? undefined : UserBookingsDomainFromJSON(json['bookings']),
        'creationDateUtc': !exists(json, 'creationDateUtc') ? undefined : TimestampFromJSON(json['creationDateUtc']),
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'firstname': !exists(json, 'firstname') ? undefined : json['firstname'],
        'ghostAccountCreationDateUtc': !exists(json, 'ghostAccountCreationDateUtc') ? undefined : (new Date(json['ghostAccountCreationDateUtc'])),
        'isEmailConfirmed': !exists(json, 'isEmailConfirmed') ? undefined : json['isEmailConfirmed'],
        'isEnabled': !exists(json, 'isEnabled') ? undefined : json['isEnabled'],
        'isTestUser': !exists(json, 'isTestUser') ? undefined : json['isTestUser'],
        'lastname': !exists(json, 'lastname') ? undefined : json['lastname'],
        'loginProvider': !exists(json, 'loginProvider') ? undefined : json['loginProvider'],
        'profilePictureUrl': !exists(json, 'profilePictureUrl') ? undefined : json['profilePictureUrl'],
        'roles': !exists(json, 'roles') ? undefined : (json['roles'].map(UserRoleDomainFromJSON)),
        'unsubscribed': !exists(json, 'unsubscribed') ? undefined : json['unsubscribed'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'userRegistrationDateUtc': !exists(json, 'userRegistrationDateUtc') ? undefined : (new Date(json['userRegistrationDateUtc'])),
    };
}
export function FindMatchingUserToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookings': UserBookingsDomainToJSON(value.bookings),
        'creationDateUtc': TimestampToJSON(value.creationDateUtc),
        'emailAddress': value.emailAddress,
        'firstname': value.firstname,
        'ghostAccountCreationDateUtc': value.ghostAccountCreationDateUtc === undefined ? undefined : (value.ghostAccountCreationDateUtc.toISOString()),
        'isEmailConfirmed': value.isEmailConfirmed,
        'isEnabled': value.isEnabled,
        'isTestUser': value.isTestUser,
        'lastname': value.lastname,
        'loginProvider': value.loginProvider,
        'profilePictureUrl': value.profilePictureUrl,
        'roles': value.roles === undefined ? undefined : (value.roles.map(UserRoleDomainToJSON)),
        'unsubscribed': value.unsubscribed,
        'userId': value.userId,
        'userRegistrationDateUtc': value.userRegistrationDateUtc === undefined ? undefined : (value.userRegistrationDateUtc.toISOString()),
    };
}
/**
* @export
* @enum {string}
*/
export var FindMatchingUserLoginProviderEnum;
(function (FindMatchingUserLoginProviderEnum) {
    FindMatchingUserLoginProviderEnum["APPLE"] = "APPLE";
    FindMatchingUserLoginProviderEnum["EMAIL"] = "EMAIL";
    FindMatchingUserLoginProviderEnum["FACEBOOK"] = "FACEBOOK";
    FindMatchingUserLoginProviderEnum["GOOGLE"] = "GOOGLE";
    FindMatchingUserLoginProviderEnum["PHONE"] = "PHONE";
    FindMatchingUserLoginProviderEnum["TWITTER"] = "TWITTER";
    FindMatchingUserLoginProviderEnum["UNKNOWN"] = "UNKNOWN";
})(FindMatchingUserLoginProviderEnum || (FindMatchingUserLoginProviderEnum = {}));
