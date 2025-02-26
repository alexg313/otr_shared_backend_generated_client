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
import { InvoiceLineItemModel } from './invoiceLineItemModel';


export interface LineItemModel { 
    additionalDescription?: string;
    feeAmount?: number;
    feeDescription?: string;
    lineItemOwner?: LineItemModel.LineItemOwnerEnum;
    lineItemType?: InvoiceLineItemModel;
}
export namespace LineItemModel {
    export type LineItemOwnerEnum = 'COURT' | 'LAWFIRM' | 'OTR';
    export const LineItemOwnerEnum = {
        Court: 'COURT' as LineItemOwnerEnum,
        Lawfirm: 'LAWFIRM' as LineItemOwnerEnum,
        Otr: 'OTR' as LineItemOwnerEnum
    };
}


