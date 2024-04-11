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
 * @interface DismissPhoneLeadRequest
 */
export interface DismissPhoneLeadRequest {
    /**
     *
     * @type {string}
     * @memberof DismissPhoneLeadRequest
     */
    entityType?: DismissPhoneLeadRequestEntityTypeEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof DismissPhoneLeadRequest
     */
    referenceIdList?: Array<string>;
}
export declare function DismissPhoneLeadRequestFromJSON(json: any): DismissPhoneLeadRequest;
export declare function DismissPhoneLeadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DismissPhoneLeadRequest;
export declare function DismissPhoneLeadRequestToJSON(value?: DismissPhoneLeadRequest | null): any;
/**
* @export
* @enum {string}
*/
export declare enum DismissPhoneLeadRequestEntityTypeEnum {
    CASE = "CASE",
    CASEPAYMENT = "CASE_PAYMENT",
    CITATION = "CITATION",
    COURT = "COURT",
    LAWFIRM = "LAWFIRM",
    LAWFIRMCASE = "LAWFIRM_CASE",
    LAWYER = "LAWYER",
    LINEITEM = "LINE_ITEM",
    STRIPECHARGE = "STRIPE_CHARGE",
    USER = "USER"
}
