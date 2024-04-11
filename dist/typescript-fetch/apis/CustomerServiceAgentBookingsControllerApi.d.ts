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
import { ListAgentBookingsResponse, SaveAgentBookingRequest, SaveAgentBookingResponse } from '../models';
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
export declare class CustomerServiceAgentBookingsControllerApi extends runtime.BaseAPI {
    /**
     * deleteAgentBooking
     */
    deleteAgentBookingUsingDELETERaw(requestParameters: DeleteAgentBookingUsingDELETERequest): Promise<runtime.ApiResponse<void>>;
    /**
     * deleteAgentBooking
     */
    deleteAgentBookingUsingDELETE(requestParameters: DeleteAgentBookingUsingDELETERequest): Promise<void>;
    /**
     * listAgentBookings
     */
    listAgentBookingsUsingGETRaw(requestParameters: ListAgentBookingsUsingGETRequest): Promise<runtime.ApiResponse<ListAgentBookingsResponse>>;
    /**
     * listAgentBookings
     */
    listAgentBookingsUsingGET(requestParameters: ListAgentBookingsUsingGETRequest): Promise<ListAgentBookingsResponse>;
    /**
     * saveAgentBooking
     */
    saveAgentBookingUsingPOSTRaw(requestParameters: SaveAgentBookingUsingPOSTRequest): Promise<runtime.ApiResponse<SaveAgentBookingResponse>>;
    /**
     * saveAgentBooking
     */
    saveAgentBookingUsingPOST(requestParameters: SaveAgentBookingUsingPOSTRequest): Promise<SaveAgentBookingResponse>;
}
