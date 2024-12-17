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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class CasePaymentControllerApi {
    protected basePath = 'http://otr-backend-service-us-devo.offtherecord.com';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary authorizeChargeForCasePayment
     * @param caseId caseId
     * @param casePaymentId casePaymentId
     * @param request request
     */
    public authorizeChargeForCasePaymentUsingPOST (caseId: string, casePaymentId: string, request?: models.AuthorizeChargeForCasePaymentRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.AuthorizeChargeForCasePaymentResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/payments/{casePaymentId}/authorize'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'casePaymentId' + '}', encodeURIComponent(String(casePaymentId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling authorizeChargeForCasePaymentUsingPOST.');
        }

        // verify required parameter 'casePaymentId' is not null or undefined
        if (casePaymentId === null || casePaymentId === undefined) {
            throw new Error('Required parameter casePaymentId was null or undefined when calling authorizeChargeForCasePaymentUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary captureChargeFromCasePayment
     * @param caseId caseId
     * @param casePaymentId casePaymentId
     * @param request request
     */
    public captureChargeFromCasePaymentUsingPOST (caseId: string, casePaymentId: string, request?: models.CaptureChargeFromCasePaymentRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<boolean> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/payments/{casePaymentId}/capture'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'casePaymentId' + '}', encodeURIComponent(String(casePaymentId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling captureChargeFromCasePaymentUsingPOST.');
        }

        // verify required parameter 'casePaymentId' is not null or undefined
        if (casePaymentId === null || casePaymentId === undefined) {
            throw new Error('Required parameter casePaymentId was null or undefined when calling captureChargeFromCasePaymentUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary deleteCasePayment
     * @param caseId caseId
     * @param casePaymentId casePaymentId
     */
    public deleteCasePaymentUsingDELETE (caseId: string, casePaymentId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/payments/{casePaymentId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'casePaymentId' + '}', encodeURIComponent(String(casePaymentId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling deleteCasePaymentUsingDELETE.');
        }

        // verify required parameter 'casePaymentId' is not null or undefined
        if (casePaymentId === null || casePaymentId === undefined) {
            throw new Error('Required parameter casePaymentId was null or undefined when calling deleteCasePaymentUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary generateCasePaymentPlan
     * @param caseId caseId
     * @param paymentPlanTypeId paymentPlanTypeId
     * @param period period
     * @param productId productId
     */
    public generateCasePaymentPlanUsingGET (caseId: string, paymentPlanTypeId: string, period?: 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'WEEKLY' | 'YEARLY', productId?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ListCostItemsForCustomerResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/payment-plans/{paymentPlanTypeId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'paymentPlanTypeId' + '}', encodeURIComponent(String(paymentPlanTypeId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling generateCasePaymentPlanUsingGET.');
        }

        // verify required parameter 'paymentPlanTypeId' is not null or undefined
        if (paymentPlanTypeId === null || paymentPlanTypeId === undefined) {
            throw new Error('Required parameter paymentPlanTypeId was null or undefined when calling generateCasePaymentPlanUsingGET.');
        }

        if (period !== undefined) {
            queryParameters['period'] = period;
        }

        if (productId !== undefined) {
            queryParameters['productId'] = productId;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getAvailablePaymentPlans
     * @param lawfirmId lawfirmId
     * @param legalFeeInCents legalFeeInCents
     * @param state state
     */
    public getAvailablePaymentPlansUsingPOST (lawfirmId: number, legalFeeInCents: string, state: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetAvailablePaymentPlansResponse> {
        const localVarPath = this.basePath + '/api/v1/payment-plans/{lawfirmId}/case-payment'
            .replace('{' + 'lawfirmId' + '}', encodeURIComponent(String(lawfirmId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling getAvailablePaymentPlansUsingPOST.');
        }

        // verify required parameter 'legalFeeInCents' is not null or undefined
        if (legalFeeInCents === null || legalFeeInCents === undefined) {
            throw new Error('Required parameter legalFeeInCents was null or undefined when calling getAvailablePaymentPlansUsingPOST.');
        }

        // verify required parameter 'state' is not null or undefined
        if (state === null || state === undefined) {
            throw new Error('Required parameter state was null or undefined when calling getAvailablePaymentPlansUsingPOST.');
        }

        if (legalFeeInCents !== undefined) {
            queryParameters['legalFeeInCents'] = legalFeeInCents;
        }

        if (state !== undefined) {
            queryParameters['state'] = state;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getCasePayments
     * @param caseId caseId
     */
    public getCasePaymentsUsingGET (caseId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetCasePaymentsResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/payments'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getCasePaymentsUsingGET.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getPaymentPlanOptions
     * @param caseId caseId
     * @param feeInCents feeInCents
     * @param lawfirmId lawfirmId
     * @param userId userId
     */
    public getPaymentPlanOptionsUsingGET (caseId: string, feeInCents: number, lawfirmId: number, userId?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetAvailablePaymentPlansResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/payment-plans'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getPaymentPlanOptionsUsingGET.');
        }

        // verify required parameter 'feeInCents' is not null or undefined
        if (feeInCents === null || feeInCents === undefined) {
            throw new Error('Required parameter feeInCents was null or undefined when calling getPaymentPlanOptionsUsingGET.');
        }

        // verify required parameter 'lawfirmId' is not null or undefined
        if (lawfirmId === null || lawfirmId === undefined) {
            throw new Error('Required parameter lawfirmId was null or undefined when calling getPaymentPlanOptionsUsingGET.');
        }

        if (feeInCents !== undefined) {
            queryParameters['feeInCents'] = feeInCents;
        }

        if (lawfirmId !== undefined) {
            queryParameters['lawfirmId'] = lawfirmId;
        }

        if (userId !== undefined) {
            queryParameters['userId'] = userId;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getStripeCharge
     * @param caseId caseId
     * @param stripeChargeId stripeChargeId
     */
    public getStripeChargeUsingGET (caseId: string, stripeChargeId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetStripeChargeResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/charges/{stripeChargeId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)))
            .replace('{' + 'stripeChargeId' + '}', encodeURIComponent(String(stripeChargeId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getStripeChargeUsingGET.');
        }

        // verify required parameter 'stripeChargeId' is not null or undefined
        if (stripeChargeId === null || stripeChargeId === undefined) {
            throw new Error('Required parameter stripeChargeId was null or undefined when calling getStripeChargeUsingGET.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary getStripeCharges
     * @param caseId caseId
     */
    public getStripeChargesUsingGET (caseId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetStripeChargesResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/stripe-charges'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling getStripeChargesUsingGET.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary listCostItemsForCustomer
     * @param caseId caseId
     * @param period period
     * @param productId productId
     */
    public listCostItemsForCustomerUsingGET (caseId: string, period?: 'DAILY' | 'MONTHLY' | 'QUARTERLY' | 'WEEKLY' | 'YEARLY', productId?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ListCostItemsForCustomerResponse> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/customer/cost'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling listCostItemsForCustomerUsingGET.');
        }

        if (period !== undefined) {
            queryParameters['period'] = period;
        }

        if (productId !== undefined) {
            queryParameters['productId'] = productId;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary scheduleNewPayment
     * @param caseId caseId
     * @param request request
     */
    public scheduleNewPaymentUsingPOST (caseId: string, request: models.ScheduleNewPaymentRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/cases/{caseId}/payments'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling scheduleNewPaymentUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling scheduleNewPaymentUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary updateCasePayment
     * @param casePaymentId casePaymentId
     * @param request request
     */
    public updateCasePaymentUsingPUT (casePaymentId: string, request: models.UpdateCasePaymentRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/payments/{casePaymentId}'
            .replace('{' + 'casePaymentId' + '}', encodeURIComponent(String(casePaymentId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'casePaymentId' is not null or undefined
        if (casePaymentId === null || casePaymentId === undefined) {
            throw new Error('Required parameter casePaymentId was null or undefined when calling updateCasePaymentUsingPUT.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updateCasePaymentUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary updatePaymentDueDate
     * @param casePaymentId casePaymentId
     * @param request request
     */
    public updatePaymentDueDateUsingPUT (casePaymentId: string, request: models.UpdatePaymentDueDateRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/payments/{casePaymentId}/due-date'
            .replace('{' + 'casePaymentId' + '}', encodeURIComponent(String(casePaymentId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'casePaymentId' is not null or undefined
        if (casePaymentId === null || casePaymentId === undefined) {
            throw new Error('Required parameter casePaymentId was null or undefined when calling updatePaymentDueDateUsingPUT.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling updatePaymentDueDateUsingPUT.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: request,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary updatePaymentRecipient
     * @param casePaymentId casePaymentId
     * @param recipient recipient
     */
    public updatePaymentRecipientUsingPUT (casePaymentId: string, recipient: 'COURT' | 'LAWFIRM' | 'OTR', extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/payments/{casePaymentId}/owner'
            .replace('{' + 'casePaymentId' + '}', encodeURIComponent(String(casePaymentId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'casePaymentId' is not null or undefined
        if (casePaymentId === null || casePaymentId === undefined) {
            throw new Error('Required parameter casePaymentId was null or undefined when calling updatePaymentRecipientUsingPUT.');
        }

        // verify required parameter 'recipient' is not null or undefined
        if (recipient === null || recipient === undefined) {
            throw new Error('Required parameter recipient was null or undefined when calling updatePaymentRecipientUsingPUT.');
        }

        if (recipient !== undefined) {
            queryParameters['recipient'] = recipient;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
