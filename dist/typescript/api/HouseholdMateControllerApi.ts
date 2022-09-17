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

export class HouseholdMateControllerApi {
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
     * @summary acceptHouseholdInvite
     * @param email email
     * @param token token
     */
    public acceptHouseholdInviteUsingPUT (email: string, token: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/household-mates/accept-invite';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'email' is not null or undefined
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling acceptHouseholdInviteUsingPUT.');
        }

        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling acceptHouseholdInviteUsingPUT.');
        }

        if (email !== undefined) {
            queryParameters['email'] = email;
        }

        if (token !== undefined) {
            queryParameters['token'] = token;
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
    /**
     * 
     * @summary cancelHouseholdMateInvite
     * @param inviteeEmail inviteeEmail
     * @param userId userId
     */
    public cancelHouseholdMateInviteUsingDELETE (inviteeEmail: string, userId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/household-mates/{userId}/invite'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'inviteeEmail' is not null or undefined
        if (inviteeEmail === null || inviteeEmail === undefined) {
            throw new Error('Required parameter inviteeEmail was null or undefined when calling cancelHouseholdMateInviteUsingDELETE.');
        }

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling cancelHouseholdMateInviteUsingDELETE.');
        }

        if (inviteeEmail !== undefined) {
            queryParameters['inviteeEmail'] = inviteeEmail;
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
     * @summary getHouseholdMates
     * @param userId userId
     */
    public getHouseholdMatesUsingGET (userId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.GetHouseholdMatesResponse> {
        const localVarPath = this.basePath + '/api/v1/household-mates/{userId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getHouseholdMatesUsingGET.');
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
     * @summary inviteHouseholdMate
     * @param userId userId
     * @param request request
     */
    public inviteHouseholdMateUsingPOST (userId: number, request: models.InviteHouseholdMateRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/v1/household-mates/{userId}/invite'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling inviteHouseholdMateUsingPOST.');
        }

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling inviteHouseholdMateUsingPOST.');
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
