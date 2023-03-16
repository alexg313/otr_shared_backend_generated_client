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
/// <reference types="angular" />
import * as models from '../model/models';
export declare class CaseRefundControllerApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer?: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    /**
     *
     * @summary cancelCase
     * @param request request
     */
    cancelCaseUsingDELETE(request: models.CancelCaseRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetCaseResponse>;
    /**
     *
     * @summary refundCasePayment
     * @param caseId caseId
     * @param casePaymentId casePaymentId
     * @param request request
     */
    refundCasePaymentUsingPOST(caseId: string, casePaymentId: string, request: models.RefundCasePaymentRequest, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary releasePayment
     * @param caseId caseId
     * @param casePaymentId casePaymentId
     */
    releasePaymentUsingPOST(caseId: string, casePaymentId: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    /**
     *
     * @summary updateRefundEligibilityForCase
     * @param caseId caseId
     * @param request request
     */
    updateRefundEligibilityForCaseUsingPUT(caseId: string, request: models.UpdateRefundEligibilityForCaseRequest, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetSupportTicketsResponse>;
}
