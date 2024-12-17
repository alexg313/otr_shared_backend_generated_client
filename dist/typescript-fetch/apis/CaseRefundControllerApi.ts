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
    CancelCaseRequest,
    CancelCaseRequestFromJSON,
    CancelCaseRequestToJSON,
    GetCaseResponse,
    GetCaseResponseFromJSON,
    GetCaseResponseToJSON,
    GetSupportTicketsResponse,
    GetSupportTicketsResponseFromJSON,
    GetSupportTicketsResponseToJSON,
    RefundCasePaymentRequest,
    RefundCasePaymentRequestFromJSON,
    RefundCasePaymentRequestToJSON,
    UpdateRefundEligibilityForCaseRequest,
    UpdateRefundEligibilityForCaseRequestFromJSON,
    UpdateRefundEligibilityForCaseRequestToJSON,
} from '../models';

export interface CancelCaseUsingDELETERequest {
    request: CancelCaseRequest;
}

export interface RefundCasePaymentUsingPOSTRequest {
    caseId: string;
    casePaymentId: string;
    request: RefundCasePaymentRequest;
}

export interface ReleasePaymentUsingPOSTRequest {
    caseId: string;
    casePaymentId: string;
}

export interface UpdateRefundEligibilityForCaseUsingPUTRequest {
    caseId: string;
    request: UpdateRefundEligibilityForCaseRequest;
}

/**
 * 
 */
export class CaseRefundControllerApi extends runtime.BaseAPI {

    /**
     * cancelCase
     */
    async cancelCaseUsingDELETERaw(requestParameters: CancelCaseUsingDELETERequest): Promise<runtime.ApiResponse<GetCaseResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling cancelCaseUsingDELETE.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v2/cases`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: CancelCaseRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCaseResponseFromJSON(jsonValue));
    }

    /**
     * cancelCase
     */
    async cancelCaseUsingDELETE(requestParameters: CancelCaseUsingDELETERequest): Promise<GetCaseResponse> {
        const response = await this.cancelCaseUsingDELETERaw(requestParameters);
        return await response.value();
    }

    /**
     * refundCasePayment
     */
    async refundCasePaymentUsingPOSTRaw(requestParameters: RefundCasePaymentUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling refundCasePaymentUsingPOST.');
        }

        if (requestParameters.casePaymentId === null || requestParameters.casePaymentId === undefined) {
            throw new runtime.RequiredError('casePaymentId','Required parameter requestParameters.casePaymentId was null or undefined when calling refundCasePaymentUsingPOST.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling refundCasePaymentUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/payments/{casePaymentId}/refund`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))).replace(`{${"casePaymentId"}}`, encodeURIComponent(String(requestParameters.casePaymentId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RefundCasePaymentRequestToJSON(requestParameters.request),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * refundCasePayment
     */
    async refundCasePaymentUsingPOST(requestParameters: RefundCasePaymentUsingPOSTRequest): Promise<void> {
        await this.refundCasePaymentUsingPOSTRaw(requestParameters);
    }

    /**
     * releasePayment
     */
    async releasePaymentUsingPOSTRaw(requestParameters: ReleasePaymentUsingPOSTRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling releasePaymentUsingPOST.');
        }

        if (requestParameters.casePaymentId === null || requestParameters.casePaymentId === undefined) {
            throw new runtime.RequiredError('casePaymentId','Required parameter requestParameters.casePaymentId was null or undefined when calling releasePaymentUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/payments/{casePaymentId}/release`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))).replace(`{${"casePaymentId"}}`, encodeURIComponent(String(requestParameters.casePaymentId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * releasePayment
     */
    async releasePaymentUsingPOST(requestParameters: ReleasePaymentUsingPOSTRequest): Promise<void> {
        await this.releasePaymentUsingPOSTRaw(requestParameters);
    }

    /**
     * updateRefundEligibilityForCase
     */
    async updateRefundEligibilityForCaseUsingPUTRaw(requestParameters: UpdateRefundEligibilityForCaseUsingPUTRequest): Promise<runtime.ApiResponse<GetSupportTicketsResponse>> {
        if (requestParameters.caseId === null || requestParameters.caseId === undefined) {
            throw new runtime.RequiredError('caseId','Required parameter requestParameters.caseId was null or undefined when calling updateRefundEligibilityForCaseUsingPUT.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateRefundEligibilityForCaseUsingPUT.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/cases/{caseId}/refund-eligibility`.replace(`{${"caseId"}}`, encodeURIComponent(String(requestParameters.caseId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateRefundEligibilityForCaseRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSupportTicketsResponseFromJSON(jsonValue));
    }

    /**
     * updateRefundEligibilityForCase
     */
    async updateRefundEligibilityForCaseUsingPUT(requestParameters: UpdateRefundEligibilityForCaseUsingPUTRequest): Promise<GetSupportTicketsResponse> {
        const response = await this.updateRefundEligibilityForCaseUsingPUTRaw(requestParameters);
        return await response.value();
    }

}
