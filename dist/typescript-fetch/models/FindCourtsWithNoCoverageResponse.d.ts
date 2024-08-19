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
import { CourtDomainRes } from './';
/**
 *
 * @export
 * @interface FindCourtsWithNoCoverageResponse
 */
export interface FindCourtsWithNoCoverageResponse {
    /**
     *
     * @type {Array<CourtDomainRes>}
     * @memberof FindCourtsWithNoCoverageResponse
     */
    courtsWithNoCoverage?: Array<CourtDomainRes>;
    /**
     *
     * @type {number}
     * @memberof FindCourtsWithNoCoverageResponse
     */
    numRecords?: number;
}
export declare function FindCourtsWithNoCoverageResponseFromJSON(json: any): FindCourtsWithNoCoverageResponse;
export declare function FindCourtsWithNoCoverageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FindCourtsWithNoCoverageResponse;
export declare function FindCourtsWithNoCoverageResponseToJSON(value?: FindCourtsWithNoCoverageResponse | null): any;
