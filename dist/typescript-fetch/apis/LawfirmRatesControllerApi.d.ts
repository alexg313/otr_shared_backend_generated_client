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
import * as runtime from '../runtime';
import { GeoRatesRequest, LawfirmsRatesResponse } from '../models';
export interface GetActiveRatesByAreaUsingPOSTRequest {
    request: GeoRatesRequest;
}
/**
 *
 */
export declare class LawfirmRatesControllerApi extends runtime.BaseAPI {
    /**
     * getActiveRatesByArea
     */
    getActiveRatesByAreaUsingPOSTRaw(requestParameters: GetActiveRatesByAreaUsingPOSTRequest): Promise<runtime.ApiResponse<LawfirmsRatesResponse>>;
    /**
     * getActiveRatesByArea
     */
    getActiveRatesByAreaUsingPOST(requestParameters: GetActiveRatesByAreaUsingPOSTRequest): Promise<LawfirmsRatesResponse>;
}
