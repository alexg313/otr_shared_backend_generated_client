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
export interface ActionByEntityModel {
    "actionDateUtc"?: string;
    "actionId"?: number;
    "actionNote"?: string;
    "actionType"?: ActionByEntityModel.ActionTypeEnum;
    "authorFirstName"?: string;
    "authorLastName"?: string;
    "authorUserId"?: number;
    "caseId"?: string;
    "caseStatus"?: ActionByEntityModel.CaseStatusEnum;
    "caseStatusCategory"?: ActionByEntityModel.CaseStatusCategoryEnum;
    "customerFirstName"?: string;
    "customerLastName"?: string;
    "isDeleted"?: boolean;
    "profilePictureUrl"?: string;
}
export declare namespace ActionByEntityModel {
    enum ActionTypeEnum {
        CASEACCEPT,
        CASECOUNTERACCEPTED,
        CASECOUNTERDECLINED,
        CASECOUNTERINITIATED,
        CASECOUNTERWITHDRAWN,
        CASEDECLINE,
        CITATIONDATAEXTRACTED,
        COURTDATEREMOVED,
        COURTDATESCHEDULED,
        DISCOVERYRECEIVED,
        DISCOVERYREQUESTED,
        DISPUTEFILED,
        DRIVERLICENSEREQUESTED,
        FAILEDPAYMENTATTEMPT,
        NOTICEOFAPPEARANCEFILED,
        OTHER,
        OVERDUEBALANCEPAID,
        REVIEWEDBYLAWFIRM,
        SOCIALMEDIAASK,
        TICKETMAILEDTOCOURT
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
}
