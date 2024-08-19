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
import { AddViolationsToCitationRequest, CaseModelReq, FindChargeDisputesResponse, GetAppearanceAttorneysResponse, GetCaseResponse, GetSupportTicketsResponse, InitiateCaseAndChargeCustomerRequest, InitiateCaseAndChargeCustomerResponse, MarkCaseAsResolvedRequest, MarkCaseAsResolvedResponse, PriceMatchRequest, PriceMatchResponse, SetArchiveOnCasesRequest, SetCourtDateForCaseRequest, UpdateCaseDeclineTicketsRequest } from '../models';
export interface AddViolationsToCitationUsingPOSTRequest {
    caseId: string;
    request: AddViolationsToCitationRequest;
}
export interface AssignCaseToUserUsingPOSTRequest {
    caseId: string;
    userId: number;
}
export interface AssignOwnerUsingPOSTRequest {
    caseId: string;
}
export interface FindChargeDisputesByCaseIdUsingGETRequest {
    caseId: string;
}
export interface GetAppearanceAttorneysForCaseUsingGETRequest {
    caseId: string;
}
export interface GetSupportTicketsForCaseUsingGETRequest {
    caseId: string;
}
export interface InitiateCaseAndChargeCustomerUsingPOSTRequest {
    caseId: string;
    request: InitiateCaseAndChargeCustomerRequest;
}
export interface InitiateCaseUsingPOSTRequest {
    caseId: string;
    request?: object;
}
export interface MarkCaseAsResolvedUsingPOSTRequest {
    caseId: string;
    request: MarkCaseAsResolvedRequest;
}
export interface RemoveViolationsFromCitationUsingDELETERequest {
    caseId: string;
    violationTypes: string;
}
export interface ReopenCaseUsingPUTRequest {
    caseId: string;
}
export interface SetArchiveOnCasesUsingPUTRequest {
    request: SetArchiveOnCasesRequest;
}
export interface SetCourtDateForCaseUsingPOSTRequest {
    caseId: string;
    request: SetCourtDateForCaseRequest;
}
export interface SubmitRequestForPriceMatchUsingPOSTRequest {
    caseId: string;
    priceMatchRequest: PriceMatchRequest;
}
export interface UpdateCaseUsingPUTRequest {
    caseId: string;
    caseFromRequest: CaseModelReq;
}
export interface UpdateDeclineTicketsUsingPUTRequest {
    caseId: string;
    request: UpdateCaseDeclineTicketsRequest;
}
/**
 *
 */
