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
export interface LawfirmCaseModelRes {
    "caseDecisionStatus"?: LawfirmCaseModelRes.CaseDecisionStatusEnum;
    "clientDeclineTicket"?: models.FreshDeskTicketRes;
    "declineReason"?: string;
    "isMatchInternal"?: boolean;
    "isSelected"?: boolean;
    "lawfirmCaseId"?: number;
    "lawfirmDecisionDateUtc"?: models.TimestampRes;
    "lawfirmDeclineTicket"?: models.FreshDeskTicketRes;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmPrimaryEmail"?: string;
    "lawfirmReceiptDateUtc"?: models.TimestampRes;
    "matchExpirationDateUtc"?: string;
    "obfuscatedPictureUrl"?: string;
    "profilePictureUrl"?: string;
    "refundOwner"?: LawfirmCaseModelRes.RefundOwnerEnum;
}
export declare namespace LawfirmCaseModelRes {
    enum CaseDecisionStatusEnum {
        ACCEPTED,
        CREATED,
        DECLINED,
        EXPIRED,
        PENDING,
        REMATCHED,
        REMATCHEDREFERRAL
    }
    enum RefundOwnerEnum {
        LAWFIRM,
        NONE,
        OTR
    }
}
