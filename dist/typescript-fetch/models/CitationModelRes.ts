/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    AddressDomainRes,
    AddressDomainResFromJSON,
    AddressDomainResFromJSONTyped,
    AddressDomainResToJSON,
    CourtDomainRes,
    CourtDomainResFromJSON,
    CourtDomainResFromJSONTyped,
    CourtDomainResToJSON,
    PureDate,
    PureDateFromJSON,
    PureDateFromJSONTyped,
    PureDateToJSON,
    TimestampRes,
    TimestampResFromJSON,
    TimestampResFromJSONTyped,
    TimestampResToJSON,
    ViolationModel,
    ViolationModelFromJSON,
    ViolationModelFromJSONTyped,
    ViolationModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface CitationModelRes
 */
export interface CitationModelRes {
    /**
     * 
     * @type {AddressDomainRes}
     * @memberof CitationModelRes
     */
    address?: AddressDomainRes;
    /**
     * 
     * @type {string}
     * @memberof CitationModelRes
     */
    cdlStatus?: CitationModelResCdlStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof CitationModelRes
     */
    citationId?: number;
    /**
     * 
     * @type {PureDate}
     * @memberof CitationModelRes
     */
    citationIssueDate?: PureDate;
    /**
     * 
     * @type {TimestampRes}
     * @memberof CitationModelRes
     */
    citationIssueDateUTC?: TimestampRes;
    /**
     * 
     * @type {boolean}
     * @memberof CitationModelRes
     */
    citationLockedForClient?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CitationModelRes
     */
    clientEmailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof CitationModelRes
     */
    clientFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof CitationModelRes
     */
    clientType?: CitationModelResClientTypeEnum;
    /**
     * 
     * @type {CourtDomainRes}
     * @memberof CitationModelRes
     */
    court?: CourtDomainRes;
    /**
     * 
     * @type {TimestampRes}
     * @memberof CitationModelRes
     */
    creationDateUTC?: TimestampRes;
    /**
     * 
     * @type {string}
     * @memberof CitationModelRes
     */
    documentUrlToConvert?: string;
    /**
     * 
     * @type {number}
     * @memberof CitationModelRes
     */
    fineAmount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CitationModelRes
     */
    hasCase?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CitationModelRes
     */
    hubspotContactId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CitationModelRes
     */
    involvesAccident?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CitationModelRes
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CitationModelRes
     */
    isDismissedFromContactList?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CitationModelRes
     */
    isPastDue?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CitationModelRes
     */
    originalPointCount?: number;
    /**
     * 
     * @type {string}
     * @memberof CitationModelRes
     */
    signedTicketImageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof CitationModelRes
     */
    state?: CitationModelResStateEnum;
    /**
     * 
     * @type {string}
     * @memberof CitationModelRes
     */
    ticketImageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof CitationModelRes
     */
    ticketLocationTags?: string;
    /**
     * 
     * @type {string}
     * @memberof CitationModelRes
     */
    ticketNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof CitationModelRes
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof CitationModelRes
     */
    violationCategoryName?: string;
    /**
     * 
     * @type {number}
     * @memberof CitationModelRes
     */
    violationCount?: number;
    /**
     * 
     * @type {Array<ViolationModel>}
     * @memberof CitationModelRes
     */
    violations?: Array<ViolationModel>;
}

export function CitationModelResFromJSON(json: any): CitationModelRes {
    return CitationModelResFromJSONTyped(json, false);
}

export function CitationModelResFromJSONTyped(json: any, ignoreDiscriminator: boolean): CitationModelRes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : AddressDomainResFromJSON(json['address']),
        'cdlStatus': !exists(json, 'cdlStatus') ? undefined : json['cdlStatus'],
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'citationIssueDate': !exists(json, 'citationIssueDate') ? undefined : PureDateFromJSON(json['citationIssueDate']),
        'citationIssueDateUTC': !exists(json, 'citationIssueDateUTC') ? undefined : TimestampResFromJSON(json['citationIssueDateUTC']),
        'citationLockedForClient': !exists(json, 'citationLockedForClient') ? undefined : json['citationLockedForClient'],
        'clientEmailAddress': !exists(json, 'clientEmailAddress') ? undefined : json['clientEmailAddress'],
        'clientFirstName': !exists(json, 'clientFirstName') ? undefined : json['clientFirstName'],
        'clientType': !exists(json, 'clientType') ? undefined : json['clientType'],
        'court': !exists(json, 'court') ? undefined : CourtDomainResFromJSON(json['court']),
        'creationDateUTC': !exists(json, 'creationDateUTC') ? undefined : TimestampResFromJSON(json['creationDateUTC']),
        'documentUrlToConvert': !exists(json, 'documentUrlToConvert') ? undefined : json['documentUrlToConvert'],
        'fineAmount': !exists(json, 'fineAmount') ? undefined : json['fineAmount'],
        'hasCase': !exists(json, 'hasCase') ? undefined : json['hasCase'],
        'hubspotContactId': !exists(json, 'hubspotContactId') ? undefined : json['hubspotContactId'],
        'involvesAccident': !exists(json, 'involvesAccident') ? undefined : json['involvesAccident'],
        'isDeleted': !exists(json, 'isDeleted') ? undefined : json['isDeleted'],
        'isDismissedFromContactList': !exists(json, 'isDismissedFromContactList') ? undefined : json['isDismissedFromContactList'],
        'isPastDue': !exists(json, 'isPastDue') ? undefined : json['isPastDue'],
        'originalPointCount': !exists(json, 'originalPointCount') ? undefined : json['originalPointCount'],
        'signedTicketImageUrl': !exists(json, 'signedTicketImageUrl') ? undefined : json['signedTicketImageUrl'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'ticketImageUrl': !exists(json, 'ticketImageUrl') ? undefined : json['ticketImageUrl'],
        'ticketLocationTags': !exists(json, 'ticketLocationTags') ? undefined : json['ticketLocationTags'],
        'ticketNumber': !exists(json, 'ticketNumber') ? undefined : json['ticketNumber'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'violationCategoryName': !exists(json, 'violationCategoryName') ? undefined : json['violationCategoryName'],
        'violationCount': !exists(json, 'violationCount') ? undefined : json['violationCount'],
        'violations': !exists(json, 'violations') ? undefined : ((json['violations'] as Array<any>).map(ViolationModelFromJSON)),
    };
}

