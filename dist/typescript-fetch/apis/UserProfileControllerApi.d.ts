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
import { GetUserAddressesResponse, MergeUserRequest, MergeUserResponse, SetMarketingEmailOptInRequest, UpdateProfilePictureRequest, UpdateUserDetailsResponse, UpdateUserPhoneNumberRequest, UpsertAddressRequest, ValidatePhoneNumberRequest, ValidatePhoneNumberResponse } from '../models';
export interface AddUserAddressUsingPOSTRequest {
    userId: number;
    request: UpsertAddressRequest;
}
export interface AddUserPhoneNumberUsingPOSTRequest {
    userId: number;
    request: UpdateUserPhoneNumberRequest;
}
export interface DeleteUserPhoneNumberUsingDELETERequest {
    phoneNumberId: number;
    userId: number;
}
export interface GetUserAddressesUsingGETRequest {
    userId: number;
}
export interface MergeUserUsingPOSTRequest {
    primaryUserId: string;
    request: MergeUserRequest;
}
export interface SetMarketingEmailOptInUsingPUTRequest {
    userId: number;
    request: SetMarketingEmailOptInRequest;
}
export interface UpdateProfilePictureUsingPUTRequest {
    userId: number;
    request: UpdateProfilePictureRequest;
}
export interface UpdateUserAddressUsingPUTRequest {
    addressId: number;
    userId: number;
    request: UpsertAddressRequest;
}
export interface UpdateUserPhoneNumberUsingPUTRequest {
    phoneNumberId: number;
    userId: number;
    request: UpdateUserPhoneNumberRequest;
}
export interface ValidatePhoneNumberUsingPOSTRequest {
    validatePhoneNumberRequest: ValidatePhoneNumberRequest;
}
/**
 *
 */
export declare class UserProfileControllerApi extends runtime.BaseAPI {
    /**
     * addUserAddress
     */
    addUserAddressUsingPOSTRaw(requestParameters: AddUserAddressUsingPOSTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * addUserAddress
     */
    addUserAddressUsingPOST(requestParameters: AddUserAddressUsingPOSTRequest): Promise<void>;
    /**
     * addUserPhoneNumber
     */
    addUserPhoneNumberUsingPOSTRaw(requestParameters: AddUserPhoneNumberUsingPOSTRequest): Promise<runtime.ApiResponse<UpdateUserDetailsResponse>>;
    /**
     * addUserPhoneNumber
     */
    addUserPhoneNumberUsingPOST(requestParameters: AddUserPhoneNumberUsingPOSTRequest): Promise<UpdateUserDetailsResponse>;
    /**
     * deleteUserPhoneNumber
     */
    deleteUserPhoneNumberUsingDELETERaw(requestParameters: DeleteUserPhoneNumberUsingDELETERequest): Promise<runtime.ApiResponse<UpdateUserDetailsResponse>>;
    /**
     * deleteUserPhoneNumber
     */
    deleteUserPhoneNumberUsingDELETE(requestParameters: DeleteUserPhoneNumberUsingDELETERequest): Promise<UpdateUserDetailsResponse>;
    /**
     * getUserAddresses
     */
    getUserAddressesUsingGETRaw(requestParameters: GetUserAddressesUsingGETRequest): Promise<runtime.ApiResponse<GetUserAddressesResponse>>;
    /**
     * getUserAddresses
     */
    getUserAddressesUsingGET(requestParameters: GetUserAddressesUsingGETRequest): Promise<GetUserAddressesResponse>;
    /**
     * mergeUser
     */
    mergeUserUsingPOSTRaw(requestParameters: MergeUserUsingPOSTRequest): Promise<runtime.ApiResponse<MergeUserResponse>>;
    /**
     * mergeUser
     */
    mergeUserUsingPOST(requestParameters: MergeUserUsingPOSTRequest): Promise<MergeUserResponse>;
    /**
     * setMarketingEmailOptIn
     */
    setMarketingEmailOptInUsingPUTRaw(requestParameters: SetMarketingEmailOptInUsingPUTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * setMarketingEmailOptIn
     */
    setMarketingEmailOptInUsingPUT(requestParameters: SetMarketingEmailOptInUsingPUTRequest): Promise<void>;
    /**
     * updateProfilePicture
     */
    updateProfilePictureUsingPUTRaw(requestParameters: UpdateProfilePictureUsingPUTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * updateProfilePicture
     */
    updateProfilePictureUsingPUT(requestParameters: UpdateProfilePictureUsingPUTRequest): Promise<void>;
    /**
     * updateUserAddress
     */
    updateUserAddressUsingPUTRaw(requestParameters: UpdateUserAddressUsingPUTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * updateUserAddress
     */
    updateUserAddressUsingPUT(requestParameters: UpdateUserAddressUsingPUTRequest): Promise<void>;
    /**
     * updateUserPhoneNumber
     */
    updateUserPhoneNumberUsingPUTRaw(requestParameters: UpdateUserPhoneNumberUsingPUTRequest): Promise<runtime.ApiResponse<UpdateUserDetailsResponse>>;
    /**
     * updateUserPhoneNumber
     */
    updateUserPhoneNumberUsingPUT(requestParameters: UpdateUserPhoneNumberUsingPUTRequest): Promise<UpdateUserDetailsResponse>;
    /**
     * validatePhoneNumber
     */
    validatePhoneNumberUsingPOSTRaw(requestParameters: ValidatePhoneNumberUsingPOSTRequest): Promise<runtime.ApiResponse<ValidatePhoneNumberResponse>>;
    /**
     * validatePhoneNumber
     */
    validatePhoneNumberUsingPOST(requestParameters: ValidatePhoneNumberUsingPOSTRequest): Promise<ValidatePhoneNumberResponse>;
}
