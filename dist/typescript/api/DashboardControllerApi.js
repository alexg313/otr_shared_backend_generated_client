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
exports.DashboardControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var DashboardControllerApi = /** @class */ (function () {
    function DashboardControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary getBookings
     * @param request request
     */
    DashboardControllerApi.prototype.getBookingsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/bookings';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getBookingsUsingPOST.');
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
     * @summary getRegisteredUsers
     * @param graphRequest graphRequest
     */
    DashboardControllerApi.prototype.getRegisteredUsersUsingPOST = function (graphRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/users';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling getRegisteredUsersUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary getUserRegistrations
     * @param request request
     */
    DashboardControllerApi.prototype.getUserRegistrationsUsingPOST = function (request, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/registrations';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling getUserRegistrationsUsingPOST.');
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
     * @summary listCasesByStatus
     * @param graphRequest graphRequest
     */
    DashboardControllerApi.prototype.listCasesByStatusUsingPOST = function (graphRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/cases/status';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listCasesByStatusUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listCitations
     * @param endDate endDate
     * @param startDate startDate
     * @param experimentName experimentName
     * @param groupName groupName
     * @param length length
     * @param page page
     * @param stateFilter stateFilter
     * @param timeZoneId timeZoneId
     */
    DashboardControllerApi.prototype.listCitationsUsingGET = function (endDate, startDate, experimentName, groupName, length, page, stateFilter, timeZoneId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/citations';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling listCitationsUsingGET.');
        }
        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling listCitationsUsingGET.');
        }
        if (endDate !== undefined) {
            queryParameters['endDate'] = endDate;
        }
        if (experimentName !== undefined) {
            queryParameters['experimentName'] = experimentName;
        }
        if (groupName !== undefined) {
            queryParameters['groupName'] = groupName;
        }
        if (length !== undefined) {
            queryParameters['length'] = length;
        }
        if (page !== undefined) {
            queryParameters['page'] = page;
        }
        if (startDate !== undefined) {
            queryParameters['startDate'] = startDate;
        }
        if (stateFilter !== undefined) {
            queryParameters['stateFilter'] = stateFilter;
        }
        if (timeZoneId !== undefined) {
            queryParameters['timeZoneId'] = timeZoneId;
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
     * @summary listCustomers
     * @param graphRequest graphRequest
     */
    DashboardControllerApi.prototype.listCustomersUsingPOST = function (graphRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/customers';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listCustomersUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listDropoffs
     * @param graphRequest graphRequest
     */
    DashboardControllerApi.prototype.listDropoffsUsingPOST = function (graphRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/dropoff';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listDropoffsUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listExpenses
     * @param graphRequest graphRequest
     */
    DashboardControllerApi.prototype.listExpensesUsingPOST = function (graphRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/expenses';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listExpensesUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
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
     * @summary listLawyerLeads
     * @param graphRequest graphRequest
     */
    DashboardControllerApi.prototype.listLawyerLeadsUsingPOST = function (graphRequest, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/console/lawyer-leads';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'graphRequest' is not null or undefined
        if (graphRequest === null || graphRequest === undefined) {
            throw new Error('Required parameter graphRequest was null or undefined when calling listLawyerLeadsUsingPOST.');
        }
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            data: graphRequest,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    DashboardControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return DashboardControllerApi;
}());
exports.DashboardControllerApi = DashboardControllerApi;
