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

export interface CreateCitationRequest {
    "citationState"?: CreateCitationRequest.CitationStateEnum;
    "clientType"?: CreateCitationRequest.ClientTypeEnum;
    "emailAddress"?: string;
    "firstName"?: string;
    "imageContentType"?: string;
    "rawImageData"?: string;
}

export namespace CreateCitationRequest {
    export enum CitationStateEnum {
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
}
