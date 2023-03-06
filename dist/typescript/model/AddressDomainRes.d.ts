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
export interface AddressDomainRes {
    "addressId"?: number;
    "addressLine1"?: string;
    "addressLine2"?: string;
    "addressedTo"?: string;
    "city"?: string;
    "countryCode"?: string;
    "entityType"?: AddressDomainRes.EntityTypeEnum;
    "fullAddress"?: string;
    "phoneNumber"?: string;
    "postalCode"?: string;
    "referenceId"?: number;
    "region"?: models.CountryRegion;
    "state"?: AddressDomainRes.StateEnum;
    "timeZoneName"?: string;
}
export declare namespace AddressDomainRes {
    enum EntityTypeEnum {
        CASE,
        CASEPAYMENT,
        CITATION,
        COURT,
        LAWFIRM,
        LAWFIRMCASE,
        LAWYER,
        LINEITEM,
        STRIPECHARGE,
        USER
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
