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

export class CaseRefundControllerApi {
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
     * @summary cancelCase
     * @param request request
     */
    public cancelCaseUsingDELETE (request: models.CancelCaseRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCaseResponse> {
        const localVarPath = this.basePath + '/api/v2/cases';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling cancelCaseUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
            data: request,
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
     * @summary refundCasePayment
     * @param caseId caseId
     * @param casePaymentId casePaymentId
     * @param request request
     */
    public refundCasePaymentUsingPOST (caseId: string, casePaymentId: string, request: models.RefundCasePaymentRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/payments/{casePaymentId}/refund'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'casePaymentId' + '}', encodeURIComponent(String(casePaymentId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling refundCasePaymentUsingPOST.');
        }

        // verify required parameter 'casePaymentId' is not null or undefined
        if (casePaymentId === null || casePaymentId === undefined) {
            throw new Error('Required parameter casePaymentId was null or undefined when calling refundCasePaymentUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling refundCasePaymentUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
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
     * @summary releasePayment
     * @param caseId caseId
     * @param casePaymentId casePaymentId
     */
    public releasePaymentUsingPOST (caseId: string, casePaymentId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/payments/{casePaymentId}/release'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'casePaymentId' + '}', encodeURIComponent(String(casePaymentId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling releasePaymentUsingPOST.');
        }

        // verify required parameter 'casePaymentId' is not null or undefined
        if (casePaymentId === null || casePaymentId === undefined) {
            throw new Error('Required parameter casePaymentId was null or undefined when calling releasePaymentUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
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
     * @summary updateRefundEligibilityForCase
     * @param caseId caseId
     * @param request request
     */
    public updateRefundEligibilityForCaseUsingPUT (caseId: string, request: models.UpdateRefundEligibilityForCaseRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetSupportTicketsResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/refund-eligibility'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling updateRefundEligibilityForCaseUsingPUT.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateRefundEligibilityForCaseUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
