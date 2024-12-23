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
export class DriverLicenseControllerApi {
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
     * @summary getDriverLicenses
     * @param userId userId
     * @param includeDeleted includeDeleted
     */
    getDriverLicensesUsingGET(userId, includeDeleted, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/driver-license'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getDriverLicensesUsingGET.');
        }
        if (includeDeleted !== undefined) {
            queryParameters['includeDeleted'] = includeDeleted;
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
     * @summary saveDriverLicensePicture
     * @param userId userId
     * @param request request
     */
    saveDriverLicensePictureUsingPOST(userId, request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/driver-license/picture'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling saveDriverLicensePictureUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveDriverLicensePictureUsingPOST.');
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
     * @summary saveDriverLicense
     * @param userId userId
     * @param request request
     */
    saveDriverLicenseUsingPOST(userId, request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/users/{userId}/driver-license'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling saveDriverLicenseUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveDriverLicenseUsingPOST.');
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
DriverLicenseControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
