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
    AddressDomainReq,
    AddressDomainReqFromJSON,
    AddressDomainReqFromJSONTyped,
    AddressDomainReqToJSON,
    CourtDomainReq,
    CourtDomainReqFromJSON,
    CourtDomainReqFromJSONTyped,
    CourtDomainReqToJSON,
    PureDate,
    PureDateFromJSON,
    PureDateFromJSONTyped,
    PureDateToJSON,
    TimestampReq,
    TimestampReqFromJSON,
    TimestampReqFromJSONTyped,
    TimestampReqToJSON,
    ViolationModel,
    ViolationModelFromJSON,
    ViolationModelFromJSONTyped,
    ViolationModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface CitationModelReq
 */
export interface CitationModelReq {
    /**
     * 
     * @type {AddressDomainReq}
     * @memberof CitationModelReq
     */
    address?: AddressDomainReq;
    /**
     * 
     * @type {string}
     * @memberof CitationModelReq
     */
    cdlStatus?: CitationModelReqCdlStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof CitationModelReq
     */
    citationId?: number;
    /**
     * 
     * @type {PureDate}
     * @memberof CitationModelReq
     */
    citationIssueDate?: PureDate;
    /**
     * 
     * @type {TimestampReq}
     * @memberof CitationModelReq
     */
    citationIssueDateUTC?: TimestampReq;
    /**
     * 
     * @type {boolean}
     * @memberof CitationModelReq
     */
    citationLockedForClient?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CitationModelReq
     */
    clientEmailAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof CitationModelReq
     */
    clientFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof CitationModelReq
     */
    clientType?: CitationModelReqClientTypeEnum;
    /**
     * 
     * @type {CourtDomainReq}
     * @memberof CitationModelReq
     */
    court?: CourtDomainReq;
    /**
     * 
     * @type {TimestampReq}
     * @memberof CitationModelReq
     */
    creationDateUTC?: TimestampReq;
    /**
     * 
     * @type {string}
     * @memberof CitationModelReq
     */
    documentUrlToConvert?: string;
    /**
     * 
     * @type {number}
     * @memberof CitationModelReq
     */
    fineAmount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CitationModelReq
     */
    hasCase?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CitationModelReq
     */
    hubspotContactId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CitationModelReq
     */
    involvesAccident?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CitationModelReq
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CitationModelReq
     */
    isDismissedFromContactList?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CitationModelReq
     */
    isPastDue?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CitationModelReq
     */
    originalPointCount?: number;
    /**
     * 
     * @type {string}
     * @memberof CitationModelReq
     */
    signedTicketImageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof CitationModelReq
     */
    state?: CitationModelReqStateEnum;
    /**
     * 
     * @type {string}
     * @memberof CitationModelReq
     */
    ticketImageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof CitationModelReq
     */
    ticketLocationTags?: string;
    /**
     * 
     * @type {string}
     * @memberof CitationModelReq
     */
    ticketNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof CitationModelReq
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof CitationModelReq
     */
    violationCategoryName?: string;
    /**
     * 
     * @type {number}
     * @memberof CitationModelReq
     */
    violationCount?: number;
    /**
     * 
     * @type {Array<ViolationModel>}
     * @memberof CitationModelReq
     */
    violations?: Array<ViolationModel>;
}

export function CitationModelReqFromJSON(json: any): CitationModelReq {
    return CitationModelReqFromJSONTyped(json, false);
}

export function CitationModelReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): CitationModelReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : AddressDomainReqFromJSON(json['address']),
        'cdlStatus': !exists(json, 'cdlStatus') ? undefined : json['cdlStatus'],
        'citationId': !exists(json, 'citationId') ? undefined : json['citationId'],
        'citationIssueDate': !exists(json, 'citationIssueDate') ? undefined : PureDateFromJSON(json['citationIssueDate']),
        'citationIssueDateUTC': !exists(json, 'citationIssueDateUTC') ? undefined : TimestampReqFromJSON(json['citationIssueDateUTC']),
        'citationLockedForClient': !exists(json, 'citationLockedForClient') ? undefined : json['citationLockedForClient'],
        'clientEmailAddress': !exists(json, 'clientEmailAddress') ? undefined : json['clientEmailAddress'],
        'clientFirstName': !exists(json, 'clientFirstName') ? undefined : json['clientFirstName'],
        'clientType': !exists(json, 'clientType') ? undefined : json['clientType'],
        'court': !exists(json, 'court') ? undefined : CourtDomainReqFromJSON(json['court']),
        'creationDateUTC': !exists(json, 'creationDateUTC') ? undefined : TimestampReqFromJSON(json['creationDateUTC']),
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

export function CitationModelReqToJSON(value?: CitationModelReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AddressDomainReqToJSON(value.address),
        'cdlStatus': value.cdlStatus,
        'citationId': value.citationId,
        'citationIssueDate': PureDateToJSON(value.citationIssueDate),
        'citationIssueDateUTC': TimestampReqToJSON(value.citationIssueDateUTC),
        'citationLockedForClient': value.citationLockedForClient,
        'clientEmailAddress': value.clientEmailAddress,
        'clientFirstName': value.clientFirstName,
        'clientType': value.clientType,
        'court': CourtDomainReqToJSON(value.court),
        'creationDateUTC': TimestampReqToJSON(value.creationDateUTC),
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
export enum CitationModelReqCdlStatusEnum {
    CDLINCOMMERCIALVEHICLE = 'CDL_IN_COMMERCIAL_VEHICLE',
    CDLINPERSONALVEHICLE = 'CDL_IN_PERSONAL_VEHICLE',
    NOCDL = 'NO_CDL'
}
/**
* @export
* @enum {string}
*/
export enum CitationModelReqClientTypeEnum {
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
export enum CitationModelReqStateEnum {
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


