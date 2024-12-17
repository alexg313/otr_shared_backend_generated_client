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
 * @interface GetBookingsRequest
 */
export interface GetBookingsRequest {
    /**
     * 
     * @type {Date}
     * @memberof GetBookingsRequest
     */
    endDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof GetBookingsRequest
     */
    startDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof GetBookingsRequest
     */
    timeZoneId?: string;
}

export function GetBookingsRequestFromJSON(json: any): GetBookingsRequest {
    return GetBookingsRequestFromJSONTyped(json, false);
}

export function GetBookingsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetBookingsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'timeZoneId': !exists(json, 'timeZoneId') ? undefined : json['timeZoneId'],
    };
}

export function GetBookingsRequestToJSON(value?: GetBookingsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
        'timeZoneId': value.timeZoneId,
    };
}


