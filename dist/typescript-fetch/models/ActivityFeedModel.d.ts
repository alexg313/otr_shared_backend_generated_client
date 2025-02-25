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
 * @interface ActivityFeedModel
 */
export interface ActivityFeedModel {
    /**
     *
     * @type {Date}
     * @memberof ActivityFeedModel
     */
    activityDate?: Date;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    activityDescription?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    activityDescriptionInHtml?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    activityType?: ActivityFeedModelActivityTypeEnum;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    caseStatus?: ActivityFeedModelCaseStatusEnum;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    city?: string;
    /**
     *
     * @type {boolean}
     * @memberof ActivityFeedModel
     */
    hasStateViolationData?: boolean;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    ownerName?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    privacyMode?: ActivityFeedModelPrivacyModeEnum;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    profilePicUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    regionCode?: string;
    /**
     *
     * @type {number}
     * @memberof ActivityFeedModel
     */
    totalLegalFeeInCents?: number;
    /**
     *
     * @type {string}
     * @memberof ActivityFeedModel
     */
    violationDescription?: string;
}
export declare function ActivityFeedModelFromJSON(json: any): ActivityFeedModel;
export declare function ActivityFeedModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityFeedModel;
export declare function ActivityFeedModelToJSON(value?: ActivityFeedModel | null): any;
/**
* @export
* @enum {string}
*/
export declare enum ActivityFeedModelActivityTypeEnum {
    PURCHASE = "PURCHASE",
    REFERRAL = "REFERRAL",
    REFUND = "REFUND",
    RESOLUTION = "RESOLUTION",
    TICKETREVIEW = "TICKET_REVIEW"
}
/**
* @export
* @enum {string}
*/
export declare enum ActivityFeedModelCaseStatusEnum {
    AMENDEDDOWNWITHINCLASS = "AMENDED_DOWN_WITHIN_CLASS",
    AMENDEDFULLFINE = "AMENDED_FULL_FINE",
    AMENDEDINCREASEDFINE = "AMENDED_INCREASED_FINE",
    AMENDEDNOFINE = "AMENDED_NO_FINE",
    AMENDEDREDUCEDFINE = "AMENDED_REDUCED_FINE",
    AMENDEDTOINFRACTION = "AMENDED_TO_INFRACTION",
    AMENDEDTONMV = "AMENDED_TO_NMV",
    CANCELLEDATTORNEYATFAULT = "CANCELLED_ATTORNEY_AT_FAULT",
    CANCELLEDBYLAWFIRM = "CANCELLED_BY_LAWFIRM",
    CANCELLEDBYUSER = "CANCELLED_BY_USER",
    CANCELLEDDUPLICATE = "CANCELLED_DUPLICATE",
    CANCELLEDNMV = "CANCELLED_NMV",
    CANCELLEDNONPAYMENT = "CANCELLED_NON_PAYMENT",
    CANCELLEDNOLAWFIRM = "CANCELLED_NO_LAWFIRM",
    CANCELLEDOVERDUE = "CANCELLED_OVERDUE",
    CANCELLEDTOOSHORTNOTICE = "CANCELLED_TOO_SHORT_NOTICE",
    CASEINPROGRESS = "CASE_IN_PROGRESS",
    CLIENTCONFIRMED = "CLIENT_CONFIRMED",
    CLIENTCONFIRMEDUNPAID = "CLIENT_CONFIRMED_UNPAID",
    CLIENTFIREDLAWFIRM = "CLIENT_FIRED_LAWFIRM",
    CLIENTFORCEDLOSS = "CLIENT_FORCED_LOSS",
    CLIENTPAIDFINE = "CLIENT_PAID_FINE",
    CLIENTUNRESPONSIVE = "CLIENT_UNRESPONSIVE",
    DEFERRED = "DEFERRED",
    DISMISSED = "DISMISSED",
    DIVERSION = "DIVERSION",
    FEESDISPUTED = "FEES_DISPUTED",
    FINEREDUCTIONONLY = "FINE_REDUCTION_ONLY",
    LAWFIRMWITHDRAWN = "LAWFIRM_WITHDRAWN",
    LOST = "LOST",
    NOLAWFIRMAVAILABLE = "NO_LAWFIRM_AVAILABLE",
    POINTREDUCTION = "POINT_REDUCTION",
    REFUSEDBYLAWFIRM = "REFUSED_BY_LAWFIRM",
    RESOLVEDNONPAYMENT = "RESOLVED_NON_PAYMENT",
    STALE = "STALE",
    TRAFFICSCHOOL = "TRAFFIC_SCHOOL",
    UNCONFIRMED = "UNCONFIRMED"
}
/**
* @export
* @enum {string}
*/
export declare enum ActivityFeedModelPrivacyModeEnum {
    FRIENDS = "FRIENDS",
    PRIVATE = "PRIVATE",
    PUBLIC = "PUBLIC",
    SEMIPUBLIC = "SEMI_PUBLIC"
}
