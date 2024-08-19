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
 * @interface BalanceTransactionModel
 */
export interface BalanceTransactionModel {
    /**
     *
     * @type {number}
     * @memberof BalanceTransactionModel
     */
    amountInCents?: number;
    /**
     *
     * @type {Date}
     * @memberof BalanceTransactionModel
     */
    availableAtDateUtc?: Date;
    /**
     *
     * @type {string}
     * @memberof BalanceTransactionModel
     */
    caseId?: string;
    /**
     *
     * @type {Date}
     * @memberof BalanceTransactionModel
     */
    creationDateUtc?: Date;
    /**
     *
     * @type {string}
     * @memberof BalanceTransactionModel
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof BalanceTransactionModel
     */
    stripePayoutId?: string;
    /**
     *
     * @type {string}
     * @memberof BalanceTransactionModel
     */
    transactionId?: string;
    /**
     *
     * @type {string}
     * @memberof BalanceTransactionModel
     */
    type?: string;
}
export declare function BalanceTransactionModelFromJSON(json: any): BalanceTransactionModel;
export declare function BalanceTransactionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceTransactionModel;
export declare function BalanceTransactionModelToJSON(value?: BalanceTransactionModel | null): any;
