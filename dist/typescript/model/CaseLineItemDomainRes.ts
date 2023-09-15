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

export interface CaseLineItemDomainRes {
    "additionalDescription"?: string;
    "chargeDescription"?: string;
    "clientTotalCost"?: number;
    "creationDate"?: models.TimestampRes;
    "feeInCents"?: number;
    "lawfirmAssumedCost"?: number;
    "lawfirmCaseFees"?: number;
    "lawfirmCaseId"?: number;
    "lawfirmEarningsForCase"?: number;
    "lawfirmReferralCodeAdjustmentInCents"?: number;
    "lineItemId"?: string;
    "lineItemOwner"?: CaseLineItemDomainRes.LineItemOwnerEnum;
    "lineItemType"?: CaseLineItemDomainRes.LineItemTypeEnum;
    "otrEarnings"?: number;
    "otrMarketingFeeActual"?: number;
    "otrMarketingFeeChargedToLawfirm"?: number;
    "otrReferralCodeAdjustmentInCents"?: number;
    "paymentProcessingFeeActual"?: number;
    "paymentProcessingFeeChargedToLawfirm"?: number;
    "platformFee"?: number;
}

export namespace CaseLineItemDomainRes {
    export enum LineItemOwnerEnum {
        COURT = <any> 'COURT',
        LAWFIRM = <any> 'LAWFIRM',
        OTR = <any> 'OTR'
    }
    export enum LineItemTypeEnum {
        ACCIDENTFEE = <any> 'ACCIDENT_FEE',
        BASELEGALFEE = <any> 'BASE_LEGAL_FEE',
        BONDFEE = <any> 'BOND_FEE',
        BOOKINGFEE = <any> 'BOOKING_FEE',
        CDLFEE = <any> 'CDL_FEE',
        COURTFEE = <any> 'COURT_FEE',
        DISPUTEFEE = <any> 'DISPUTE_FEE',
        FINEPAYMENT = <any> 'FINE_PAYMENT',
        FTAFEE = <any> 'FTA_FEE',
        INITIALSUBSCRIPTIONFEE = <any> 'INITIAL_SUBSCRIPTION_FEE',
        LATEFEE = <any> 'LATE_FEE',
        MBGREFUND = <any> 'MBG_REFUND',
        MVSFEE = <any> 'MVS_FEE',
        OTHER = <any> 'OTHER',
        OTRCREDIT = <any> 'OTR_CREDIT',
        PAYMENTPLANSERVICEFEE = <any> 'PAYMENT_PLAN_SERVICE_FEE',
        WARRANTFEE = <any> 'WARRANT_FEE'
    }
}
