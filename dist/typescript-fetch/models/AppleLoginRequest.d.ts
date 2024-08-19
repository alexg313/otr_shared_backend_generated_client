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
/**
 *
 * @export
 * @interface AppleLoginRequest
 */
export interface AppleLoginRequest {
    /**
     *
     * @type {string}
     * @memberof AppleLoginRequest
     */
    authCode?: string;
    /**
     *
     * @type {number}
     * @memberof AppleLoginRequest
     */
    citationId?: number;
    /**
     *
     * @type {string}
     * @memberof AppleLoginRequest
     */
    familyName?: string;
    /**
     *
     * @type {string}
     * @memberof AppleLoginRequest
     */
    fingerPrintId?: string;
    /**
     *
     * @type {string}
     * @memberof AppleLoginRequest
     */
    givenName?: string;
    /**
     *
     * @type {string}
     * @memberof AppleLoginRequest
     */
    identityToken?: string;
}
export declare function AppleLoginRequestFromJSON(json: any): AppleLoginRequest;
export declare function AppleLoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppleLoginRequest;
export declare function AppleLoginRequestToJSON(value?: AppleLoginRequest | null): any;
