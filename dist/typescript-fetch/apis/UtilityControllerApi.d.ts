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
import { BackfillLawfirmTransactionRecordsRequest, BackfillLawfirmTransactionRecordsResponse } from '../models';
export interface BackfillLawfirmTransactionRecordsUsingPOSTRequest {
    request: BackfillLawfirmTransactionRecordsRequest;
}
export interface SetStatusUsingPOSTRequest {
    lawfirmTransactionsStatus?: boolean;
    syncStatus?: boolean;
}
/**
 *
 */
export declare class UtilityControllerApi extends runtime.BaseAPI {
    /**
     * backfillLawfirmTransactionRecords
     */
    backfillLawfirmTransactionRecordsUsingPOSTRaw(requestParameters: BackfillLawfirmTransactionRecordsUsingPOSTRequest): Promise<runtime.ApiResponse<BackfillLawfirmTransactionRecordsResponse>>;
    /**
     * backfillLawfirmTransactionRecords
     */
    backfillLawfirmTransactionRecordsUsingPOST(requestParameters: BackfillLawfirmTransactionRecordsUsingPOSTRequest): Promise<BackfillLawfirmTransactionRecordsResponse>;
    /**
     * getStatus
     */
    getStatusUsingGETRaw(): Promise<runtime.ApiResponse<{
        [key: string]: boolean;
    }>>;
    /**
     * getStatus
     */
    getStatusUsingGET(): Promise<{
        [key: string]: boolean;
    }>;
    /**
     * setStatus
     */
    setStatusUsingPOSTRaw(requestParameters: SetStatusUsingPOSTRequest): Promise<runtime.ApiResponse<{
        [key: string]: boolean;
    }>>;
    /**
     * setStatus
     */
    setStatusUsingPOST(requestParameters: SetStatusUsingPOSTRequest): Promise<{
        [key: string]: boolean;
    }>;
}
