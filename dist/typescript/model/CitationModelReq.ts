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

export interface CitationModelReq {
    "address"?: models.AddressDomainReq;
    "cdlStatus"?: CitationModelReq.CdlStatusEnum;
    "citationId"?: number;
    "citationIssueDate"?: models.PureDate;
    "citationIssueDateUTC"?: models.TimestampReq;
    "citationLockedForClient"?: boolean;
    "clientEmailAddress"?: string;
    "clientFirstName"?: string;
    "clientType"?: CitationModelReq.ClientTypeEnum;
    "court"?: models.CourtDomainReq;
    "creationDateUTC"?: models.TimestampReq;
    "documentUrlToConvert"?: string;
    "fineAmount"?: number;
    "hasCase"?: boolean;
    "hubspotContactId"?: string;
    "involvesAccident"?: boolean;
    "isDeleted"?: boolean;
    "isDismissedFromContactList"?: boolean;
    "isPastDue"?: boolean;
    "originalPointCount"?: number;
    "signedTicketImageUrl"?: string;
    "state"?: CitationModelReq.StateEnum;
    "ticketImageUrl"?: string;
    "ticketLocationTags"?: string;
    "ticketNumber"?: string;
    "userId"?: number;
    "violationCategoryName"?: string;
    "violationCount"?: number;
    "violations"?: Array<models.ViolationModel>;
}

export namespace CitationModelReq {
    export enum CdlStatusEnum {
        CDLINCOMMERCIALVEHICLE = <any> 'CDL_IN_COMMERCIAL_VEHICLE',
        CDLINPERSONALVEHICLE = <any> 'CDL_IN_PERSONAL_VEHICLE',
        NOCDL = <any> 'NO_CDL'
    }
    export enum ClientTypeEnum {
        ANDROID = <any> 'ANDROID',
        DESKTOPWEBAPP = <any> 'DESKTOP_WEBAPP',
        DMVGO = <any> 'DMV_GO',
        DMVORG = <any> 'DMV_ORG',
        FRESHDESK = <any> 'FRESH_DESK',
        IOS = <any> 'IOS',
        MOBILEWEBAPP = <any> 'MOBILE_WEBAPP',
        OTRADMINCONSOLE = <any> 'OTR_ADMIN_CONSOLE',
        OTRADMINCONSOLEDEVO = <any> 'OTR_ADMIN_CONSOLE_DEVO',
        OTRADMINCONSOLELOCALHOST = <any> 'OTR_ADMIN_CONSOLE_LOCALHOST',
        OTREXPLORER = <any> 'OTR_EXPLORER',
        OTRLAWFIRMPORTAL = <any> 'OTR_LAWFIRM_PORTAL',
        OTRLAWFIRMPORTALDEVO = <any> 'OTR_LAWFIRM_PORTAL_DEVO',
        OTRLAWFIRMPORTALLOCALHOST = <any> 'OTR_LAWFIRM_PORTAL_LOCALHOST',
        OTRWEBSITE = <any> 'OTR_WEBSITE',
        OTRWEBSITEDEVO = <any> 'OTR_WEBSITE_DEVO',
        OTRWEBSITELOCALHOST = <any> 'OTR_WEBSITE_LOCALHOST',
        OTRWIDGET = <any> 'OTR_WIDGET',
        UNKNOWN = <any> 'UNKNOWN'
    }
    export enum StateEnum {
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
