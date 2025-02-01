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
import { exists } from '../runtime';
export function LastLoginDateByUserAccountFromJSON(json) {
    return LastLoginDateByUserAccountFromJSONTyped(json, false);
}
export function LastLoginDateByUserAccountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'clientType': !exists(json, 'clientType') ? undefined : json['clientType'],
        'loginDateUtc': !exists(json, 'loginDateUtc') ? undefined : (new Date(json['loginDateUtc'])),
        'socialLoginProvider': !exists(json, 'socialLoginProvider') ? undefined : json['socialLoginProvider'],
        'userHandle': !exists(json, 'userHandle') ? undefined : json['userHandle'],
    };
}
export function LastLoginDateByUserAccountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'clientType': value.clientType,
        'loginDateUtc': value.loginDateUtc === undefined ? undefined : (value.loginDateUtc.toISOString()),
        'socialLoginProvider': value.socialLoginProvider,
        'userHandle': value.userHandle,
    };
}
/**
* @export
* @enum {string}
*/
export var LastLoginDateByUserAccountClientTypeEnum;
(function (LastLoginDateByUserAccountClientTypeEnum) {
    LastLoginDateByUserAccountClientTypeEnum["ANDROID"] = "ANDROID";
    LastLoginDateByUserAccountClientTypeEnum["DESKTOPWEBAPP"] = "DESKTOP_WEBAPP";
    LastLoginDateByUserAccountClientTypeEnum["DMVGO"] = "DMV_GO";
    LastLoginDateByUserAccountClientTypeEnum["DMVORG"] = "DMV_ORG";
    LastLoginDateByUserAccountClientTypeEnum["EMAIL"] = "EMAIL";
    LastLoginDateByUserAccountClientTypeEnum["FRESHDESK"] = "FRESH_DESK";
    LastLoginDateByUserAccountClientTypeEnum["IOS"] = "IOS";
    LastLoginDateByUserAccountClientTypeEnum["LOCALHOST"] = "LOCALHOST";
    LastLoginDateByUserAccountClientTypeEnum["MOBILEWEBAPP"] = "MOBILE_WEBAPP";
    LastLoginDateByUserAccountClientTypeEnum["OTRADMINCONSOLE"] = "OTR_ADMIN_CONSOLE";
    LastLoginDateByUserAccountClientTypeEnum["OTRADMINCONSOLEDEVO"] = "OTR_ADMIN_CONSOLE_DEVO";
    LastLoginDateByUserAccountClientTypeEnum["OTRADMINCONSOLELOCALHOST"] = "OTR_ADMIN_CONSOLE_LOCALHOST";
    LastLoginDateByUserAccountClientTypeEnum["OTREXPLORER"] = "OTR_EXPLORER";
    LastLoginDateByUserAccountClientTypeEnum["OTRJOBSCHEDULER"] = "OTR_JOB_SCHEDULER";
    LastLoginDateByUserAccountClientTypeEnum["OTRLAWFIRMPORTAL"] = "OTR_LAWFIRM_PORTAL";
    LastLoginDateByUserAccountClientTypeEnum["OTRLAWFIRMPORTALDEVO"] = "OTR_LAWFIRM_PORTAL_DEVO";
    LastLoginDateByUserAccountClientTypeEnum["OTRLAWFIRMPORTALLOCALHOST"] = "OTR_LAWFIRM_PORTAL_LOCALHOST";
    LastLoginDateByUserAccountClientTypeEnum["OTRWEBSITE"] = "OTR_WEBSITE";
    LastLoginDateByUserAccountClientTypeEnum["OTRWEBSITEDEVO"] = "OTR_WEBSITE_DEVO";
    LastLoginDateByUserAccountClientTypeEnum["OTRWEBSITELOCALHOST"] = "OTR_WEBSITE_LOCALHOST";
    LastLoginDateByUserAccountClientTypeEnum["OTRWIDGET"] = "OTR_WIDGET";
    LastLoginDateByUserAccountClientTypeEnum["UNKNOWN"] = "UNKNOWN";
})(LastLoginDateByUserAccountClientTypeEnum || (LastLoginDateByUserAccountClientTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var LastLoginDateByUserAccountSocialLoginProviderEnum;
(function (LastLoginDateByUserAccountSocialLoginProviderEnum) {
    LastLoginDateByUserAccountSocialLoginProviderEnum["APPLE"] = "APPLE";
    LastLoginDateByUserAccountSocialLoginProviderEnum["EMAIL"] = "EMAIL";
    LastLoginDateByUserAccountSocialLoginProviderEnum["FACEBOOK"] = "FACEBOOK";
    LastLoginDateByUserAccountSocialLoginProviderEnum["GOOGLE"] = "GOOGLE";
    LastLoginDateByUserAccountSocialLoginProviderEnum["PHONE"] = "PHONE";
    LastLoginDateByUserAccountSocialLoginProviderEnum["TWITTER"] = "TWITTER";
    LastLoginDateByUserAccountSocialLoginProviderEnum["UNKNOWN"] = "UNKNOWN";
})(LastLoginDateByUserAccountSocialLoginProviderEnum || (LastLoginDateByUserAccountSocialLoginProviderEnum = {}));
