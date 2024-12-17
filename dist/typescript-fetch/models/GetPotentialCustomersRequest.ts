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
 * @interface GetPotentialCustomersRequest
 */
export interface GetPotentialCustomersRequest {
    /**
     * 
     * @type {Date}
     * @memberof GetPotentialCustomersRequest
     */
    endDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof GetPotentialCustomersRequest
     */
    includeDismissedCitations?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetPotentialCustomersRequest
     */
    orderBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof GetPotentialCustomersRequest
     */
    startDate?: Date;
}

export function GetPotentialCustomersRequestFromJSON(json: any): GetPotentialCustomersRequest {
    return GetPotentialCustomersRequestFromJSONTyped(json, false);
}

export function GetPotentialCustomersRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPotentialCustomersRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'includeDismissedCitations': !exists(json, 'includeDismissedCitations') ? undefined : json['includeDismissedCitations'],
        'orderBy': !exists(json, 'orderBy') ? undefined : json['orderBy'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}

export function GetPotentialCustomersRequestToJSON(value?: GetPotentialCustomersRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'includeDismissedCitations': value.includeDismissedCitations,
        'orderBy': value.orderBy,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
    };
}


