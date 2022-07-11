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

export class PushNotificationControllerApi {
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
     * @summary getUnreadCounts
     * @param includeMessage includeMessage
     */
    public getUnreadCountsUsingGET (includeMessage?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.NotificationEvents> {
        const localVarPath = this.basePath + '/api/v1/notifications/unread';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (includeMessage !== undefined) {
            queryParameters['includeMessage'] = includeMessage;
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
     * @summary markAllReadForUser
     * @param userId userId
     */
    public markAllReadForUserUsingDELETE (userId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/notifications/unread/{userId}/user'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling markAllReadForUserUsingDELETE.');
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
     * @summary markPageTypesAsRead
     * @param caseId caseId
     * @param request request
     */
    public markPageTypesAsReadUsingDELETE (caseId: string, request: models.DeleteNotificationByPagesRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.NotificationEvents> {
        const localVarPath = this.basePath + '/api/v2/notifications/unread/{caseId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling markPageTypesAsReadUsingDELETE.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling markPageTypesAsReadUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
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
     * @summary markRead
     * @param caseId caseId
     * @param request request
     */
    public markReadUsingDELETE (caseId: string, request: models.DeleteNotificationEventRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.NotificationEvents> {
        const localVarPath = this.basePath + '/api/v1/notifications/unread/{caseId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling markReadUsingDELETE.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling markReadUsingDELETE.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
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
     * @summary pushCaseMessage
     * @param caseId caseId
     * @param pushRequest pushRequest
     */
    public pushCaseMessageUsingPOST (caseId: string, pushRequest: models.PushNotificationRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<object> {
        const localVarPath = this.basePath + '/api/v1/notifications/cases/{caseId}'
            .replace('{' + 'caseId' + '}', encodeURIComponent(String(caseId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'caseId' is not null or undefined
        if (caseId === null || caseId === undefined) {
            throw new Error('Required parameter caseId was null or undefined when calling pushCaseMessageUsingPOST.');
        }

        // verify required parameter 'pushRequest' is not null or undefined
        if (pushRequest === null || pushRequest === undefined) {
            throw new Error('Required parameter pushRequest was null or undefined when calling pushCaseMessageUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: pushRequest,
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
     * @summary pushNotificationToUser
     * @param recipientId recipientId
     * @param pushRequest pushRequest
     */
    public pushNotificationToUserUsingPOST (recipientId: string, pushRequest: models.PushNotificationRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<object> {
        const localVarPath = this.basePath + '/api/v1/notifications/users/{recipientId}'
            .replace('{' + 'recipientId' + '}', encodeURIComponent(String(recipientId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'recipientId' is not null or undefined
        if (recipientId === null || recipientId === undefined) {
            throw new Error('Required parameter recipientId was null or undefined when calling pushNotificationToUserUsingPOST.');
        }

        // verify required parameter 'pushRequest' is not null or undefined
        if (pushRequest === null || pushRequest === undefined) {
            throw new Error('Required parameter pushRequest was null or undefined when calling pushNotificationToUserUsingPOST.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: pushRequest,
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
     * @summary register
     * @param request request
     */
    public registerUsingPOST (request: models.PushNotificationRegistrationRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<object> {
        const localVarPath = this.basePath + '/api/v1/notifications/register';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling registerUsingPOST.');
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
