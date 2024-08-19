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
/**
 *
 * @export
 * @interface CountyDomain
 */
export interface CountyDomain {
    /**
     *
     * @type {number}
     * @memberof CountyDomain
     */
    countyId?: number;
    /**
     *
     * @type {string}
     * @memberof CountyDomain
     */
    countyName?: string;
    /**
     *
     * @type {string}
     * @memberof CountyDomain
     */
    stateCode?: CountyDomainStateCodeEnum;
}
export declare function CountyDomainFromJSON(json: any): CountyDomain;
export declare function CountyDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountyDomain;
export declare function CountyDomainToJSON(value?: CountyDomain | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CountyDomainStateCodeEnum {
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
