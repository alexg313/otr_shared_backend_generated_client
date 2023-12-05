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
export interface ListPhoneCallsModel {
    "agentId"?: number;
    "agentName"?: string;
    "callDirection"?: ListPhoneCallsModel.CallDirectionEnum;
    "callDurationInSeconds"?: number;
    "callQueueName"?: string;
    "callStartDateUtc"?: string;
    "callStatus"?: ListPhoneCallsModel.CallStatusEnum;
    "customerName"?: string;
    "holdDurationInSeconds"?: number;
    "ivrDurationInSeconds"?: number;
    "ivrName"?: string;
    "talkDurationInSeconds"?: number;
    "teamName"?: string;
}
export declare namespace ListPhoneCallsModel {
    enum CallDirectionEnum {
        INCOMING,
        OUTGOING
    }
    enum CallStatusEnum {
        ABANDONED,
        BLOCKED,
        BUSY,
        COMPLETED,
        CONNECTING,
        CONNECTIONFAILED,
        DEFAULT,
        DISCONNECTED,
        ENQUEUED,
        INPROGRESS,
        MISSEDCALL,
        ONHOLD,
        RECENTLYCOMPLETED,
        RESTRICTED,
        VOICEMAIL,
        VOICEMAILRECORDINGINPROGRESS
    }
}
