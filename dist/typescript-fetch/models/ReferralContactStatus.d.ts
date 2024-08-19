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
 * @interface ReferralContactStatus
 */
export interface ReferralContactStatus {
    /**
     *
     * @type {string}
     * @memberof ReferralContactStatus
     */
    emailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof ReferralContactStatus
     */
    errorType?: ReferralContactStatusErrorTypeEnum;
    /**
     *
     * @type {boolean}
     * @memberof ReferralContactStatus
     */
    successful?: boolean;
}
export declare function ReferralContactStatusFromJSON(json: any): ReferralContactStatus;
export declare function ReferralContactStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferralContactStatus;
export declare function ReferralContactStatusToJSON(value?: ReferralContactStatus | null): any;
/**
* @export
* @enum {string}
*/
export declare enum ReferralContactStatusErrorTypeEnum {
    EMAILALREADYEXISTS = "EMAIL_ALREADY_EXISTS",
    EMAILNOTSENT = "EMAIL_NOT_SENT",
    INVALIDEMAIL = "INVALID_EMAIL"
}
