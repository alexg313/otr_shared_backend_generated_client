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


export interface LawfirmAuditEventModel { 
    authorName?: string;
    clientType?: LawfirmAuditEventModel.ClientTypeEnum;
    event?: LawfirmAuditEventModel.EventEnum;
    eventDate?: string;
    eventId?: number;
    lawfirmEventId?: number;
    newValue?: string;
    oldValue?: string;
    userId?: number;
}
export namespace LawfirmAuditEventModel {
    export type ClientTypeEnum = 'ANDROID' | 'DESKTOP_WEBAPP' | 'DMV_GO' | 'DMV_ORG' | 'FRESH_DESK' | 'IOS' | 'MOBILE_WEBAPP' | 'OTR_ADMIN_CONSOLE' | 'OTR_ADMIN_CONSOLE_DEVO' | 'OTR_ADMIN_CONSOLE_LOCALHOST' | 'OTR_EXPLORER' | 'OTR_LAWFIRM_PORTAL' | 'OTR_LAWFIRM_PORTAL_DEVO' | 'OTR_LAWFIRM_PORTAL_LOCALHOST' | 'OTR_WEBSITE' | 'OTR_WEBSITE_DEVO' | 'OTR_WEBSITE_LOCALHOST' | 'OTR_WIDGET' | 'UNKNOWN';
    export const ClientTypeEnum = {
        Android: 'ANDROID' as ClientTypeEnum,
        DesktopWebapp: 'DESKTOP_WEBAPP' as ClientTypeEnum,
        DmvGo: 'DMV_GO' as ClientTypeEnum,
        DmvOrg: 'DMV_ORG' as ClientTypeEnum,
        FreshDesk: 'FRESH_DESK' as ClientTypeEnum,
        Ios: 'IOS' as ClientTypeEnum,
        MobileWebapp: 'MOBILE_WEBAPP' as ClientTypeEnum,
        OtrAdminConsole: 'OTR_ADMIN_CONSOLE' as ClientTypeEnum,
        OtrAdminConsoleDevo: 'OTR_ADMIN_CONSOLE_DEVO' as ClientTypeEnum,
        OtrAdminConsoleLocalhost: 'OTR_ADMIN_CONSOLE_LOCALHOST' as ClientTypeEnum,
        OtrExplorer: 'OTR_EXPLORER' as ClientTypeEnum,
        OtrLawfirmPortal: 'OTR_LAWFIRM_PORTAL' as ClientTypeEnum,
        OtrLawfirmPortalDevo: 'OTR_LAWFIRM_PORTAL_DEVO' as ClientTypeEnum,
        OtrLawfirmPortalLocalhost: 'OTR_LAWFIRM_PORTAL_LOCALHOST' as ClientTypeEnum,
        OtrWebsite: 'OTR_WEBSITE' as ClientTypeEnum,
        OtrWebsiteDevo: 'OTR_WEBSITE_DEVO' as ClientTypeEnum,
        OtrWebsiteLocalhost: 'OTR_WEBSITE_LOCALHOST' as ClientTypeEnum,
        OtrWidget: 'OTR_WIDGET' as ClientTypeEnum,
        Unknown: 'UNKNOWN' as ClientTypeEnum
    };
    export type EventEnum = 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPLOAD' | 'DECIDE_EXPERIMENT_GROUP_ACTION' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL';
    export const EventEnum = {
        CaseAccept: 'CASE_ACCEPT' as EventEnum,
        CaseBooking: 'CASE_BOOKING' as EventEnum,
        CaseCancel: 'CASE_CANCEL' as EventEnum,
        CaseDecline: 'CASE_DECLINE' as EventEnum,
        CaseMatch: 'CASE_MATCH' as EventEnum,
        CaseResolve: 'CASE_RESOLVE' as EventEnum,
        CaseStatus: 'CASE_STATUS' as EventEnum,
        CaseTransfer: 'CASE_TRANSFER' as EventEnum,
        CaseUnserviceableRequest: 'CASE_UNSERVICEABLE_REQUEST' as EventEnum,
        CitationUpload: 'CITATION_UPLOAD' as EventEnum,
        DecideExperimentGroupAction: 'DECIDE_EXPERIMENT_GROUP_ACTION' as EventEnum,
        ExternalTicketRequest: 'EXTERNAL_TICKET_REQUEST' as EventEnum,
        GhostAccountCreated: 'GHOST_ACCOUNT_CREATED' as EventEnum,
        LawfirmAccountPriority: 'LAWFIRM_ACCOUNT_PRIORITY' as EventEnum,
        LawfirmAccountStatus: 'LAWFIRM_ACCOUNT_STATUS' as EventEnum,
        LawfirmDailyCapacity: 'LAWFIRM_DAILY_CAPACITY' as EventEnum,
        LawfirmTotalCapacity: 'LAWFIRM_TOTAL_CAPACITY' as EventEnum,
        LineItemAdded: 'LINE_ITEM_ADDED' as EventEnum,
        LineItemDeleted: 'LINE_ITEM_DELETED' as EventEnum,
        PasswordChange: 'PASSWORD_CHANGE' as EventEnum,
        PasswordResetRequested: 'PASSWORD_RESET_REQUESTED' as EventEnum,
        PaymentAuthorized: 'PAYMENT_AUTHORIZED' as EventEnum,
        PaymentCaptured: 'PAYMENT_CAPTURED' as EventEnum,
        PaymentMethodAdd: 'PAYMENT_METHOD_ADD' as EventEnum,
        PaymentMethodDelete: 'PAYMENT_METHOD_DELETE' as EventEnum,
        PaymentRefunded: 'PAYMENT_REFUNDED' as EventEnum,
        PaymentScheduled: 'PAYMENT_SCHEDULED' as EventEnum,
        ReferralCodeApplied: 'REFERRAL_CODE_APPLIED' as EventEnum,
        ReferralCodeAttemptFailed: 'REFERRAL_CODE_ATTEMPT_FAILED' as EventEnum,
        ReferralCodeRemoved: 'REFERRAL_CODE_REMOVED' as EventEnum,
        SaveVacationModeEndDate: 'SAVE_VACATION_MODE_END_DATE' as EventEnum,
        SaveVacationModeReason: 'SAVE_VACATION_MODE_REASON' as EventEnum,
        Unknown: 'UNKNOWN' as EventEnum,
        UserLoginEvent: 'USER_LOGIN_EVENT' as EventEnum,
        UserRegistration: 'USER_REGISTRATION' as EventEnum,
        VacationModeToggle: 'VACATION_MODE_TOGGLE' as EventEnum,
        VacationModeUpdate: 'VACATION_MODE_UPDATE' as EventEnum,
        VerifyEmail: 'VERIFY_EMAIL' as EventEnum
    };
}


