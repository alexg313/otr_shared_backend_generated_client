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
import * as models from './models';
export interface GetLawfirmTransactionsForCaseResponse {
    "futureTransactions"?: Array<models.FinancialTransaction>;
    "lawfirmAssumedCost"?: number;
    "lawfirmEarningsForCase"?: number;
    "lineItems"?: Array<models.LineItem>;
    "otrMarketingFeeChargedToLawfirm"?: number;
    "paymentProcessingFeeChargedToLawfirm"?: number;
    "transactions"?: Array<models.FinancialTransaction>;
}
