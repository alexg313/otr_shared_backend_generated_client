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
exports.ExternalTicketLookupControllerApi = void 0;
/* tslint:disable:no-unused-variable member-ordering */
var ExternalTicketLookupControllerApi = /** @class */ (function () {
    function ExternalTicketLookupControllerApi($http, $httpParamSerializer, basePath) {
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
     * @summary getExternalTickets
     * @param countyId countyId
     * @param regionCode regionCode
     * @param dateOfBirth dateOfBirth
     * @param driversLicenseId driversLicenseId
     * @param lastName lastName
     * @param organizationName organizationName
     */
    ExternalTicketLookupControllerApi.prototype.getExternalTicketsUsingGET = function (countyId, regionCode, dateOfBirth, driversLicenseId, lastName, organizationName, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/v1/external-tickets';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'countyId' is not null or undefined
        if (countyId === null || countyId === undefined) {
            throw new Error('Required parameter countyId was null or undefined when calling getExternalTicketsUsingGET.');
        }
        // verify required parameter 'regionCode' is not null or undefined
        if (regionCode === null || regionCode === undefined) {
            throw new Error('Required parameter regionCode was null or undefined when calling getExternalTicketsUsingGET.');
        }
        if (countyId !== undefined) {
            queryParameters['countyId'] = countyId;
        }
        if (dateOfBirth !== undefined) {
            queryParameters['dateOfBirth'] = dateOfBirth;
        }
        if (driversLicenseId !== undefined) {
            queryParameters['driversLicenseId'] = driversLicenseId;
        }
        if (lastName !== undefined) {
            queryParameters['lastName'] = lastName;
        }
        if (organizationName !== undefined) {
            queryParameters['organizationName'] = organizationName;
        }
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
    ExternalTicketLookupControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return ExternalTicketLookupControllerApi;
}());
exports.ExternalTicketLookupControllerApi = ExternalTicketLookupControllerApi;
