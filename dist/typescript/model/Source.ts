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

export interface Source {
    "attachments"?: Array<models.Attachment>;
    "author"?: models.Author;
    "body"?: string;
    "delivered_as"?: Source.DeliveredAsEnum;
    "id"?: string;
    "redacted"?: boolean;
    "subject"?: string;
    "type"?: string;
    "url"?: string;
}

export namespace Source {
    export enum DeliveredAsEnum {
        ADMININITIATED = <any> 'ADMIN_INITIATED',
        INBOUND = <any> 'INBOUND',
        OUTBOUND = <any> 'OUTBOUND'
    }
}
