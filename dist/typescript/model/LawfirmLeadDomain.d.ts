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
export interface LawfirmLeadDomain {
    "isLawyerEmailConfirmed"?: boolean;
    "isLawyerEnabled"?: boolean;
    "isTestLawfirm"?: boolean;
    "isTestLawyer"?: boolean;
    "isVacationMode"?: boolean;
    "lawfirmAddressState"?: LawfirmLeadDomain.LawfirmAddressStateEnum;
    "lawfirmCity"?: string;
    "lawfirmCreatedByUserId"?: number;
    "lawfirmId"?: number;
    "lawfirmName"?: string;
    "lawfirmPostalCode"?: string;
    "lawfirmState"?: LawfirmLeadDomain.LawfirmStateEnum;
    "lawyerEmailAddress"?: string;
    "lawyerFirstName"?: string;
    "lawyerLastName"?: string;
    "lawyerUserId"?: number;
    "leadOwnerFirstName"?: string;
    "leadOwnerLastName"?: string;
    "outgoingContacts"?: Array<models.OutgoingContactDomain>;
}
export declare namespace LawfirmLeadDomain {
    enum LawfirmAddressStateEnum {
        AK,
        AL,
        AR,
        AZ,
        CA,
        CO,
        CT,
        DC,
        DE,
        FL,
        GA,
        HI,
        IA,
        ID,
        IL,
        IN,
        KS,
        KY,
        LA,
        MA,
        MD,
        ME,
        MI,
        MN,
        MO,
        MS,
        MT,
        NC,
        ND,
        NE,
        NH,
        NJ,
        NM,
        NV,
        NY,
        OH,
        OK,
        OR,
        PA,
        RI,
        SC,
        SD,
        TN,
        TX,
        UT,
        VA,
        VT,
        WA,
        WI,
        WV,
        WY
    }
    enum LawfirmStateEnum {
        ACCOUNTCLOSED,
        DUPLICATE,
        ESTABLISHED,
        FUTURELEAD,
        INTRIAL,
        LAWFIRMINTERESTED,
        LAWFIRMLEAD,
        LAWFIRMNOTINTERESTED,
        NOTINTERESTEDFEESPLITTINGETHICS,
        NOTINTERESTEDREFUNDETHICS,
        ONBOARDING,
        TEMPORARILYTURNEDOFF,
        TERMINATEDFRAUD,
        TERMINATEDPOORSERVICE,
        TERMINATEDPOORSUCCESS,
        UNDERREVIEW
    }
}
