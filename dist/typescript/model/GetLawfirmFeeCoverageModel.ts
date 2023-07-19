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

import * as models from './models';

export interface GetLawfirmFeeCoverageModel {
    "city"?: string;
    "county"?: string;
    "courtId"?: number;
    "courtName"?: string;
    "fees"?: Array<models.GetLawfirmFeeModel>;
    "isDeleted"?: boolean;
    "legalServiceId"?: number;
    "legalServiceType"?: GetLawfirmFeeCoverageModel.LegalServiceTypeEnum;
    "regionCode"?: string;
}

export namespace GetLawfirmFeeCoverageModel {
    export enum LegalServiceTypeEnum {
        DEFER = <any> 'DEFER',
        FIGHT = <any> 'FIGHT'
    }
}
