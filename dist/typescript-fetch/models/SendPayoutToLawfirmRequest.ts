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
 * @interface SendPayoutToLawfirmRequest
 */
export interface SendPayoutToLawfirmRequest {
    /**
     * 
     * @type {string}
     * @memberof SendPayoutToLawfirmRequest
     */
    caseId?: string;
    /**
     * 
     * @type {string}
     * @memberof SendPayoutToLawfirmRequest
     */
    description?: string;
    /**
     * 
     * @type {Date}
     * @memberof SendPayoutToLawfirmRequest
     */
    dueDateUtc?: Date;
    /**
     * 
     * @type {number}
     * @memberof SendPayoutToLawfirmRequest
     */
    lawfirmCaseId?: number;
    /**
     * 
     * @type {number}
     * @memberof SendPayoutToLawfirmRequest
     */
    payoutAmountInCents?: number;
    /**
     * 
     * @type {string}
     * @memberof SendPayoutToLawfirmRequest
     */
    sourceCasePaymentId?: string;
    /**
     * 
     * @type {string}
     * @memberof SendPayoutToLawfirmRequest
     */
    sourceStripeChargeId?: string;
    /**
     * 
     * @type {Date}
     * @memberof SendPayoutToLawfirmRequest
     */
    transactionDateUtc?: Date;
    /**
     * 
     * @type {string}
     * @memberof SendPayoutToLawfirmRequest
     */
    transactionMethod?: SendPayoutToLawfirmRequestTransactionMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof SendPayoutToLawfirmRequest
     */
    transactionReference?: string;
    /**
     * 
     * @type {string}
     * @memberof SendPayoutToLawfirmRequest
     */
    transferGroup?: string;
}

export function SendPayoutToLawfirmRequestFromJSON(json: any): SendPayoutToLawfirmRequest {
    return SendPayoutToLawfirmRequestFromJSONTyped(json, false);
}

export function SendPayoutToLawfirmRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendPayoutToLawfirmRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caseId': !exists(json, 'caseId') ? undefined : json['caseId'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'dueDateUtc': !exists(json, 'dueDateUtc') ? undefined : (new Date(json['dueDateUtc'])),
        'lawfirmCaseId': !exists(json, 'lawfirmCaseId') ? undefined : json['lawfirmCaseId'],
        'payoutAmountInCents': !exists(json, 'payoutAmountInCents') ? undefined : json['payoutAmountInCents'],
        'sourceCasePaymentId': !exists(json, 'sourceCasePaymentId') ? undefined : json['sourceCasePaymentId'],
        'sourceStripeChargeId': !exists(json, 'sourceStripeChargeId') ? undefined : json['sourceStripeChargeId'],
        'transactionDateUtc': !exists(json, 'transactionDateUtc') ? undefined : (new Date(json['transactionDateUtc'])),
        'transactionMethod': !exists(json, 'transactionMethod') ? undefined : json['transactionMethod'],
        'transactionReference': !exists(json, 'transactionReference') ? undefined : json['transactionReference'],
        'transferGroup': !exists(json, 'transferGroup') ? undefined : json['transferGroup'],
    };
}

export function SendPayoutToLawfirmRequestToJSON(value?: SendPayoutToLawfirmRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caseId': value.caseId,
        'description': value.description,
        'dueDateUtc': value.dueDateUtc === undefined ? undefined : (value.dueDateUtc.toISOString()),
        'lawfirmCaseId': value.lawfirmCaseId,
        'payoutAmountInCents': value.payoutAmountInCents,
        'sourceCasePaymentId': value.sourceCasePaymentId,
        'sourceStripeChargeId': value.sourceStripeChargeId,
        'transactionDateUtc': value.transactionDateUtc === undefined ? undefined : (value.transactionDateUtc.toISOString()),
        'transactionMethod': value.transactionMethod,
        'transactionReference': value.transactionReference,
        'transferGroup': value.transferGroup,
    };
}

/**
* @export
* @enum {string}
*/
export enum SendPayoutToLawfirmRequestTransactionMethodEnum {
    CASH = 'CASH',
    CHECK = 'CHECK',
    DESTINATIONCHARGETRANSFER = 'DESTINATION_CHARGE_TRANSFER',
    LOBCHECK = 'LOB_CHECK',
    PAYPAL = 'PAYPAL',
    STRIPEAPPLICATIONFEE = 'STRIPE_APPLICATION_FEE',
    STRIPECHARGE = 'STRIPE_CHARGE',
    STRIPECONNECTDEBIT = 'STRIPE_CONNECT_DEBIT',
    STRIPETRANSFER = 'STRIPE_TRANSFER',
    UNKNOWN = 'UNKNOWN',
    VENMO = 'VENMO',
    WIRETRANSFER = 'WIRE_TRANSFER',
    ZELLE = 'ZELLE'
}


