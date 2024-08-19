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
import { CountryRegion } from './';
/**
 *
 * @export
 * @interface CitationWithMissingCourt
 */
export interface CitationWithMissingCourt {
    /**
     *
     * @type {number}
     * @memberof CitationWithMissingCourt
     */
    citationId?: number;
    /**
     *
     * @type {boolean}
     * @memberof CitationWithMissingCourt
     */
    deleted?: boolean;
    /**
     *
     * @type {CountryRegion}
     * @memberof CitationWithMissingCourt
     */
    region?: CountryRegion;
    /**
     *
     * @type {string}
     * @memberof CitationWithMissingCourt
     */
    state?: CitationWithMissingCourtStateEnum;
}
export declare function CitationWithMissingCourtFromJSON(json: any): CitationWithMissingCourt;
export declare function CitationWithMissingCourtFromJSONTyped(json: any, ignoreDiscriminator: boolean): CitationWithMissingCourt;
export declare function CitationWithMissingCourtToJSON(value?: CitationWithMissingCourt | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CitationWithMissingCourtStateEnum {
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
