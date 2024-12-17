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

export interface UpdateLawfirmModel {
    "aboutUsBlurb"?: string;
    "caseAssignmentPriority"?: number;
    "coverPhotoUrl"?: string;
    "createdBy"?: number;
    "establishedDateUtc"?: string;
    "establishedYear"?: number;
    "isTestLawfirm"?: boolean;
    "languagesServed"?: Array<string>;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmPaymentModel"?: UpdateLawfirmModel.LawfirmPaymentModelEnum;
    "lawfirmState"?: UpdateLawfirmModel.LawfirmStateEnum;
    "membershipStartDateUtc"?: string;
    "otrNotes"?: string;
    "primaryEmailAddress"?: string;
    "primaryPhoneNumber"?: string;
    "profilePictureUrl"?: string;
    "tagLine"?: string;
    "website"?: string;
}

export namespace UpdateLawfirmModel {
    export enum LawfirmPaymentModelEnum {
        DESTINATIONACCOUNT = <any> 'DESTINATION_ACCOUNT',
        SEPARATECHARGE = <any> 'SEPARATE_CHARGE',
        TRANSFERDEDUCTION = <any> 'TRANSFER_DEDUCTION'
    }
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
