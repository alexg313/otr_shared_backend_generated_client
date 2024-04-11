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
import { TimestampRes } from './';
/**
 *
 * @export
 * @interface LostCaseWithTransferNotReversed
 */
export interface LostCaseWithTransferNotReversed {
    /**
     *
     * @type {number}
     * @memberof LostCaseWithTransferNotReversed
     */
    actualCustomerCost?: number;
    /**
     *
     * @type {number}
     * @memberof LostCaseWithTransferNotReversed
     */
    amountRefunded?: number;
    /**
     *
     * @type {number}
     * @memberof LostCaseWithTransferNotReversed
     */
    applicationFeeRefundAmount?: number;
    /**
     *
     * @type {string}
     * @memberof LostCaseWithTransferNotReversed
     */
    caseId?: string;
    /**
     *
     * @type {TimestampRes}
     * @memberof LostCaseWithTransferNotReversed
     */
    caseResolutionDateUtc?: TimestampRes;
    /**
     *
     * @type {string}
     * @memberof LostCaseWithTransferNotReversed
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof LostCaseWithTransferNotReversed
     */
    lastName?: string;
    /**
     *
     * @type {number}
     * @memberof LostCaseWithTransferNotReversed
     */
    lawfirmGrossRevenue?: number;
    /**
     *
     * @type {number}
     * @memberof LostCaseWithTransferNotReversed
     */
    lawfirmId?: number;
    /**
     *
     * @type {string}
     * @memberof LostCaseWithTransferNotReversed
     */
    lawfirmName?: string;
    /**
     *
     * @type {number}
     * @memberof LostCaseWithTransferNotReversed
     */
    originalApplicationFee?: number;
    /**
     *
     * @type {number}
     * @memberof LostCaseWithTransferNotReversed
     */
    originalCustomerCost?: number;
    /**
     *
     * @type {number}
     * @memberof LostCaseWithTransferNotReversed
     */
    originalTransferAmount?: number;
    /**
     *
     * @type {number}
     * @memberof LostCaseWithTransferNotReversed
     */
    otrIncome?: number;
    /**
     *
     * @type {number}
     * @memberof LostCaseWithTransferNotReversed
     */
    platformFee?: number;
    /**
     *
     * @type {string}
     * @memberof LostCaseWithTransferNotReversed
     */
    refundOwner?: LostCaseWithTransferNotReversedRefundOwnerEnum;
    /**
     *
     * @type {number}
     * @memberof LostCaseWithTransferNotReversed
     */
    stripeFee?: number;
    /**
     *
     * @type {number}
     * @memberof LostCaseWithTransferNotReversed
     */
    transferAmountRefunded?: number;
    /**
     *
     * @type {number}
     * @memberof LostCaseWithTransferNotReversed
     */
    userId?: number;
}
export declare function LostCaseWithTransferNotReversedFromJSON(json: any): LostCaseWithTransferNotReversed;
export declare function LostCaseWithTransferNotReversedFromJSONTyped(json: any, ignoreDiscriminator: boolean): LostCaseWithTransferNotReversed;
export declare function LostCaseWithTransferNotReversedToJSON(value?: LostCaseWithTransferNotReversed | null): any;
/**
* @export
* @enum {string}
*/
export declare enum LostCaseWithTransferNotReversedRefundOwnerEnum {
    LAWFIRM = "LAWFIRM",
    NONE = "NONE",
    OTR = "OTR"
}
