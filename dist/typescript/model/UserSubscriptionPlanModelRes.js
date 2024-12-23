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
export var UserSubscriptionPlanModelRes;
(function (UserSubscriptionPlanModelRes) {
    let ProductNameEnum;
    (function (ProductNameEnum) {
        ProductNameEnum[ProductNameEnum["CONVOYPRO"] = 'CONVOY_PRO'] = "CONVOYPRO";
        ProductNameEnum[ProductNameEnum["OTRFASTLANE"] = 'OTR_FASTLANE'] = "OTRFASTLANE";
        ProductNameEnum[ProductNameEnum["OTRFASTLANETEEN"] = 'OTR_FASTLANE_TEEN'] = "OTRFASTLANETEEN";
    })(ProductNameEnum = UserSubscriptionPlanModelRes.ProductNameEnum || (UserSubscriptionPlanModelRes.ProductNameEnum = {}));
    let SubscriptionStatusEnum;
    (function (SubscriptionStatusEnum) {
        SubscriptionStatusEnum[SubscriptionStatusEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        SubscriptionStatusEnum[SubscriptionStatusEnum["CANCELED"] = 'CANCELED'] = "CANCELED";
        SubscriptionStatusEnum[SubscriptionStatusEnum["INCOMPLETE"] = 'INCOMPLETE'] = "INCOMPLETE";
        SubscriptionStatusEnum[SubscriptionStatusEnum["INCOMPLETEEXPIRED"] = 'INCOMPLETE_EXPIRED'] = "INCOMPLETEEXPIRED";
        SubscriptionStatusEnum[SubscriptionStatusEnum["INTRIALPERIOD"] = 'IN_TRIAL_PERIOD'] = "INTRIALPERIOD";
        SubscriptionStatusEnum[SubscriptionStatusEnum["PASTDUE"] = 'PAST_DUE'] = "PASTDUE";
        SubscriptionStatusEnum[SubscriptionStatusEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        SubscriptionStatusEnum[SubscriptionStatusEnum["UNPAID"] = 'UNPAID'] = "UNPAID";
    })(SubscriptionStatusEnum = UserSubscriptionPlanModelRes.SubscriptionStatusEnum || (UserSubscriptionPlanModelRes.SubscriptionStatusEnum = {}));
})(UserSubscriptionPlanModelRes || (UserSubscriptionPlanModelRes = {}));
