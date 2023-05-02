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
import { CommonHeader } from './commonHeader';
import { IncomingHeader } from './incomingHeader';


export interface IncomingEmail { 
    commonHeaders?: CommonHeader;
    destination?: Array<string>;
    headers?: Array<IncomingHeader>;
    headersTruncated?: string;
    messageId?: string;
    source?: string;
    timestamp?: string;
}

