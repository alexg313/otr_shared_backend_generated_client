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
import { UserDomain } from './';
/**
 *
 * @export
 * @interface GetCurrentUserResponse
 */
export interface GetCurrentUserResponse {
    /**
     *
     * @type {boolean}
     * @memberof GetCurrentUserResponse
     */
    isUserAuthenticated?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GetCurrentUserResponse
     */
    isUserLoggedIn?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GetCurrentUserResponse
     */
    isUserRememberMeAuthenticated?: boolean;
    /**
     *
     * @type {string}
     * @memberof GetCurrentUserResponse
     */
    jwt?: string;
    /**
     *
     * @type {string}
     * @memberof GetCurrentUserResponse
     */
    redirectUrl?: string;
    /**
     *
     * @type {UserDomain}
     * @memberof GetCurrentUserResponse
     */
    user?: UserDomain;
}
export declare function GetCurrentUserResponseFromJSON(json: any): GetCurrentUserResponse;
export declare function GetCurrentUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCurrentUserResponse;
export declare function GetCurrentUserResponseToJSON(value?: GetCurrentUserResponse | null): any;
