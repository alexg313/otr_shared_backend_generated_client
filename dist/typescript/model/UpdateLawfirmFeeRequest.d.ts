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
export interface UpdateLawfirmFeeRequest {
    "note"?: string;
    "otrFeeAmount"?: number;
    "processingFeeAmount"?: number;
    "sourceCasePaymentId"?: string;
    "totalFeeAmount"?: number;
    "transactionDateUtc"?: models.TimestampReq;
    "transactionMethod"?: UpdateLawfirmFeeRequest.TransactionMethodEnum;
    "transactionReferenceId"?: string;
    "updatedDueDateUtc"?: models.TimestampReq;
}
export declare namespace UpdateLawfirmFeeRequest {
    enum TransactionMethodEnum {
        CASH,
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
