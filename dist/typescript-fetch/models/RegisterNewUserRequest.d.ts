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
import { NewUser } from './';
/**
 *
 * @export
 * @interface RegisterNewUserRequest
 */
export interface RegisterNewUserRequest {
    /**
     *
     * @type {string}
     * @memberof RegisterNewUserRequest
     */
    authCode?: string;
    /**
     *
     * @type {number}
     * @memberof RegisterNewUserRequest
     */
    citationId?: number;
    /**
     *
     * @type {string}
     * @memberof RegisterNewUserRequest
     */
    clientType?: RegisterNewUserRequestClientTypeEnum;
    /**
     *
     * @type {string}
     * @memberof RegisterNewUserRequest
     */
    fingerPrintId?: string;
    /**
     *
     * @type {string}
     * @memberof RegisterNewUserRequest
     */
    httpReferrer?: string;
    /**
     *
     * @type {boolean}
     * @memberof RegisterNewUserRequest
     */
    isAutoLogin?: boolean;
    /**
     *
     * @type {string}
     * @memberof RegisterNewUserRequest
     */
    otherNote?: string;
    /**
     *
     * @type {string}
     * @memberof RegisterNewUserRequest
     */
    referralCode?: string;
    /**
     *
     * @type {{ [key: string]: object; }}
     * @memberof RegisterNewUserRequest
     */
    referralSourceData?: {
        [key: string]: object;
    };
    /**
     *
     * @type {string}
     * @memberof RegisterNewUserRequest
     */
    roleType?: RegisterNewUserRequestRoleTypeEnum;
    /**
     *
     * @type {boolean}
     * @memberof RegisterNewUserRequest
     */
    shouldVerifyPhoneNumber?: boolean;
    /**
     *
     * @type {NewUser}
     * @memberof RegisterNewUserRequest
     */
    user?: NewUser;
    /**
     *
     * @type {number}
     * @memberof RegisterNewUserRequest
     */
    userReferralSourceTypeId?: number;
}
export declare function RegisterNewUserRequestFromJSON(json: any): RegisterNewUserRequest;
export declare function RegisterNewUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterNewUserRequest;
export declare function RegisterNewUserRequestToJSON(value?: RegisterNewUserRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum RegisterNewUserRequestClientTypeEnum {
    ANDROID = "ANDROID",
    DESKTOPWEBAPP = "DESKTOP_WEBAPP",
    DMVGO = "DMV_GO",
    DMVORG = "DMV_ORG",
    EMAIL = "EMAIL",
    FRESHDESK = "FRESH_DESK",
    IOS = "IOS",
    LOCALHOST = "LOCALHOST",
    MOBILEWEBAPP = "MOBILE_WEBAPP",
    OTRADMINCONSOLE = "OTR_ADMIN_CONSOLE",
    OTRADMINCONSOLEDEVO = "OTR_ADMIN_CONSOLE_DEVO",
    OTRADMINCONSOLELOCALHOST = "OTR_ADMIN_CONSOLE_LOCALHOST",
    OTREXPLORER = "OTR_EXPLORER",
    OTRJOBSCHEDULER = "OTR_JOB_SCHEDULER",
    OTRLAWFIRMPORTAL = "OTR_LAWFIRM_PORTAL",
    OTRLAWFIRMPORTALDEVO = "OTR_LAWFIRM_PORTAL_DEVO",
    OTRLAWFIRMPORTALLOCALHOST = "OTR_LAWFIRM_PORTAL_LOCALHOST",
    OTRWEBSITE = "OTR_WEBSITE",
    OTRWEBSITEDEVO = "OTR_WEBSITE_DEVO",
    OTRWEBSITELOCALHOST = "OTR_WEBSITE_LOCALHOST",
    OTRWIDGET = "OTR_WIDGET",
    UNKNOWN = "UNKNOWN"
}
/**
* @export
* @enum {string}
*/
export declare enum RegisterNewUserRequestRoleTypeEnum {
    ADMIN = "ADMIN",
    DEFENDANT = "DEFENDANT",
    LAWFIRMADMIN = "LAWFIRM_ADMIN",
    LAWYER = "LAWYER",
    PARTNER = "PARTNER",
    UNKNOWN = "UNKNOWN"
}
