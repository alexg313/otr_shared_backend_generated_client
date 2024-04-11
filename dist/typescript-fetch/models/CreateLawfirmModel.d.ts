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
 * @interface CreateLawfirmModel
 */
export interface CreateLawfirmModel {
    /**
     *
     * @type {string}
     * @memberof CreateLawfirmModel
     */
    aboutUsBlurb?: string;
    /**
     *
     * @type {number}
     * @memberof CreateLawfirmModel
     */
    caseAssignmentPriority?: number;
    /**
     *
     * @type {string}
     * @memberof CreateLawfirmModel
     */
    coverPhotoUrl?: string;
    /**
     *
     * @type {number}
     * @memberof CreateLawfirmModel
     */
    createdBy?: number;
    /**
     *
     * @type {Date}
     * @memberof CreateLawfirmModel
     */
    establishedDateUtc?: Date;
    /**
     *
     * @type {number}
     * @memberof CreateLawfirmModel
     */
    establishedYear?: number;
    /**
     *
     * @type {boolean}
     * @memberof CreateLawfirmModel
     */
    isTestLawfirm?: boolean;
    /**
     *
     * @type {string}
     * @memberof CreateLawfirmModel
     */
    lawfirmName?: string;
    /**
     *
     * @type {string}
     * @memberof CreateLawfirmModel
     */
    lawfirmPaymentModel?: CreateLawfirmModelLawfirmPaymentModelEnum;
    /**
     *
     * @type {string}
     * @memberof CreateLawfirmModel
     */
    lawfirmState?: CreateLawfirmModelLawfirmStateEnum;
    /**
     *
     * @type {Date}
     * @memberof CreateLawfirmModel
     */
    membershipStartDateUtc?: Date;
    /**
     *
     * @type {string}
     * @memberof CreateLawfirmModel
     */
    otrNotes?: string;
    /**
     *
     * @type {string}
     * @memberof CreateLawfirmModel
     */
    primaryEmailAddress?: string;
    /**
     *
     * @type {string}
     * @memberof CreateLawfirmModel
     */
    primaryPhoneNumber?: string;
    /**
     *
     * @type {string}
     * @memberof CreateLawfirmModel
     */
    profilePictureUrl?: string;
    /**
     *
     * @type {string}
     * @memberof CreateLawfirmModel
     */
    tagLine?: string;
    /**
     *
     * @type {string}
     * @memberof CreateLawfirmModel
     */
    website?: string;
}
export declare function CreateLawfirmModelFromJSON(json: any): CreateLawfirmModel;
export declare function CreateLawfirmModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateLawfirmModel;
export declare function CreateLawfirmModelToJSON(value?: CreateLawfirmModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CreateLawfirmModelLawfirmPaymentModelEnum {
    DESTINATIONACCOUNT = "DESTINATION_ACCOUNT",
    SEPARATECHARGE = "SEPARATE_CHARGE",
    TRANSFERDEDUCTION = "TRANSFER_DEDUCTION"
}
/**
* @export
* @enum {string}
*/
export declare enum CreateLawfirmModelLawfirmStateEnum {
    ACCOUNTCLOSED = "ACCOUNT_CLOSED",
    DUPLICATE = "DUPLICATE",
    ESTABLISHED = "ESTABLISHED",
    FUTURELEAD = "FUTURE_LEAD",
    INTRIAL = "IN_TRIAL",
    LAWFIRMINTERESTED = "LAWFIRM_INTERESTED",
    LAWFIRMLEAD = "LAWFIRM_LEAD",
    LAWFIRMNOTINTERESTED = "LAWFIRM_NOT_INTERESTED",
    NOTINTERESTEDFEESPLITTINGETHICS = "NOT_INTERESTED_FEE_SPLITTING_ETHICS",
    NOTINTERESTEDREFUNDETHICS = "NOT_INTERESTED_REFUND_ETHICS",
    ONBOARDING = "ONBOARDING",
    TEMPORARILYTURNEDOFF = "TEMPORARILY_TURNED_OFF",
    TERMINATEDFRAUD = "TERMINATED_FRAUD",
    TERMINATEDPOORSERVICE = "TERMINATED_POOR_SERVICE",
    TERMINATEDPOORSUCCESS = "TERMINATED_POOR_SUCCESS",
    UNDERREVIEW = "UNDER_REVIEW"
}
