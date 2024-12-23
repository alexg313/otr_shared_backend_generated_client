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
export class ReferralControllerApi {
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
     * @summary addReferral
     * @param request request
     */
    addReferralUsingPOST(request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/referrals';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addReferralUsingPOST.');
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
    /**
     *
     * @summary getReferralHistory
     */
    getReferralHistoryUsingGET(extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/referrals';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
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
     * @summary listReferrals
     * @param userId userId
     */
    listReferralsUsingGET(userId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v2/referrals';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling listReferralsUsingGET.');
        }
        if (userId !== undefined) {
            queryParameters['userId'] = userId;
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
     * @summary publishReferralContacts
     * @param request request
     */
    publishReferralContactsUsingPOST(request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/referrals/contacts';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling publishReferralContactsUsingPOST.');
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
ReferralControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
