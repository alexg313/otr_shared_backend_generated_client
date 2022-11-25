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
export interface LawfirmSettingsDomainReq {
    "acceptsAccidents"?: boolean;
    "acceptsPastDue"?: boolean;
    "acceptsPaymentPlans"?: boolean;
    "allowReviewReplies"?: boolean;
    "defaultTrafficTicketFee"?: number;
    "isDirectoryOn"?: boolean;
    "isVacationMode"?: boolean;
    "latestCaseAssignmentDateUtc"?: models.TimestampReq;
    "maxCaseCapacity"?: number;
    "maxCaseCapacityPerDay"?: number;
    "mvsRecipient"?: string;
    "referralFee"?: number;
    "referralFeeType"?: LawfirmSettingsDomainReq.ReferralFeeTypeEnum;
    "vacationModeEndDateUtc"?: string;
    "vacationModeReason"?: string;
}
export declare namespace LawfirmSettingsDomainReq {
    enum ReferralFeeTypeEnum {
        FLATFEEINCENTS,
        PERCENT
    }
}
