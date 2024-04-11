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
 * @interface LawfirmCaseDocument
 */
export interface LawfirmCaseDocument {
    /**
     *
     * @type {string}
     * @memberof LawfirmCaseDocument
     */
    caseDocId?: string;
    /**
     *
     * @type {string}
     * @memberof LawfirmCaseDocument
     */
    clientDocRequirement?: LawfirmCaseDocumentClientDocRequirementEnum;
    /**
     *
     * @type {Date}
     * @memberof LawfirmCaseDocument
     */
    docDate?: Date;
    /**
     *
     * @type {string}
     * @memberof LawfirmCaseDocument
     */
    docType?: LawfirmCaseDocumentDocTypeEnum;
    /**
     *
     * @type {string}
     * @memberof LawfirmCaseDocument
     */
    docUrl?: string;
    /**
     *
     * @type {boolean}
     * @memberof LawfirmCaseDocument
     */
    hasClientAgreed?: boolean;
}
export declare function LawfirmCaseDocumentFromJSON(json: any): LawfirmCaseDocument;
export declare function LawfirmCaseDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): LawfirmCaseDocument;
export declare function LawfirmCaseDocumentToJSON(value?: LawfirmCaseDocument | null): any;
/**
* @export
* @enum {string}
*/
export declare enum LawfirmCaseDocumentClientDocRequirementEnum {
    ACK = "ACK",
    NONE = "NONE",
    NOTARY = "NOTARY",
    SIGNATURE = "SIGNATURE"
}
/**
* @export
* @enum {string}
*/
export declare enum LawfirmCaseDocumentDocTypeEnum {
    ENGAGEMENTLETTER = "ENGAGEMENT_LETTER",
    OTHERDOCUMENT = "OTHER_DOCUMENT",
    OTHERIMAGE = "OTHER_IMAGE"
}
