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
exports.StripeWebhookControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var StripeWebhookControllerApi = /** @class */ (function () {
    function StripeWebhookControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary handleStripeWebhookForConnectedAccounts
     * @param request request
     */
    StripeWebhookControllerApi.prototype.handleStripeWebhookForConnectedAccountsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/stripe/acct_15jGdjA1uVHZiLuV/webhook/connected-account';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
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
     * @summary handleStripeWebhookFromLawfirmAccount
     * @param request request
     */
    StripeWebhookControllerApi.prototype.handleStripeWebhookFromLawfirmAccountUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/stripe/acct_15jGPnDVzhogLb0T/webhook';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
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
     * @summary handleStripeWebhookFromOTRAccount
     * @param request request
     */
    StripeWebhookControllerApi.prototype.handleStripeWebhookFromOTRAccountUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/stripe/acct_15jGdjA1uVHZiLuV/webhook';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
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
    StripeWebhookControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return StripeWebhookControllerApi;
}());
exports.StripeWebhookControllerApi = StripeWebhookControllerApi;
