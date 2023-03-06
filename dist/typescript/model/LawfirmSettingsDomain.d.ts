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
import * as models from './models';
export interface LawfirmSettingsDomain {
    "acceptsAccidents"?: boolean;
    "acceptsPastDue"?: boolean;
    "acceptsPaymentPlans"?: boolean;
    "allowReviewReplies"?: boolean;
    "defaultTrafficTicketFee"?: number;
    "isDirectoryOn"?: boolean;
    "isStoreFrontOn"?: boolean;
    "isStorefrontWidgetOn"?: boolean;
    "isVacationMode"?: boolean;
    "latestCaseAssignmentDateUtc"?: models.Timestamp;
    "maxCaseCapacity"?: number;
    "maxCaseCapacityPerDay"?: number;
    "mvsRecipient"?: string;
    "referralFee"?: number;
    "referralFeeType"?: LawfirmSettingsDomain.ReferralFeeTypeEnum;
    "vacationModeEndDateUtc"?: string;
    "vacationModeReason"?: string;
}
export declare namespace LawfirmSettingsDomain {
    enum ReferralFeeTypeEnum {
        FLATFEEINCENTS,
        PERCENT
    }
}
