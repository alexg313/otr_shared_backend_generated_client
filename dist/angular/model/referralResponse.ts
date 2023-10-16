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
import { UserDetails } from './userDetails';


export interface ReferralResponse { 
    caseId?: string;
    caseResolved?: boolean;
    referralCode?: string;
    referralCreditStatus?: ReferralResponse.ReferralCreditStatusEnum;
    referralCreditType?: ReferralResponse.ReferralCreditTypeEnum;
    referralCreditValue?: number;
    referralDate?: string;
    referralEvent?: ReferralResponse.ReferralEventEnum;
    referralExpirationDate?: string;
    referralId?: number;
    referralPaymentStatus?: ReferralResponse.ReferralPaymentStatusEnum;
    referralSourceType?: ReferralResponse.ReferralSourceTypeEnum;
    referredUser?: UserDetails;
}
export namespace ReferralResponse {
    export type ReferralCreditStatusEnum = 'APPLIED' | 'CASE_CANCELLED' | 'CONFIRMED' | 'NOTIFIED' | 'SAVED' | 'SUPERSEDED';
    export const ReferralCreditStatusEnum = {
        Applied: 'APPLIED' as ReferralCreditStatusEnum,
        CaseCancelled: 'CASE_CANCELLED' as ReferralCreditStatusEnum,
        Confirmed: 'CONFIRMED' as ReferralCreditStatusEnum,
        Notified: 'NOTIFIED' as ReferralCreditStatusEnum,
        Saved: 'SAVED' as ReferralCreditStatusEnum,
        Superseded: 'SUPERSEDED' as ReferralCreditStatusEnum
    };
    export type ReferralCreditTypeEnum = 'CENTS_VALUE' | 'NO_CREDIT' | 'PERCENTAGE_DISCOUNT';
    export const ReferralCreditTypeEnum = {
        CentsValue: 'CENTS_VALUE' as ReferralCreditTypeEnum,
        NoCredit: 'NO_CREDIT' as ReferralCreditTypeEnum,
        PercentageDiscount: 'PERCENTAGE_DISCOUNT' as ReferralCreditTypeEnum
    };
    export type ReferralEventEnum = 'CASE_BOOKING' | 'CASE_MATCH' | 'INVITE' | 'REGISTRATION';
    export const ReferralEventEnum = {
        CaseBooking: 'CASE_BOOKING' as ReferralEventEnum,
        CaseMatch: 'CASE_MATCH' as ReferralEventEnum,
        Invite: 'INVITE' as ReferralEventEnum,
        Registration: 'REGISTRATION' as ReferralEventEnum
    };
    export type ReferralPaymentStatusEnum = 'ERROR' | 'NONE' | 'PAID_OUT' | 'PENDING_ACCOUNT_VERIFICATION' | 'PENDING_CASE_RESOLUTION';
    export const ReferralPaymentStatusEnum = {
        Error: 'ERROR' as ReferralPaymentStatusEnum,
        None: 'NONE' as ReferralPaymentStatusEnum,
        PaidOut: 'PAID_OUT' as ReferralPaymentStatusEnum,
        PendingAccountVerification: 'PENDING_ACCOUNT_VERIFICATION' as ReferralPaymentStatusEnum,
        PendingCaseResolution: 'PENDING_CASE_RESOLUTION' as ReferralPaymentStatusEnum
    };
    export type ReferralSourceTypeEnum = 'ADMIN' | 'BILLBOARDS' | 'CHECKOUT_CODE' | 'DMV_COM' | 'DMV_ORG' | 'DWA' | 'FACEBOOK' | 'FRIEND_OR_FAMILY' | 'GOOGLE_SEARCH' | 'INFLUENCER_AFFILIATE' | 'KICKBACK_APP' | 'OTHER' | 'RADIO' | 'REDDIT' | 'THE_SMOKING_TIRE' | 'UNKNOWN' | 'VINWIKI' | 'YOUTUBE_AD';
    export const ReferralSourceTypeEnum = {
        Admin: 'ADMIN' as ReferralSourceTypeEnum,
        Billboards: 'BILLBOARDS' as ReferralSourceTypeEnum,
        CheckoutCode: 'CHECKOUT_CODE' as ReferralSourceTypeEnum,
        DmvCom: 'DMV_COM' as ReferralSourceTypeEnum,
        DmvOrg: 'DMV_ORG' as ReferralSourceTypeEnum,
        Dwa: 'DWA' as ReferralSourceTypeEnum,
        Facebook: 'FACEBOOK' as ReferralSourceTypeEnum,
        FriendOrFamily: 'FRIEND_OR_FAMILY' as ReferralSourceTypeEnum,
        GoogleSearch: 'GOOGLE_SEARCH' as ReferralSourceTypeEnum,
        InfluencerAffiliate: 'INFLUENCER_AFFILIATE' as ReferralSourceTypeEnum,
        KickbackApp: 'KICKBACK_APP' as ReferralSourceTypeEnum,
        Other: 'OTHER' as ReferralSourceTypeEnum,
        Radio: 'RADIO' as ReferralSourceTypeEnum,
        Reddit: 'REDDIT' as ReferralSourceTypeEnum,
        TheSmokingTire: 'THE_SMOKING_TIRE' as ReferralSourceTypeEnum,
        Unknown: 'UNKNOWN' as ReferralSourceTypeEnum,
        Vinwiki: 'VINWIKI' as ReferralSourceTypeEnum,
        YoutubeAd: 'YOUTUBE_AD' as ReferralSourceTypeEnum
    };
}


