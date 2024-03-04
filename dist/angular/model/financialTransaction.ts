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


export interface FinancialTransaction { 
    amount?: number;
    caseId?: string;
    isOverdue?: boolean;
    lawfirmReferenceId?: string;
    otrAmount?: number;
    runAtDateUtc?: TimestampRes;
    stripeAmount?: number;
    taskStatus?: FinancialTransaction.TaskStatusEnum;
    transactionDateUtc?: TimestampRes;
    transactionMethod?: FinancialTransaction.TransactionMethodEnum;
    transactionReferenceId?: string;
    transactionType?: FinancialTransaction.TransactionTypeEnum;
    userFirstName?: string;
    userLastName?: string;
}
export namespace FinancialTransaction {
    export type TaskStatusEnum = 'CANCELLED' | 'COMPLETE' | 'ERROR' | 'IN_PROGRESS' | 'NO_OPERATION' | 'QUEUED';
    export const TaskStatusEnum = {
        Cancelled: 'CANCELLED' as TaskStatusEnum,
        Complete: 'COMPLETE' as TaskStatusEnum,
        Error: 'ERROR' as TaskStatusEnum,
        InProgress: 'IN_PROGRESS' as TaskStatusEnum,
        NoOperation: 'NO_OPERATION' as TaskStatusEnum,
        Queued: 'QUEUED' as TaskStatusEnum
    };
    export type TransactionMethodEnum = 'CASH' | 'CHECK' | 'DESTINATION_CHARGE_TRANSFER' | 'LOB_CHECK' | 'PAYPAL' | 'STRIPE_APPLICATION_FEE' | 'STRIPE_CHARGE' | 'STRIPE_CONNECT_DEBIT' | 'STRIPE_TRANSFER' | 'UNKNOWN' | 'VENMO' | 'WIRE_TRANSFER' | 'ZELLE';
    export const TransactionMethodEnum = {
        Cash: 'CASH' as TransactionMethodEnum,
        Check: 'CHECK' as TransactionMethodEnum,
        DestinationChargeTransfer: 'DESTINATION_CHARGE_TRANSFER' as TransactionMethodEnum,
        LobCheck: 'LOB_CHECK' as TransactionMethodEnum,
        Paypal: 'PAYPAL' as TransactionMethodEnum,
        StripeApplicationFee: 'STRIPE_APPLICATION_FEE' as TransactionMethodEnum,
        StripeCharge: 'STRIPE_CHARGE' as TransactionMethodEnum,
        StripeConnectDebit: 'STRIPE_CONNECT_DEBIT' as TransactionMethodEnum,
        StripeTransfer: 'STRIPE_TRANSFER' as TransactionMethodEnum,
        Unknown: 'UNKNOWN' as TransactionMethodEnum,
        Venmo: 'VENMO' as TransactionMethodEnum,
        WireTransfer: 'WIRE_TRANSFER' as TransactionMethodEnum,
        Zelle: 'ZELLE' as TransactionMethodEnum
    };
    export type TransactionTypeEnum = 'FEE' | 'FEE_REFUND' | 'TRANSFER' | 'TRANSFER_REVERSAL';
    export const TransactionTypeEnum = {
        Fee: 'FEE' as TransactionTypeEnum,
        FeeRefund: 'FEE_REFUND' as TransactionTypeEnum,
        Transfer: 'TRANSFER' as TransactionTypeEnum,
        TransferReversal: 'TRANSFER_REVERSAL' as TransactionTypeEnum
    };
}


