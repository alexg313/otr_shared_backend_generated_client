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
import { Author } from './author';
import { Attachment } from './attachment';


export interface Source { 
    attachments?: Array<Attachment>;
    author?: Author;
    body?: string;
    delivered_as?: Source.DeliveredAsEnum;
    id?: string;
    redacted?: boolean;
    subject?: string;
    type?: string;
    url?: string;
}
export namespace Source {
    export type DeliveredAsEnum = 'ADMIN_INITIATED' | 'INBOUND' | 'OUTBOUND';
    export const DeliveredAsEnum = {
        AdminInitiated: 'ADMIN_INITIATED' as DeliveredAsEnum,
        Inbound: 'INBOUND' as DeliveredAsEnum,
        Outbound: 'OUTBOUND' as DeliveredAsEnum
    };
}


