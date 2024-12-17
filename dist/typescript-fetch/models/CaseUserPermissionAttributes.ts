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
 * @interface CaseUserPermissionAttributes
 */
export interface CaseUserPermissionAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof CaseUserPermissionAttributes
     */
    hasFinancialAccess?: boolean;
}

export function CaseUserPermissionAttributesFromJSON(json: any): CaseUserPermissionAttributes {
    return CaseUserPermissionAttributesFromJSONTyped(json, false);
}

export function CaseUserPermissionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseUserPermissionAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasFinancialAccess': !exists(json, 'hasFinancialAccess') ? undefined : json['hasFinancialAccess'],
    };
}

export function CaseUserPermissionAttributesToJSON(value?: CaseUserPermissionAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasFinancialAccess': value.hasFinancialAccess,
    };
}


