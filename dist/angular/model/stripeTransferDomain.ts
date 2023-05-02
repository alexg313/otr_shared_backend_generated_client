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
import { StripeTransferReversalDomain } from './stripeTransferReversalDomain';
import { TimestampRes } from './timestampRes';


export interface StripeTransferDomain { 
    amountReversed?: number;
    currencyCode?: string;
    isFullyReversed?: boolean;
    lastVerifiedDateUtc?: TimestampRes;
    reversalCount?: number;
    stripeChargeId?: string;
    stripeDestinationAccountId?: string;
    stripePaymentId?: string;
    stripePlatformAccountId?: string;
    stripeTransferGroupId?: string;
    stripeTransferId?: string;
    transferAmount?: number;
    transferDateUtc?: TimestampRes;
    transferReversals?: Array<StripeTransferReversalDomain>;
}

