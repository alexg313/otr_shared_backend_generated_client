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


export interface AwsCredentialsRequest { 
    keyName?: AwsCredentialsRequest.KeyNameEnum;
}
export namespace AwsCredentialsRequest {
    export type KeyNameEnum = 'S3_CITATION_IMAGES_RO';
    export const KeyNameEnum = {
        S3CitationImagesRo: 'S3_CITATION_IMAGES_RO' as KeyNameEnum
    };
}


