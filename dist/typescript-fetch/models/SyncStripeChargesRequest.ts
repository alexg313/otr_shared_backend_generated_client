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
 * @interface SyncStripeChargesRequest
 */
export interface SyncStripeChargesRequest {
    /**
     * 
     * @type {boolean}
     * @memberof SyncStripeChargesRequest
     */
    isDryRun?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SyncStripeChargesRequest
     */
    numChargesToVerify?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof SyncStripeChargesRequest
     */
    stripeChargeIds?: Array<string>;
}

export function SyncStripeChargesRequestFromJSON(json: any): SyncStripeChargesRequest {
    return SyncStripeChargesRequestFromJSONTyped(json, false);
}

export function SyncStripeChargesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SyncStripeChargesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isDryRun': !exists(json, 'isDryRun') ? undefined : json['isDryRun'],
        'numChargesToVerify': !exists(json, 'numChargesToVerify') ? undefined : json['numChargesToVerify'],
        'stripeChargeIds': !exists(json, 'stripeChargeIds') ? undefined : json['stripeChargeIds'],
    };
}

export function SyncStripeChargesRequestToJSON(value?: SyncStripeChargesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isDryRun': value.isDryRun,
        'numChargesToVerify': value.numChargesToVerify,
        'stripeChargeIds': value.stripeChargeIds,
    };
}


