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
export interface UserDomain {
    "accounts"?: Array<models.UserAccountModel>;
    "address"?: models.AddressDomain;
    "creationDateUtc"?: models.Timestamp;
    "dob"?: string;
    "eligibleForAppReview"?: boolean;
    "emailAddress"?: string;
    "firstname"?: string;
    "fullName"?: string;
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
    "lawyerJobTitle"?: UserDomain.LawyerJobTitleEnum;
    "loginProvider"?: UserDomain.LoginProviderEnum;
    "numBookingCancelations"?: number;
    "paidCaseCount"?: number;
    "password"?: string;
    "passwordEncrypted"?: string;
    "phoneNumbers"?: Array<models.PhoneNumberDomain>;
    "privacyMode"?: UserDomain.PrivacyModeEnum;
    "profilePicture"?: string;
    "referralCount"?: number;
    "roles"?: Array<models.UserRoleDomain>;
    "signUpCode"?: string;
    "signUpCodeUseCount"?: number;
    "subscriptionPlans"?: Array<models.UserSubscriptionPlanModel>;
    "userAlias"?: string;
    "userId"?: number;
}
export declare namespace UserDomain {
    enum LawyerJobTitleEnum {
        ACCOUNTANT,
        ATTORNEY,
        ATTORNEYASSOCIATE,
        ATTORNEYCOUNSEL,
        ATTORNEYMANAGINGPARTNER,
        ATTORNEYPARTNER,
        ATTORNEYSTAFF,
        CUSTOMERSERVICEREP,
        LEGALASSISTANT,
        LEGALINTERN,
        LEGALSECRETARY,
        OTHER,
        PARALEGAL
    }
    enum LoginProviderEnum {
        APPLE,
        EMAIL,
        FACEBOOK,
        GOOGLE,
        PHONE,
        TWITTER,
        UNKNOWN
    }
    enum PrivacyModeEnum {
        FRIENDS,
        PRIVATE,
        PUBLIC,
        SEMIPUBLIC
    }
}
