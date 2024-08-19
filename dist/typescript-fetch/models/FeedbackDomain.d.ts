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
import { FeedbackAttachmentModel } from './';
/**
 *
 * @export
 * @interface FeedbackDomain
 */
export interface FeedbackDomain {
    /**
     *
     * @type {string}
     * @memberof FeedbackDomain
     */
    appVersion?: string;
    /**
     *
     * @type {Array<FeedbackAttachmentModel>}
     * @memberof FeedbackDomain
     */
    attachments?: Array<FeedbackAttachmentModel>;
    /**
     *
     * @type {string}
     * @memberof FeedbackDomain
     */
    body?: string;
    /**
     *
     * @type {number}
     * @memberof FeedbackDomain
     */
    citationId?: number;
    /**
     *
     * @type {string}
     * @memberof FeedbackDomain
     */
    device?: string;
    /**
     *
     * @type {string}
     * @memberof FeedbackDomain
     */
    feedbackType?: FeedbackDomainFeedbackTypeEnum;
    /**
     *
     * @type {string}
     * @memberof FeedbackDomain
     */
    phoneNumber?: string;
    /**
     *
     * @type {string}
     * @memberof FeedbackDomain
     */
    subject?: string;
}
export declare function FeedbackDomainFromJSON(json: any): FeedbackDomain;
export declare function FeedbackDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeedbackDomain;
export declare function FeedbackDomainToJSON(value?: FeedbackDomain | null): any;
/**
* @export
* @enum {string}
*/
export declare enum FeedbackDomainFeedbackTypeEnum {
    GENERIC = "GENERIC",
    NOTREADYTOBOOK = "NOT_READY_TO_BOOK"
}
