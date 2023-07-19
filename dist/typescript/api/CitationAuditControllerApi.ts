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

export class CitationAuditControllerApi {
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
     * @summary listCitationAuditEvents
     * @param citationId citationId
     * @param excludeTypes excludeTypes
     * @param includeTypes includeTypes
     * @param limit limit
     * @param nextPageToken nextPageToken
     */
    public listCitationAuditEventsUsingGET (citationId: number, excludeTypes?: 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPLOAD' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE', includeTypes?: 'CASE_ACCEPT' | 'CASE_BOOKING' | 'CASE_CANCEL' | 'CASE_DECLINE' | 'CASE_MATCH' | 'CASE_RESOLVE' | 'CASE_STATUS' | 'CASE_TRANSFER' | 'CASE_UNSERVICEABLE_REQUEST' | 'CITATION_UPLOAD' | 'DECIDE_EXPERIMENT_GROUP_COMMAND' | 'EXTERNAL_TICKET_REQUEST' | 'GHOST_ACCOUNT_CREATED' | 'LAWFIRM_ACCOUNT_PRIORITY' | 'LAWFIRM_ACCOUNT_STATUS' | 'LAWFIRM_DAILY_CAPACITY' | 'LAWFIRM_TOTAL_CAPACITY' | 'LINE_ITEM_ADDED' | 'LINE_ITEM_DELETED' | 'PASSWORD_CHANGE' | 'PASSWORD_RESET_REQUESTED' | 'PAYMENT_AUTHORIZED' | 'PAYMENT_CAPTURED' | 'PAYMENT_METHOD_ADD' | 'PAYMENT_METHOD_DELETE' | 'PAYMENT_REFUNDED' | 'PAYMENT_SCHEDULED' | 'REFERRAL_CODE_APPLIED' | 'REFERRAL_CODE_ATTEMPT_FAILED' | 'REFERRAL_CODE_REMOVED' | 'SAVE_VACATION_MODE_END_DATE' | 'SAVE_VACATION_MODE_REASON' | 'UNKNOWN' | 'USER_LOGIN_EVENT' | 'USER_REGISTRATION' | 'VACATION_MODE_TOGGLE' | 'VACATION_MODE_UPDATE' | 'VERIFY_EMAIL' | 'VERIFY_PHONE', limit?: number, nextPageToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ListCitationAuditEventsResponse> {
        const localVarPath = this.basePath + '/api/v1/citations/{citationId}/audit-events'
            .replace('{' + 'citationId' + '}', encodeURIComponent(String(citationId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'citationId' is not null or undefined
        if (citationId === null || citationId === undefined) {
            throw new Error('Required parameter citationId was null or undefined when calling listCitationAuditEventsUsingGET.');
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
