/* tslint:disable */
/* eslint-disable */
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


import * as runtime from '../runtime';
import {
    ListAgentBookingsResponse,
    ListAgentBookingsResponseFromJSON,
    ListAgentBookingsResponseToJSON,
    SaveAgentBookingRequest,
    SaveAgentBookingRequestFromJSON,
    SaveAgentBookingRequestToJSON,
    SaveAgentBookingResponse,
    SaveAgentBookingResponseFromJSON,
    SaveAgentBookingResponseToJSON,
} from '../models';

export interface DeleteAgentBookingUsingDELETERequest {
    agentBookingId: number;
}

export interface ListAgentBookingsUsingGETRequest {
    agentTeam?: string;
    agentUserId?: number;
    caseStatus?: string;
    channel?: string;
    direction?: string;
    endDate?: string;
    length?: number;
    offset?: number;
    sortBy?: string;
    sortOrder?: string;
    startDate?: string;
    state?: string;
    statusCategory?: string;
    timeZoneId?: string;
}

export interface SaveAgentBookingUsingPOSTRequest {
    request: SaveAgentBookingRequest;
}

/**
 * 
 */
export class CustomerServiceAgentBookingsControllerApi extends runtime.BaseAPI {

    /**
     * deleteAgentBooking
     */
    async deleteAgentBookingUsingDELETERaw(requestParameters: DeleteAgentBookingUsingDELETERequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.agentBookingId === null || requestParameters.agentBookingId === undefined) {
            throw new runtime.RequiredError('agentBookingId','Required parameter requestParameters.agentBookingId was null or undefined when calling deleteAgentBookingUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cs-agent-bookings/{agentBookingId}`.replace(`{${"agentBookingId"}}`, encodeURIComponent(String(requestParameters.agentBookingId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * deleteAgentBooking
     */
    async deleteAgentBookingUsingDELETE(requestParameters: DeleteAgentBookingUsingDELETERequest): Promise<void> {
        await this.deleteAgentBookingUsingDELETERaw(requestParameters);
    }

    /**
     * listAgentBookings
     */
    async listAgentBookingsUsingGETRaw(requestParameters: ListAgentBookingsUsingGETRequest): Promise<runtime.ApiResponse<ListAgentBookingsResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.agentTeam !== undefined) {
            queryParameters['agentTeam'] = requestParameters.agentTeam;
        }

        if (requestParameters.agentUserId !== undefined) {
            queryParameters['agentUserId'] = requestParameters.agentUserId;
        }

        if (requestParameters.caseStatus !== undefined) {
            queryParameters['caseStatus'] = requestParameters.caseStatus;
        }

        if (requestParameters.channel !== undefined) {
            queryParameters['channel'] = requestParameters.channel;
        }

        if (requestParameters.direction !== undefined) {
            queryParameters['direction'] = requestParameters.direction;
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['endDate'] = requestParameters.endDate;
        }

        if (requestParameters.length !== undefined) {
            queryParameters['length'] = requestParameters.length;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.sortOrder !== undefined) {
            queryParameters['sortOrder'] = requestParameters.sortOrder;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['startDate'] = requestParameters.startDate;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
        }

        if (requestParameters.statusCategory !== undefined) {
            queryParameters['statusCategory'] = requestParameters.statusCategory;
        }

        if (requestParameters.timeZoneId !== undefined) {
            queryParameters['timeZoneId'] = requestParameters.timeZoneId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cs-agent-bookings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListAgentBookingsResponseFromJSON(jsonValue));
    }

    /**
     * listAgentBookings
     */
    async listAgentBookingsUsingGET(requestParameters: ListAgentBookingsUsingGETRequest): Promise<ListAgentBookingsResponse> {
        const response = await this.listAgentBookingsUsingGETRaw(requestParameters);
        return await response.value();
    }

    /**
     * saveAgentBooking
     */
    async saveAgentBookingUsingPOSTRaw(requestParameters: SaveAgentBookingUsingPOSTRequest): Promise<runtime.ApiResponse<SaveAgentBookingResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling saveAgentBookingUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/cs-agent-bookings`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SaveAgentBookingRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SaveAgentBookingResponseFromJSON(jsonValue));
    }

    /**
     * saveAgentBooking
     */
    async saveAgentBookingUsingPOST(requestParameters: SaveAgentBookingUsingPOSTRequest): Promise<SaveAgentBookingResponse> {
        const response = await this.saveAgentBookingUsingPOSTRaw(requestParameters);
        return await response.value();
    }

}
