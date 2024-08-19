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
import { LawfirmCourtCoverageDomain } from './';
/**
 *
 * @export
 * @interface GetLawfirmCoverageResponse
 */
export interface GetLawfirmCoverageResponse {
    /**
     *
     * @type {Array<LawfirmCourtCoverageDomain>}
     * @memberof GetLawfirmCoverageResponse
     */
    coverageList?: Array<LawfirmCourtCoverageDomain>;
}
export declare function GetLawfirmCoverageResponseFromJSON(json: any): GetLawfirmCoverageResponse;
export declare function GetLawfirmCoverageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLawfirmCoverageResponse;
export declare function GetLawfirmCoverageResponseToJSON(value?: GetLawfirmCoverageResponse | null): any;
