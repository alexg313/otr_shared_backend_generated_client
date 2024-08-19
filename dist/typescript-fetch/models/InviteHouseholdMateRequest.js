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
export function InviteHouseholdMateRequestFromJSON(json) {
    return InviteHouseholdMateRequestFromJSONTyped(json, false);
}
export function InviteHouseholdMateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'relationshipType': !exists(json, 'relationshipType') ? undefined : json['relationshipType'],
    };
}
export function InviteHouseholdMateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'emailAddress': value.emailAddress,
        'fullName': value.fullName,
        'relationshipType': value.relationshipType,
    };
}
/**
* @export
* @enum {string}
*/
export var InviteHouseholdMateRequestRelationshipTypeEnum;
(function (InviteHouseholdMateRequestRelationshipTypeEnum) {
    InviteHouseholdMateRequestRelationshipTypeEnum["OWNER"] = "OWNER";
    InviteHouseholdMateRequestRelationshipTypeEnum["SIBLING"] = "SIBLING";
    InviteHouseholdMateRequestRelationshipTypeEnum["SPOUSE"] = "SPOUSE";
    InviteHouseholdMateRequestRelationshipTypeEnum["TEENAGER"] = "TEENAGER";
    InviteHouseholdMateRequestRelationshipTypeEnum["UNKNOWN"] = "UNKNOWN";
})(InviteHouseholdMateRequestRelationshipTypeEnum || (InviteHouseholdMateRequestRelationshipTypeEnum = {}));
