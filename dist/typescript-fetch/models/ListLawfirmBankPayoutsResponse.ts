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
import {
    LawfirmBankPayoutModel,
    LawfirmBankPayoutModelFromJSON,
    LawfirmBankPayoutModelFromJSONTyped,
    LawfirmBankPayoutModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListLawfirmBankPayoutsResponse
 */
export interface ListLawfirmBankPayoutsResponse {
    /**
     * 
     * @type {Array<LawfirmBankPayoutModel>}
     * @memberof ListLawfirmBankPayoutsResponse
     */
    bankPayouts?: Array<LawfirmBankPayoutModel>;
    /**
     * 
     * @type {number}
     * @memberof ListLawfirmBankPayoutsResponse
     */
    totalCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ListLawfirmBankPayoutsResponse
     */
    totalPages?: number;
}

export function ListLawfirmBankPayoutsResponseFromJSON(json: any): ListLawfirmBankPayoutsResponse {
    return ListLawfirmBankPayoutsResponseFromJSONTyped(json, false);
}

export function ListLawfirmBankPayoutsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListLawfirmBankPayoutsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bankPayouts': !exists(json, 'bankPayouts') ? undefined : ((json['bankPayouts'] as Array<any>).map(LawfirmBankPayoutModelFromJSON)),
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
    };
}

export function ListLawfirmBankPayoutsResponseToJSON(value?: ListLawfirmBankPayoutsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bankPayouts': value.bankPayouts === undefined ? undefined : ((value.bankPayouts as Array<any>).map(LawfirmBankPayoutModelToJSON)),
        'totalCount': value.totalCount,
        'totalPages': value.totalPages,
    };
}


