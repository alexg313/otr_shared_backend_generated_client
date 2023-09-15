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

export interface LawfirmDocumentTemplate {
    "clientDocRequirement"?: LawfirmDocumentTemplate.ClientDocRequirementEnum;
    "docDate"?: string;
    "docExt"?: string;
    "docType"?: LawfirmDocumentTemplate.DocTypeEnum;
    "textProvidedByLawfirm"?: string;
}

export namespace LawfirmDocumentTemplate {
    export enum ClientDocRequirementEnum {
        ACK = <any> 'ACK',
        NONE = <any> 'NONE',
        NOTARY = <any> 'NOTARY',
        SIGNATURE = <any> 'SIGNATURE'
    }
    export enum DocTypeEnum {
        ENGAGEMENTLETTER = <any> 'ENGAGEMENT_LETTER',
        OTHERDOCUMENT = <any> 'OTHER_DOCUMENT',
        OTHERIMAGE = <any> 'OTHER_IMAGE'
    }
}
