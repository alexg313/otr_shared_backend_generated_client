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
export interface PushNotificationRequest {
    "messageBody"?: string;
    "pageType"?: PushNotificationRequest.PageTypeEnum;
    "platformType"?: PushNotificationRequest.PlatformTypeEnum;
}
export declare namespace PushNotificationRequest {
    enum PageTypeEnum {
        CASEACTION,
        CASEMESSAGES,
        CASESTATUS,
        COURTDATESCHEDULED,
        NEWTICKET,
        PROFILE
    }
    enum PlatformTypeEnum {
        ANDROID,
        IOS,
        WEBAPP
    }
}
