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


export interface CaseLineItemsSummary { 
    caseBaseCostInCents?: number;
    clientTotalCostInCents?: number;
    hasPredictedOrAdjustedFee?: boolean;
    lawfirmAssumedCostInCents?: number;
    lawfirmCaseFees?: number;
    lawfirmEarningsForCase?: number;
    lawfirmRefcodeAdjustmentInCents?: number;
    lawfirmServiceChargeInCents?: number;
    otrEarnings?: number;
    otrMarketingFeeChargedToLawfirm?: number;
    otrRefcodeAdjustmentInCents?: number;
    paymentProcessingFeeActual?: number;
    paymentProcessingFeeChargedToLawfirm?: number;
    platformFee?: number;
}

