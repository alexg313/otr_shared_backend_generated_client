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
import { UserAccountModel } from './userAccountModel';
import { AddressDomain } from './addressDomain';
import { PhoneNumberDomain } from './phoneNumberDomain';
import { UserRoleDomain } from './userRoleDomain';
import { UserSubscriptionPlanModel } from './userSubscriptionPlanModel';
import { Timestamp } from './timestamp';


export interface UserDomain { 
    accounts?: Array<UserAccountModel>;
    address?: AddressDomain;
    creationDateUtc?: Timestamp;
    dob?: string;
    eligibleForAppReview?: boolean;
    emailAddress?: string;
    firstname?: string;
    fullName?: string;
    gender?: string;
    ghostAccountCreationDateUtc?: string;
    hasLeftReview?: boolean;
    isEmailConfirmed?: boolean;
    isEnabled?: boolean;
    isLawfirmAccessGranted?: boolean;
    isPaymentPlansAllowed?: boolean;
    isTestUser?: boolean;
    isUnsubscribed?: boolean;
    lastname?: string;
    lawfirmId?: number;
    lawyerJobTitle?: UserDomain.LawyerJobTitleEnum;
    loginProvider?: UserDomain.LoginProviderEnum;
    numBookingCancelations?: number;
    paidCaseCount?: number;
    password?: string;
    passwordEncrypted?: string;
    phoneNumbers?: Set<PhoneNumberDomain>;
    privacyMode?: UserDomain.PrivacyModeEnum;
    profilePicture?: string;
    referralCount?: number;
    roles?: Set<UserRoleDomain>;
    signUpCode?: string;
    signUpCodeUseCount?: number;
    subscriptionPlans?: Array<UserSubscriptionPlanModel>;
    userAlias?: string;
    userId?: number;
    userRegistrationDateUtc?: string;
}
export namespace UserDomain {
    export type LawyerJobTitleEnum = 'ACCOUNTANT' | 'ATTORNEY' | 'ATTORNEY_ASSOCIATE' | 'ATTORNEY_COUNSEL' | 'ATTORNEY_MANAGING_PARTNER' | 'ATTORNEY_PARTNER' | 'ATTORNEY_STAFF' | 'CUSTOMER_SERVICE_REP' | 'LEGAL_ASSISTANT' | 'LEGAL_INTERN' | 'LEGAL_SECRETARY' | 'OTHER' | 'PARALEGAL';
    export const LawyerJobTitleEnum = {
        Accountant: 'ACCOUNTANT' as LawyerJobTitleEnum,
        Attorney: 'ATTORNEY' as LawyerJobTitleEnum,
        AttorneyAssociate: 'ATTORNEY_ASSOCIATE' as LawyerJobTitleEnum,
        AttorneyCounsel: 'ATTORNEY_COUNSEL' as LawyerJobTitleEnum,
        AttorneyManagingPartner: 'ATTORNEY_MANAGING_PARTNER' as LawyerJobTitleEnum,
        AttorneyPartner: 'ATTORNEY_PARTNER' as LawyerJobTitleEnum,
        AttorneyStaff: 'ATTORNEY_STAFF' as LawyerJobTitleEnum,
        CustomerServiceRep: 'CUSTOMER_SERVICE_REP' as LawyerJobTitleEnum,
        LegalAssistant: 'LEGAL_ASSISTANT' as LawyerJobTitleEnum,
        LegalIntern: 'LEGAL_INTERN' as LawyerJobTitleEnum,
        LegalSecretary: 'LEGAL_SECRETARY' as LawyerJobTitleEnum,
        Other: 'OTHER' as LawyerJobTitleEnum,
        Paralegal: 'PARALEGAL' as LawyerJobTitleEnum
    };
    export type LoginProviderEnum = 'APPLE' | 'EMAIL' | 'FACEBOOK' | 'GOOGLE' | 'PHONE' | 'TWITTER' | 'UNKNOWN';
    export const LoginProviderEnum = {
        Apple: 'APPLE' as LoginProviderEnum,
        Email: 'EMAIL' as LoginProviderEnum,
        Facebook: 'FACEBOOK' as LoginProviderEnum,
        Google: 'GOOGLE' as LoginProviderEnum,
        Phone: 'PHONE' as LoginProviderEnum,
        Twitter: 'TWITTER' as LoginProviderEnum,
        Unknown: 'UNKNOWN' as LoginProviderEnum
    };
    export type PrivacyModeEnum = 'FRIENDS' | 'PRIVATE' | 'PUBLIC' | 'SEMI_PUBLIC';
    export const PrivacyModeEnum = {
        Friends: 'FRIENDS' as PrivacyModeEnum,
        Private: 'PRIVATE' as PrivacyModeEnum,
        Public: 'PUBLIC' as PrivacyModeEnum,
        SemiPublic: 'SEMI_PUBLIC' as PrivacyModeEnum
    };
}


