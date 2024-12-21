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
export var BillingSubscriptionItemModel;
(function (BillingSubscriptionItemModel) {
    let BillingSchemeEnum;
    (function (BillingSchemeEnum) {
        BillingSchemeEnum[BillingSchemeEnum["PERUNIT"] = 'PER_UNIT'] = "PERUNIT";
        BillingSchemeEnum[BillingSchemeEnum["TIERED"] = 'TIERED'] = "TIERED";
        BillingSchemeEnum[BillingSchemeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(BillingSchemeEnum = BillingSubscriptionItemModel.BillingSchemeEnum || (BillingSubscriptionItemModel.BillingSchemeEnum = {}));
    let IntervalEnum;
    (function (IntervalEnum) {
        IntervalEnum[IntervalEnum["DAILY"] = 'DAILY'] = "DAILY";
        IntervalEnum[IntervalEnum["MONTHLY"] = 'MONTHLY'] = "MONTHLY";
        IntervalEnum[IntervalEnum["QUARTERLY"] = 'QUARTERLY'] = "QUARTERLY";
        IntervalEnum[IntervalEnum["WEEKLY"] = 'WEEKLY'] = "WEEKLY";
        IntervalEnum[IntervalEnum["YEARLY"] = 'YEARLY'] = "YEARLY";
    })(IntervalEnum = BillingSubscriptionItemModel.IntervalEnum || (BillingSubscriptionItemModel.IntervalEnum = {}));
    let TiersModeEnum;
    (function (TiersModeEnum) {
        TiersModeEnum[TiersModeEnum["GRADUATED"] = 'GRADUATED'] = "GRADUATED";
        TiersModeEnum[TiersModeEnum["VOLUME"] = 'VOLUME'] = "VOLUME";
    })(TiersModeEnum = BillingSubscriptionItemModel.TiersModeEnum || (BillingSubscriptionItemModel.TiersModeEnum = {}));
    let UsageTypeEnum;
    (function (UsageTypeEnum) {
        UsageTypeEnum[UsageTypeEnum["LICENSED"] = 'LICENSED'] = "LICENSED";
        UsageTypeEnum[UsageTypeEnum["METERED"] = 'METERED'] = "METERED";
    })(UsageTypeEnum = BillingSubscriptionItemModel.UsageTypeEnum || (BillingSubscriptionItemModel.UsageTypeEnum = {}));
})(BillingSubscriptionItemModel || (BillingSubscriptionItemModel = {}));
