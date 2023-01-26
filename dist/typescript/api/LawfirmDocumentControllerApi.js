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
exports.LawfirmDocumentControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var LawfirmDocumentControllerApi = /** @class */ (function () {
    function LawfirmDocumentControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary generateDoc
     * @param docType doc_type
     * @param lawfirmId lawfirmId
     * @param request request
     */
    LawfirmDocumentControllerApi.prototype.generateDocUsingPOST = function (docType, lawfirmId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/documents'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'docType' is not null or undefined
        if (docType === null || docType === undefined) {
            throw new Error('Required parameter docType was null or undefined when calling generateDocUsingPOST.');
        }
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling generateDocUsingPOST.');
        }
        if (docType !== undefined) {
            queryParameters['doc_type'] = docType;
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
     * @summary getDocument
     * @param docType doc_type
     * @param lawfirmId lawfirmId
     */
    LawfirmDocumentControllerApi.prototype.getDocumentUsingGET = function (docType, lawfirmId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/documents'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'docType' is not null or undefined
        if (docType === null || docType === undefined) {
            throw new Error('Required parameter docType was null or undefined when calling getDocumentUsingGET.');
        }
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling getDocumentUsingGET.');
        }
        if (docType !== undefined) {
            queryParameters['doc_type'] = docType;
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
     * @summary getLawfirmCaseDocuments
     * @param caseId caseId
     */
    LawfirmDocumentControllerApi.prototype.getLawfirmCaseDocumentsUsingGET = function (caseId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/cases/{caseId}/documents'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getLawfirmCaseDocumentsUsingGET.');
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
     * @summary markDocumentWithDecision
     * @param docId docId
     * @param decisionRequest decisionRequest
     */
    LawfirmDocumentControllerApi.prototype.markDocumentWithDecisionUsingPOST = function (docId, decisionRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/documents/{docId}/decision'
            .replace('{' + 'docId' + '}', encodeURIComponent(String(docId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'docId' is not null or undefined
        if (docId === null || docId === undefined) {
            throw new Error('Required parameter docId was null or undefined when calling markDocumentWithDecisionUsingPOST.');
        }
        // verify required parameter 'decisionRequest' is not null or undefined
        if (decisionRequest === null || decisionRequest === undefined) {
            throw new Error('Required parameter decisionRequest was null or undefined when calling markDocumentWithDecisionUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: decisionRequest,
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
     * @summary previewDoc
     * @param docType doc_type
     * @param lawfirmId lawfirmId
     * @param request request
     */
    LawfirmDocumentControllerApi.prototype.previewDocUsingPOST = function (docType, lawfirmId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/documents/preview'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'docType' is not null or undefined
        if (docType === null || docType === undefined) {
            throw new Error('Required parameter docType was null or undefined when calling previewDocUsingPOST.');
        }
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling previewDocUsingPOST.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling previewDocUsingPOST.');
        }
        if (docType !== undefined) {
            queryParameters['doc_type'] = docType;
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
     * @summary uploadCopy
     * @param lawfirmId lawfirmId
     * @param request request
     */
    LawfirmDocumentControllerApi.prototype.uploadCopyUsingPUT = function (lawfirmId, request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/lawfirms/{lawfirmId}/documents'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling uploadCopyUsingPUT.');
        }
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling uploadCopyUsingPUT.');
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
    LawfirmDocumentControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return LawfirmDocumentControllerApi;
}());
exports.LawfirmDocumentControllerApi = LawfirmDocumentControllerApi;
