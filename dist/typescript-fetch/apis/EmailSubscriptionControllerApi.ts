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
    SubscribeRequest,
    SubscribeRequestFromJSON,
    SubscribeRequestToJSON,
} from '../models';

export interface SubscribeUsingPOSTRequest {
    request: SubscribeRequest;
}

/**
 * 
 */
export class EmailSubscriptionControllerApi extends runtime.BaseAPI {

    /**
     * subscribe
     */
    async subscribeUsingPOSTRaw(requestParameters: SubscribeUsingPOSTRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling subscribeUsingPOST.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/subscribe`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscribeRequestToJSON(requestParameters.request),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * subscribe
     */
    async subscribeUsingPOST(requestParameters: SubscribeUsingPOSTRequest): Promise<object> {
        const response = await this.subscribeUsingPOSTRaw(requestParameters);
        return await response.value();
    }

}
