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
import { FreshDeskConversation, FreshDeskRequester, FreshdeskAttachment } from './';
/**
 *
 * @export
 * @interface FreshDeskTicket
 */
export interface FreshDeskTicket {
    /**
     *
     * @type {Array<FreshdeskAttachment>}
     * @memberof FreshDeskTicket
     */
    attachments?: Array<FreshdeskAttachment>;
    /**
     *
     * @type {Array<string>}
     * @memberof FreshDeskTicket
     */
    ccEmails?: Array<string>;
    /**
     *
     * @type {Array<FreshDeskConversation>}
     * @memberof FreshDeskTicket
     */
    conversation?: Array<FreshDeskConversation>;
    /**
     *
     * @type {Date}
     * @memberof FreshDeskTicket
     */
    createdAt?: Date;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof FreshDeskTicket
     */
    customFields?: {
        [key: string]: string;
    };
    /**
     *
     * @type {boolean}
     * @memberof FreshDeskTicket
     */
    deleted?: boolean;
    /**
     *
     * @type {string}
     * @memberof FreshDeskTicket
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof FreshDeskTicket
     */
    descriptionText?: string;
    /**
     *
     * @type {Date}
     * @memberof FreshDeskTicket
     */
    dueBy?: Date;
    /**
     *
     * @type {string}
     * @memberof FreshDeskTicket
     */
    email?: string;
    /**
     *
     * @type {Date}
     * @memberof FreshDeskTicket
     */
    frDueBy?: Date;
    /**
     *
     * @type {boolean}
     * @memberof FreshDeskTicket
     */
    frEscalated?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof FreshDeskTicket
     */
    fwdEmails?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof FreshDeskTicket
     */
    groupId?: number;
    /**
     *
     * @type {number}
     * @memberof FreshDeskTicket
     */
    id?: number;
    /**
     *
     * @type {boolean}
     * @memberof FreshDeskTicket
     */
    isEscalated?: boolean;
    /**
     *
     * @type {string}
     * @memberof FreshDeskTicket
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof FreshDeskTicket
     */
    phone?: string;
    /**
     *
     * @type {number}
     * @memberof FreshDeskTicket
     */
    priority?: number;
    /**
     *
     * @type {string}
     * @memberof FreshDeskTicket
     */
    priorityType?: FreshDeskTicketPriorityTypeEnum;
    /**
     *
     * @type {number}
     * @memberof FreshDeskTicket
     */
    productId?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof FreshDeskTicket
     */
    replyCcEmails?: Array<string>;
    /**
     *
     * @type {FreshDeskRequester}
     * @memberof FreshDeskTicket
     */
    requester?: FreshDeskRequester;
    /**
     *
     * @type {string}
     * @memberof FreshDeskTicket
     */
    requesterAgentName?: string;
    /**
     *
     * @type {number}
     * @memberof FreshDeskTicket
     */
    requesterId?: number;
    /**
     *
     * @type {string}
     * @memberof FreshDeskTicket
     */
    responderAgentName?: string;
    /**
     *
     * @type {number}
     * @memberof FreshDeskTicket
     */
    responderId?: number;
    /**
     *
     * @type {number}
     * @memberof FreshDeskTicket
     */
    source?: number;
    /**
     *
     * @type {boolean}
     * @memberof FreshDeskTicket
     */
    spam?: boolean;
    /**
     *
     * @type {number}
     * @memberof FreshDeskTicket
     */
    status?: number;
    /**
     *
     * @type {string}
     * @memberof FreshDeskTicket
     */
    statusType?: FreshDeskTicketStatusTypeEnum;
    /**
     *
     * @type {string}
     * @memberof FreshDeskTicket
     */
    subject?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof FreshDeskTicket
     */
    tags?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof FreshDeskTicket
     */
    toEmails?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof FreshDeskTicket
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof FreshDeskTicket
     */
    uniqueExternalId?: string;
    /**
     *
     * @type {Date}
     * @memberof FreshDeskTicket
     */
    updatedAt?: Date;
}
export declare function FreshDeskTicketFromJSON(json: any): FreshDeskTicket;
export declare function FreshDeskTicketFromJSONTyped(json: any, ignoreDiscriminator: boolean): FreshDeskTicket;
export declare function FreshDeskTicketToJSON(value?: FreshDeskTicket | null): any;
/**
* @export
* @enum {string}
*/
export declare enum FreshDeskTicketPriorityTypeEnum {
    HIGH = "HIGH",
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    UNKNOWN = "UNKNOWN",
    URGENT = "URGENT"
}
/**
* @export
* @enum {string}
*/
export declare enum FreshDeskTicketStatusTypeEnum {
    CLOSED = "CLOSED",
    OPEN = "OPEN",
    PENDING = "PENDING",
    PENDINGONEWEEK = "PENDING_ONE_WEEK",
    PENDINGTWODAYS = "PENDING_TWO_DAYS",
    QUEUEDFORAUTOMATION = "QUEUED_FOR_AUTOMATION",
    RESOLVED = "RESOLVED",
    UNKNOWN = "UNKNOWN",
    WAITINGONATTORNEY = "WAITING_ON_ATTORNEY",
    WAITINGONCUSTOMER = "WAITING_ON_CUSTOMER",
    WAITINGONOTR = "WAITING_ON_OTR",
    WAITINGONTHIRDPARTY = "WAITING_ON_THIRD_PARTY"
}
