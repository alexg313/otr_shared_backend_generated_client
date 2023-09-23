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


export interface SaveItemToWatchlistRequest { 
    entityId?: string;
    entityType?: SaveItemToWatchlistRequest.EntityTypeEnum;
    note?: string;
    priority?: SaveItemToWatchlistRequest.PriorityEnum;
}
export namespace SaveItemToWatchlistRequest {
    export type EntityTypeEnum = 'CASE' | 'LAWFIRM' | 'UNKNOWN' | 'USER';
    export const EntityTypeEnum = {
        Case: 'CASE' as EntityTypeEnum,
        Lawfirm: 'LAWFIRM' as EntityTypeEnum,
        Unknown: 'UNKNOWN' as EntityTypeEnum,
        User: 'USER' as EntityTypeEnum
    };
    export type PriorityEnum = 'HIGH' | 'LOW' | 'MEDIUM';
    export const PriorityEnum = {
        High: 'HIGH' as PriorityEnum,
        Low: 'LOW' as PriorityEnum,
        Medium: 'MEDIUM' as PriorityEnum
    };
}


