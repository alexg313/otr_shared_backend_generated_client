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
    CaseModel,
    CaseModelFromJSON,
    CaseModelFromJSONTyped,
    CaseModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface GetCaseFromCitationResponse
 */
export interface GetCaseFromCitationResponse {
    /**
     * 
     * @type {number}
     * @memberof GetCaseFromCitationResponse
     */
    chanceOfSuccess?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCaseFromCitationResponse
     */
    projectedInsuranceCostInCents?: number;
    /**
     * 
     * @type {CaseModel}
     * @memberof GetCaseFromCitationResponse
     */
    theCase?: CaseModel;
}

export function GetCaseFromCitationResponseFromJSON(json: any): GetCaseFromCitationResponse {
    return GetCaseFromCitationResponseFromJSONTyped(json, false);
}

export function GetCaseFromCitationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCaseFromCitationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chanceOfSuccess': !exists(json, 'chanceOfSuccess') ? undefined : json['chanceOfSuccess'],
        'projectedInsuranceCostInCents': !exists(json, 'projectedInsuranceCostInCents') ? undefined : json['projectedInsuranceCostInCents'],
        'theCase': !exists(json, 'theCase') ? undefined : CaseModelFromJSON(json['theCase']),
    };
}

export function GetCaseFromCitationResponseToJSON(value?: GetCaseFromCitationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chanceOfSuccess': value.chanceOfSuccess,
        'projectedInsuranceCostInCents': value.projectedInsuranceCostInCents,
        'theCase': CaseModelToJSON(value.theCase),
    };
}


