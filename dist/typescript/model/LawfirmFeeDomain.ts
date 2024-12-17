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

export interface LawfirmFeeDomain {
    "amount"?: number;
    "caseId"?: string;
    "dueDate"?: string;
    "lawfirmCaseId"?: number;
    "lawfirmFeeId"?: string;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "note"?: string;
    "otrAmount"?: number;
    "processingFeeActual"?: number;
    "processingFeeCharged"?: number;
    "sourceCasePaymentId"?: string;
    "stripeAmount"?: number;
    "stripeApplicationFee"?: models.StripeApplicationFeeDomain;
    "stripePayment"?: models.StripePaymentDomain;
    "transactionDateUtc"?: string;
    "transactionMethod"?: LawfirmFeeDomain.TransactionMethodEnum;
    "transactionReferenceId"?: string;
    "updatedDueDate"?: string;
}

export namespace LawfirmFeeDomain {
    export enum TransactionMethodEnum {
        CASH = <any> 'CASH',
        CHECK = <any> 'CHECK',
        DESTINATIONCHARGETRANSFER = <any> 'DESTINATION_CHARGE_TRANSFER',
        LOBCHECK = <any> 'LOB_CHECK',
        PAYPAL = <any> 'PAYPAL',
        STRIPEAPPLICATIONFEE = <any> 'STRIPE_APPLICATION_FEE',
        STRIPECHARGE = <any> 'STRIPE_CHARGE',
        STRIPECONNECTDEBIT = <any> 'STRIPE_CONNECT_DEBIT',
        STRIPETRANSFER = <any> 'STRIPE_TRANSFER',
        UNKNOWN = <any> 'UNKNOWN',
        VENMO = <any> 'VENMO',
        WIRETRANSFER = <any> 'WIRE_TRANSFER',
        ZELLE = <any> 'ZELLE'
    }
}
