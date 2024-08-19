/* tslint:disable */
/* eslint-disable */
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
import { exists } from '../runtime';
import { AddressDomainFromJSON, AddressDomainToJSON, UserAssetModelFromJSON, UserAssetModelToJSON, } from './';
export function DriverLicenseModelFromJSON(json) {
    return DriverLicenseModelFromJSONTyped(json, false);
}
export function DriverLicenseModelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': !exists(json, 'address') ? undefined : AddressDomainFromJSON(json['address']),
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'dob': !exists(json, 'dob') ? undefined : (new Date(json['dob'])),
        'documentDiscriminatorId': !exists(json, 'documentDiscriminatorId') ? undefined : json['documentDiscriminatorId'],
        'driverLicenseBackAsset': !exists(json, 'driverLicenseBackAsset') ? undefined : UserAssetModelFromJSON(json['driverLicenseBackAsset']),
        'driverLicenseFrontAsset': !exists(json, 'driverLicenseFrontAsset') ? undefined : UserAssetModelFromJSON(json['driverLicenseFrontAsset']),
        'driverLicenseId': !exists(json, 'driverLicenseId') ? undefined : json['driverLicenseId'],
        'driverLicenseNumber': !exists(json, 'driverLicenseNumber') ? undefined : json['driverLicenseNumber'],
        'expirationDate': !exists(json, 'expirationDate') ? undefined : (new Date(json['expirationDate'])),
        'eyeColor': !exists(json, 'eyeColor') ? undefined : json['eyeColor'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'isOrganDonor': !exists(json, 'isOrganDonor') ? undefined : json['isOrganDonor'],
        'issueDate': !exists(json, 'issueDate') ? undefined : (new Date(json['issueDate'])),
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'licenseClass': !exists(json, 'licenseClass') ? undefined : json['licenseClass'],
        'licenseClassEndorsements': !exists(json, 'licenseClassEndorsements') ? undefined : json['licenseClassEndorsements'],
        'licenseRestrictions': !exists(json, 'licenseRestrictions') ? undefined : json['licenseRestrictions'],
        'sex': !exists(json, 'sex') ? undefined : json['sex'],
        'stateName': !exists(json, 'stateName') ? undefined : json['stateName'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'weight': !exists(json, 'weight') ? undefined : json['weight'],
    };
}
export function DriverLicenseModelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': AddressDomainToJSON(value.address),
        'deleted': value.deleted,
        'dob': value.dob === undefined ? undefined : (value.dob.toISOString()),
        'documentDiscriminatorId': value.documentDiscriminatorId,
        'driverLicenseBackAsset': UserAssetModelToJSON(value.driverLicenseBackAsset),
        'driverLicenseFrontAsset': UserAssetModelToJSON(value.driverLicenseFrontAsset),
        'driverLicenseId': value.driverLicenseId,
        'driverLicenseNumber': value.driverLicenseNumber,
        'expirationDate': value.expirationDate === undefined ? undefined : (value.expirationDate.toISOString()),
        'eyeColor': value.eyeColor,
        'firstName': value.firstName,
        'height': value.height,
        'isOrganDonor': value.isOrganDonor,
        'issueDate': value.issueDate === undefined ? undefined : (value.issueDate.toISOString()),
        'lastName': value.lastName,
        'licenseClass': value.licenseClass,
        'licenseClassEndorsements': value.licenseClassEndorsements,
        'licenseRestrictions': value.licenseRestrictions,
        'sex': value.sex,
        'stateName': value.stateName,
        'userId': value.userId,
        'weight': value.weight,
    };
}
