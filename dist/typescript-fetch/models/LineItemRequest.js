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
export function LineItemRequestFromJSON(json) {
    return LineItemRequestFromJSONTyped(json, false);
}
export function LineItemRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'additionalDescription': !exists(json, 'additionalDescription') ? undefined : json['additionalDescription'],
        'chargeDescription': !exists(json, 'chargeDescription') ? undefined : json['chargeDescription'],
        'feeInCents': !exists(json, 'feeInCents') ? undefined : json['feeInCents'],
        'lawfirmReferralCodeAdjustmentInCents': !exists(json, 'lawfirmReferralCodeAdjustmentInCents') ? undefined : json['lawfirmReferralCodeAdjustmentInCents'],
        'lineItemOwner': !exists(json, 'lineItemOwner') ? undefined : json['lineItemOwner'],
        'lineItemType': !exists(json, 'lineItemType') ? undefined : json['lineItemType'],
        'otrMarketingFeeChargedToLawfirm': !exists(json, 'otrMarketingFeeChargedToLawfirm') ? undefined : json['otrMarketingFeeChargedToLawfirm'],
        'otrReferralCodeAdjustmentInCents': !exists(json, 'otrReferralCodeAdjustmentInCents') ? undefined : json['otrReferralCodeAdjustmentInCents'],
    };
}
export function LineItemRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'additionalDescription': value.additionalDescription,
        'chargeDescription': value.chargeDescription,
        'feeInCents': value.feeInCents,
        'lawfirmReferralCodeAdjustmentInCents': value.lawfirmReferralCodeAdjustmentInCents,
        'lineItemOwner': value.lineItemOwner,
        'lineItemType': value.lineItemType,
        'otrMarketingFeeChargedToLawfirm': value.otrMarketingFeeChargedToLawfirm,
        'otrReferralCodeAdjustmentInCents': value.otrReferralCodeAdjustmentInCents,
    };
}
/**
* @export
* @enum {string}
*/
export var LineItemRequestLineItemOwnerEnum;
(function (LineItemRequestLineItemOwnerEnum) {
    LineItemRequestLineItemOwnerEnum["COURT"] = "COURT";
    LineItemRequestLineItemOwnerEnum["LAWFIRM"] = "LAWFIRM";
    LineItemRequestLineItemOwnerEnum["OTR"] = "OTR";
})(LineItemRequestLineItemOwnerEnum || (LineItemRequestLineItemOwnerEnum = {}));
/**
* @export
* @enum {string}
*/
export var LineItemRequestLineItemTypeEnum;
(function (LineItemRequestLineItemTypeEnum) {
    LineItemRequestLineItemTypeEnum["ACCIDENTFEE"] = "ACCIDENT_FEE";
    LineItemRequestLineItemTypeEnum["BASELEGALFEE"] = "BASE_LEGAL_FEE";
    LineItemRequestLineItemTypeEnum["BONDFEE"] = "BOND_FEE";
    LineItemRequestLineItemTypeEnum["BOOKINGFEE"] = "BOOKING_FEE";
    LineItemRequestLineItemTypeEnum["CDLFEE"] = "CDL_FEE";
    LineItemRequestLineItemTypeEnum["COURTFEE"] = "COURT_FEE";
    LineItemRequestLineItemTypeEnum["DISPUTEFEE"] = "DISPUTE_FEE";
    LineItemRequestLineItemTypeEnum["FINEPAYMENT"] = "FINE_PAYMENT";
    LineItemRequestLineItemTypeEnum["FTAFEE"] = "FTA_FEE";
    LineItemRequestLineItemTypeEnum["INITIALSUBSCRIPTIONFEE"] = "INITIAL_SUBSCRIPTION_FEE";
    LineItemRequestLineItemTypeEnum["LATEFEE"] = "LATE_FEE";
    LineItemRequestLineItemTypeEnum["MBGREFUND"] = "MBG_REFUND";
    LineItemRequestLineItemTypeEnum["MVSFEE"] = "MVS_FEE";
    LineItemRequestLineItemTypeEnum["OTHER"] = "OTHER";
    LineItemRequestLineItemTypeEnum["OTRCREDIT"] = "OTR_CREDIT";
    LineItemRequestLineItemTypeEnum["PAYMENTPLANSERVICEFEE"] = "PAYMENT_PLAN_SERVICE_FEE";
    LineItemRequestLineItemTypeEnum["WARRANTFEE"] = "WARRANT_FEE";
})(LineItemRequestLineItemTypeEnum || (LineItemRequestLineItemTypeEnum = {}));
