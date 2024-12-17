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

export interface CitationAuditEventModel {
    "authorName"?: string;
    "citationEventId"?: number;
    "clientType"?: CitationAuditEventModel.ClientTypeEnum;
    "event"?: CitationAuditEventModel.EventEnum;
    "eventDate"?: string;
    "eventId"?: number;
    "newValue"?: string;
    "oldValue"?: string;
    "subject"?: string;
    "userId"?: number;
}

export namespace CitationAuditEventModel {
    export enum ClientTypeEnum {
        ANDROID = <any> 'ANDROID',
        DESKTOPWEBAPP = <any> 'DESKTOP_WEBAPP',
        DMVGO = <any> 'DMV_GO',
        DMVORG = <any> 'DMV_ORG',
        EMAIL = <any> 'EMAIL',
        FRESHDESK = <any> 'FRESH_DESK',
        IOS = <any> 'IOS',
        LOCALHOST = <any> 'LOCALHOST',
        MOBILEWEBAPP = <any> 'MOBILE_WEBAPP',
        OTRADMINCONSOLE = <any> 'OTR_ADMIN_CONSOLE',
        OTRADMINCONSOLEDEVO = <any> 'OTR_ADMIN_CONSOLE_DEVO',
        OTRADMINCONSOLELOCALHOST = <any> 'OTR_ADMIN_CONSOLE_LOCALHOST',
        OTREXPLORER = <any> 'OTR_EXPLORER',
        OTRJOBSCHEDULER = <any> 'OTR_JOB_SCHEDULER',
        OTRLAWFIRMPORTAL = <any> 'OTR_LAWFIRM_PORTAL',
        OTRLAWFIRMPORTALDEVO = <any> 'OTR_LAWFIRM_PORTAL_DEVO',
        OTRLAWFIRMPORTALLOCALHOST = <any> 'OTR_LAWFIRM_PORTAL_LOCALHOST',
        OTRWEBSITE = <any> 'OTR_WEBSITE',
        OTRWEBSITEDEVO = <any> 'OTR_WEBSITE_DEVO',
        OTRWEBSITELOCALHOST = <any> 'OTR_WEBSITE_LOCALHOST',
        OTRWIDGET = <any> 'OTR_WIDGET',
        UNKNOWN = <any> 'UNKNOWN'
    }
    export enum EventEnum {
        ACCOUNTCOVERAGEADDED = <any> 'ACCOUNT_COVERAGE_ADDED',
        ACCOUNTCOVERAGEREMOVED = <any> 'ACCOUNT_COVERAGE_REMOVED',
        ACCOUNTNOTIFICATIONSTATUSCHANGED = <any> 'ACCOUNT_NOTIFICATION_STATUS_CHANGED',
        ACCOUNTSTATUSCHANGED = <any> 'ACCOUNT_STATUS_CHANGED',
        CASEACCEPT = <any> 'CASE_ACCEPT',
        CASEBOOKING = <any> 'CASE_BOOKING',
        CASECANCEL = <any> 'CASE_CANCEL',
        CASECOUNTERACCEPTED = <any> 'CASE_COUNTER_ACCEPTED',
        CASECOUNTERDECLINED = <any> 'CASE_COUNTER_DECLINED',
        CASECOUNTERINITIATED = <any> 'CASE_COUNTER_INITIATED',
        CASECOUNTERWITHDRAWN = <any> 'CASE_COUNTER_WITHDRAWN',
        CASEDECLINE = <any> 'CASE_DECLINE',
        CASEMATCH = <any> 'CASE_MATCH',
        CASEPAYMENTDELETED = <any> 'CASE_PAYMENT_DELETED',
        CASEPAYMENTRESCHEDULED = <any> 'CASE_PAYMENT_RESCHEDULED',
        CASERESOLVE = <any> 'CASE_RESOLVE',
        CASESTATUS = <any> 'CASE_STATUS',
        CASETRANSFER = <any> 'CASE_TRANSFER',
        CASEUNSERVICEABLEREQUEST = <any> 'CASE_UNSERVICEABLE_REQUEST',
        CITATIONUPDATED = <any> 'CITATION_UPDATED',
        CITATIONUPLOAD = <any> 'CITATION_UPLOAD',
        COURTCOVERAGEADDED = <any> 'COURT_COVERAGE_ADDED',
        COURTCOVERAGEREMOVED = <any> 'COURT_COVERAGE_REMOVED',
        COURTFEECHANGED = <any> 'COURT_FEE_CHANGED',
        CUSTOMFEESRESETTODEFAULTFORVIOLATION = <any> 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION',
        DECIDEEXPERIMENTGROUPCOMMAND = <any> 'DECIDE_EXPERIMENT_GROUP_COMMAND',
        DEFAULTFEEADDED = <any> 'DEFAULT_FEE_ADDED',
        DEFAULTFEECHANGED = <any> 'DEFAULT_FEE_CHANGED',
        DEFAULTFEEREMOVED = <any> 'DEFAULT_FEE_REMOVED',
        EMAILSENT = <any> 'EMAIL_SENT',
        EXTERNALTICKETREQUEST = <any> 'EXTERNAL_TICKET_REQUEST',
        GHOSTACCOUNTCREATED = <any> 'GHOST_ACCOUNT_CREATED',
        LAWFIRMACCOUNTPRIORITY = <any> 'LAWFIRM_ACCOUNT_PRIORITY',
        LAWFIRMACCOUNTSTATUS = <any> 'LAWFIRM_ACCOUNT_STATUS',
        LAWFIRMADDRESSUPDATED = <any> 'LAWFIRM_ADDRESS_UPDATED',
        LAWFIRMDAILYCAPACITY = <any> 'LAWFIRM_DAILY_CAPACITY',
        LAWFIRMFEEREFUNDED = <any> 'LAWFIRM_FEE_REFUNDED',
        LAWFIRMNAMECHANGED = <any> 'LAWFIRM_NAME_CHANGED',
        LAWFIRMPERSONNELADDED = <any> 'LAWFIRM_PERSONNEL_ADDED',
        LAWFIRMPROFILEUPDATED = <any> 'LAWFIRM_PROFILE_UPDATED',
        LAWFIRMSETTINGUPDATED = <any> 'LAWFIRM_SETTING_UPDATED',
        LAWFIRMTOTALCAPACITY = <any> 'LAWFIRM_TOTAL_CAPACITY',
        LAWFIRMTRANSFERREVERSED = <any> 'LAWFIRM_TRANSFER_REVERSED',
        LINEITEMADDED = <any> 'LINE_ITEM_ADDED',
        LINEITEMDELETED = <any> 'LINE_ITEM_DELETED',
        LINEITEMUPDATED = <any> 'LINE_ITEM_UPDATED',
        MBGELIGIBILITYCHANGED = <any> 'MBG_ELIGIBILITY_CHANGED',
        NAMECHANGED = <any> 'NAME_CHANGED',
        OCRTEXTEXTRACTED = <any> 'OCR_TEXT_EXTRACTED',
        PASSWORDCHANGE = <any> 'PASSWORD_CHANGE',
        PASSWORDRESETREQUESTED = <any> 'PASSWORD_RESET_REQUESTED',
        PAYMENTAUTHORIZED = <any> 'PAYMENT_AUTHORIZED',
        PAYMENTCAPTURED = <any> 'PAYMENT_CAPTURED',
        PAYMENTMETHODADD = <any> 'PAYMENT_METHOD_ADD',
        PAYMENTMETHODDELETE = <any> 'PAYMENT_METHOD_DELETE',
        PAYMENTPLANOPTIONCHANGED = <any> 'PAYMENT_PLAN_OPTION_CHANGED',
        PAYMENTREFUNDED = <any> 'PAYMENT_REFUNDED',
        PAYMENTSCHEDULED = <any> 'PAYMENT_SCHEDULED',
        PHONENUMBERADDED = <any> 'PHONE_NUMBER_ADDED',
        PHONENUMBERDELETED = <any> 'PHONE_NUMBER_DELETED',
        REFERRALCODEAPPLIED = <any> 'REFERRAL_CODE_APPLIED',
        REFERRALCODEATTEMPTFAILED = <any> 'REFERRAL_CODE_ATTEMPT_FAILED',
        REFERRALCODEREMOVED = <any> 'REFERRAL_CODE_REMOVED',
        SAVEVACATIONMODEENDDATE = <any> 'SAVE_VACATION_MODE_END_DATE',
        SAVEVACATIONMODEREASON = <any> 'SAVE_VACATION_MODE_REASON',
        SUBSCRIPTIONPLANPURCHASED = <any> 'SUBSCRIPTION_PLAN_PURCHASED',
        UNKNOWN = <any> 'UNKNOWN',
        USERDELETED = <any> 'USER_DELETED',
        USERLOGINEVENT = <any> 'USER_LOGIN_EVENT',
        USERMERGE = <any> 'USER_MERGE',
        USERREGISTRATION = <any> 'USER_REGISTRATION',
        USERREGISTRATIONATTRIBUTED = <any> 'USER_REGISTRATION_ATTRIBUTED',
        USERREVIVED = <any> 'USER_REVIVED',
        USERSETTINGUPDATED = <any> 'USER_SETTING_UPDATED',
        VACATIONMODETOGGLE = <any> 'VACATION_MODE_TOGGLE',
        VACATIONMODEUPDATE = <any> 'VACATION_MODE_UPDATE',
        VERIFYEMAIL = <any> 'VERIFY_EMAIL',
        VERIFYPHONE = <any> 'VERIFY_PHONE',
        VIOLATIONENABLEDFORALLCOVEREDCOURTS = <any> 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS'
    }
}
