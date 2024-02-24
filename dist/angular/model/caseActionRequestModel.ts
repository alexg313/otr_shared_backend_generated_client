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


export interface CaseActionRequestModel { 
    actionDate?: string;
    actionNote?: string;
    actionType?: CaseActionRequestModel.ActionTypeEnum;
}
export namespace CaseActionRequestModel {
    export type ActionTypeEnum = 'CASE_ACCEPT' | 'CASE_COUNTER_ACCEPTED' | 'CASE_COUNTER_DECLINED' | 'CASE_COUNTER_INITIATED' | 'CASE_COUNTER_WITHDRAWN' | 'CASE_DECLINE' | 'CITATION_DATA_EXTRACTED' | 'COURT_DATE_REMOVED' | 'COURT_DATE_SCHEDULED' | 'DISCOVERY_RECEIVED' | 'DISCOVERY_REQUESTED' | 'DISPUTE_FILED' | 'DRIVER_LICENSE_REQUESTED' | 'FAILED_PAYMENT_ATTEMPT' | 'NOTICE_OF_APPEARANCE_FILED' | 'OTHER' | 'OVERDUE_BALANCE_PAID' | 'REVIEWED_BY_LAWFIRM' | 'SOCIAL_MEDIA_ASK' | 'TICKET_MAILED_TO_COURT';
    export const ActionTypeEnum = {
        CaseAccept: 'CASE_ACCEPT' as ActionTypeEnum,
        CaseCounterAccepted: 'CASE_COUNTER_ACCEPTED' as ActionTypeEnum,
        CaseCounterDeclined: 'CASE_COUNTER_DECLINED' as ActionTypeEnum,
        CaseCounterInitiated: 'CASE_COUNTER_INITIATED' as ActionTypeEnum,
        CaseCounterWithdrawn: 'CASE_COUNTER_WITHDRAWN' as ActionTypeEnum,
        CaseDecline: 'CASE_DECLINE' as ActionTypeEnum,
        CitationDataExtracted: 'CITATION_DATA_EXTRACTED' as ActionTypeEnum,
        CourtDateRemoved: 'COURT_DATE_REMOVED' as ActionTypeEnum,
        CourtDateScheduled: 'COURT_DATE_SCHEDULED' as ActionTypeEnum,
        DiscoveryReceived: 'DISCOVERY_RECEIVED' as ActionTypeEnum,
        DiscoveryRequested: 'DISCOVERY_REQUESTED' as ActionTypeEnum,
        DisputeFiled: 'DISPUTE_FILED' as ActionTypeEnum,
        DriverLicenseRequested: 'DRIVER_LICENSE_REQUESTED' as ActionTypeEnum,
        FailedPaymentAttempt: 'FAILED_PAYMENT_ATTEMPT' as ActionTypeEnum,
        NoticeOfAppearanceFiled: 'NOTICE_OF_APPEARANCE_FILED' as ActionTypeEnum,
        Other: 'OTHER' as ActionTypeEnum,
        OverdueBalancePaid: 'OVERDUE_BALANCE_PAID' as ActionTypeEnum,
        ReviewedByLawfirm: 'REVIEWED_BY_LAWFIRM' as ActionTypeEnum,
        SocialMediaAsk: 'SOCIAL_MEDIA_ASK' as ActionTypeEnum,
        TicketMailedToCourt: 'TICKET_MAILED_TO_COURT' as ActionTypeEnum
    };
}


