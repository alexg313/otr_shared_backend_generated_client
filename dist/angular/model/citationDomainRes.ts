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
import { CourtDomainRes } from './courtDomainRes';
import { PureDate } from './pureDate';
import { AddressDomainRes } from './addressDomainRes';
import { TimestampRes } from './timestampRes';
import { TrafficViolationTypeDomain } from './trafficViolationTypeDomain';


export interface CitationDomainRes { 
    address?: AddressDomainRes;
    cdlStatus?: CitationDomainRes.CdlStatusEnum;
    citationId?: number;
    citationIssueDate?: PureDate;
    citationIssueDateUTC?: TimestampRes;
    citationLockedForClient?: boolean;
    clientEmailAddress?: string;
    clientFirstName?: string;
    clientType?: CitationDomainRes.ClientTypeEnum;
    court?: CourtDomainRes;
    creationDateUTC?: TimestampRes;
    documentUrlToConvert?: string;
    fineAmount?: number;
    hubspotContactId?: string;
    involvesAccident?: boolean;
    isDeleted?: boolean;
    isDismissedFromContactList?: boolean;
    isPastDue?: boolean;
    originalPointCount?: number;
    state?: CitationDomainRes.StateEnum;
    ticketImageUrl?: string;
    ticketLocationTags?: string;
    ticketNumber?: string;
    userId?: number;
    violationCategoryName?: string;
    violationCount?: number;
    violations?: Array<TrafficViolationTypeDomain>;
}
export namespace CitationDomainRes {
    export type CdlStatusEnum = 'CDL_IN_COMMERCIAL_VEHICLE' | 'CDL_IN_PERSONAL_VEHICLE' | 'NO_CDL';
    export const CdlStatusEnum = {
        CdlInCommercialVehicle: 'CDL_IN_COMMERCIAL_VEHICLE' as CdlStatusEnum,
        CdlInPersonalVehicle: 'CDL_IN_PERSONAL_VEHICLE' as CdlStatusEnum,
        NoCdl: 'NO_CDL' as CdlStatusEnum
    };
    export type ClientTypeEnum = 'ANDROID' | 'DESKTOP_WEBAPP' | 'DMV_GO' | 'DMV_ORG' | 'FRESH_DESK' | 'IOS' | 'MOBILE_WEBAPP' | 'OTR_ADMIN_CONSOLE' | 'OTR_ADMIN_CONSOLE_DEVO' | 'OTR_ADMIN_CONSOLE_LOCALHOST' | 'OTR_EXPLORER' | 'OTR_LAWFIRM_PORTAL' | 'OTR_LAWFIRM_PORTAL_DEVO' | 'OTR_LAWFIRM_PORTAL_LOCALHOST' | 'OTR_WEBSITE' | 'OTR_WEBSITE_DEVO' | 'OTR_WEBSITE_LOCALHOST' | 'OTR_WIDGET' | 'UNKNOWN';
    export const ClientTypeEnum = {
        Android: 'ANDROID' as ClientTypeEnum,
        DesktopWebapp: 'DESKTOP_WEBAPP' as ClientTypeEnum,
        DmvGo: 'DMV_GO' as ClientTypeEnum,
        DmvOrg: 'DMV_ORG' as ClientTypeEnum,
        FreshDesk: 'FRESH_DESK' as ClientTypeEnum,
        Ios: 'IOS' as ClientTypeEnum,
        MobileWebapp: 'MOBILE_WEBAPP' as ClientTypeEnum,
        OtrAdminConsole: 'OTR_ADMIN_CONSOLE' as ClientTypeEnum,
        OtrAdminConsoleDevo: 'OTR_ADMIN_CONSOLE_DEVO' as ClientTypeEnum,
        OtrAdminConsoleLocalhost: 'OTR_ADMIN_CONSOLE_LOCALHOST' as ClientTypeEnum,
        OtrExplorer: 'OTR_EXPLORER' as ClientTypeEnum,
        OtrLawfirmPortal: 'OTR_LAWFIRM_PORTAL' as ClientTypeEnum,
        OtrLawfirmPortalDevo: 'OTR_LAWFIRM_PORTAL_DEVO' as ClientTypeEnum,
        OtrLawfirmPortalLocalhost: 'OTR_LAWFIRM_PORTAL_LOCALHOST' as ClientTypeEnum,
        OtrWebsite: 'OTR_WEBSITE' as ClientTypeEnum,
        OtrWebsiteDevo: 'OTR_WEBSITE_DEVO' as ClientTypeEnum,
        OtrWebsiteLocalhost: 'OTR_WEBSITE_LOCALHOST' as ClientTypeEnum,
        OtrWidget: 'OTR_WIDGET' as ClientTypeEnum,
        Unknown: 'UNKNOWN' as ClientTypeEnum
    };
    export type StateEnum = 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY';
    export const StateEnum = {
        Ak: 'AK' as StateEnum,
        Al: 'AL' as StateEnum,
        Ar: 'AR' as StateEnum,
        Az: 'AZ' as StateEnum,
        Ca: 'CA' as StateEnum,
        Co: 'CO' as StateEnum,
        Ct: 'CT' as StateEnum,
        Dc: 'DC' as StateEnum,
        De: 'DE' as StateEnum,
        Fl: 'FL' as StateEnum,
        Ga: 'GA' as StateEnum,
        Hi: 'HI' as StateEnum,
        Ia: 'IA' as StateEnum,
        Id: 'ID' as StateEnum,
        Il: 'IL' as StateEnum,
        In: 'IN' as StateEnum,
        Ks: 'KS' as StateEnum,
        Ky: 'KY' as StateEnum,
        La: 'LA' as StateEnum,
        Ma: 'MA' as StateEnum,
        Md: 'MD' as StateEnum,
        Me: 'ME' as StateEnum,
        Mi: 'MI' as StateEnum,
        Mn: 'MN' as StateEnum,
        Mo: 'MO' as StateEnum,
        Ms: 'MS' as StateEnum,
        Mt: 'MT' as StateEnum,
        Nc: 'NC' as StateEnum,
        Nd: 'ND' as StateEnum,
        Ne: 'NE' as StateEnum,
        Nh: 'NH' as StateEnum,
        Nj: 'NJ' as StateEnum,
        Nm: 'NM' as StateEnum,
        Nv: 'NV' as StateEnum,
        Ny: 'NY' as StateEnum,
        Oh: 'OH' as StateEnum,
        Ok: 'OK' as StateEnum,
        Or: 'OR' as StateEnum,
        Pa: 'PA' as StateEnum,
        Ri: 'RI' as StateEnum,
        Sc: 'SC' as StateEnum,
        Sd: 'SD' as StateEnum,
        Tn: 'TN' as StateEnum,
        Tx: 'TX' as StateEnum,
        Ut: 'UT' as StateEnum,
        Va: 'VA' as StateEnum,
        Vt: 'VT' as StateEnum,
        Wa: 'WA' as StateEnum,
        Wi: 'WI' as StateEnum,
        Wv: 'WV' as StateEnum,
        Wy: 'WY' as StateEnum
    };
}


