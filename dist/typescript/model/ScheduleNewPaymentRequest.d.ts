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
export interface ScheduleNewPaymentRequest {
    "baseFeeInCents"?: number;
    "chargeRunAtDate"?: string;
    "lawfirmReferralCodeAdjustment"?: number;
    "otrMarketingFee"?: number;
    "otrReferralCodeAdjustment"?: number;
    "recipient"?: ScheduleNewPaymentRequest.RecipientEnum;
    "transactionMethod"?: ScheduleNewPaymentRequest.TransactionMethodEnum;
}
export declare namespace ScheduleNewPaymentRequest {
    enum RecipientEnum {
        COURT,
        LAWFIRM,
        OTR
    }
    enum TransactionMethodEnum {
        CHECK,
        DESTINATIONCHARGETRANSFER,
        LOBCHECK,
        PAYPAL,
        STRIPEAPPLICATIONFEE,
        STRIPECHARGE,
        STRIPECONNECTDEBIT,
        STRIPETRANSFER,
        UNKNOWN,
        VENMO,
        WIRETRANSFER,
        ZELLE
    }
}
