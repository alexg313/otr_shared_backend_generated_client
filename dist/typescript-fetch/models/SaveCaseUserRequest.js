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
import { CaseUserDefendantAttributesRequestFromJSON, CaseUserDefendantAttributesRequestToJSON, CaseUserPermissionAttributesFromJSON, CaseUserPermissionAttributesToJSON, } from './';
export function SaveCaseUserRequestFromJSON(json) {
    return SaveCaseUserRequestFromJSONTyped(json, false);
}
export function SaveCaseUserRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'additionalNote': !exists(json, 'additionalNote') ? undefined : json['additionalNote'],
        'defendantAttributes': !exists(json, 'defendantAttributes') ? undefined : CaseUserDefendantAttributesRequestFromJSON(json['defendantAttributes']),
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'isBookingAgent': !exists(json, 'isBookingAgent') ? undefined : json['isBookingAgent'],
        'isDefendant': !exists(json, 'isDefendant') ? undefined : json['isDefendant'],
        'isOwner': !exists(json, 'isOwner') ? undefined : json['isOwner'],
        'isRemoved': !exists(json, 'isRemoved') ? undefined : json['isRemoved'],
        'permissionAttributes': !exists(json, 'permissionAttributes') ? undefined : CaseUserPermissionAttributesFromJSON(json['permissionAttributes']),
        'relationshipToClient': !exists(json, 'relationshipToClient') ? undefined : json['relationshipToClient'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}
export function SaveCaseUserRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'additionalNote': value.additionalNote,
        'defendantAttributes': CaseUserDefendantAttributesRequestToJSON(value.defendantAttributes),
        'emailAddress': value.emailAddress,
        'isBookingAgent': value.isBookingAgent,
        'isDefendant': value.isDefendant,
        'isOwner': value.isOwner,
        'isRemoved': value.isRemoved,
        'permissionAttributes': CaseUserPermissionAttributesToJSON(value.permissionAttributes),
        'relationshipToClient': value.relationshipToClient,
        'userId': value.userId,
    };
}
/**
* @export
* @enum {string}
*/
export var SaveCaseUserRequestRelationshipToClientEnum;
(function (SaveCaseUserRequestRelationshipToClientEnum) {
    SaveCaseUserRequestRelationshipToClientEnum["EMPLOYER"] = "EMPLOYER";
    SaveCaseUserRequestRelationshipToClientEnum["FAMILYMEMBER"] = "FAMILY_MEMBER";
    SaveCaseUserRequestRelationshipToClientEnum["FRIEND"] = "FRIEND";
    SaveCaseUserRequestRelationshipToClientEnum["LAWYER"] = "LAWYER";
    SaveCaseUserRequestRelationshipToClientEnum["OTHER"] = "OTHER";
    SaveCaseUserRequestRelationshipToClientEnum["SELF"] = "SELF";
    SaveCaseUserRequestRelationshipToClientEnum["UNKNOWN"] = "UNKNOWN";
})(SaveCaseUserRequestRelationshipToClientEnum || (SaveCaseUserRequestRelationshipToClientEnum = {}));
