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
 * @interface GhostUserResponse
 */
export interface GhostUserResponse {
    /**
     *
     * @type {Date}
     * @memberof GhostUserResponse
     */
    dob?: Date;
    /**
     *
     * @type {string}
     * @memberof GhostUserResponse
     */
    driverLicenseNumber?: string;
    /**
     *
     * @type {string}
     * @memberof GhostUserResponse
     */
    emailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof GhostUserResponse
     */
    firstname?: string;
    /**
     *
     * @type {string}
     * @memberof GhostUserResponse
     */
    gender?: GhostUserResponseGenderEnum;
    /**
     *
     * @type {string}
     * @memberof GhostUserResponse
     */
    lastname?: string;
    /**
     *
     * @type {string}
     * @memberof GhostUserResponse
     */
    race?: GhostUserResponseRaceEnum;
    /**
     *
     * @type {number}
     * @memberof GhostUserResponse
     */
    userId?: number;
}
export declare function GhostUserResponseFromJSON(json: any): GhostUserResponse;
export declare function GhostUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GhostUserResponse;
export declare function GhostUserResponseToJSON(value?: GhostUserResponse | null): any;
/**
* @export
* @enum {string}
*/
export declare enum GhostUserResponseGenderEnum {
    FEMALE = "FEMALE",
    MALE = "MALE",
    NOTAVAILABLE = "NOT_AVAILABLE",
    NOTLISTED = "NOT_LISTED",
    UNVERIFIED = "UNVERIFIED",
    X = "X"
}
/**
* @export
* @enum {string}
*/
export declare enum GhostUserResponseRaceEnum {
    ASIAN = "ASIAN",
    BLACK = "BLACK",
    HISPANIC = "HISPANIC",
    MIDDLEEASTERN = "MIDDLE_EASTERN",
    NATIVE = "NATIVE",
    NOTAVAILABLE = "NOT_AVAILABLE",
    PACIFICISLANDER = "PACIFIC_ISLANDER",
    TWOORMORE = "TWO_OR_MORE",
    UNKNOWN = "UNKNOWN",
    UNVERIFIED = "UNVERIFIED",
    WHITE = "WHITE"
}
