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
export class UtilityControllerApi {
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
     * @summary backfillLawfirmTransactionRecords
     * @param request request
     */
    backfillLawfirmTransactionRecordsUsingPOST(request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/utility/backfill-lawfirm-transaction-records';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling backfillLawfirmTransactionRecordsUsingPOST.');
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
     * @summary getStatus
     */
    getStatusUsingGET(extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/utility/status';
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
     * @summary setStatus
     * @param lawfirmTransactionsStatus lawfirmTransactionsStatus
     * @param syncStatus syncStatus
     */
    setStatusUsingPOST(lawfirmTransactionsStatus, syncStatus, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/utility/status';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        if (lawfirmTransactionsStatus !== undefined) {
            queryParameters['lawfirmTransactionsStatus'] = lawfirmTransactionsStatus;
        }
        if (syncStatus !== undefined) {
            queryParameters['syncStatus'] = syncStatus;
        }
        let httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    }
}
UtilityControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
