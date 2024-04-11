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
import { AddInnerCourt, AddInnerCourtAddress } from './';
/**
 *
 * @export
 * @interface AddCourtRequest
 */
export interface AddCourtRequest {
    /**
     *
     * @type {AddInnerCourtAddress}
     * @memberof AddCourtRequest
     */
    address?: AddInnerCourtAddress;
    /**
     *
     * @type {AddInnerCourt}
     * @memberof AddCourtRequest
     */
    court?: AddInnerCourt;
    /**
     *
     * @type {boolean}
     * @memberof AddCourtRequest
     */
    forceAdd?: boolean;
}
export declare function AddCourtRequestFromJSON(json: any): AddCourtRequest;
export declare function AddCourtRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddCourtRequest;
export declare function AddCourtRequestToJSON(value?: AddCourtRequest | null): any;
