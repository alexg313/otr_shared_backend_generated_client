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
import { CourtEntity } from './';
/**
 *
 * @export
 * @interface CaseItem
 */
export interface CaseItem {
    /**
     *
     * @type {string}
     * @memberof CaseItem
     */
    caseId?: string;
    /**
     *
     * @type {string}
     * @memberof CaseItem
     */
    caseStatus?: CaseItemCaseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof CaseItem
     */
    citationState?: CaseItemCitationStateEnum;
    /**
     *
     * @type {string}
     * @memberof CaseItem
     */
    clientFirstName?: string;
    /**
     *
     * @type {string}
     * @memberof CaseItem
     */
    clientLastName?: string;
    /**
     *
     * @type {CourtEntity}
     * @memberof CaseItem
     */
    court?: CourtEntity;
    /**
     *
     * @type {string}
     * @memberof CaseItem
     */
    lawfirmName?: string;
    /**
     *
     * @type {string}
     * @memberof CaseItem
     */
    profilePictureUrl?: string;
}
export declare function CaseItemFromJSON(json: any): CaseItem;
export declare function CaseItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseItem;
export declare function CaseItemToJSON(value?: CaseItem | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CaseItemCaseStatusEnum {
    AMENDEDDOWNWITHINCLASS = "AMENDED_DOWN_WITHIN_CLASS",
    AMENDEDFULLFINE = "AMENDED_FULL_FINE",
    AMENDEDINCREASEDFINE = "AMENDED_INCREASED_FINE",
    AMENDEDNOFINE = "AMENDED_NO_FINE",
    AMENDEDREDUCEDFINE = "AMENDED_REDUCED_FINE",
    AMENDEDTOINFRACTION = "AMENDED_TO_INFRACTION",
    AMENDEDTONMV = "AMENDED_TO_NMV",
    CANCELLEDATTORNEYATFAULT = "CANCELLED_ATTORNEY_AT_FAULT",
    CANCELLEDBYLAWFIRM = "CANCELLED_BY_LAWFIRM",
    CANCELLEDBYUSER = "CANCELLED_BY_USER",
    CANCELLEDDUPLICATE = "CANCELLED_DUPLICATE",
    CANCELLEDNMV = "CANCELLED_NMV",
    CANCELLEDNONPAYMENT = "CANCELLED_NON_PAYMENT",
    CANCELLEDNOLAWFIRM = "CANCELLED_NO_LAWFIRM",
    CANCELLEDOVERDUE = "CANCELLED_OVERDUE",
    CANCELLEDTOOSHORTNOTICE = "CANCELLED_TOO_SHORT_NOTICE",
    CASEINPROGRESS = "CASE_IN_PROGRESS",
    CLIENTCONFIRMED = "CLIENT_CONFIRMED",
    CLIENTCONFIRMEDUNPAID = "CLIENT_CONFIRMED_UNPAID",
    CLIENTFIREDLAWFIRM = "CLIENT_FIRED_LAWFIRM",
    CLIENTFORCEDLOSS = "CLIENT_FORCED_LOSS",
    CLIENTPAIDFINE = "CLIENT_PAID_FINE",
    CLIENTUNRESPONSIVE = "CLIENT_UNRESPONSIVE",
    DEFERRED = "DEFERRED",
    DISMISSED = "DISMISSED",
    DIVERSION = "DIVERSION",
    FEESDISPUTED = "FEES_DISPUTED",
    FINEREDUCTIONONLY = "FINE_REDUCTION_ONLY",
    LAWFIRMWITHDRAWN = "LAWFIRM_WITHDRAWN",
    LOST = "LOST",
    NOLAWFIRMAVAILABLE = "NO_LAWFIRM_AVAILABLE",
    POINTREDUCTION = "POINT_REDUCTION",
    REFUSEDBYLAWFIRM = "REFUSED_BY_LAWFIRM",
    RESOLVEDNONPAYMENT = "RESOLVED_NON_PAYMENT",
    STALE = "STALE",
    TRAFFICSCHOOL = "TRAFFIC_SCHOOL",
    UNCONFIRMED = "UNCONFIRMED"
}
/**
* @export
* @enum {string}
*/
export declare enum CaseItemCitationStateEnum {
    AK = "AK",
    AL = "AL",
    AR = "AR",
    AZ = "AZ",
    CA = "CA",
    CO = "CO",
    CT = "CT",
    DC = "DC",
    DE = "DE",
    FL = "FL",
    GA = "GA",
    HI = "HI",
    IA = "IA",
    ID = "ID",
    IL = "IL",
    IN = "IN",
    KS = "KS",
    KY = "KY",
    LA = "LA",
    MA = "MA",
    MD = "MD",
    ME = "ME",
    MI = "MI",
    MN = "MN",
    MO = "MO",
    MS = "MS",
    MT = "MT",
    NC = "NC",
    ND = "ND",
    NE = "NE",
    NH = "NH",
    NJ = "NJ",
    NM = "NM",
    NV = "NV",
    NY = "NY",
    OH = "OH",
    OK = "OK",
    OR = "OR",
    PA = "PA",
    RI = "RI",
    SC = "SC",
    SD = "SD",
    TN = "TN",
    TX = "TX",
    UT = "UT",
    VA = "VA",
    VT = "VT",
    WA = "WA",
    WI = "WI",
    WV = "WV",
    WY = "WY"
}
