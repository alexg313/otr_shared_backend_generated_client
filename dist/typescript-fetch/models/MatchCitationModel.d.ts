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
import { AddressDomain, CourtDomain, PureDate, Timestamp, ViolationModel } from './';
/**
 *
 * @export
 * @interface MatchCitationModel
 */
export interface MatchCitationModel {
    /**
     *
     * @type {AddressDomain}
     * @memberof MatchCitationModel
     */
    address?: AddressDomain;
    /**
     *
     * @type {string}
     * @memberof MatchCitationModel
     */
    cdlStatus?: MatchCitationModelCdlStatusEnum;
    /**
     *
     * @type {number}
     * @memberof MatchCitationModel
     */
    citationId?: number;
    /**
     *
     * @type {PureDate}
     * @memberof MatchCitationModel
     */
    citationIssueDate?: PureDate;
    /**
     *
     * @type {Timestamp}
     * @memberof MatchCitationModel
     */
    citationIssueDateUtc?: Timestamp;
    /**
     *
     * @type {boolean}
     * @memberof MatchCitationModel
     */
    citationLockedForClient?: boolean;
    /**
     *
     * @type {string}
     * @memberof MatchCitationModel
     */
    clientEmailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof MatchCitationModel
     */
    clientFirstName?: string;
    /**
     *
     * @type {CourtDomain}
     * @memberof MatchCitationModel
     */
    court?: CourtDomain;
    /**
     *
     * @type {string}
     * @memberof MatchCitationModel
     */
    documentUrlToConvert?: string;
    /**
     *
     * @type {number}
     * @memberof MatchCitationModel
     */
    fineAmount?: number;
    /**
     *
     * @type {boolean}
     * @memberof MatchCitationModel
     */
    hasCitationImage?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof MatchCitationModel
     */
    involvesAccident?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof MatchCitationModel
     */
    isDeleted?: boolean;
    /**
     *
     * @type {string}
     * @memberof MatchCitationModel
     */
    regionCode?: string;
    /**
     *
     * @type {string}
     * @memberof MatchCitationModel
     */
    signedTicketImageUrl?: string;
    /**
     *
     * @type {string}
     * @memberof MatchCitationModel
     */
    ticketImageUrl?: string;
    /**
     *
     * @type {string}
     * @memberof MatchCitationModel
     */
    ticketNumber?: string;
    /**
     *
     * @type {number}
     * @memberof MatchCitationModel
     */
    violationCount?: number;
    /**
     *
     * @type {Array<ViolationModel>}
     * @memberof MatchCitationModel
     */
    violations?: Array<ViolationModel>;
}
export declare function MatchCitationModelFromJSON(json: any): MatchCitationModel;
export declare function MatchCitationModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MatchCitationModel;
export declare function MatchCitationModelToJSON(value?: MatchCitationModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum MatchCitationModelCdlStatusEnum {
    CDLINCOMMERCIALVEHICLE = "CDL_IN_COMMERCIAL_VEHICLE",
    CDLINPERSONALVEHICLE = "CDL_IN_PERSONAL_VEHICLE",
    NOCDL = "NO_CDL"
}
