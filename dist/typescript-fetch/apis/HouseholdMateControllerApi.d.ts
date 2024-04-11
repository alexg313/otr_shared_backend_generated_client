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
import { GetHouseholdMatesResponse, InviteHouseholdMateRequest } from '../models';
export interface AcceptHouseholdInviteUsingPUTRequest {
    email: string;
    token: string;
}
export interface CancelHouseholdMateInviteUsingDELETERequest {
    inviteeEmail: string;
    userId: number;
}
export interface GetHouseholdMatesUsingGETRequest {
    userId: string;
}
export interface InviteHouseholdMateUsingPOSTRequest {
    userId: number;
    request: InviteHouseholdMateRequest;
}
export interface RemoveHouseholdMateUsingDELETERequest {
    mateUserId: number;
    userId: number;
}
/**
 *
 */
export declare class HouseholdMateControllerApi extends runtime.BaseAPI {
    /**
     * acceptHouseholdInvite
     */
    acceptHouseholdInviteUsingPUTRaw(requestParameters: AcceptHouseholdInviteUsingPUTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * acceptHouseholdInvite
     */
    acceptHouseholdInviteUsingPUT(requestParameters: AcceptHouseholdInviteUsingPUTRequest): Promise<void>;
    /**
     * cancelHouseholdMateInvite
     */
    cancelHouseholdMateInviteUsingDELETERaw(requestParameters: CancelHouseholdMateInviteUsingDELETERequest): Promise<runtime.ApiResponse<void>>;
    /**
     * cancelHouseholdMateInvite
     */
    cancelHouseholdMateInviteUsingDELETE(requestParameters: CancelHouseholdMateInviteUsingDELETERequest): Promise<void>;
    /**
     * getHouseholdMates
     */
    getHouseholdMatesUsingGETRaw(requestParameters: GetHouseholdMatesUsingGETRequest): Promise<runtime.ApiResponse<GetHouseholdMatesResponse>>;
    /**
     * getHouseholdMates
     */
    getHouseholdMatesUsingGET(requestParameters: GetHouseholdMatesUsingGETRequest): Promise<GetHouseholdMatesResponse>;
    /**
     * inviteHouseholdMate
     */
    inviteHouseholdMateUsingPOSTRaw(requestParameters: InviteHouseholdMateUsingPOSTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * inviteHouseholdMate
     */
    inviteHouseholdMateUsingPOST(requestParameters: InviteHouseholdMateUsingPOSTRequest): Promise<void>;
    /**
     * removeHouseholdMate
     */
    removeHouseholdMateUsingDELETERaw(requestParameters: RemoveHouseholdMateUsingDELETERequest): Promise<runtime.ApiResponse<void>>;
    /**
     * removeHouseholdMate
     */
    removeHouseholdMateUsingDELETE(requestParameters: RemoveHouseholdMateUsingDELETERequest): Promise<void>;
}
