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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserAccountModel
 */
export interface UserAccountModel {
    /**
     * 
     * @type {Date}
     * @memberof UserAccountModel
     */
    accountCreationDateUtc?: Date;
    /**
     * 
     * @type {number}
     * @memberof UserAccountModel
     */
    formerUserId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserAccountModel
     */
    loginProvider?: UserAccountModelLoginProviderEnum;
    /**
     * 
     * @type {boolean}
     * @memberof UserAccountModel
     */
    merged?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserAccountModel
     */
    primary?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserAccountModel
     */
    signedProfilePictureUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof UserAccountModel
     */
    userHandle?: string;
    /**
     * 
     * @type {Date}
     * @memberof UserAccountModel
     */
    verificationDateUtc?: Date;
}

export function UserAccountModelFromJSON(json: any): UserAccountModel {
    return UserAccountModelFromJSONTyped(json, false);
}

export function UserAccountModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAccountModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountCreationDateUtc': !exists(json, 'accountCreationDateUtc') ? undefined : (new Date(json['accountCreationDateUtc'])),
        'formerUserId': !exists(json, 'formerUserId') ? undefined : json['formerUserId'],
        'loginProvider': !exists(json, 'loginProvider') ? undefined : json['loginProvider'],
        'merged': !exists(json, 'merged') ? undefined : json['merged'],
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
        'signedProfilePictureUrl': !exists(json, 'signedProfilePictureUrl') ? undefined : json['signedProfilePictureUrl'],
        'userHandle': !exists(json, 'userHandle') ? undefined : json['userHandle'],
        'verificationDateUtc': !exists(json, 'verificationDateUtc') ? undefined : (new Date(json['verificationDateUtc'])),
    };
}

export function UserAccountModelToJSON(value?: UserAccountModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountCreationDateUtc': value.accountCreationDateUtc === undefined ? undefined : (value.accountCreationDateUtc.toISOString()),
        'formerUserId': value.formerUserId,
        'loginProvider': value.loginProvider,
        'merged': value.merged,
        'primary': value.primary,
        'signedProfilePictureUrl': value.signedProfilePictureUrl,
        'userHandle': value.userHandle,
        'verificationDateUtc': value.verificationDateUtc === undefined ? undefined : (value.verificationDateUtc.toISOString()),
    };
}

/**
* @export
* @enum {string}
*/
export enum UserAccountModelLoginProviderEnum {
    APPLE = 'APPLE',
    EMAIL = 'EMAIL',
    FACEBOOK = 'FACEBOOK',
    GOOGLE = 'GOOGLE',
    PHONE = 'PHONE',
    TWITTER = 'TWITTER',
    UNKNOWN = 'UNKNOWN'
}


