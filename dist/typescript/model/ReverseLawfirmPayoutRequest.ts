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

import * as models from './models';

export interface ReverseLawfirmPayoutRequest {
    "overrideRefundOwner"?: boolean;
    "reversalAmount"?: number;
    "reversalNote"?: string;
    "reversalReason"?: ReverseLawfirmPayoutRequest.ReversalReasonEnum;
}

export namespace ReverseLawfirmPayoutRequest {
    export enum ReversalReasonEnum {
        CANCELATION = <any> 'CANCELATION',
        CLIENTDISPUTEDCHARGE = <any> 'CLIENT_DISPUTED_CHARGE',
        DUPLICATECASE = <any> 'DUPLICATE_CASE',
        LOSTCASE = <any> 'LOST_CASE',
        OTHER = <any> 'OTHER'
    }
}
