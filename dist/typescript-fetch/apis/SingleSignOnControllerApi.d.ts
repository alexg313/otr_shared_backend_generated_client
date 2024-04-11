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
import { SingleSignOnResponse } from '../models';
export interface LoginWithSSOUsingPOSTRequest {
    brandId: string;
    email: string;
    isAdmin: boolean;
    password: string;
}
/**
 *
 */
export declare class SingleSignOnControllerApi extends runtime.BaseAPI {
    /**
     * loginWithSSO
     */
    loginWithSSOUsingPOSTRaw(requestParameters: LoginWithSSOUsingPOSTRequest): Promise<runtime.ApiResponse<SingleSignOnResponse>>;
    /**
     * loginWithSSO
     */
    loginWithSSOUsingPOST(requestParameters: LoginWithSSOUsingPOSTRequest): Promise<SingleSignOnResponse>;
}
