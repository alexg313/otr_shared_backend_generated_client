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

export interface UpdateCasePaymentRequest {
    "baseFeeInCents"?: number;
    "lawfirmReferralCodeAdjustmentInCents"?: number;
    "otrMarketingFeeInCents"?: number;
    "otrReferralCodeAdjustmentInCents"?: number;
    "paymentProcessingFeeChargedToLawfirm"?: number;
    "recipient"?: UpdateCasePaymentRequest.RecipientEnum;
    "transactionMethod"?: UpdateCasePaymentRequest.TransactionMethodEnum;
}

export namespace UpdateCasePaymentRequest {
    export enum RecipientEnum {
        LAWFIRM = <any> 'LAWFIRM',
        OTR = <any> 'OTR'
    }
    export enum TransactionMethodEnum {
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
        ZELLE = <any> 'ZELLE'
    }
}
