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
export class CaseCreationControllerApi {
    constructor($http, $httpParamSerializer, basePath) {
        this.$http = $http;
        this.$httpParamSerializer = $httpParamSerializer;
        this.basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
        this.defaultHeaders = {};
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }
    /**
     *
     * @summary addSampleCase
     * @param lawfirmId lawfirmId
     */
    addSampleCaseUsingPUT(lawfirmId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/citations/{lawfirmId}/sample'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling addSampleCaseUsingPUT.');
        }
        let httpRequestParams = {
            method: 'PUT',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
    /**
     *
     * @summary matchCase
     * @param citationIdString citationIdString
     * @param request request
     */
    matchCaseUsingPOST(citationIdString, request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/citations/{citationIdString}/case'
            .replace('{' + 'citationIdString' + '}', encodeURIComponent(String(citationIdString)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'citationIdString' is not null or undefined
        if (citationIdString === null || citationIdString === undefined) {
            throw new Error('Required parameter citationIdString was null or undefined when calling matchCaseUsingPOST.');
        }
        let httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
}
CaseCreationControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
