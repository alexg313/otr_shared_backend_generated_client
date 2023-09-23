"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchlistItemsModel = void 0;
var WatchlistItemsModel;
(function (WatchlistItemsModel) {
    var EntityTypeEnum;
    (function (EntityTypeEnum) {
        EntityTypeEnum[EntityTypeEnum["CASE"] = 'CASE'] = "CASE";
        EntityTypeEnum[EntityTypeEnum["LAWFIRM"] = 'LAWFIRM'] = "LAWFIRM";
        EntityTypeEnum[EntityTypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        EntityTypeEnum[EntityTypeEnum["USER"] = 'USER'] = "USER";
    })(EntityTypeEnum = WatchlistItemsModel.EntityTypeEnum || (WatchlistItemsModel.EntityTypeEnum = {}));
    var PriorityEnum;
    (function (PriorityEnum) {
        PriorityEnum[PriorityEnum["HIGH"] = 'HIGH'] = "HIGH";
        PriorityEnum[PriorityEnum["LOW"] = 'LOW'] = "LOW";
        PriorityEnum[PriorityEnum["MEDIUM"] = 'MEDIUM'] = "MEDIUM";
    })(PriorityEnum = WatchlistItemsModel.PriorityEnum || (WatchlistItemsModel.PriorityEnum = {}));
})(WatchlistItemsModel = exports.WatchlistItemsModel || (exports.WatchlistItemsModel = {}));
