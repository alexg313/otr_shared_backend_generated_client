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

export class CaseReferralCodeControllerApi {
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
     * @summary Apply referral code to a case to adjust the estimated cost and/or to assign the rightful lawfirm. This operation is idempotent
     * @param caseId caseId
     * @param codeId codeId
     */
    public applyReferralCodeUsingPOST (caseId: string, codeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.MatchCaseResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/referralcode/{codeId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'codeId' + '}', encodeURIComponent(String(codeId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling applyReferralCodeUsingPOST.');
        }

        // verify required parameter 'codeId' is not null or undefined
        if (codeId === null || codeId === undefined) {
            throw new Error('Required parameter codeId was null or undefined when calling applyReferralCodeUsingPOST.');
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
     * @summary removeReferralCodeFromCase
     * @param caseId caseId
     * @param codeId codeId
     */
    public removeReferralCodeFromCaseUsingDELETE (caseId: string, codeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/referralcode/{codeId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'codeId' + '}', encodeURIComponent(String(codeId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling removeReferralCodeFromCaseUsingDELETE.');
        }

        // verify required parameter 'codeId' is not null or undefined
        if (codeId === null || codeId === undefined) {
            throw new Error('Required parameter codeId was null or undefined when calling removeReferralCodeFromCaseUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
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
