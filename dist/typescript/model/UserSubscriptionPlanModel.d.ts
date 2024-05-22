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
export interface UserSubscriptionPlanModel {
    "expirationDateUtc"?: string;
    "id"?: string;
    "productName"?: UserSubscriptionPlanModel.ProductNameEnum;
    "startDateUtc"?: string;
    "subscriptionCovered"?: boolean;
    "subscriptionStatus"?: UserSubscriptionPlanModel.SubscriptionStatusEnum;
}
export declare namespace UserSubscriptionPlanModel {
    enum ProductNameEnum {
        CONVOYPRO,
        OTRFASTLANE,
        OTRFASTLANETEEN
    }
    enum SubscriptionStatusEnum {
        ACTIVE,
        CANCELED,
        INCOMPLETE,
        INCOMPLETEEXPIRED,
        INTRIALPERIOD,
        PASTDUE,
        UNKNOWN,
        UNPAID
    }
}
