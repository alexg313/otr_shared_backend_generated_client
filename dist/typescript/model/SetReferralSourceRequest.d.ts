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
export interface SetReferralSourceRequest {
    "clientType"?: SetReferralSourceRequest.ClientTypeEnum;
    "isFromAdvertisement"?: boolean;
    "otherNote"?: string;
    "referralCode"?: string;
    "referralSourceData"?: {
        [key: string]: object;
    };
    "referrerEmail"?: string;
    "referrerName"?: string;
    "userId"?: number;
    "userReferralSourceTypeId"?: number;
}
export declare namespace SetReferralSourceRequest {
    enum ClientTypeEnum {
        ANDROID,
        DESKTOPWEBAPP,
        DMVGO,
        DMVORG,
        FRESHDESK,
        IOS,
        MOBILEWEBAPP,
        OTRADMINCONSOLE,
        OTRADMINCONSOLEDEVO,
        OTRADMINCONSOLELOCALHOST,
        OTREXPLORER,
        OTRLAWFIRMPORTAL,
        OTRLAWFIRMPORTALDEVO,
        OTRLAWFIRMPORTALLOCALHOST,
        OTRWEBSITE,
        OTRWEBSITEDEVO,
        OTRWEBSITELOCALHOST,
        OTRWIDGET,
        UNKNOWN
    }
}
