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
import { TimestampRes } from './timestampRes';


export interface CaseLineItemDomainRes { 
    additionalDescription?: string;
    chargeDescription?: string;
    clientTotalCost?: number;
    creationDate?: TimestampRes;
    feeInCents?: number;
    lawfirmAssumedCost?: number;
    lawfirmCaseFees?: number;
    lawfirmCaseId?: number;
    lawfirmEarningsForCase?: number;
    lawfirmReferralCodeAdjustmentInCents?: number;
    lineItemId?: string;
    lineItemOwner?: CaseLineItemDomainRes.LineItemOwnerEnum;
    lineItemType?: CaseLineItemDomainRes.LineItemTypeEnum;
    otrEarnings?: number;
    otrMarketingFeeActual?: number;
    otrMarketingFeeChargedToLawfirm?: number;
    otrReferralCodeAdjustmentInCents?: number;
    paymentProcessingFeeActual?: number;
    paymentProcessingFeeChargedToLawfirm?: number;
    platformFee?: number;
}
export namespace CaseLineItemDomainRes {
    export type LineItemOwnerEnum = 'LAWFIRM' | 'OTR';
    export const LineItemOwnerEnum = {
        Lawfirm: 'LAWFIRM' as LineItemOwnerEnum,
        Otr: 'OTR' as LineItemOwnerEnum
    };
    export type LineItemTypeEnum = 'ACCIDENT_FEE' | 'BASE_LEGAL_FEE' | 'BOND_FEE' | 'BOOKING_FEE' | 'CDL_FEE' | 'DISPUTE_FEE' | 'FINE_PAYMENT' | 'FTA_FEE' | 'INITIAL_SUBSCRIPTION_FEE' | 'LATE_FEE' | 'MBG_REFUND' | 'MVS_FEE' | 'OTHER' | 'OTR_CREDIT' | 'PAYMENT_PLAN_SERVICE_FEE' | 'WARRANT_FEE';
    export const LineItemTypeEnum = {
        AccidentFee: 'ACCIDENT_FEE' as LineItemTypeEnum,
        BaseLegalFee: 'BASE_LEGAL_FEE' as LineItemTypeEnum,
        BondFee: 'BOND_FEE' as LineItemTypeEnum,
        BookingFee: 'BOOKING_FEE' as LineItemTypeEnum,
        CdlFee: 'CDL_FEE' as LineItemTypeEnum,
        DisputeFee: 'DISPUTE_FEE' as LineItemTypeEnum,
        FinePayment: 'FINE_PAYMENT' as LineItemTypeEnum,
        FtaFee: 'FTA_FEE' as LineItemTypeEnum,
        InitialSubscriptionFee: 'INITIAL_SUBSCRIPTION_FEE' as LineItemTypeEnum,
        LateFee: 'LATE_FEE' as LineItemTypeEnum,
        MbgRefund: 'MBG_REFUND' as LineItemTypeEnum,
        MvsFee: 'MVS_FEE' as LineItemTypeEnum,
        Other: 'OTHER' as LineItemTypeEnum,
        OtrCredit: 'OTR_CREDIT' as LineItemTypeEnum,
        PaymentPlanServiceFee: 'PAYMENT_PLAN_SERVICE_FEE' as LineItemTypeEnum,
        WarrantFee: 'WARRANT_FEE' as LineItemTypeEnum
    };
}


