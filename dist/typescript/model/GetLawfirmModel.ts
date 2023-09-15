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

export interface GetLawfirmModel {
    "aboutUsBlurb"?: string;
    "address"?: models.AddressDomain;
    "caseAssignmentPriority"?: number;
    "coverPhotoUrl"?: string;
    "createdBy"?: number;
    "establishedDateUtc"?: string;
    "establishedYear"?: number;
    "isLawfirmDisabled"?: boolean;
    "isLawfirmNotWithCompany"?: boolean;
    "isTestLawfirm"?: boolean;
    "languagesServed"?: Array<string>;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmPaymentModel"?: GetLawfirmModel.LawfirmPaymentModelEnum;
    "lawfirmState"?: GetLawfirmModel.LawfirmStateEnum;
    "membershipStartDateUtc"?: string;
    "otrNotes"?: string;
    "primaryEmailAddress"?: string;
    "primaryPhoneNumber"?: string;
    "profilePictureUrl"?: string;
    "redirects"?: Array<models.LawfirmRedirectModel>;
    "seoUrl"?: string;
    "settings"?: models.LawfirmSettingsDomainRes;
    "supportedStates"?: Array<GetLawfirmModel.SupportedStatesEnum>;
    "tagLine"?: string;
    "website"?: string;
}

export namespace GetLawfirmModel {
    export enum LawfirmPaymentModelEnum {
        DESTINATIONACCOUNT = <any> 'DESTINATION_ACCOUNT',
        SEPARATECHARGE = <any> 'SEPARATE_CHARGE',
        TRANSFERDEDUCTION = <any> 'TRANSFER_DEDUCTION'
    }
    export enum LawfirmStateEnum {
        ACCOUNTCLOSED = <any> 'ACCOUNT_CLOSED',
        DUPLICATE = <any> 'DUPLICATE',
        ESTABLISHED = <any> 'ESTABLISHED',
        FUTURELEAD = <any> 'FUTURE_LEAD',
        INTRIAL = <any> 'IN_TRIAL',
        LAWFIRMINTERESTED = <any> 'LAWFIRM_INTERESTED',
        LAWFIRMLEAD = <any> 'LAWFIRM_LEAD',
        LAWFIRMNOTINTERESTED = <any> 'LAWFIRM_NOT_INTERESTED',
        NOTINTERESTEDFEESPLITTINGETHICS = <any> 'NOT_INTERESTED_FEE_SPLITTING_ETHICS',
        NOTINTERESTEDREFUNDETHICS = <any> 'NOT_INTERESTED_REFUND_ETHICS',
        ONBOARDING = <any> 'ONBOARDING',
        TEMPORARILYTURNEDOFF = <any> 'TEMPORARILY_TURNED_OFF',
        TERMINATEDFRAUD = <any> 'TERMINATED_FRAUD',
        TERMINATEDPOORSERVICE = <any> 'TERMINATED_POOR_SERVICE',
        TERMINATEDPOORSUCCESS = <any> 'TERMINATED_POOR_SUCCESS',
        UNDERREVIEW = <any> 'UNDER_REVIEW'
    }
    export enum SupportedStatesEnum {
        AK = <any> 'AK',
        AL = <any> 'AL',
        AR = <any> 'AR',
        AZ = <any> 'AZ',
        CA = <any> 'CA',
        CO = <any> 'CO',
        CT = <any> 'CT',
        DC = <any> 'DC',
        DE = <any> 'DE',
        FL = <any> 'FL',
        GA = <any> 'GA',
        HI = <any> 'HI',
        IA = <any> 'IA',
        ID = <any> 'ID',
        IL = <any> 'IL',
        IN = <any> 'IN',
        KS = <any> 'KS',
        KY = <any> 'KY',
        LA = <any> 'LA',
        MA = <any> 'MA',
        MD = <any> 'MD',
        ME = <any> 'ME',
        MI = <any> 'MI',
        MN = <any> 'MN',
        MO = <any> 'MO',
        MS = <any> 'MS',
        MT = <any> 'MT',
        NC = <any> 'NC',
        ND = <any> 'ND',
        NE = <any> 'NE',
        NH = <any> 'NH',
        NJ = <any> 'NJ',
        NM = <any> 'NM',
        NV = <any> 'NV',
        NY = <any> 'NY',
        OH = <any> 'OH',
        OK = <any> 'OK',
        OR = <any> 'OR',
        PA = <any> 'PA',
        RI = <any> 'RI',
        SC = <any> 'SC',
        SD = <any> 'SD',
        TN = <any> 'TN',
        TX = <any> 'TX',
        UT = <any> 'UT',
        VA = <any> 'VA',
        VT = <any> 'VT',
        WA = <any> 'WA',
        WI = <any> 'WI',
        WV = <any> 'WV',
        WY = <any> 'WY'
    }
}
