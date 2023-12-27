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
import { FreshDeskTicket } from './freshDeskTicket';
import { Timestamp } from './timestamp';


export interface LawfirmCaseModel { 
    caseArchivedByLawfirm?: boolean;
    caseDecisionStatus?: LawfirmCaseModel.CaseDecisionStatusEnum;
    clientDeclineTicket?: FreshDeskTicket;
    declineReason?: string;
    isMatchInternal?: boolean;
    isSelected?: boolean;
    lawfirmCaseId?: number;
    lawfirmDecisionDateUtc?: string;
    lawfirmDeclineTicket?: FreshDeskTicket;
    lawfirmId?: number;
    lawfirmName?: string;
    lawfirmPrimaryEmail?: string;
    lawfirmReceiptDateUtc?: Timestamp;
    matchExpirationDateUtc?: string;
    obfuscatedPictureUrl?: string;
    profilePictureUrl?: string;
    refundOwner?: LawfirmCaseModel.RefundOwnerEnum;
}
export namespace LawfirmCaseModel {
    export type CaseDecisionStatusEnum = 'ACCEPTED' | 'CREATED' | 'DECLINED' | 'EXPIRED' | 'PENDING' | 'REMATCHED' | 'REMATCHED_REFERRAL';
    export const CaseDecisionStatusEnum = {
        Accepted: 'ACCEPTED' as CaseDecisionStatusEnum,
        Created: 'CREATED' as CaseDecisionStatusEnum,
        Declined: 'DECLINED' as CaseDecisionStatusEnum,
        Expired: 'EXPIRED' as CaseDecisionStatusEnum,
        Pending: 'PENDING' as CaseDecisionStatusEnum,
        Rematched: 'REMATCHED' as CaseDecisionStatusEnum,
        RematchedReferral: 'REMATCHED_REFERRAL' as CaseDecisionStatusEnum
    };
    export type RefundOwnerEnum = 'LAWFIRM' | 'NONE' | 'OTR';
    export const RefundOwnerEnum = {
        Lawfirm: 'LAWFIRM' as RefundOwnerEnum,
        None: 'NONE' as RefundOwnerEnum,
        Otr: 'OTR' as RefundOwnerEnum
    };
}


