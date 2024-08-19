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
import { TimestampReq } from './';
/**
 *
 * @export
 * @interface CaseLineItemDomainReq
 */
export interface CaseLineItemDomainReq {
    /**
     *
     * @type {string}
     * @memberof CaseLineItemDomainReq
     */
    additionalDescription?: string;
    /**
     *
     * @type {string}
     * @memberof CaseLineItemDomainReq
     */
    chargeDescription?: string;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    clientTotalCost?: number;
    /**
     *
     * @type {TimestampReq}
     * @memberof CaseLineItemDomainReq
     */
    creationDate?: TimestampReq;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    feeInCents?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    lawfirmAssumedCost?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    lawfirmCaseFees?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    lawfirmCaseId?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    lawfirmEarningsForCase?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    lawfirmReferralCodeAdjustmentInCents?: number;
    /**
     *
     * @type {string}
     * @memberof CaseLineItemDomainReq
     */
    lineItemId?: string;
    /**
     *
     * @type {string}
     * @memberof CaseLineItemDomainReq
     */
    lineItemOwner?: CaseLineItemDomainReqLineItemOwnerEnum;
    /**
     *
     * @type {string}
     * @memberof CaseLineItemDomainReq
     */
    lineItemType?: CaseLineItemDomainReqLineItemTypeEnum;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    otrEarnings?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    otrMarketingFeeActual?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    otrMarketingFeeChargedToLawfirm?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    otrReferralCodeAdjustmentInCents?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    paymentProcessingFeeActual?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    paymentProcessingFeeChargedToLawfirm?: number;
    /**
     *
     * @type {number}
     * @memberof CaseLineItemDomainReq
     */
    platformFee?: number;
}
export declare function CaseLineItemDomainReqFromJSON(json: any): CaseLineItemDomainReq;
export declare function CaseLineItemDomainReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseLineItemDomainReq;
export declare function CaseLineItemDomainReqToJSON(value?: CaseLineItemDomainReq | null): any;
/**
* @export
* @enum {string}
*/
export declare enum CaseLineItemDomainReqLineItemOwnerEnum {
    COURT = "COURT",
    LAWFIRM = "LAWFIRM",
    OTR = "OTR"
}
/**
* @export
* @enum {string}
*/
export declare enum CaseLineItemDomainReqLineItemTypeEnum {
    ACCIDENTFEE = "ACCIDENT_FEE",
    BASELEGALFEE = "BASE_LEGAL_FEE",
    BONDFEE = "BOND_FEE",
    BOOKINGFEE = "BOOKING_FEE",
    CDLFEE = "CDL_FEE",
    COURTFEE = "COURT_FEE",
    DISPUTEFEE = "DISPUTE_FEE",
    FINEPAYMENT = "FINE_PAYMENT",
    FTAFEE = "FTA_FEE",
    INITIALSUBSCRIPTIONFEE = "INITIAL_SUBSCRIPTION_FEE",
    LATEFEE = "LATE_FEE",
    MBGREFUND = "MBG_REFUND",
    MVSFEE = "MVS_FEE",
    OTHER = "OTHER",
    OTRCREDIT = "OTR_CREDIT",
    PAYMENTPLANSERVICEFEE = "PAYMENT_PLAN_SERVICE_FEE",
    WARRANTFEE = "WARRANT_FEE"
}
