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
import { CaseDeclineReason } from './';
/**
 *
 * @export
 * @interface CaseDeclineCategory
 */
export interface CaseDeclineCategory {
    /**
     *
     * @type {number}
     * @memberof CaseDeclineCategory
     */
    caseDeclineCategoryId?: number;
    /**
     *
     * @type {string}
     * @memberof CaseDeclineCategory
     */
    caseDeclineCategoryName?: string;
    /**
     *
     * @type {Array<CaseDeclineReason>}
     * @memberof CaseDeclineCategory
     */
    reasons?: Array<CaseDeclineReason>;
    /**
     *
     * @type {string}
     * @memberof CaseDeclineCategory
     */
    uiFriendlyName?: string;
}
export declare function CaseDeclineCategoryFromJSON(json: any): CaseDeclineCategory;
export declare function CaseDeclineCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaseDeclineCategory;
export declare function CaseDeclineCategoryToJSON(value?: CaseDeclineCategory | null): any;
