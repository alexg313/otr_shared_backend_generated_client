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
export class LawfirmSurchargeControllerApi {
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
     * @summary listLawfirmSurcharges
     * @param lawfirmId lawfirmId
     * @param featureType featureType
     */
    listLawfirmSurchargesUsingGET(lawfirmId, featureType, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/surcharges'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling listLawfirmSurchargesUsingGET.');
        }
        if (featureType !== undefined) {
            queryParameters['featureType'] = featureType;
        }
        let httpRequestParams = {
            method: 'GET',
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
     * @summary removeSurcharges
     * @param lawfirmId lawfirmId
     * @param request request
     */
    removeSurchargesUsingDELETE(lawfirmId, request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/surcharges'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling removeSurchargesUsingDELETE.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling removeSurchargesUsingDELETE.');
        }
        let httpRequestParams = {
            method: 'DELETE',
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
    /**
     *
     * @summary saveLawfirmSurcharges
     * @param lawfirmId lawfirmId
     * @param request request
     */
    saveLawfirmSurchargesUsingPOST(lawfirmId, request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/surcharges'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling saveLawfirmSurchargesUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveLawfirmSurchargesUsingPOST.');
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
LawfirmSurchargeControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
