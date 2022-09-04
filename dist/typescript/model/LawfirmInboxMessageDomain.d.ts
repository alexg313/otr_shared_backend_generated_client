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
export interface LawfirmInboxMessageDomain {
    "attachment"?: boolean;
    "authorFirstName"?: string;
    "authorLastName"?: string;
    "authorRoleType"?: LawfirmInboxMessageDomain.AuthorRoleTypeEnum;
    "authorUserId"?: number;
    "caseArchived"?: boolean;
    "caseId"?: string;
    "caseStatus"?: LawfirmInboxMessageDomain.CaseStatusEnum;
    "caseStatusCategory"?: LawfirmInboxMessageDomain.CaseStatusCategoryEnum;
    "citationIssueDate"?: models.PureDate;
    "citationIssueDateUtc"?: string;
    "courtDateUtc"?: string;
    "courtName"?: string;
    "customerFirstName"?: string;
    "customerLastName"?: string;
    "lawfirmCaseDecisionStatus"?: LawfirmInboxMessageDomain.LawfirmCaseDecisionStatusEnum;
    "lawfirmReceiptDateUtc"?: string;
    "messageBody"?: string;
    "messageFlagged"?: boolean;
    "messageId"?: number;
    "messageSentDateUtc"?: string;
    "messageStarred"?: boolean;
    "profilePictureUrl"?: string;
}
export declare namespace LawfirmInboxMessageDomain {
    enum AuthorRoleTypeEnum {
        ADMIN,
        DEFENDANT,
        LAWYER,
        PARTNER,
        UNKNOWN
    }
    enum CaseStatusEnum {
        AMENDEDDOWNWITHINCLASS,
        AMENDEDFULLFINE,
        AMENDEDINCREASEDFINE,
        AMENDEDNOFINE,
        AMENDEDREDUCEDFINE,
        AMENDEDTOINFRACTION,
        AMENDEDTONMV,
        CANCELLEDATTORNEYATFAULT,
        CANCELLEDBYLAWFIRM,
        CANCELLEDBYUSER,
        CANCELLEDDUPLICATE,
        CANCELLEDNMV,
        CANCELLEDNONPAYMENT,
        CANCELLEDNOLAWFIRM,
        CANCELLEDOVERDUE,
        CANCELLEDTOOSHORTNOTICE,
        CASEINPROGRESS,
        CLIENTCONFIRMED,
        CLIENTCONFIRMEDUNPAID,
        CLIENTFIREDLAWFIRM,
        CLIENTFORCEDLOSS,
        CLIENTPAIDFINE,
        CLIENTUNRESPONSIVE,
        DEFERRED,
        DISMISSED,
        DIVERSION,
        FEESDISPUTED,
        FINEREDUCTIONONLY,
        LAWFIRMWITHDRAWN,
        LOST,
        NOLAWFIRMAVAILABLE,
        POINTREDUCTION,
        REFUSEDBYLAWFIRM,
        RESOLVEDNONPAYMENT,
        STALE,
        TRAFFICSCHOOL,
        UNCONFIRMED
    }
    enum CaseStatusCategoryEnum {
        ACTIVE,
        CANCELLED,
        RESOLVED,
        UNCONFIRMED
    }
    enum LawfirmCaseDecisionStatusEnum {
        ACCEPTED,
        CREATED,
        DECLINED,
        EXPIRED,
        PENDING,
        REMATCHED,
        REMATCHEDREFERRAL
    }
}
