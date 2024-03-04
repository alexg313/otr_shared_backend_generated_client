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
exports.ChargeFeeToLawfirmRequest = void 0;
var ChargeFeeToLawfirmRequest;
(function (ChargeFeeToLawfirmRequest) {
    var TransactionMethodEnum;
    (function (TransactionMethodEnum) {
        TransactionMethodEnum[TransactionMethodEnum["CASH"] = 'CASH'] = "CASH";
        TransactionMethodEnum[TransactionMethodEnum["CHECK"] = 'CHECK'] = "CHECK";
        TransactionMethodEnum[TransactionMethodEnum["DESTINATIONCHARGETRANSFER"] = 'DESTINATION_CHARGE_TRANSFER'] = "DESTINATIONCHARGETRANSFER";
        TransactionMethodEnum[TransactionMethodEnum["LOBCHECK"] = 'LOB_CHECK'] = "LOBCHECK";
        TransactionMethodEnum[TransactionMethodEnum["PAYPAL"] = 'PAYPAL'] = "PAYPAL";
        TransactionMethodEnum[TransactionMethodEnum["STRIPEAPPLICATIONFEE"] = 'STRIPE_APPLICATION_FEE'] = "STRIPEAPPLICATIONFEE";
        TransactionMethodEnum[TransactionMethodEnum["STRIPECHARGE"] = 'STRIPE_CHARGE'] = "STRIPECHARGE";
        TransactionMethodEnum[TransactionMethodEnum["STRIPECONNECTDEBIT"] = 'STRIPE_CONNECT_DEBIT'] = "STRIPECONNECTDEBIT";
        TransactionMethodEnum[TransactionMethodEnum["STRIPETRANSFER"] = 'STRIPE_TRANSFER'] = "STRIPETRANSFER";
        TransactionMethodEnum[TransactionMethodEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
        TransactionMethodEnum[TransactionMethodEnum["VENMO"] = 'VENMO'] = "VENMO";
        TransactionMethodEnum[TransactionMethodEnum["WIRETRANSFER"] = 'WIRE_TRANSFER'] = "WIRETRANSFER";
        TransactionMethodEnum[TransactionMethodEnum["ZELLE"] = 'ZELLE'] = "ZELLE";
    })(TransactionMethodEnum = ChargeFeeToLawfirmRequest.TransactionMethodEnum || (ChargeFeeToLawfirmRequest.TransactionMethodEnum = {}));
})(ChargeFeeToLawfirmRequest = exports.ChargeFeeToLawfirmRequest || (exports.ChargeFeeToLawfirmRequest = {}));
