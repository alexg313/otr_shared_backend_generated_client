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
export function AuthorModelFromJSON(json) {
    return AuthorModelFromJSONTyped(json, false);
}
export function AuthorModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'profilePicture': !exists(json, 'profilePicture') ? undefined : json['profilePicture'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'userRole': !exists(json, 'userRole') ? undefined : json['userRole'],
    };
}
export function AuthorModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'firstName': value.firstName,
        'lastName': value.lastName,
        'profilePicture': value.profilePicture,
        'userId': value.userId,
        'userRole': value.userRole,
    };
}
/**
* @export
* @enum {string}
*/
export var AuthorModelUserRoleEnum;
(function (AuthorModelUserRoleEnum) {
    AuthorModelUserRoleEnum["ADMIN"] = "ADMIN";
    AuthorModelUserRoleEnum["DEFENDANT"] = "DEFENDANT";
    AuthorModelUserRoleEnum["LAWFIRMADMIN"] = "LAWFIRM_ADMIN";
    AuthorModelUserRoleEnum["LAWYER"] = "LAWYER";
    AuthorModelUserRoleEnum["PARTNER"] = "PARTNER";
    AuthorModelUserRoleEnum["UNKNOWN"] = "UNKNOWN";
})(AuthorModelUserRoleEnum || (AuthorModelUserRoleEnum = {}));
