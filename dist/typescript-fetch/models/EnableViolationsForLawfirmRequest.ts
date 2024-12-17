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
    EnableViolationModel,
    EnableViolationModelFromJSON,
    EnableViolationModelFromJSONTyped,
    EnableViolationModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface EnableViolationsForLawfirmRequest
 */
export interface EnableViolationsForLawfirmRequest {
    /**
     * 
     * @type {Array<EnableViolationModel>}
     * @memberof EnableViolationsForLawfirmRequest
     */
    models?: Array<EnableViolationModel>;
}

export function EnableViolationsForLawfirmRequestFromJSON(json: any): EnableViolationsForLawfirmRequest {
    return EnableViolationsForLawfirmRequestFromJSONTyped(json, false);
}

export function EnableViolationsForLawfirmRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnableViolationsForLawfirmRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'models': !exists(json, 'models') ? undefined : ((json['models'] as Array<any>).map(EnableViolationModelFromJSON)),
    };
}

export function EnableViolationsForLawfirmRequestToJSON(value?: EnableViolationsForLawfirmRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'models': value.models === undefined ? undefined : ((value.models as Array<any>).map(EnableViolationModelToJSON)),
    };
}


