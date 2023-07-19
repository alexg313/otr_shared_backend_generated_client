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

export interface BillingInvoiceModel {
    "amountDueInCents"?: number;
    "amountPaidInCents"?: number;
    "invoicePdfUrl"?: string;
    "periodEndDate"?: string;
    "periodStartDate"?: string;
    "status"?: BillingInvoiceModel.StatusEnum;
}

export namespace BillingInvoiceModel {
    export enum StatusEnum {
        DRAFT = <any> 'DRAFT',
        OPEN = <any> 'OPEN',
        PAID = <any> 'PAID',
        UNCOLLECTIBLE = <any> 'UNCOLLECTIBLE',
        VOID = <any> 'VOID'
    }
}
