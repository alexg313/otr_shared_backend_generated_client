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
import { AddressDomainRes, PhoneNumberDomainRes, TimestampRes, UserAccountModel, UserReferralLinkModelRes, UserRoleDomain, UserSocialProfileModelRes, UserSubscriptionPlanModelRes } from './';
/**
 *
 * @export
 * @interface UserDomainRes
 */
export interface UserDomainRes {
    /**
     *
     * @type {Array<UserAccountModel>}
     * @memberof UserDomainRes
     */
    accounts?: Array<UserAccountModel>;
    /**
     *
     * @type {AddressDomainRes}
     * @memberof UserDomainRes
     */
    address?: AddressDomainRes;
    /**
     *
     * @type {TimestampRes}
     * @memberof UserDomainRes
     */
    creationDateUtc?: TimestampRes;
    /**
     *
     * @type {Date}
     * @memberof UserDomainRes
     */
    dob?: Date;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    driverLicenseNumber?: string;
    /**
     *
     * @type {boolean}
     * @memberof UserDomainRes
     */
    eligibleForAppReview?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    emailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    firstname?: string;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    fullName?: string;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    gender?: string;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    genderType?: UserDomainResGenderTypeEnum;
    /**
     *
     * @type {Date}
     * @memberof UserDomainRes
     */
    ghostAccountCreationDateUtc?: Date;
    /**
     *
     * @type {boolean}
     * @memberof UserDomainRes
     */
    hasLeftReview?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    hubspotContactId?: string;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    intercomUserHash?: string;
    /**
     *
     * @type {boolean}
     * @memberof UserDomainRes
     */
    isEmailConfirmed?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserDomainRes
     */
    isEnabled?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserDomainRes
     */
    isLawfirmAccessGranted?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserDomainRes
     */
    isPaymentPlansAllowed?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserDomainRes
     */
    isTestUser?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserDomainRes
     */
    isUnsubscribed?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    lastname?: string;
    /**
     *
     * @type {number}
     * @memberof UserDomainRes
     */
    lawfirmId?: number;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    lawyerJobTitle?: UserDomainResLawyerJobTitleEnum;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    loginProvider?: UserDomainResLoginProviderEnum;
    /**
     *
     * @type {number}
     * @memberof UserDomainRes
     */
    numBookingCancelations?: number;
    /**
     *
     * @type {number}
     * @memberof UserDomainRes
     */
    paidCaseCount?: number;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    password?: string;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    passwordEncrypted?: string;
    /**
     *
     * @type {Array<PhoneNumberDomainRes>}
     * @memberof UserDomainRes
     */
    phoneNumbers?: Array<PhoneNumberDomainRes>;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    privacyMode?: UserDomainResPrivacyModeEnum;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    profilePicture?: string;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    race?: UserDomainResRaceEnum;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    referralCode?: string;
    /**
     *
     * @type {number}
     * @memberof UserDomainRes
     */
    referralCount?: number;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    referralLink?: string;
    /**
     *
     * @type {Array<UserReferralLinkModelRes>}
     * @memberof UserDomainRes
     */
    referralLinks?: Array<UserReferralLinkModelRes>;
    /**
     *
     * @type {Array<UserRoleDomain>}
     * @memberof UserDomainRes
     */
    roles?: Array<UserRoleDomain>;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    signUpCode?: string;
    /**
     *
     * @type {number}
     * @memberof UserDomainRes
     */
    signUpCodeUseCount?: number;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    signedProfilePictureUrl?: string;
    /**
     *
     * @type {Array<UserSocialProfileModelRes>}
     * @memberof UserDomainRes
     */
    socialProfiles?: Array<UserSocialProfileModelRes>;
    /**
     *
     * @type {Array<UserSubscriptionPlanModelRes>}
     * @memberof UserDomainRes
     */
    subscriptionPlans?: Array<UserSubscriptionPlanModelRes>;
    /**
     *
     * @type {string}
     * @memberof UserDomainRes
     */
    userAlias?: string;
    /**
     *
     * @type {Date}
     * @memberof UserDomainRes
     */
    userDeletedDateUtc?: Date;
    /**
     *
     * @type {number}
     * @memberof UserDomainRes
     */
    userId?: number;
    /**
     *
     * @type {Date}
     * @memberof UserDomainRes
     */
    userRegistrationDateUtc?: Date;
}
export declare function UserDomainResFromJSON(json: any): UserDomainRes;
export declare function UserDomainResFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDomainRes;
export declare function UserDomainResToJSON(value?: UserDomainRes | null): any;
/**
* @export
* @enum {string}
*/
export declare enum UserDomainResGenderTypeEnum {
    FEMALE = "FEMALE",
    MALE = "MALE",
    NOTAVAILABLE = "NOT_AVAILABLE",
    NOTLISTED = "NOT_LISTED",
    UNVERIFIED = "UNVERIFIED",
    X = "X"
}
/**
* @export
* @enum {string}
*/
export declare enum UserDomainResLawyerJobTitleEnum {
    ACCOUNTANT = "ACCOUNTANT",
    ATTORNEY = "ATTORNEY",
    ATTORNEYASSOCIATE = "ATTORNEY_ASSOCIATE",
    ATTORNEYCOUNSEL = "ATTORNEY_COUNSEL",
    ATTORNEYMANAGINGPARTNER = "ATTORNEY_MANAGING_PARTNER",
    ATTORNEYPARTNER = "ATTORNEY_PARTNER",
    ATTORNEYSTAFF = "ATTORNEY_STAFF",
    CUSTOMERSERVICEREP = "CUSTOMER_SERVICE_REP",
    LEGALASSISTANT = "LEGAL_ASSISTANT",
    LEGALINTERN = "LEGAL_INTERN",
    LEGALSECRETARY = "LEGAL_SECRETARY",
    OTHER = "OTHER",
    PARALEGAL = "PARALEGAL"
}
/**
* @export
* @enum {string}
*/
export declare enum UserDomainResLoginProviderEnum {
    APPLE = "APPLE",
    EMAIL = "EMAIL",
    FACEBOOK = "FACEBOOK",
    GOOGLE = "GOOGLE",
    PHONE = "PHONE",
    TWITTER = "TWITTER",
    UNKNOWN = "UNKNOWN"
}
/**
* @export
* @enum {string}
*/
export declare enum UserDomainResPrivacyModeEnum {
    FRIENDS = "FRIENDS",
    PRIVATE = "PRIVATE",
    PUBLIC = "PUBLIC",
    SEMIPUBLIC = "SEMI_PUBLIC"
}
/**
* @export
* @enum {string}
*/
export declare enum UserDomainResRaceEnum {
    ASIAN = "ASIAN",
    BLACK = "BLACK",
    HISPANIC = "HISPANIC",
    MIDDLEEASTERN = "MIDDLE_EASTERN",
    NATIVE = "NATIVE",
    NOTAVAILABLE = "NOT_AVAILABLE",
    PACIFICISLANDER = "PACIFIC_ISLANDER",
    TWOORMORE = "TWO_OR_MORE",
    UNKNOWN = "UNKNOWN",
    UNVERIFIED = "UNVERIFIED",
    WHITE = "WHITE"
}
