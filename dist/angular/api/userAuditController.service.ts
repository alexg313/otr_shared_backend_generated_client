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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { GetLastLoginResponse } from '../model/getLastLoginResponse';
// @ts-ignore
import { ListUserAuditEventsByCursorResponse } from '../model/listUserAuditEventsByCursorResponse';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class UserAuditControllerService {

    protected basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * getLastLogin
     * @param userId userId
     * @param clients clients
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLastLoginUsingGET(userId: number, clients?: 'ANDROID' | 'DESKTOP_WEBAPP' | 'DMV_GO' | 'DMV_ORG' | 'EMAIL' | 'FRESH_DESK' | 'IOS' | 'MOBILE_WEBAPP' | 'OTR_ADMIN_CONSOLE' | 'OTR_ADMIN_CONSOLE_DEVO' | 'OTR_ADMIN_CONSOLE_LOCALHOST' | 'OTR_EXPLORER' | 'OTR_LAWFIRM_PORTAL' | 'OTR_LAWFIRM_PORTAL_DEVO' | 'OTR_LAWFIRM_PORTAL_LOCALHOST' | 'OTR_WEBSITE' | 'OTR_WEBSITE_DEVO' | 'OTR_WEBSITE_LOCALHOST' | 'OTR_WIDGET' | 'UNKNOWN', observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<GetLastLoginResponse>;
    public getLastLoginUsingGET(userId: number, clients?: 'ANDROID' | 'DESKTOP_WEBAPP' | 'DMV_GO' | 'DMV_ORG' | 'EMAIL' | 'FRESH_DESK' | 'IOS' | 'MOBILE_WEBAPP' | 'OTR_ADMIN_CONSOLE' | 'OTR_ADMIN_CONSOLE_DEVO' | 'OTR_ADMIN_CONSOLE_LOCALHOST' | 'OTR_EXPLORER' | 'OTR_LAWFIRM_PORTAL' | 'OTR_LAWFIRM_PORTAL_DEVO' | 'OTR_LAWFIRM_PORTAL_LOCALHOST' | 'OTR_WEBSITE' | 'OTR_WEBSITE_DEVO' | 'OTR_WEBSITE_LOCALHOST' | 'OTR_WIDGET' | 'UNKNOWN', observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<GetLastLoginResponse>>;
    public getLastLoginUsingGET(userId: number, clients?: 'ANDROID' | 'DESKTOP_WEBAPP' | 'DMV_GO' | 'DMV_ORG' | 'EMAIL' | 'FRESH_DESK' | 'IOS' | 'MOBILE_WEBAPP' | 'OTR_ADMIN_CONSOLE' | 'OTR_ADMIN_CONSOLE_DEVO' | 'OTR_ADMIN_CONSOLE_LOCALHOST' | 'OTR_EXPLORER' | 'OTR_LAWFIRM_PORTAL' | 'OTR_LAWFIRM_PORTAL_DEVO' | 'OTR_LAWFIRM_PORTAL_LOCALHOST' | 'OTR_WEBSITE' | 'OTR_WEBSITE_DEVO' | 'OTR_WEBSITE_LOCALHOST' | 'OTR_WIDGET' | 'UNKNOWN', observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<GetLastLoginResponse>>;
    public getLastLoginUsingGET(userId: number, clients?: 'ANDROID' | 'DESKTOP_WEBAPP' | 'DMV_GO' | 'DMV_ORG' | 'EMAIL' | 'FRESH_DESK' | 'IOS' | 'MOBILE_WEBAPP' | 'OTR_ADMIN_CONSOLE' | 'OTR_ADMIN_CONSOLE_DEVO' | 'OTR_ADMIN_CONSOLE_LOCALHOST' | 'OTR_EXPLORER' | 'OTR_LAWFIRM_PORTAL' | 'OTR_LAWFIRM_PORTAL_DEVO' | 'OTR_LAWFIRM_PORTAL_LOCALHOST' | 'OTR_WEBSITE' | 'OTR_WEBSITE_DEVO' | 'OTR_WEBSITE_LOCALHOST' | 'OTR_WIDGET' | 'UNKNOWN', observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getLastLoginUsingGET.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (clients !== undefined && clients !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>clients, 'clients');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/api/v1/users/${this.configuration.encodeParam({name: "userId", value: userId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}/last-login`;
        return this.httpClient.request<GetLastLoginResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * listUserAuditEventsByCursor
     * @param userId userId
     * @param excludeTypes excludeTypes
     * @param includeTypes includeTypes
     * @param limit limit
     * @param nextPageToken nextPageToken
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listUserAuditEventsByCursorUsingGET(userId: number, excludeTypes?: 'ACCOUNT_COVERAGE_ADDED' | 'ACCOUNT_COVERAGE_REMOVED' | 'ACCOUNT_NOTIFICATION_STATUS_CHANGED' | 'ACCOUNT_STATUS_CHANGED' | 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_COUNTER_ACCEPTED' | 'CASE_COUNTER_DECLINED' | 'CASE_COUNTER_INITIATED' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPDATED' | 'CITATION_UPLOAD' | 'COURT_COVERAGE_ADDED' | 'COURT_COVERAGE_REMOVED' | 'COURT_FEE_CHANGED' | 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'DEFAULT_FEE_ADDED' | 'DEFAULT_FEE_CHANGED' | 'DEFAULT_FEE_REMOVED' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LAWFIRM_TRANSFER_REVERSED' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'MBG_ELIGIBILITY_CHANGED' | 'NAME_CHANGED' | 'OCR_TEXT_EXTRACTED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_PLAN_OPTION_CHANGED' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'USER_REGISTRATION_ATTRIBUTED' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE' | 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS', includeTypes?: 'ACCOUNT_COVERAGE_ADDED' | 'ACCOUNT_COVERAGE_REMOVED' | 'ACCOUNT_NOTIFICATION_STATUS_CHANGED' | 'ACCOUNT_STATUS_CHANGED' | 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_COUNTER_ACCEPTED' | 'CASE_COUNTER_DECLINED' | 'CASE_COUNTER_INITIATED' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPDATED' | 'CITATION_UPLOAD' | 'COURT_COVERAGE_ADDED' | 'COURT_COVERAGE_REMOVED' | 'COURT_FEE_CHANGED' | 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'DEFAULT_FEE_ADDED' | 'DEFAULT_FEE_CHANGED' | 'DEFAULT_FEE_REMOVED' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LAWFIRM_TRANSFER_REVERSED' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'MBG_ELIGIBILITY_CHANGED' | 'NAME_CHANGED' | 'OCR_TEXT_EXTRACTED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_PLAN_OPTION_CHANGED' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'USER_REGISTRATION_ATTRIBUTED' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE' | 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS', limit?: number, nextPageToken?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<ListUserAuditEventsByCursorResponse>;
    public listUserAuditEventsByCursorUsingGET(userId: number, excludeTypes?: 'ACCOUNT_COVERAGE_ADDED' | 'ACCOUNT_COVERAGE_REMOVED' | 'ACCOUNT_NOTIFICATION_STATUS_CHANGED' | 'ACCOUNT_STATUS_CHANGED' | 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_COUNTER_ACCEPTED' | 'CASE_COUNTER_DECLINED' | 'CASE_COUNTER_INITIATED' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPDATED' | 'CITATION_UPLOAD' | 'COURT_COVERAGE_ADDED' | 'COURT_COVERAGE_REMOVED' | 'COURT_FEE_CHANGED' | 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'DEFAULT_FEE_ADDED' | 'DEFAULT_FEE_CHANGED' | 'DEFAULT_FEE_REMOVED' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LAWFIRM_TRANSFER_REVERSED' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'MBG_ELIGIBILITY_CHANGED' | 'NAME_CHANGED' | 'OCR_TEXT_EXTRACTED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_PLAN_OPTION_CHANGED' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'USER_REGISTRATION_ATTRIBUTED' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE' | 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS', includeTypes?: 'ACCOUNT_COVERAGE_ADDED' | 'ACCOUNT_COVERAGE_REMOVED' | 'ACCOUNT_NOTIFICATION_STATUS_CHANGED' | 'ACCOUNT_STATUS_CHANGED' | 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_COUNTER_ACCEPTED' | 'CASE_COUNTER_DECLINED' | 'CASE_COUNTER_INITIATED' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPDATED' | 'CITATION_UPLOAD' | 'COURT_COVERAGE_ADDED' | 'COURT_COVERAGE_REMOVED' | 'COURT_FEE_CHANGED' | 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'DEFAULT_FEE_ADDED' | 'DEFAULT_FEE_CHANGED' | 'DEFAULT_FEE_REMOVED' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LAWFIRM_TRANSFER_REVERSED' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'MBG_ELIGIBILITY_CHANGED' | 'NAME_CHANGED' | 'OCR_TEXT_EXTRACTED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_PLAN_OPTION_CHANGED' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'USER_REGISTRATION_ATTRIBUTED' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE' | 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS', limit?: number, nextPageToken?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpResponse<ListUserAuditEventsByCursorResponse>>;
    public listUserAuditEventsByCursorUsingGET(userId: number, excludeTypes?: 'ACCOUNT_COVERAGE_ADDED' | 'ACCOUNT_COVERAGE_REMOVED' | 'ACCOUNT_NOTIFICATION_STATUS_CHANGED' | 'ACCOUNT_STATUS_CHANGED' | 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_COUNTER_ACCEPTED' | 'CASE_COUNTER_DECLINED' | 'CASE_COUNTER_INITIATED' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPDATED' | 'CITATION_UPLOAD' | 'COURT_COVERAGE_ADDED' | 'COURT_COVERAGE_REMOVED' | 'COURT_FEE_CHANGED' | 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'DEFAULT_FEE_ADDED' | 'DEFAULT_FEE_CHANGED' | 'DEFAULT_FEE_REMOVED' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LAWFIRM_TRANSFER_REVERSED' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'MBG_ELIGIBILITY_CHANGED' | 'NAME_CHANGED' | 'OCR_TEXT_EXTRACTED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_PLAN_OPTION_CHANGED' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'USER_REGISTRATION_ATTRIBUTED' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE' | 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS', includeTypes?: 'ACCOUNT_COVERAGE_ADDED' | 'ACCOUNT_COVERAGE_REMOVED' | 'ACCOUNT_NOTIFICATION_STATUS_CHANGED' | 'ACCOUNT_STATUS_CHANGED' | 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_COUNTER_ACCEPTED' | 'CASE_COUNTER_DECLINED' | 'CASE_COUNTER_INITIATED' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPDATED' | 'CITATION_UPLOAD' | 'COURT_COVERAGE_ADDED' | 'COURT_COVERAGE_REMOVED' | 'COURT_FEE_CHANGED' | 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'DEFAULT_FEE_ADDED' | 'DEFAULT_FEE_CHANGED' | 'DEFAULT_FEE_REMOVED' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LAWFIRM_TRANSFER_REVERSED' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'MBG_ELIGIBILITY_CHANGED' | 'NAME_CHANGED' | 'OCR_TEXT_EXTRACTED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_PLAN_OPTION_CHANGED' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'USER_REGISTRATION_ATTRIBUTED' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE' | 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS', limit?: number, nextPageToken?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<HttpEvent<ListUserAuditEventsByCursorResponse>>;
    public listUserAuditEventsByCursorUsingGET(userId: number, excludeTypes?: 'ACCOUNT_COVERAGE_ADDED' | 'ACCOUNT_COVERAGE_REMOVED' | 'ACCOUNT_NOTIFICATION_STATUS_CHANGED' | 'ACCOUNT_STATUS_CHANGED' | 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_COUNTER_ACCEPTED' | 'CASE_COUNTER_DECLINED' | 'CASE_COUNTER_INITIATED' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPDATED' | 'CITATION_UPLOAD' | 'COURT_COVERAGE_ADDED' | 'COURT_COVERAGE_REMOVED' | 'COURT_FEE_CHANGED' | 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'DEFAULT_FEE_ADDED' | 'DEFAULT_FEE_CHANGED' | 'DEFAULT_FEE_REMOVED' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LAWFIRM_TRANSFER_REVERSED' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'MBG_ELIGIBILITY_CHANGED' | 'NAME_CHANGED' | 'OCR_TEXT_EXTRACTED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_PLAN_OPTION_CHANGED' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'USER_REGISTRATION_ATTRIBUTED' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE' | 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS', includeTypes?: 'ACCOUNT_COVERAGE_ADDED' | 'ACCOUNT_COVERAGE_REMOVED' | 'ACCOUNT_NOTIFICATION_STATUS_CHANGED' | 'ACCOUNT_STATUS_CHANGED' | 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_COUNTER_ACCEPTED' | 'CASE_COUNTER_DECLINED' | 'CASE_COUNTER_INITIATED' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPDATED' | 'CITATION_UPLOAD' | 'COURT_COVERAGE_ADDED' | 'COURT_COVERAGE_REMOVED' | 'COURT_FEE_CHANGED' | 'CUSTOM_FEES_RESET_TO_DEFAULT_FOR_VIOLATION' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'DEFAULT_FEE_ADDED' | 'DEFAULT_FEE_CHANGED' | 'DEFAULT_FEE_REMOVED' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LAWFIRM_TRANSFER_REVERSED' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'MBG_ELIGIBILITY_CHANGED' | 'NAME_CHANGED' | 'OCR_TEXT_EXTRACTED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_PLAN_OPTION_CHANGED' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'USER_REGISTRATION_ATTRIBUTED' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE' | 'VIOLATION_ENABLED_FOR_ALL_COVERED_COURTS', limit?: number, nextPageToken?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext}): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling listUserAuditEventsByCursorUsingGET.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (excludeTypes !== undefined && excludeTypes !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>excludeTypes, 'excludeTypes');
        }
        if (includeTypes !== undefined && includeTypes !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>includeTypes, 'includeTypes');
        }
        if (limit !== undefined && limit !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>limit, 'limit');
        }
        if (nextPageToken !== undefined && nextPageToken !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>nextPageToken, 'nextPageToken');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/users/${this.configuration.encodeParam({name: "userId", value: userId, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int64"})}/audit-events`;
        return this.httpClient.request<ListUserAuditEventsByCursorResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
