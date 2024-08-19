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
export interface AddSocialMediaActionUsingPOSTRequest {
    caseId: string;
}
/**
 *
 */
export declare class CaseResolutionControllerApi extends runtime.BaseAPI {
    /**
     * addSocialMediaAction
     */
    addSocialMediaActionUsingPOSTRaw(requestParameters: AddSocialMediaActionUsingPOSTRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * addSocialMediaAction
     */
    addSocialMediaActionUsingPOST(requestParameters: AddSocialMediaActionUsingPOSTRequest): Promise<void>;
}
