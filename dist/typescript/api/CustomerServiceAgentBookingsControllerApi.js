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
export class CustomerServiceAgentBookingsControllerApi {
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
     * @summary deleteAgentBooking
     * @param agentBookingId agentBookingId
     */
    deleteAgentBookingUsingDELETE(agentBookingId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/cs-agent-bookings/{agentBookingId}'
            .replace('{' + 'agentBookingId' + '}', encodeURIComponent(String(agentBookingId)));
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'agentBookingId' is not null or undefined
        if (agentBookingId === null || agentBookingId === undefined) {
            throw new Error('Required parameter agentBookingId was null or undefined when calling deleteAgentBookingUsingDELETE.');
        }
        let httpRequestParams = {
            method: 'DELETE',
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
     * @summary listAgentBookings
     * @param agentTeam agentTeam
     * @param agentUserId agentUserId
     * @param caseStatus caseStatus
     * @param channel channel
     * @param direction direction
     * @param endDate endDate
     * @param length length
     * @param offset offset
     * @param sortBy sortBy
     * @param sortOrder sortOrder
     * @param startDate startDate
     * @param state state
     * @param statusCategory statusCategory
     * @param timeZoneId timeZoneId
     */
    listAgentBookingsUsingGET(agentTeam, agentUserId, caseStatus, channel, direction, endDate, length, offset, sortBy, sortOrder, startDate, state, statusCategory, timeZoneId, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/cs-agent-bookings';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        if (agentTeam !== undefined) {
            queryParameters['agentTeam'] = agentTeam;
        }
        if (agentUserId !== undefined) {
            queryParameters['agentUserId'] = agentUserId;
        }
        if (caseStatus !== undefined) {
            queryParameters['caseStatus'] = caseStatus;
        }
        if (channel !== undefined) {
            queryParameters['channel'] = channel;
        }
        if (direction !== undefined) {
            queryParameters['direction'] = direction;
        }
        if (endDate !== undefined) {
            queryParameters['endDate'] = endDate;
        }
        if (length !== undefined) {
            queryParameters['length'] = length;
        }
        if (offset !== undefined) {
            queryParameters['offset'] = offset;
        }
        if (sortBy !== undefined) {
            queryParameters['sortBy'] = sortBy;
        }
        if (sortOrder !== undefined) {
            queryParameters['sortOrder'] = sortOrder;
        }
        if (startDate !== undefined) {
            queryParameters['startDate'] = startDate;
        }
        if (state !== undefined) {
            queryParameters['state'] = state;
        }
        if (statusCategory !== undefined) {
            queryParameters['statusCategory'] = statusCategory;
        }
        if (timeZoneId !== undefined) {
            queryParameters['timeZoneId'] = timeZoneId;
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
     * @summary saveAgentBooking
     * @param request request
     */
    saveAgentBookingUsingPOST(request, extraHttpRequestParams) {
        const localVarPath = this.basePath + '/api/v1/cs-agent-bookings';
        let queryParameters = {};
        let headerParams = Object.assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling saveAgentBookingUsingPOST.');
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
CustomerServiceAgentBookingsControllerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
