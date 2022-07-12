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
exports.CaseActionsControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var CaseActionsControllerApi = /** @class */ (function () {
    function CaseActionsControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary addActionToCaseV2
     * @param caseId caseId
     * @param request request
     */
    CaseActionsControllerApi.prototype.addActionToCaseV2UsingPOST = function (caseId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v2/cases/{caseId}/actions'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling addActionToCaseV2UsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling addActionToCaseV2UsingPOST.');
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
     * @summary getActionTimeline
     * @param caseId caseId
     */
    CaseActionsControllerApi.prototype.getActionTimelineUsingGET = function (caseId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/actions/timeline'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getActionTimelineUsingGET.');
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
     * @summary getAllActions
     */
    CaseActionsControllerApi.prototype.getAllActionsUsingGET = function (extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/actions';
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
     * @summary getCaseActions
     * @param caseId caseId
     * @param showDeleted showDeleted
     */
    CaseActionsControllerApi.prototype.getCaseActionsUsingGET = function (caseId, showDeleted, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/actions'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getCaseActionsUsingGET.');
        }
        if (showDeleted !== undefined) {
            queryParameters['showDeleted'] = showDeleted;
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
     * @summary markActionAsDeleted
     * @param caseActionId caseActionId
     * @param caseId caseId
     * @param isDeleted isDeleted
     */
    CaseActionsControllerApi.prototype.markActionAsDeletedUsingDELETE = function (caseActionId, caseId, isDeleted, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/actions/{caseActionId}'
            .replace('{' + 'caseActionId' + '}', encodeURIComponent(String(caseActionId)))
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseActionId' is not null or undefined
        if (caseActionId === null || caseActionId === undefined) {
            throw new Error('Required parameter caseActionId was null or undefined when calling markActionAsDeletedUsingDELETE.');
        }
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling markActionAsDeletedUsingDELETE.');
        }
        // verify required parameter 'isDeleted' is not null or undefined
        if (isDeleted === null || isDeleted === undefined) {
            throw new Error('Required parameter isDeleted was null or undefined when calling markActionAsDeletedUsingDELETE.');
        }
        if (isDeleted !== undefined) {
            queryParameters['isDeleted'] = isDeleted;
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
     * @summary updateCaseAction
     * @param caseActionId caseActionId
     * @param caseId caseId
     * @param request request
     */
    CaseActionsControllerApi.prototype.updateCaseActionUsingPUT = function (caseActionId, caseId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/actions/{caseActionId}'
            .replace('{' + 'caseActionId' + '}', encodeURIComponent(String(caseActionId)))
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseActionId' is not null or undefined
        if (caseActionId === null || caseActionId === undefined) {
            throw new Error('Required parameter caseActionId was null or undefined when calling updateCaseActionUsingPUT.');
        }
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling updateCaseActionUsingPUT.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateCaseActionUsingPUT.');
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
    CaseActionsControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return CaseActionsControllerApi;
}());
exports.CaseActionsControllerApi = CaseActionsControllerApi;
