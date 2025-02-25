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
import { PhoneNumberDomain } from './phoneNumberDomain';


export interface GhostUser { 
    clientType?: GhostUser.ClientTypeEnum;
    dob?: string;
    driverLicenseNumber?: string;
    emailAddress?: string;
    firstname?: string;
    gender?: GhostUser.GenderEnum;
    lastname?: string;
    password?: string;
    phoneNumbers?: Set<PhoneNumberDomain>;
    race?: GhostUser.RaceEnum;
}
export namespace GhostUser {
    export type ClientTypeEnum = 'ANDROID' | 'DESKTOP_WEBAPP' | 'DMV_GO' | 'DMV_ORG' | 'EMAIL' | 'FRESH_DESK' | 'IOS' | 'LOCALHOST' | 'MOBILE_WEBAPP' | 'OTR_ADMIN_CONSOLE' | 'OTR_ADMIN_CONSOLE_DEVO' | 'OTR_ADMIN_CONSOLE_LOCALHOST' | 'OTR_EXPLORER' | 'OTR_JOB_SCHEDULER' | 'OTR_LAWFIRM_PORTAL' | 'OTR_LAWFIRM_PORTAL_DEVO' | 'OTR_LAWFIRM_PORTAL_LOCALHOST' | 'OTR_WEBSITE' | 'OTR_WEBSITE_DEVO' | 'OTR_WEBSITE_LOCALHOST' | 'OTR_WIDGET' | 'UNKNOWN';
    export const ClientTypeEnum = {
        Android: 'ANDROID' as ClientTypeEnum,
        DesktopWebapp: 'DESKTOP_WEBAPP' as ClientTypeEnum,
        DmvGo: 'DMV_GO' as ClientTypeEnum,
        DmvOrg: 'DMV_ORG' as ClientTypeEnum,
        Email: 'EMAIL' as ClientTypeEnum,
        FreshDesk: 'FRESH_DESK' as ClientTypeEnum,
        Ios: 'IOS' as ClientTypeEnum,
        Localhost: 'LOCALHOST' as ClientTypeEnum,
        MobileWebapp: 'MOBILE_WEBAPP' as ClientTypeEnum,
        OtrAdminConsole: 'OTR_ADMIN_CONSOLE' as ClientTypeEnum,
        OtrAdminConsoleDevo: 'OTR_ADMIN_CONSOLE_DEVO' as ClientTypeEnum,
        OtrAdminConsoleLocalhost: 'OTR_ADMIN_CONSOLE_LOCALHOST' as ClientTypeEnum,
        OtrExplorer: 'OTR_EXPLORER' as ClientTypeEnum,
        OtrJobScheduler: 'OTR_JOB_SCHEDULER' as ClientTypeEnum,
        OtrLawfirmPortal: 'OTR_LAWFIRM_PORTAL' as ClientTypeEnum,
        OtrLawfirmPortalDevo: 'OTR_LAWFIRM_PORTAL_DEVO' as ClientTypeEnum,
        OtrLawfirmPortalLocalhost: 'OTR_LAWFIRM_PORTAL_LOCALHOST' as ClientTypeEnum,
        OtrWebsite: 'OTR_WEBSITE' as ClientTypeEnum,
        OtrWebsiteDevo: 'OTR_WEBSITE_DEVO' as ClientTypeEnum,
        OtrWebsiteLocalhost: 'OTR_WEBSITE_LOCALHOST' as ClientTypeEnum,
        OtrWidget: 'OTR_WIDGET' as ClientTypeEnum,
        Unknown: 'UNKNOWN' as ClientTypeEnum
    };
    export type GenderEnum = 'FEMALE' | 'MALE' | 'NOT_AVAILABLE' | 'NOT_LISTED' | 'UNVERIFIED' | 'X';
    export const GenderEnum = {
        Female: 'FEMALE' as GenderEnum,
        Male: 'MALE' as GenderEnum,
        NotAvailable: 'NOT_AVAILABLE' as GenderEnum,
        NotListed: 'NOT_LISTED' as GenderEnum,
        Unverified: 'UNVERIFIED' as GenderEnum,
        X: 'X' as GenderEnum
    };
    export type RaceEnum = 'ASIAN' | 'BLACK' | 'HISPANIC' | 'MIDDLE_EASTERN' | 'NATIVE' | 'NOT_AVAILABLE' | 'PACIFIC_ISLANDER' | 'TWO_OR_MORE' | 'UNKNOWN' | 'UNVERIFIED' | 'WHITE';
    export const RaceEnum = {
        Asian: 'ASIAN' as RaceEnum,
        Black: 'BLACK' as RaceEnum,
        Hispanic: 'HISPANIC' as RaceEnum,
        MiddleEastern: 'MIDDLE_EASTERN' as RaceEnum,
        Native: 'NATIVE' as RaceEnum,
        NotAvailable: 'NOT_AVAILABLE' as RaceEnum,
        PacificIslander: 'PACIFIC_ISLANDER' as RaceEnum,
        TwoOrMore: 'TWO_OR_MORE' as RaceEnum,
        Unknown: 'UNKNOWN' as RaceEnum,
        Unverified: 'UNVERIFIED' as RaceEnum,
        White: 'WHITE' as RaceEnum
    };
}


