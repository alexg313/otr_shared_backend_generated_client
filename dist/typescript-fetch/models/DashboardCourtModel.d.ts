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
import { DashboardAddressModel } from './';
/**
 *
 * @export
 * @interface DashboardCourtModel
 */
export interface DashboardCourtModel {
    /**
     *
     * @type {DashboardAddressModel}
     * @memberof DashboardCourtModel
     */
    address?: DashboardAddressModel;
    /**
     *
     * @type {string}
     * @memberof DashboardCourtModel
     */
    courtName?: string;
}
export declare function DashboardCourtModelFromJSON(json: any): DashboardCourtModel;
export declare function DashboardCourtModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashboardCourtModel;
export declare function DashboardCourtModelToJSON(value?: DashboardCourtModel | null): any;
