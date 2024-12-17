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
 * @interface UserReferralSourceTypeModel
 */
export interface UserReferralSourceTypeModel {
    /**
     * 
     * @type {Array<UserReferralSourceTypeModel>}
     * @memberof UserReferralSourceTypeModel
     */
    children?: Array<UserReferralSourceTypeModel>;
    /**
     * 
     * @type {string}
     * @memberof UserReferralSourceTypeModel
     */
    imageUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserReferralSourceTypeModel
     */
    isDisplayed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserReferralSourceTypeModel
     */
    sourceDesc?: string;
    /**
     * 
     * @type {string}
     * @memberof UserReferralSourceTypeModel
     */
    sourceName?: string;
    /**
     * 
     * @type {number}
     * @memberof UserReferralSourceTypeModel
     */
    sourceTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserReferralSourceTypeModel
     */
    uiDisplayText?: string;
}

export function UserReferralSourceTypeModelFromJSON(json: any): UserReferralSourceTypeModel {
    return UserReferralSourceTypeModelFromJSONTyped(json, false);
}

export function UserReferralSourceTypeModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserReferralSourceTypeModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'children': !exists(json, 'children') ? undefined : ((json['children'] as Array<any>).map(UserReferralSourceTypeModelFromJSON)),
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'isDisplayed': !exists(json, 'isDisplayed') ? undefined : json['isDisplayed'],
        'sourceDesc': !exists(json, 'sourceDesc') ? undefined : json['sourceDesc'],
        'sourceName': !exists(json, 'sourceName') ? undefined : json['sourceName'],
        'sourceTypeId': !exists(json, 'sourceTypeId') ? undefined : json['sourceTypeId'],
        'uiDisplayText': !exists(json, 'uiDisplayText') ? undefined : json['uiDisplayText'],
    };
}

export function UserReferralSourceTypeModelToJSON(value?: UserReferralSourceTypeModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'children': value.children === undefined ? undefined : ((value.children as Array<any>).map(UserReferralSourceTypeModelToJSON)),
        'imageUrl': value.imageUrl,
        'isDisplayed': value.isDisplayed,
        'sourceDesc': value.sourceDesc,
        'sourceName': value.sourceName,
        'sourceTypeId': value.sourceTypeId,
        'uiDisplayText': value.uiDisplayText,
    };
}


