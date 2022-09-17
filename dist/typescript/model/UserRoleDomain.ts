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

export interface UserRoleDomain {
    "roleType"?: UserRoleDomain.RoleTypeEnum;
}

export namespace UserRoleDomain {
    export enum RoleTypeEnum {
        ADMIN = <any> 'ADMIN',
        DEFENDANT = <any> 'DEFENDANT',
        LAWYER = <any> 'LAWYER',
        PARTNER = <any> 'PARTNER',
        UNKNOWN = <any> 'UNKNOWN'
    }
}