export function CitationModelResToJSON(value?: CitationModelRes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AddressDomainResToJSON(value.address),
        'cdlStatus': value.cdlStatus,
        'citationId': value.citationId,
        'citationIssueDate': PureDateToJSON(value.citationIssueDate),
        'citationIssueDateUTC': TimestampResToJSON(value.citationIssueDateUTC),
        'citationLockedForClient': value.citationLockedForClient,
        'clientEmailAddress': value.clientEmailAddress,
        'clientFirstName': value.clientFirstName,
        'clientType': value.clientType,
        'court': CourtDomainResToJSON(value.court),
        'creationDateUTC': TimestampResToJSON(value.creationDateUTC),
        'documentUrlToConvert': value.documentUrlToConvert,
        'fineAmount': value.fineAmount,
        'hasCase': value.hasCase,
        'hubspotContactId': value.hubspotContactId,
        'involvesAccident': value.involvesAccident,
        'isDeleted': value.isDeleted,
        'isDismissedFromContactList': value.isDismissedFromContactList,
        'isPastDue': value.isPastDue,
        'originalPointCount': value.originalPointCount,
        'signedTicketImageUrl': value.signedTicketImageUrl,
        'state': value.state,
        'ticketImageUrl': value.ticketImageUrl,
        'ticketLocationTags': value.ticketLocationTags,
        'ticketNumber': value.ticketNumber,
        'userId': value.userId,
        'violationCategoryName': value.violationCategoryName,
        'violationCount': value.violationCount,
        'violations': value.violations === undefined ? undefined : ((value.violations as Array<any>).map(ViolationModelToJSON)),
    };
}

/**
* @export
* @enum {string}
*/
export enum CitationModelResCdlStatusEnum {
    CDLINCOMMERCIALVEHICLE = 'CDL_IN_COMMERCIAL_VEHICLE',
    CDLINPERSONALVEHICLE = 'CDL_IN_PERSONAL_VEHICLE',
    NOCDL = 'NO_CDL'
}
/**
* @export
* @enum {string}
*/
export enum CitationModelResClientTypeEnum {
    ANDROID = 'ANDROID',
    DESKTOPWEBAPP = 'DESKTOP_WEBAPP',
    DMVGO = 'DMV_GO',
    DMVORG = 'DMV_ORG',
    EMAIL = 'EMAIL',
    FRESHDESK = 'FRESH_DESK',
    IOS = 'IOS',
    LOCALHOST = 'LOCALHOST',
    MOBILEWEBAPP = 'MOBILE_WEBAPP',
    OTRADMINCONSOLE = 'OTR_ADMIN_CONSOLE',
    OTRADMINCONSOLEDEVO = 'OTR_ADMIN_CONSOLE_DEVO',
    OTRADMINCONSOLELOCALHOST = 'OTR_ADMIN_CONSOLE_LOCALHOST',
    OTREXPLORER = 'OTR_EXPLORER',
    OTRJOBSCHEDULER = 'OTR_JOB_SCHEDULER',
    OTRLAWFIRMPORTAL = 'OTR_LAWFIRM_PORTAL',
    OTRLAWFIRMPORTALDEVO = 'OTR_LAWFIRM_PORTAL_DEVO',
    OTRLAWFIRMPORTALLOCALHOST = 'OTR_LAWFIRM_PORTAL_LOCALHOST',
    OTRWEBSITE = 'OTR_WEBSITE',
    OTRWEBSITEDEVO = 'OTR_WEBSITE_DEVO',
    OTRWEBSITELOCALHOST = 'OTR_WEBSITE_LOCALHOST',
    OTRWIDGET = 'OTR_WIDGET',
    UNKNOWN = 'UNKNOWN'
}
/**
* @export
* @enum {string}
*/
export enum CitationModelResStateEnum {
    AK = 'AK',
    AL = 'AL',
    AR = 'AR',
    AZ = 'AZ',
    CA = 'CA',
    CO = 'CO',
    CT = 'CT',
    DC = 'DC',
    DE = 'DE',
    FL = 'FL',
    GA = 'GA',
    HI = 'HI',
    IA = 'IA',
    ID = 'ID',
    IL = 'IL',
    IN = 'IN',
    KS = 'KS',
    KY = 'KY',
    LA = 'LA',
    MA = 'MA',
    MD = 'MD',
    ME = 'ME',
    MI = 'MI',
    MN = 'MN',
    MO = 'MO',
    MS = 'MS',
    MT = 'MT',
    NC = 'NC',
    ND = 'ND',
    NE = 'NE',
    NH = 'NH',
    NJ = 'NJ',
    NM = 'NM',
    NV = 'NV',
    NY = 'NY',
    OH = 'OH',
    OK = 'OK',
    OR = 'OR',
    PA = 'PA',
    RI = 'RI',
    SC = 'SC',
    SD = 'SD',
    TN = 'TN',
    TX = 'TX',
    UT = 'UT',
    VA = 'VA',
    VT = 'VT',
    WA = 'WA',
    WI = 'WI',
    WV = 'WV',
    WY = 'WY'
}


