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
    CitationAuditEventModel,
    CitationAuditEventModelFromJSON,
    CitationAuditEventModelFromJSONTyped,
    CitationAuditEventModelToJSON,
    CursorModel,
    CursorModelFromJSON,
    CursorModelFromJSONTyped,
    CursorModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListCitationAuditEventsResponse
 */
export interface ListCitationAuditEventsResponse {
    /**
     * 
     * @type {CursorModel}
     * @memberof ListCitationAuditEventsResponse
     */
    cursorModel?: CursorModel;
    /**
     * 
     * @type {Array<CitationAuditEventModel>}
     * @memberof ListCitationAuditEventsResponse
     */
    models?: Array<CitationAuditEventModel>;
    /**
     * 
     * @type {number}
     * @memberof ListCitationAuditEventsResponse
     */
    totalRecords?: number;
}

export function ListCitationAuditEventsResponseFromJSON(json: any): ListCitationAuditEventsResponse {
    return ListCitationAuditEventsResponseFromJSONTyped(json, false);
}

export function ListCitationAuditEventsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCitationAuditEventsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cursorModel': !exists(json, 'cursorModel') ? undefined : CursorModelFromJSON(json['cursorModel']),
        'models': !exists(json, 'models') ? undefined : ((json['models'] as Array<any>).map(CitationAuditEventModelFromJSON)),
        'totalRecords': !exists(json, 'totalRecords') ? undefined : json['totalRecords'],
    };
}

export function ListCitationAuditEventsResponseToJSON(value?: ListCitationAuditEventsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cursorModel': CursorModelToJSON(value.cursorModel),
        'models': value.models === undefined ? undefined : ((value.models as Array<any>).map(CitationAuditEventModelToJSON)),
        'totalRecords': value.totalRecords,
    };
}


