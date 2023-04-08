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
export interface CitationDomainRes {
    "address"?: models.AddressDomainRes;
    "cdlStatus"?: CitationDomainRes.CdlStatusEnum;
    "citationId"?: number;
    "citationIssueDate"?: models.PureDate;
    "citationIssueDateUTC"?: models.TimestampRes;
    "citationLockedForClient"?: boolean;
    "clientEmailAddress"?: string;
    "clientFirstName"?: string;
    "clientType"?: CitationDomainRes.ClientTypeEnum;
    "court"?: models.CourtDomainRes;
    "creationDateUTC"?: models.TimestampRes;
    "documentUrlToConvert"?: string;
    "fineAmount"?: number;
    "hubspotContactId"?: string;
    "involvesAccident"?: boolean;
    "isDeleted"?: boolean;
    "isDismissedFromContactList"?: boolean;
    "isPastDue"?: boolean;
    "originalPointCount"?: number;
    "state"?: CitationDomainRes.StateEnum;
    "ticketImageUrl"?: string;
    "ticketLocationTags"?: string;
    "ticketNumber"?: string;
    "userId"?: number;
    "violationCategoryName"?: string;
    "violationCount"?: number;
    "violations"?: Array<models.TrafficViolationTypeDomain>;
}
export declare namespace CitationDomainRes {
    enum CdlStatusEnum {
        CDLINCOMMERCIALVEHICLE,
        CDLINPERSONALVEHICLE,
        NOCDL
    }
    enum ClientTypeEnum {
        ANDROID,
        DESKTOPWEBAPP,
        DMVGO,
        DMVORG,
        FRESHDESK,
        IOS,
        MOBILEWEBAPP,
        OTRADMINCONSOLE,
        OTRADMINCONSOLEDEVO,
        OTRADMINCONSOLELOCALHOST,
        OTREXPLORER,
        OTRLAWFIRMPORTAL,
        OTRLAWFIRMPORTALDEVO,
        OTRLAWFIRMPORTALLOCALHOST,
        OTRWEBSITE,
        OTRWEBSITEDEVO,
        OTRWEBSITELOCALHOST,
        OTRWIDGET,
        UNKNOWN
    }
    enum StateEnum {
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
}
