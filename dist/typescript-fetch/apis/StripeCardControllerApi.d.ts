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
import { AddACHToStripeAccountRequest, AddCardToStripeAccountRequest, AddCardToStripeAccountResponse, GetLawfirmPaymentMethodsResponse, GetPaymentMethodsForUserResponse, StripeCardDomain } from '../models';
export interface AddACHToLawfirmStripeAccountUsingPOSTRequest {
    lawfirmId: string;
    request: AddACHToStripeAccountRequest;
}
export interface AddACHToUserStripeAccountUsingPOSTRequest {
    userId: string;
    request: AddACHToStripeAccountRequest;
}
export interface AddCardToStripeAccountUsingPOSTRequest {
    request: AddCardToStripeAccountRequest;
}
export interface DeleteBankAccountFromLawfirmStripeAccountUsingDELETERequest {
    bankAccountId: string;
    lawfirmId: number;
}
export interface DeleteCardForUserUsingDELETERequest {
    cardId: string;
    userId: string;
}
export interface DeleteCardUsingDELETERequest {
    cardId: string;
}
export interface GetCardUsingGETRequest {
    cardId: string;
}
export interface GetLawfirmPaymentMethodsUsingGETRequest {
    lawfirmId: number;
}
export interface GetPaymentMethodsForUserUsingGETRequest {
    userIdString: string;
}
export interface SetCardAsPrimaryUsingPUTRequest {
    cardId: string;
    userId: string;
}
export interface SetDefaultPaymentMethodForLawfirmUsingPUTRequest {
    lawfirmId: number;
    stripePaymentSourceId: string;
}
/**
 *
 */
export declare class StripeCardControllerApi extends runtime.BaseAPI {
    /**
     * addACHToLawfirmStripeAccount
     */
    addACHToLawfirmStripeAccountUsingPOSTRaw(requestParameters: AddACHToLawfirmStripeAccountUsingPOSTRequest): Promise<runtime.ApiResponse<object>>;
    /**
     * addACHToLawfirmStripeAccount
     */
    addACHToLawfirmStripeAccountUsingPOST(requestParameters: AddACHToLawfirmStripeAccountUsingPOSTRequest): Promise<object>;
    /**
     * addACHToUserStripeAccount
     */
    addACHToUserStripeAccountUsingPOSTRaw(requestParameters: AddACHToUserStripeAccountUsingPOSTRequest): Promise<runtime.ApiResponse<object>>;
    /**
     * addACHToUserStripeAccount
     */
    addACHToUserStripeAccountUsingPOST(requestParameters: AddACHToUserStripeAccountUsingPOSTRequest): Promise<object>;
    /**
     * addCardToStripeAccount
     */
    addCardToStripeAccountUsingPOSTRaw(requestParameters: AddCardToStripeAccountUsingPOSTRequest): Promise<runtime.ApiResponse<AddCardToStripeAccountResponse>>;
    /**
     * addCardToStripeAccount
     */
    addCardToStripeAccountUsingPOST(requestParameters: AddCardToStripeAccountUsingPOSTRequest): Promise<AddCardToStripeAccountResponse>;
    /**
     * deleteBankAccountFromLawfirmStripeAccount
     */
    deleteBankAccountFromLawfirmStripeAccountUsingDELETERaw(requestParameters: DeleteBankAccountFromLawfirmStripeAccountUsingDELETERequest): Promise<runtime.ApiResponse<void>>;
    /**
     * deleteBankAccountFromLawfirmStripeAccount
     */
    deleteBankAccountFromLawfirmStripeAccountUsingDELETE(requestParameters: DeleteBankAccountFromLawfirmStripeAccountUsingDELETERequest): Promise<void>;
    /**
     * deleteCardForUser
     */
    deleteCardForUserUsingDELETERaw(requestParameters: DeleteCardForUserUsingDELETERequest): Promise<runtime.ApiResponse<StripeCardDomain>>;
    /**
     * deleteCardForUser
     */
    deleteCardForUserUsingDELETE(requestParameters: DeleteCardForUserUsingDELETERequest): Promise<StripeCardDomain>;
    /**
     * deleteCard
     */
    deleteCardUsingDELETERaw(requestParameters: DeleteCardUsingDELETERequest): Promise<runtime.ApiResponse<StripeCardDomain>>;
    /**
     * deleteCard
     */
    deleteCardUsingDELETE(requestParameters: DeleteCardUsingDELETERequest): Promise<StripeCardDomain>;
    /**
     * getCard
     */
    getCardUsingGETRaw(requestParameters: GetCardUsingGETRequest): Promise<runtime.ApiResponse<StripeCardDomain>>;
    /**
     * getCard
     */
    getCardUsingGET(requestParameters: GetCardUsingGETRequest): Promise<StripeCardDomain>;
    /**
     * Retrieves all the payment methods available on the lawfirm\'s Stripe account.
     */
    getLawfirmPaymentMethodsUsingGETRaw(requestParameters: GetLawfirmPaymentMethodsUsingGETRequest): Promise<runtime.ApiResponse<GetLawfirmPaymentMethodsResponse>>;
    /**
     * Retrieves all the payment methods available on the lawfirm\'s Stripe account.
     */
    getLawfirmPaymentMethodsUsingGET(requestParameters: GetLawfirmPaymentMethodsUsingGETRequest): Promise<GetLawfirmPaymentMethodsResponse>;
    /**
     * Retrieves all the payment methods available on the user\'s Stripe account.
     */
    getPaymentMethodsForUserUsingGETRaw(requestParameters: GetPaymentMethodsForUserUsingGETRequest): Promise<runtime.ApiResponse<GetPaymentMethodsForUserResponse>>;
    /**
     * Retrieves all the payment methods available on the user\'s Stripe account.
     */
    getPaymentMethodsForUserUsingGET(requestParameters: GetPaymentMethodsForUserUsingGETRequest): Promise<GetPaymentMethodsForUserResponse>;
    /**
     * setCardAsPrimary
     */
    setCardAsPrimaryUsingPUTRaw(requestParameters: SetCardAsPrimaryUsingPUTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * setCardAsPrimary
     */
    setCardAsPrimaryUsingPUT(requestParameters: SetCardAsPrimaryUsingPUTRequest): Promise<void>;
    /**
     * setDefaultPaymentMethodForLawfirm
     */
    setDefaultPaymentMethodForLawfirmUsingPUTRaw(requestParameters: SetDefaultPaymentMethodForLawfirmUsingPUTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * setDefaultPaymentMethodForLawfirm
     */
    setDefaultPaymentMethodForLawfirmUsingPUT(requestParameters: SetDefaultPaymentMethodForLawfirmUsingPUTRequest): Promise<void>;
}
