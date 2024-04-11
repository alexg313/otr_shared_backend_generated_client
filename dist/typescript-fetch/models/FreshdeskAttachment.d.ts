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
import { Timestamp } from './';
/**
 *
 * @export
 * @interface FreshdeskAttachment
 */
export interface FreshdeskAttachment {
    /**
     *
     * @type {string}
     * @memberof FreshdeskAttachment
     */
    attachmentUrl?: string;
    /**
     *
     * @type {string}
     * @memberof FreshdeskAttachment
     */
    contentType?: string;
    /**
     *
     * @type {Timestamp}
     * @memberof FreshdeskAttachment
     */
    createdAt?: Timestamp;
    /**
     *
     * @type {number}
     * @memberof FreshdeskAttachment
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof FreshdeskAttachment
     */
    name?: string;
    /**
     *
     * @type {number}
     * @memberof FreshdeskAttachment
     */
    size?: number;
    /**
     *
     * @type {Timestamp}
     * @memberof FreshdeskAttachment
     */
    updatedAt?: Timestamp;
}
export declare function FreshdeskAttachmentFromJSON(json: any): FreshdeskAttachment;
export declare function FreshdeskAttachmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): FreshdeskAttachment;
export declare function FreshdeskAttachmentToJSON(value?: FreshdeskAttachment | null): any;
