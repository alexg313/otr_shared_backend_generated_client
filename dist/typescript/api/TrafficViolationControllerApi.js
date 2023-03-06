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
exports.TrafficViolationControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var TrafficViolationControllerApi = /** @class */ (function () {
    function TrafficViolationControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary addViolation
     * @param isLive isLive
     * @param request request
     */
    TrafficViolationControllerApi.prototype.addViolationUsingPOST = function (isLive, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/violations';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'isLive' is not null or undefined
        if (isLive === null || isLive === undefined) {
            throw new Error('Required parameter isLive was null or undefined when calling addViolationUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addViolationUsingPOST.');
        }
        if (isLive !== undefined) {
            queryParameters['isLive'] = isLive;
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
     * @summary deleteViolation
     * @param violationId violationId
     */
    TrafficViolationControllerApi.prototype.deleteViolationUsingDELETE = function (violationId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/violations/{violationId}'
            .replace('{' + 'violationId' + '}', encodeURIComponent(String(violationId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'violationId' is not null or undefined
        if (violationId === null || violationId === undefined) {
            throw new Error('Required parameter violationId was null or undefined when calling deleteViolationUsingDELETE.');
        }
        var httpRequestParams = {
            method: 'DELETE',
            url: localVarPath,
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
     * @summary getRegionsWithViolations
     */
    TrafficViolationControllerApi.prototype.getRegionsWithViolationsUsingGET = function (extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/violations/region-availability';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
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
     * @summary getTrafficViolationTypes
     * @param audience audience
     * @param flavor flavor
     * @param includePenalties includePenalties
     * @param state state
     */
    TrafficViolationControllerApi.prototype.getTrafficViolationTypesUsingGET = function (audience, flavor, includePenalties, state, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/violations';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (audience !== undefined) {
            queryParameters['audience'] = audience;
        }
        if (flavor !== undefined) {
            queryParameters['flavor'] = flavor;
        }
        if (includePenalties !== undefined) {
            queryParameters['includePenalties'] = includePenalties;
        }
        if (state !== undefined) {
            queryParameters['state'] = state;
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
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
     * @summary listViolationClassifications
     * @param regionCode regionCode
     */
    TrafficViolationControllerApi.prototype.listViolationClassificationsUsingGET = function (regionCode, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/violations/classifications';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (regionCode !== undefined) {
            queryParameters['regionCode'] = regionCode;
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
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
     * @summary updateViolation
     * @param violationId violationId
     * @param request request
     */
    TrafficViolationControllerApi.prototype.updateViolationUsingPUT = function (violationId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/violations/{violationId}'
            .replace('{' + 'violationId' + '}', encodeURIComponent(String(violationId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'violationId' is not null or undefined
        if (violationId === null || violationId === undefined) {
            throw new Error('Required parameter violationId was null or undefined when calling updateViolationUsingPUT.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateViolationUsingPUT.');
        }
        var httpRequestParams = {
            method: 'PUT',
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
    TrafficViolationControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return TrafficViolationControllerApi;
}());
exports.TrafficViolationControllerApi = TrafficViolationControllerApi;
