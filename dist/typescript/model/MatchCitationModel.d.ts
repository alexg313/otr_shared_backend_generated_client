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
export interface MatchCitationModel {
    "address"?: models.AddressDomain;
    "cdlStatus"?: MatchCitationModel.CdlStatusEnum;
    "citationId"?: number;
    "citationIssueDate"?: models.PureDate;
    "citationIssueDateUtc"?: models.Timestamp;
    "citationLockedForClient"?: boolean;
    "clientEmailAddress"?: string;
    "clientFirstName"?: string;
    "court"?: models.CourtDomain;
    "documentUrlToConvert"?: string;
    "fineAmount"?: number;
    "hasCitationImage"?: boolean;
    "involvesAccident"?: boolean;
    "isDeleted"?: boolean;
    "regionCode"?: string;
    "signedTicketImageUrl"?: string;
    "ticketImageUrl"?: string;
    "ticketNumber"?: string;
    "violationCount"?: number;
    "violations"?: Array<models.ViolationModel>;
}
export declare namespace MatchCitationModel {
    enum CdlStatusEnum {
        CDLINCOMMERCIALVEHICLE,
        CDLINPERSONALVEHICLE,
        NOCDL
    }
}
