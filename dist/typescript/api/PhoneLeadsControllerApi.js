"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneLeadsControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var PhoneLeadsControllerApi = /** @class */ (function () {
    function PhoneLeadsControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary addNoteToPhoneLead
     * @param request request
     */
    PhoneLeadsControllerApi.prototype.addNoteToPhoneLeadUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/phone-leads/notes';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addNoteToPhoneLeadUsingPOST.');
        }
        var httpRequestParams = {
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
    };
    /**
     *
     * @summary dismissPhoneLead
     * @param request request
     */
    PhoneLeadsControllerApi.prototype.dismissPhoneLeadUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/phone-leads/dismiss';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling dismissPhoneLeadUsingPOST.');
        }
        var httpRequestParams = {
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
    };
    PhoneLeadsControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return PhoneLeadsControllerApi;
}());
exports.PhoneLeadsControllerApi = PhoneLeadsControllerApi;
