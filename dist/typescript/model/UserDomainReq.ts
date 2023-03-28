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

export interface UserDomainReq {
    "accounts"?: Array<models.UserAccountModel>;
    "address"?: models.AddressDomainReq;
    "creationDateUtc"?: models.TimestampReq;
    "dob"?: string;
    "eligibleForAppReview"?: boolean;
    "emailAddress"?: string;
    "firstname"?: string;
    "gender"?: string;
    "hasLeftReview"?: boolean;
    "isEmailConfirmed"?: boolean;
    "isEnabled"?: boolean;
    "isLawfirmAccessGranted"?: boolean;
    "isPaymentPlansAllowed"?: boolean;
    "isTestUser"?: boolean;
    "isUnsubscribed"?: boolean;
    "lastname"?: string;
    "lawfirmId"?: number;
    "lawyerJobTitle"?: UserDomainReq.LawyerJobTitleEnum;
    "loginProvider"?: UserDomainReq.LoginProviderEnum;
    "numBookingCancelations"?: number;
    "paidCaseCount"?: number;
    "password"?: string;
    "passwordEncrypted"?: string;
    "phoneNumbers"?: Array<models.PhoneNumberDomainReq>;
    "privacyMode"?: UserDomainReq.PrivacyModeEnum;
    "profilePicture"?: string;
    "referralCount"?: number;
    "roles"?: Array<models.UserRoleDomain>;
    "signUpCode"?: string;
    "signUpCodeUseCount"?: number;
    "subscriptionPlans"?: Array<models.UserSubscriptionPlanModelReq>;
    "userAlias"?: string;
    "userId"?: number;
}

export namespace UserDomainReq {
    export enum LawyerJobTitleEnum {
        ACCOUNTANT = <any> 'ACCOUNTANT',
        ATTORNEY = <any> 'ATTORNEY',
        ATTORNEYASSOCIATE = <any> 'ATTORNEY_ASSOCIATE',
        ATTORNEYCOUNSEL = <any> 'ATTORNEY_COUNSEL',
        ATTORNEYMANAGINGPARTNER = <any> 'ATTORNEY_MANAGING_PARTNER',
        ATTORNEYPARTNER = <any> 'ATTORNEY_PARTNER',
        ATTORNEYSTAFF = <any> 'ATTORNEY_STAFF',
        CUSTOMERSERVICEREP = <any> 'CUSTOMER_SERVICE_REP',
        LEGALASSISTANT = <any> 'LEGAL_ASSISTANT',
        LEGALINTERN = <any> 'LEGAL_INTERN',
        LEGALSECRETARY = <any> 'LEGAL_SECRETARY',
        OTHER = <any> 'OTHER',
        PARALEGAL = <any> 'PARALEGAL'
    }
    export enum LoginProviderEnum {
        APPLE = <any> 'APPLE',
        EMAIL = <any> 'EMAIL',
        FACEBOOK = <any> 'FACEBOOK',
        GOOGLE = <any> 'GOOGLE',
        PHONE = <any> 'PHONE',
        TWITTER = <any> 'TWITTER'
    }
    export enum PrivacyModeEnum {
        FRIENDS = <any> 'FRIENDS',
        PRIVATE = <any> 'PRIVATE',
        PUBLIC = <any> 'PUBLIC',
        SEMIPUBLIC = <any> 'SEMI_PUBLIC'
    }
}
