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
export interface WorkflowLineItemModel {
    "additionalDescription"?: string;
    "lawfirmCaseId"?: number;
    "lineItemFeeInCents"?: number;
    "lineItemType"?: WorkflowLineItemModel.LineItemTypeEnum;
    "recipient"?: WorkflowLineItemModel.RecipientEnum;
}
export declare namespace WorkflowLineItemModel {
    enum LineItemTypeEnum {
        ACCIDENTFEE,
        BASELEGALFEE,
        BONDFEE,
        BOOKINGFEE,
        CDLFEE,
        COURTFEE,
        DISPUTEFEE,
        FINEPAYMENT,
        FTAFEE,
        INITIALSUBSCRIPTIONFEE,
        LATEFEE,
        MBGREFUND,
        MVSFEE,
        OTHER,
        OTRCREDIT,
        PAYMENTPLANSERVICEFEE,
        WARRANTFEE
    }
    enum RecipientEnum {
        COURT,
        LAWFIRM,
        OTR
    }
}
