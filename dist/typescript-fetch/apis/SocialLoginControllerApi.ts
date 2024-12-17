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
    AppleLoginRequest,
    AppleLoginRequestFromJSON,
    AppleLoginRequestToJSON,
    GoogleLoginRequest,
    GoogleLoginRequestFromJSON,
    GoogleLoginRequestToJSON,
    SocialLoginRequest,
    SocialLoginRequestFromJSON,
    SocialLoginRequestToJSON,
    SocialLoginResponse,
    SocialLoginResponseFromJSON,
    SocialLoginResponseToJSON,
} from '../models';

export interface AppleConnectUsingPOSTRequest {
    request: AppleLoginRequest;
}

export interface AppleConnectUsingPOST1Request {
    request: AppleLoginRequest;
}

export interface FacebookConnectUsingPOSTRequest {
    request: SocialLoginRequest;
}

export interface FacebookConnectUsingPOST1Request {
    request: SocialLoginRequest;
}

export interface GoogleConnectUsingPOSTRequest {
    request: GoogleLoginRequest;
}

export interface GoogleConnectUsingPOST1Request {
    request: GoogleLoginRequest;
}

/**
 * 
 */
export class SocialLoginControllerApi extends runtime.BaseAPI {

    /**
     * appleConnect
     */
    async appleConnectUsingPOSTRaw(requestParameters: AppleConnectUsingPOSTRequest): Promise<runtime.ApiResponse<SocialLoginResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling appleConnectUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/connect/Apple`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppleLoginRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SocialLoginResponseFromJSON(jsonValue));
    }

    /**
     * appleConnect
     */
    async appleConnectUsingPOST(requestParameters: AppleConnectUsingPOSTRequest): Promise<SocialLoginResponse> {
        const response = await this.appleConnectUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * appleConnect
     */
    async appleConnectUsingPOST1Raw(requestParameters: AppleConnectUsingPOST1Request): Promise<runtime.ApiResponse<SocialLoginResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling appleConnectUsingPOST1.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/connect/apple`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppleLoginRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SocialLoginResponseFromJSON(jsonValue));
    }

    /**
     * appleConnect
     */
    async appleConnectUsingPOST1(requestParameters: AppleConnectUsingPOST1Request): Promise<SocialLoginResponse> {
        const response = await this.appleConnectUsingPOST1Raw(requestParameters);
        return await response.value();
    }

    /**
     * facebookConnect
     */
    async facebookConnectUsingPOSTRaw(requestParameters: FacebookConnectUsingPOSTRequest): Promise<runtime.ApiResponse<SocialLoginResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling facebookConnectUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/connect/Facebook`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SocialLoginRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SocialLoginResponseFromJSON(jsonValue));
    }

    /**
     * facebookConnect
     */
    async facebookConnectUsingPOST(requestParameters: FacebookConnectUsingPOSTRequest): Promise<SocialLoginResponse> {
        const response = await this.facebookConnectUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * facebookConnect
     */
    async facebookConnectUsingPOST1Raw(requestParameters: FacebookConnectUsingPOST1Request): Promise<runtime.ApiResponse<SocialLoginResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling facebookConnectUsingPOST1.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/connect/facebook`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SocialLoginRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SocialLoginResponseFromJSON(jsonValue));
    }

    /**
     * facebookConnect
     */
    async facebookConnectUsingPOST1(requestParameters: FacebookConnectUsingPOST1Request): Promise<SocialLoginResponse> {
        const response = await this.facebookConnectUsingPOST1Raw(requestParameters);
        return await response.value();
    }

    /**
     * googleConnect
     */
    async googleConnectUsingPOSTRaw(requestParameters: GoogleConnectUsingPOSTRequest): Promise<runtime.ApiResponse<SocialLoginResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling googleConnectUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/connect/Google`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GoogleLoginRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SocialLoginResponseFromJSON(jsonValue));
    }

    /**
     * googleConnect
     */
    async googleConnectUsingPOST(requestParameters: GoogleConnectUsingPOSTRequest): Promise<SocialLoginResponse> {
        const response = await this.googleConnectUsingPOSTRaw(requestParameters);
        return await response.value();
    }

    /**
     * googleConnect
     */
    async googleConnectUsingPOST1Raw(requestParameters: GoogleConnectUsingPOST1Request): Promise<runtime.ApiResponse<SocialLoginResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling googleConnectUsingPOST1.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/connect/google`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GoogleLoginRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SocialLoginResponseFromJSON(jsonValue));
    }

    /**
     * googleConnect
     */
    async googleConnectUsingPOST1(requestParameters: GoogleConnectUsingPOST1Request): Promise<SocialLoginResponse> {
        const response = await this.googleConnectUsingPOST1Raw(requestParameters);
        return await response.value();
    }

}
