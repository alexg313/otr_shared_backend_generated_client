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
 * @interface UpdateCoachingCardRequest
 */
export interface UpdateCoachingCardRequest {
    /**
     *
     * @type {Date}
     * @memberof UpdateCoachingCardRequest
     */
    acknowledgementDateUtc?: Date;
    /**
     *
     * @type {number}
     * @memberof UpdateCoachingCardRequest
     */
    coachingCardId?: number;
    /**
     *
     * @type {string}
     * @memberof UpdateCoachingCardRequest
     */
    permissionType?: UpdateCoachingCardRequestPermissionTypeEnum;
    /**
     *
     * @type {string}
     * @memberof UpdateCoachingCardRequest
     */
    recipientNote?: string;
    /**
     *
     * @type {Date}
     * @memberof UpdateCoachingCardRequest
     */
    resolutionDateUtc?: Date;
    /**
     *
     * @type {number}
     * @memberof UpdateCoachingCardRequest
     */
    userId?: number;
}
export declare function UpdateCoachingCardRequestFromJSON(json: any): UpdateCoachingCardRequest;
export declare function UpdateCoachingCardRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCoachingCardRequest;
export declare function UpdateCoachingCardRequestToJSON(value?: UpdateCoachingCardRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum UpdateCoachingCardRequestPermissionTypeEnum {
    AUTHOR = "AUTHOR",
    MANAGER = "MANAGER",
    PARTICIPANT = "PARTICIPANT",
    RECIPIENT = "RECIPIENT"
}
