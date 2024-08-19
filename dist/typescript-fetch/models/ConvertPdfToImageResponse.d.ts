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
import { MediaItemModel } from './';
/**
 *
 * @export
 * @interface ConvertPdfToImageResponse
 */
export interface ConvertPdfToImageResponse {
    /**
     *
     * @type {number}
     * @memberof ConvertPdfToImageResponse
     */
    errorCode?: number;
    /**
     *
     * @type {string}
     * @memberof ConvertPdfToImageResponse
     */
    errorMessage?: string;
    /**
     *
     * @type {boolean}
     * @memberof ConvertPdfToImageResponse
     */
    isSuccess?: boolean;
    /**
     *
     * @type {Array<MediaItemModel>}
     * @memberof ConvertPdfToImageResponse
     */
    mediaItems?: Array<MediaItemModel>;
}
export declare function ConvertPdfToImageResponseFromJSON(json: any): ConvertPdfToImageResponse;
export declare function ConvertPdfToImageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConvertPdfToImageResponse;
export declare function ConvertPdfToImageResponseToJSON(value?: ConvertPdfToImageResponse | null): any;
