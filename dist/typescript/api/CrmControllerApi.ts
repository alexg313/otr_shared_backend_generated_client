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

export class CrmControllerApi {
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
     * @summary generateTemplate
     * @param request request
     */
    public generateTemplateUsingPOST (request: models.GenerateTemplateRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetEmailTemplateResponse> {
        const localVarPath = this.basePath + '/api/v1/crm/generate-template';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling generateTemplateUsingPOST.');
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
     * @summary getOutgoingContacts
     * @param recipientEmailAddress recipientEmailAddress
     */
    public getOutgoingContactsUsingGET (recipientEmailAddress: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetOutgoingContactsResponse> {
        const localVarPath = this.basePath + '/api/v1/crm/contacts';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'recipientEmailAddress' is not null or undefined
        if (recipientEmailAddress === null || recipientEmailAddress === undefined) {
            throw new Error('Required parameter recipientEmailAddress was null or undefined when calling getOutgoingContactsUsingGET.');
        }

        if (recipientEmailAddress !== undefined) {
            queryParameters['recipientEmailAddress'] = recipientEmailAddress;
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
     * @summary getTemplates
     * @param category category
     */
    public getTemplatesUsingGET (category?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<string>> {
        const localVarPath = this.basePath + '/api/v1/crm/templates';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (category !== undefined) {
            queryParameters['category'] = category;
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
     * @summary replyToTicket
     * @param ticketId ticketId
     * @param request request
     */
    public replyToTicketUsingPOST (ticketId: number, request: models.ReplyToTicketRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<object> {
        const localVarPath = this.basePath + '/api/v1/crm/ticket/{ticketId}/reply'
            .replace('{' + 'ticketId' + '}', encodeURIComponent(String(ticketId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'ticketId' is not null or undefined
        if (ticketId === null || ticketId === undefined) {
            throw new Error('Required parameter ticketId was null or undefined when calling replyToTicketUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling replyToTicketUsingPOST.');
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
     * @summary sendBookingReceipt
     * @param request request
     */
    public sendBookingReceiptUsingPOST (request: models.SendBookingReceiptRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/crm/booking-receipt';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling sendBookingReceiptUsingPOST.');
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
     * @summary sendConsolidatedEmailToUser
     * @param request request
     */
    public sendConsolidatedEmailToUserUsingPOST (request: models.SendConsolidatedEmailToUser, extraHttpRequestParams?: any ) : ng.IHttpPromise<object> {
        const localVarPath = this.basePath + '/api/v1/crm/user/consolidate-email';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling sendConsolidatedEmailToUserUsingPOST.');
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
     * @summary sendEmailToUser
     * @param request request
     */
    public sendEmailToUserUsingPOST (request: models.SendEmailToUserRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/crm/user/email';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling sendEmailToUserUsingPOST.');
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
     * @summary sendEmailToUsers
     * @param request request
     */
    public sendEmailToUsersUsingPOST (request: models.SendEmailToUsersRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/crm/users/email';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling sendEmailToUsersUsingPOST.');
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
}
