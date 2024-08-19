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
 * @interface SaveLawyerRequest
 */
export interface SaveLawyerRequest {
    /**
     *
     * @type {string}
     * @memberof SaveLawyerRequest
     */
    jobTitle?: SaveLawyerRequestJobTitleEnum;
    /**
     *
     * @type {string}
     * @memberof SaveLawyerRequest
     */
    lawSchool?: string;
    /**
     *
     * @type {number}
     * @memberof SaveLawyerRequest
     */
    lawfirmId?: number;
    /**
     *
     * @type {Date}
     * @memberof SaveLawyerRequest
     */
    licensedDate?: Date;
    /**
     *
     * @type {string}
     * @memberof SaveLawyerRequest
     */
    otherJobTitle?: string;
    /**
     *
     * @type {number}
     * @memberof SaveLawyerRequest
     */
    userId?: number;
    /**
     *
     * @type {string}
     * @memberof SaveLawyerRequest
     */
    verificationToken?: string;
}
export declare function SaveLawyerRequestFromJSON(json: any): SaveLawyerRequest;
export declare function SaveLawyerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveLawyerRequest;
export declare function SaveLawyerRequestToJSON(value?: SaveLawyerRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum SaveLawyerRequestJobTitleEnum {
    ACCOUNTANT = "ACCOUNTANT",
    ATTORNEY = "ATTORNEY",
    ATTORNEYASSOCIATE = "ATTORNEY_ASSOCIATE",
    ATTORNEYCOUNSEL = "ATTORNEY_COUNSEL",
    ATTORNEYMANAGINGPARTNER = "ATTORNEY_MANAGING_PARTNER",
    ATTORNEYPARTNER = "ATTORNEY_PARTNER",
    ATTORNEYSTAFF = "ATTORNEY_STAFF",
    CUSTOMERSERVICEREP = "CUSTOMER_SERVICE_REP",
    LEGALASSISTANT = "LEGAL_ASSISTANT",
    LEGALINTERN = "LEGAL_INTERN",
    LEGALSECRETARY = "LEGAL_SECRETARY",
    OTHER = "OTHER",
    PARALEGAL = "PARALEGAL"
}
