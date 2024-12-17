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
 * @interface GetPaymentModelTypesResponse
 */
export interface GetPaymentModelTypesResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof GetPaymentModelTypesResponse
     */
    models?: Array<GetPaymentModelTypesResponseModelsEnum>;
}

export function GetPaymentModelTypesResponseFromJSON(json: any): GetPaymentModelTypesResponse {
    return GetPaymentModelTypesResponseFromJSONTyped(json, false);
}

export function GetPaymentModelTypesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPaymentModelTypesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'models': !exists(json, 'models') ? undefined : json['models'],
    };
}

export function GetPaymentModelTypesResponseToJSON(value?: GetPaymentModelTypesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'models': value.models,
    };
}

/**
* @export
* @enum {string}
*/
export enum GetPaymentModelTypesResponseModelsEnum {
    DESTINATIONACCOUNT = 'DESTINATION_ACCOUNT',
    SEPARATECHARGE = 'SEPARATE_CHARGE',
    TRANSFERDEDUCTION = 'TRANSFER_DEDUCTION'
}


