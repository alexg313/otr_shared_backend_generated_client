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

export interface LawfirmStorefrontModel {
    "aboutUsBlurb"?: string;
    "activeCaseCount"?: number;
    "averageRating"?: number;
    "coverPhotoUrl"?: string;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmState"?: LawfirmStorefrontModel.LawfirmStateEnum;
    "profilePictureUrl"?: string;
    "resolvedCaseCount"?: number;
    "reviewCount"?: number;
    "reviewToDisplay"?: string;
    "reviewerName"?: string;
    "seoUrl"?: string;
    "tagLine"?: string;
    "vacationModeOn"?: boolean;
    "website"?: string;
}

export namespace LawfirmStorefrontModel {
    export enum LawfirmStateEnum {
        ACCOUNTCLOSED = <any> 'ACCOUNT_CLOSED',
        ACTIVE = <any> 'ACTIVE',
        BLACKLISTED = <any> 'BLACKLISTED',
        DEMOCOMPLETED = <any> 'DEMO_COMPLETED',
        DUPLICATE = <any> 'DUPLICATE',
        FUTURELEAD = <any> 'FUTURE_LEAD',
        LEAD = <any> 'LEAD',
        NEWPARTNER = <any> 'NEW_PARTNER',
        NOTAGOODFIT = <any> 'NOT_A_GOOD_FIT',
        NOTINTERESTEDDONOTCONTACT = <any> 'NOT_INTERESTED_DO_NOT_CONTACT',
        NOTINTERESTEDFEESPLITTING = <any> 'NOT_INTERESTED_FEE_SPLITTING',
        NOTINTERESTEDMARKETINGFEE = <any> 'NOT_INTERESTED_MARKETING_FEE',
        NOTINTERESTEDMONEYBACKGUARANTEE = <any> 'NOT_INTERESTED_MONEY_BACK_GUARANTEE',
        NOTINTERESTEDPLATFORMRESISTANCE = <any> 'NOT_INTERESTED_PLATFORM_RESISTANCE',
        PASTINTEREST = <any> 'PAST_INTEREST',
        SUPERVISED = <any> 'SUPERVISED',
        TEMPORARILYTURNEDOFF = <any> 'TEMPORARILY_TURNED_OFF',
        TERMINATEDFRAUD = <any> 'TERMINATED_FRAUD',
        TERMINATEDPOORSERVICE = <any> 'TERMINATED_POOR_SERVICE',
        TERMINATEDPOORSUCCESS = <any> 'TERMINATED_POOR_SUCCESS'
    }
}