export declare class CaseControllerApi extends runtime.BaseAPI {
    /**
     * addViolationsToCitation
     */
    addViolationsToCitationUsingPOSTRaw(requestParameters: AddViolationsToCitationUsingPOSTRequest): Promise<runtime.ApiResponse<object>>;
    /**
     * addViolationsToCitation
     */
    addViolationsToCitationUsingPOST(requestParameters: AddViolationsToCitationUsingPOSTRequest): Promise<object>;
    /**
     * assignCaseToUser
     */
    assignCaseToUserUsingPOSTRaw(requestParameters: AssignCaseToUserUsingPOSTRequest): Promise<runtime.ApiResponse<object>>;
    /**
     * assignCaseToUser
     */
    assignCaseToUserUsingPOST(requestParameters: AssignCaseToUserUsingPOSTRequest): Promise<object>;
    /**
     * assignOwner
     */
    assignOwnerUsingPOSTRaw(requestParameters: AssignOwnerUsingPOSTRequest): Promise<runtime.ApiResponse<object>>;
    /**
     * assignOwner
     */
    assignOwnerUsingPOST(requestParameters: AssignOwnerUsingPOSTRequest): Promise<object>;
    /**
     * findChargeDisputesByCaseId
     */
    findChargeDisputesByCaseIdUsingGETRaw(requestParameters: FindChargeDisputesByCaseIdUsingGETRequest): Promise<runtime.ApiResponse<FindChargeDisputesResponse>>;
    /**
     * findChargeDisputesByCaseId
     */
    findChargeDisputesByCaseIdUsingGET(requestParameters: FindChargeDisputesByCaseIdUsingGETRequest): Promise<FindChargeDisputesResponse>;
    /**
     * getAppearanceAttorneysForCase
     */
    getAppearanceAttorneysForCaseUsingGETRaw(requestParameters: GetAppearanceAttorneysForCaseUsingGETRequest): Promise<runtime.ApiResponse<GetAppearanceAttorneysResponse>>;
    /**
     * getAppearanceAttorneysForCase
     */
    getAppearanceAttorneysForCaseUsingGET(requestParameters: GetAppearanceAttorneysForCaseUsingGETRequest): Promise<GetAppearanceAttorneysResponse>;
    /**
     * getSupportTicketsForCase
     */
    getSupportTicketsForCaseUsingGETRaw(requestParameters: GetSupportTicketsForCaseUsingGETRequest): Promise<runtime.ApiResponse<GetSupportTicketsResponse>>;
    /**
     * getSupportTicketsForCase
     */
    getSupportTicketsForCaseUsingGET(requestParameters: GetSupportTicketsForCaseUsingGETRequest): Promise<GetSupportTicketsResponse>;
    /**
     * initiateCaseAndChargeCustomer
     */
    initiateCaseAndChargeCustomerUsingPOSTRaw(requestParameters: InitiateCaseAndChargeCustomerUsingPOSTRequest): Promise<runtime.ApiResponse<InitiateCaseAndChargeCustomerResponse>>;
    /**
     * initiateCaseAndChargeCustomer
     */
    initiateCaseAndChargeCustomerUsingPOST(requestParameters: InitiateCaseAndChargeCustomerUsingPOSTRequest): Promise<InitiateCaseAndChargeCustomerResponse>;
    /**
     * initiateCase
     */
    initiateCaseUsingPOSTRaw(requestParameters: InitiateCaseUsingPOSTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * initiateCase
     */
    initiateCaseUsingPOST(requestParameters: InitiateCaseUsingPOSTRequest): Promise<void>;
    /**
     * markCaseAsResolved
     */
    markCaseAsResolvedUsingPOSTRaw(requestParameters: MarkCaseAsResolvedUsingPOSTRequest): Promise<runtime.ApiResponse<MarkCaseAsResolvedResponse>>;
    /**
     * markCaseAsResolved
     */
    markCaseAsResolvedUsingPOST(requestParameters: MarkCaseAsResolvedUsingPOSTRequest): Promise<MarkCaseAsResolvedResponse>;
    /**
     * removeViolationsFromCitation
     */
    removeViolationsFromCitationUsingDELETERaw(requestParameters: RemoveViolationsFromCitationUsingDELETERequest): Promise<runtime.ApiResponse<object>>;
    /**
     * removeViolationsFromCitation
     */
    removeViolationsFromCitationUsingDELETE(requestParameters: RemoveViolationsFromCitationUsingDELETERequest): Promise<object>;
    /**
     * reopenCase
     */
    reopenCaseUsingPUTRaw(requestParameters: ReopenCaseUsingPUTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * reopenCase
     */
    reopenCaseUsingPUT(requestParameters: ReopenCaseUsingPUTRequest): Promise<void>;
    /**
     * setArchiveOnCases
     */
    setArchiveOnCasesUsingPUTRaw(requestParameters: SetArchiveOnCasesUsingPUTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * setArchiveOnCases
     */
    setArchiveOnCasesUsingPUT(requestParameters: SetArchiveOnCasesUsingPUTRequest): Promise<void>;
    /**
     * setCourtDateForCase
     */
    setCourtDateForCaseUsingPOSTRaw(requestParameters: SetCourtDateForCaseUsingPOSTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * setCourtDateForCase
     */
    setCourtDateForCaseUsingPOST(requestParameters: SetCourtDateForCaseUsingPOSTRequest): Promise<void>;
    /**
     * submitRequestForPriceMatch
     */
    submitRequestForPriceMatchUsingPOSTRaw(requestParameters: SubmitRequestForPriceMatchUsingPOSTRequest): Promise<runtime.ApiResponse<PriceMatchResponse>>;
    /**
     * submitRequestForPriceMatch
     */
    submitRequestForPriceMatchUsingPOST(requestParameters: SubmitRequestForPriceMatchUsingPOSTRequest): Promise<PriceMatchResponse>;
    /**
     * updateCase
     */
    updateCaseUsingPUTRaw(requestParameters: UpdateCaseUsingPUTRequest): Promise<runtime.ApiResponse<GetCaseResponse>>;
    /**
     * updateCase
     */
    updateCaseUsingPUT(requestParameters: UpdateCaseUsingPUTRequest): Promise<GetCaseResponse>;
    /**
     * updateDeclineTickets
     */
    updateDeclineTicketsUsingPUTRaw(requestParameters: UpdateDeclineTicketsUsingPUTRequest): Promise<runtime.ApiResponse<object>>;
    /**
     * updateDeclineTickets
     */
    updateDeclineTicketsUsingPUT(requestParameters: UpdateDeclineTicketsUsingPUTRequest): Promise<object>;
}
