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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class UserAuditControllerApi {
    protected basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary getLastLogin
     * @param userId userId
     * @param clients clients
     */
    public getLastLoginUsingGET (userId: number, clients?: 'ANDROID' | 'DESKTOP_WEBAPP' | 'DMV_GO' | 'DMV_ORG' | 'FRESH_DESK' | 'IOS' | 'MOBILE_WEBAPP' | 'OTR_ADMIN_CONSOLE' | 'OTR_ADMIN_CONSOLE_DEVO' | 'OTR_ADMIN_CONSOLE_LOCALHOST' | 'OTR_EXPLORER' | 'OTR_LAWFIRM_PORTAL' | 'OTR_LAWFIRM_PORTAL_DEVO' | 'OTR_LAWFIRM_PORTAL_LOCALHOST' | 'OTR_WEBSITE' | 'OTR_WEBSITE_DEVO' | 'OTR_WEBSITE_LOCALHOST' | 'OTR_WIDGET' | 'UNKNOWN', extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetLastLoginResponse> {
        const localVarPath = this.basePath + '/api/v1/api/v1/users/{userId}/last-login'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getLastLoginUsingGET.');
        }

        if (clients !== undefined) {
            queryParameters['clients'] = clients;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary listUserAuditEventsByCursor
     * @param userId userId
     * @param excludeTypes excludeTypes
     * @param includeTypes includeTypes
     * @param limit limit
     * @param nextPageToken nextPageToken
     */
    public listUserAuditEventsByCursorUsingGET (userId: number, excludeTypes?: 'ACCOUNT_NOTIFICATION_STATUS_CHANGED' | 'ACCOUNT_STATUS_CHANGED' | 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPDATED' | 'CITATION_UPLOAD' | 'COURT_COVERAGE_ADDED' | 'COURT_COVERAGE_REMOVED' | 'COURT_FEE_CHANGED' | 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'DEFAULT_FEE_ADDED' | 'DEFAULT_FEE_CHANGED' | 'DEFAULT_FEE_REMOVED' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'MBG_ELIGIBILITY_CHANGED' | 'NAME_CHANGED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_PLAN_OPTION_CHANGED' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'USER_REGISTRATION_ATTRIBUTED' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE' | 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS', includeTypes?: 'ACCOUNT_NOTIFICATION_STATUS_CHANGED' | 'ACCOUNT_STATUS_CHANGED' | 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPDATED' | 'CITATION_UPLOAD' | 'COURT_COVERAGE_ADDED' | 'COURT_COVERAGE_REMOVED' | 'COURT_FEE_CHANGED' | 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'DEFAULT_FEE_ADDED' | 'DEFAULT_FEE_CHANGED' | 'DEFAULT_FEE_REMOVED' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'MBG_ELIGIBILITY_CHANGED' | 'NAME_CHANGED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_PLAN_OPTION_CHANGED' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'USER_REGISTRATION_ATTRIBUTED' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE' | 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS', limit?: number, nextPageToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ListUserAuditEventsByCursorResponse> {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/audit-events'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling listUserAuditEventsByCursorUsingGET.');
        }

        if (excludeTypes !== undefined) {
            queryParameters['excludeTypes'] = excludeTypes;
        }

        if (includeTypes !== undefined) {
            queryParameters['includeTypes'] = includeTypes;
        }

        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (nextPageToken !== undefined) {
            queryParameters['nextPageToken'] = nextPageToken;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
