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
import { exists } from '../runtime';
import { CountryRegionFromJSON, CountryRegionToJSON, } from './';
export function AddressDomainReqFromJSON(json) {
    return AddressDomainReqFromJSONTyped(json, false);
}
export function AddressDomainReqFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressId': !exists(json, 'addressId') ? undefined : json['addressId'],
        'addressLine1': !exists(json, 'addressLine1') ? undefined : json['addressLine1'],
        'addressLine2': !exists(json, 'addressLine2') ? undefined : json['addressLine2'],
        'addressedTo': !exists(json, 'addressedTo') ? undefined : json['addressedTo'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'entityType': !exists(json, 'entityType') ? undefined : json['entityType'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'region': !exists(json, 'region') ? undefined : CountryRegionFromJSON(json['region']),
        'state': !exists(json, 'state') ? undefined : json['state'],
        'timeZoneName': !exists(json, 'timeZoneName') ? undefined : json['timeZoneName'],
    };
}
export function AddressDomainReqToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addressId': value.addressId,
        'addressLine1': value.addressLine1,
        'addressLine2': value.addressLine2,
        'addressedTo': value.addressedTo,
        'city': value.city,
        'countryCode': value.countryCode,
        'entityType': value.entityType,
        'phoneNumber': value.phoneNumber,
        'postalCode': value.postalCode,
        'referenceId': value.referenceId,
        'region': CountryRegionToJSON(value.region),
        'state': value.state,
        'timeZoneName': value.timeZoneName,
    };
}
/**
* @export
* @enum {string}
*/
export var AddressDomainReqEntityTypeEnum;
(function (AddressDomainReqEntityTypeEnum) {
    AddressDomainReqEntityTypeEnum["CASE"] = "CASE";
    AddressDomainReqEntityTypeEnum["CASEPAYMENT"] = "CASE_PAYMENT";
    AddressDomainReqEntityTypeEnum["CITATION"] = "CITATION";
    AddressDomainReqEntityTypeEnum["COURT"] = "COURT";
    AddressDomainReqEntityTypeEnum["LAWFIRM"] = "LAWFIRM";
    AddressDomainReqEntityTypeEnum["LAWFIRMCASE"] = "LAWFIRM_CASE";
    AddressDomainReqEntityTypeEnum["LAWYER"] = "LAWYER";
    AddressDomainReqEntityTypeEnum["LINEITEM"] = "LINE_ITEM";
    AddressDomainReqEntityTypeEnum["STRIPECHARGE"] = "STRIPE_CHARGE";
    AddressDomainReqEntityTypeEnum["USER"] = "USER";
})(AddressDomainReqEntityTypeEnum || (AddressDomainReqEntityTypeEnum = {}));
/**
* @export
* @enum {string}
*/
export var AddressDomainReqStateEnum;
(function (AddressDomainReqStateEnum) {
    AddressDomainReqStateEnum["AK"] = "AK";
    AddressDomainReqStateEnum["AL"] = "AL";
    AddressDomainReqStateEnum["AR"] = "AR";
    AddressDomainReqStateEnum["AZ"] = "AZ";
    AddressDomainReqStateEnum["CA"] = "CA";
    AddressDomainReqStateEnum["CO"] = "CO";
    AddressDomainReqStateEnum["CT"] = "CT";
    AddressDomainReqStateEnum["DC"] = "DC";
    AddressDomainReqStateEnum["DE"] = "DE";
    AddressDomainReqStateEnum["FL"] = "FL";
    AddressDomainReqStateEnum["GA"] = "GA";
    AddressDomainReqStateEnum["HI"] = "HI";
    AddressDomainReqStateEnum["IA"] = "IA";
    AddressDomainReqStateEnum["ID"] = "ID";
    AddressDomainReqStateEnum["IL"] = "IL";
    AddressDomainReqStateEnum["IN"] = "IN";
    AddressDomainReqStateEnum["KS"] = "KS";
    AddressDomainReqStateEnum["KY"] = "KY";
    AddressDomainReqStateEnum["LA"] = "LA";
    AddressDomainReqStateEnum["MA"] = "MA";
    AddressDomainReqStateEnum["MD"] = "MD";
    AddressDomainReqStateEnum["ME"] = "ME";
    AddressDomainReqStateEnum["MI"] = "MI";
    AddressDomainReqStateEnum["MN"] = "MN";
    AddressDomainReqStateEnum["MO"] = "MO";
    AddressDomainReqStateEnum["MS"] = "MS";
    AddressDomainReqStateEnum["MT"] = "MT";
    AddressDomainReqStateEnum["NC"] = "NC";
    AddressDomainReqStateEnum["ND"] = "ND";
    AddressDomainReqStateEnum["NE"] = "NE";
    AddressDomainReqStateEnum["NH"] = "NH";
    AddressDomainReqStateEnum["NJ"] = "NJ";
    AddressDomainReqStateEnum["NM"] = "NM";
    AddressDomainReqStateEnum["NV"] = "NV";
    AddressDomainReqStateEnum["NY"] = "NY";
    AddressDomainReqStateEnum["OH"] = "OH";
    AddressDomainReqStateEnum["OK"] = "OK";
    AddressDomainReqStateEnum["OR"] = "OR";
    AddressDomainReqStateEnum["PA"] = "PA";
    AddressDomainReqStateEnum["RI"] = "RI";
    AddressDomainReqStateEnum["SC"] = "SC";
    AddressDomainReqStateEnum["SD"] = "SD";
    AddressDomainReqStateEnum["TN"] = "TN";
    AddressDomainReqStateEnum["TX"] = "TX";
    AddressDomainReqStateEnum["UT"] = "UT";
    AddressDomainReqStateEnum["VA"] = "VA";
    AddressDomainReqStateEnum["VT"] = "VT";
    AddressDomainReqStateEnum["WA"] = "WA";
    AddressDomainReqStateEnum["WI"] = "WI";
    AddressDomainReqStateEnum["WV"] = "WV";
    AddressDomainReqStateEnum["WY"] = "WY";
})(AddressDomainReqStateEnum || (AddressDomainReqStateEnum = {}));
