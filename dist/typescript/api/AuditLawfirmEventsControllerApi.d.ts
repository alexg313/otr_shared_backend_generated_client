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
/// <reference types="angular" />
import * as models from '../model/models';
export declare class AuditLawfirmEventsControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary listLawfirmAuditEventsByCursor
     * @param lawfirmId lawfirmId
     * @param excludeTypes excludeTypes
     * @param includeTypes includeTypes
     * @param limit limit
     * @param nextPageToken nextPageToken
     */
    listLawfirmAuditEventsByCursorUsingGET(lawfirmId: number, excludeTypes?: 'ACCOUNT_COVERAGE_ADDED' | 'ACCOUNT_COVERAGE_REMOVED' | 'ACCOUNT_NOTIFICATION_STATUS_CHANGED' | 'ACCOUNT_STATUS_CHANGED' | 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_COUNTER_ACCEPTED' | 'CASE_COUNTER_DECLINED' | 'CASE_COUNTER_INITIATED' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_PAYMENT_DELETED' | 'CASE_PAYMENT_RESCHEDULED' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPDATED' | 'CITATION_UPLOAD' | 'COURT_COVERAGE_ADDED' | 'COURT_COVERAGE_REMOVED' | 'COURT_FEE_CHANGED' | 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'DEFAULT_FEE_ADDED' | 'DEFAULT_FEE_CHANGED' | 'DEFAULT_FEE_REMOVED' | 'EMAIL_SENT' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_FEE_REFUNDED' | 'LAWFIRM_TOTAL_CAPACITY' | 'LAWFIRM_TRANSFER_REVERSED' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'LINE_ITEM_UPDATED' | 'MBG_ELIGIBILITY_CHANGED' | 'NAME_CHANGED' | 'OCR_TEXT_EXTRACTED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_PLAN_OPTION_CHANGED' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'USER_REGISTRATION_ATTRIBUTED' | 'USER_SETTING_UPDATED' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE' | 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS', includeTypes?: 'ACCOUNT_COVERAGE_ADDED' | 'ACCOUNT_COVERAGE_REMOVED' | 'ACCOUNT_NOTIFICATION_STATUS_CHANGED' | 'ACCOUNT_STATUS_CHANGED' | 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_COUNTER_ACCEPTED' | 'CASE_COUNTER_DECLINED' | 'CASE_COUNTER_INITIATED' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_PAYMENT_DELETED' | 'CASE_PAYMENT_RESCHEDULED' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPDATED' | 'CITATION_UPLOAD' | 'COURT_COVERAGE_ADDED' | 'COURT_COVERAGE_REMOVED' | 'COURT_FEE_CHANGED' | 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'DEFAULT_FEE_ADDED' | 'DEFAULT_FEE_CHANGED' | 'DEFAULT_FEE_REMOVED' | 'EMAIL_SENT' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_FEE_REFUNDED' | 'LAWFIRM_TOTAL_CAPACITY' | 'LAWFIRM_TRANSFER_REVERSED' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'LINE_ITEM_UPDATED' | 'MBG_ELIGIBILITY_CHANGED' | 'NAME_CHANGED' | 'OCR_TEXT_EXTRACTED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_PLAN_OPTION_CHANGED' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'USER_REGISTRATION_ATTRIBUTED' | 'USER_SETTING_UPDATED' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE' | 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS', limit?: number, nextPageToken?: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.ListLawfirmAuditEventsByCursorResponse>;
}
