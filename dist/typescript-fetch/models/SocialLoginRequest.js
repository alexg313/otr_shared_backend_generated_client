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
export function SocialLoginRequestFromJSON(json) {
    return SocialLoginRequestFromJSONTyped(json, false);
}
export function SocialLoginRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'clientType': !exists(json, 'clientType') ? undefined : json['clientType'],
        'fingerPrintId': !exists(json, 'fingerPrintId') ? undefined : json['fingerPrintId'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'httpReferrer': !exists(json, 'httpReferrer') ? undefined : json['httpReferrer'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'otherNote': !exists(json, 'otherNote') ? undefined : json['otherNote'],
        'referralCode': !exists(json, 'referralCode') ? undefined : json['referralCode'],
        'referralSourceData': !exists(json, 'referralSourceData') ? undefined : json['referralSourceData'],
        'userAccessToken': !exists(json, 'userAccessToken') ? undefined : json['userAccessToken'],
        'userReferralSourceTypeId': !exists(json, 'userReferralSourceTypeId') ? undefined : json['userReferralSourceTypeId'],
    };
}
export function SocialLoginRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'citationId': value.citationId,
        'clientType': value.clientType,
        'fingerPrintId': value.fingerPrintId,
        'firstName': value.firstName,
        'httpReferrer': value.httpReferrer,
        'lastName': value.lastName,
        'otherNote': value.otherNote,
        'referralCode': value.referralCode,
        'referralSourceData': value.referralSourceData,
        'userAccessToken': value.userAccessToken,
        'userReferralSourceTypeId': value.userReferralSourceTypeId,
    };
}
/**
* @export
* @enum {string}
*/
export var SocialLoginRequestClientTypeEnum;
(function (SocialLoginRequestClientTypeEnum) {
    SocialLoginRequestClientTypeEnum["ANDROID"] = "ANDROID";
    SocialLoginRequestClientTypeEnum["DESKTOPWEBAPP"] = "DESKTOP_WEBAPP";
    SocialLoginRequestClientTypeEnum["DMVGO"] = "DMV_GO";
    SocialLoginRequestClientTypeEnum["DMVORG"] = "DMV_ORG";
    SocialLoginRequestClientTypeEnum["EMAIL"] = "EMAIL";
    SocialLoginRequestClientTypeEnum["FRESHDESK"] = "FRESH_DESK";
    SocialLoginRequestClientTypeEnum["IOS"] = "IOS";
    SocialLoginRequestClientTypeEnum["MOBILEWEBAPP"] = "MOBILE_WEBAPP";
    SocialLoginRequestClientTypeEnum["OTRADMINCONSOLE"] = "OTR_ADMIN_CONSOLE";
    SocialLoginRequestClientTypeEnum["OTRADMINCONSOLEDEVO"] = "OTR_ADMIN_CONSOLE_DEVO";
    SocialLoginRequestClientTypeEnum["OTRADMINCONSOLELOCALHOST"] = "OTR_ADMIN_CONSOLE_LOCALHOST";
    SocialLoginRequestClientTypeEnum["OTREXPLORER"] = "OTR_EXPLORER";
    SocialLoginRequestClientTypeEnum["OTRLAWFIRMPORTAL"] = "OTR_LAWFIRM_PORTAL";
    SocialLoginRequestClientTypeEnum["OTRLAWFIRMPORTALDEVO"] = "OTR_LAWFIRM_PORTAL_DEVO";
    SocialLoginRequestClientTypeEnum["OTRLAWFIRMPORTALLOCALHOST"] = "OTR_LAWFIRM_PORTAL_LOCALHOST";
    SocialLoginRequestClientTypeEnum["OTRWEBSITE"] = "OTR_WEBSITE";
    SocialLoginRequestClientTypeEnum["OTRWEBSITEDEVO"] = "OTR_WEBSITE_DEVO";
    SocialLoginRequestClientTypeEnum["OTRWEBSITELOCALHOST"] = "OTR_WEBSITE_LOCALHOST";
    SocialLoginRequestClientTypeEnum["OTRWIDGET"] = "OTR_WIDGET";
    SocialLoginRequestClientTypeEnum["UNKNOWN"] = "UNKNOWN";
})(SocialLoginRequestClientTypeEnum || (SocialLoginRequestClientTypeEnum = {}));
