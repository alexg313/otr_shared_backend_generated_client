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
 * @interface InviteHouseholdMateRequest
 */
export interface InviteHouseholdMateRequest {
    /**
     *
     * @type {string}
     * @memberof InviteHouseholdMateRequest
     */
    emailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof InviteHouseholdMateRequest
     */
    fullName?: string;
    /**
     *
     * @type {string}
     * @memberof InviteHouseholdMateRequest
     */
    relationshipType?: InviteHouseholdMateRequestRelationshipTypeEnum;
}
export declare function InviteHouseholdMateRequestFromJSON(json: any): InviteHouseholdMateRequest;
export declare function InviteHouseholdMateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InviteHouseholdMateRequest;
export declare function InviteHouseholdMateRequestToJSON(value?: InviteHouseholdMateRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum InviteHouseholdMateRequestRelationshipTypeEnum {
    OWNER = "OWNER",
    SIBLING = "SIBLING",
    SPOUSE = "SPOUSE",
    TEENAGER = "TEENAGER",
    UNKNOWN = "UNKNOWN"
}
