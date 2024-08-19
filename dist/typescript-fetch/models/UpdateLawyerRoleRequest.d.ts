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
 * @interface UpdateLawyerRoleRequest
 */
export interface UpdateLawyerRoleRequest {
    /**
     *
     * @type {string}
     * @memberof UpdateLawyerRoleRequest
     */
    newRole?: UpdateLawyerRoleRequestNewRoleEnum;
}
export declare function UpdateLawyerRoleRequestFromJSON(json: any): UpdateLawyerRoleRequest;
export declare function UpdateLawyerRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateLawyerRoleRequest;
export declare function UpdateLawyerRoleRequestToJSON(value?: UpdateLawyerRoleRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum UpdateLawyerRoleRequestNewRoleEnum {
    ADMIN = "ADMIN",
    DEFENDANT = "DEFENDANT",
    LAWFIRMADMIN = "LAWFIRM_ADMIN",
    LAWYER = "LAWYER",
    PARTNER = "PARTNER",
    UNKNOWN = "UNKNOWN"
}
