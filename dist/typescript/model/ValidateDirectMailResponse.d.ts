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
export interface ValidateDirectMailResponse {
    "otrError"?: ValidateDirectMailResponse.OtrErrorEnum;
}
export declare namespace ValidateDirectMailResponse {
    enum OtrErrorEnum {
        ACCESSDENIED,
        ACCOUNTDISABLED,
        ARAGNOTCAPTURED,
        AUTHENTICATIONCREDENTIALSNOTFOUND,
        AUTHENTICATIONFAILED,
        AUTHENTICATIONSERVICEFAILURE,
        AUTHORIZATIONSERVICEFAILURE,
        AUTHORIZEDCHARGESONCASE,
        BADCREDENTIALS,
        CANCELLATIONWINDOWCLOSED,
        CASEALREADYEXISTS,
        CASEALREADYPAID,
        CASEALREADYRESOLVED,
        CASEIDCOLLISION,
        CASEISCANCELLED,
        CASEMATCHFAILED,
        CASENOTACCEPTEDBYLAWFIRM,
        CASENOTCONFIRMED,
        CASEPAYMENTASSOCIATEDWITHMULTIPLELAWFIRMFEES,
        CASEPAYMENTASSOCIATEDWITHMULTIPLELAWFIRMPAYOUTS,
        CASEPAYMENTHASSTRIPECHARGE,
        CASESTATUSNOTALLOWED,
        CASEUSERMISMATCH,
        CCWILLEXPIREBEFOREPAYMENTPLAN,
        CHARGEALREADYCAPTURED,
        CHARGEEXPIRED,
        CHARGENOTALLOWED,
        CHARGENOTCAPTURED,
        CHARGENOLONGERAUTHORIZED,
        CHARGEREFUNDED,
        CITATIONALREADYDELETED,
        CITATIONDOESNOTMATCHUSER,
        CITATIONNOTOWNEDBYUSER,
        CODEALREADYEXISTSFORDRIVER,
        CODEBENEFITTYPENOTSUPPORTED,
        CODEDOESNOTEXIST,
        CODEEXCEEDEDMAXUSAGE,
        CODEHASEXPIRED,
        CODEISALREADYTAKEN,
        CODEISNOTACTIVE,
        CODENOTALLOWEDDUETOCREDIT,
        CODENOTSUPPORTEDBYLAWFIRM,
        CODENOTYETAPPROVED,
        CODEREFERRERBENEFITSNOTAUTHORIZED,
        COMMENTALREADYEXISTS,
        COURTMISSINGADDRESS,
        COURTNOTINSUPPORTEDREGION,
        COURTNOTSUPPORTEDBYLAWFIRM,
        CURRENTPASSWORDINCORRECT,
        DATABASERECORDLOCKED,
        DATAACCESSERROR,
        DIRECTMAILRECONCILATIONIDNOTEXIST,
        DIRECTMAILSENTALREADY,
        DIRECTMAILTEMPLATEDUPLICATEDETECTED,
        DIRECTMAILTEMPLATENOTEXIST,
        DRIPDEPENDENCYFAILURE,
        DUPLICATECOURT,
        DUPLICATEEMAIL,
        DUPLICATEENTRY,
        DUPLICATELANDINGPAGEURL,
        DUPLICATEMESSAGEATTEMPT,
        EMAILADDRESSALREADYSUBSCRIBED,
        EMAILADDRESSBLACKLISTED,
        EMAILALREADYINUSE,
        EMAILALREADYSENT,
        EMAILNOTCONFIRMED,
        EMAILNOTSENT,
        EXPECTEDNULLINPUT,
        EXPECTEDROLEMISSING,
        FAILEDTOREVERSETRANSFER,
        FRESHDESKTICKETNOTFOUND,
        FRESHDESKUNEXPECTEDNUMBEROFRESULTS,
        IMAGENOTCOMPRESSEDPROPERLY,
        INACTIVESTOREFRONT,
        INCORRECTDIMENSIONS,
        INCORRECTENCODING,
        INELIGIBLESTATUSFORTRANSFER,
        INVALIDADDRESSID,
        INVALIDAMOUNT,
        INVALIDAPITOKEN,
        INVALIDAPIUSAGE,
        INVALIDCASEACTIONID,
        INVALIDCASEID,
        INVALIDCASEPAYMENTID,
        INVALIDCITATIONID,
        INVALIDCODE,
        INVALIDCOURTID,
        INVALIDDATE,
        INVALIDDISPUTEID,
        INVALIDDOCUMENTID,
        INVALIDEMAILADDRESS,
        INVALIDEMAILTEMPLATE,
        INVALIDENDDATE,
        INVALIDENUMVALUE,
        INVALIDFEEPERCENTAGE,
        INVALIDFIRSTNAME,
        INVALIDINTERNETADDRESS,
        INVALIDINVITATIONTOKEN,
        INVALIDINVOICELINEITEMID,
        INVALIDLASTNAME,
        INVALIDLAWFIRM,
        INVALIDLAWYERID,
        INVALIDLINEITEM,
        INVALIDMESSAGEID,
        INVALIDPAGINATIONTOKEN,
        INVALIDPARAMETERVALUE,
        INVALIDPASSWORD,
        INVALIDPASSWORDRESETTOKEN,
        INVALIDPUSHTOKEN,
        INVALIDRECIPIENTLIST,
        INVALIDREQUEST,
        INVALIDREQUESTBODY,
        INVALIDRESOLUTIONSTATUS,
        INVALIDREVIEWCOPY,
        INVALIDROLETYPE,
        INVALIDSTATE,
        INVALIDSTRIPEACCOUNT,
        INVALIDSTRIPECHARGEID,
        INVALIDSTRIPEREQUEST,
        INVALIDSTRIPETRANSACTIONID,
        INVALIDSUBSCRIPTIONTYPE,
        INVALIDTASKID,
        INVALIDTICKETID,
        INVALIDTICKETREVIEWID,
        INVALIDTRAFFICVIOLATION,
        INVALIDUSERID,
        INVALIDUSERNAME,
        INVITATIONALREADYSENT,
        INVITATIONALREADYVERIFIED,
        INVITATIONCANCELLED,
        INVITATIONHASEXPIRED,
        INVITATIONRECIPIENTNOACCOUNT,
        IOERROR,
        LAMBDAURLINVOKEFAILURE,
        LAWFIRMCASECAPACITYREACHED,
        LAWFIRMCASENOTACTIVE,
        LAWFIRMDOESNOTHANDLEACCIDENTS,
        LAWFIRMDOESNOTHANDLEPASTDUE,
        LAWFIRMFEEHASSTRIPEREFERENCE,
        LAWFIRMMISSINGACCOUNTFEE,
        LAWFIRMNOTELIGIBLE,
        LAWFIRMONVACATIONMODE,
        LAWFIRMPAYOUTHASSTRIPEREFERENCE,
        LAWFIRMNEEDSADDRESS,
        LINEITEMMISSINGRECIPIENT,
        LINKSNOTALLOWED,
        LOBADDRESSCREATIONFAILURE,
        LOBADDRESSVALIDATIONFAILURE,
        LOBCANCELCHECKDELIVERYFAILURE,
        LOBCANCELMAILDELIVERYFAILURE,
        LOBCHECKMAILDELIVERYFAILURE,
        LOBPOSTCARDCREATIONFAILURE,
        MEDIATYPEINCORRECT,
        MERGEROLLBACKNOTALLOWED,
        MISSINGACTIONTYPE,
        MISSINGADJUSTEDFINEAMOUNT,
        MISSINGCASE,
        MISSINGCITATIONID,
        MISSINGCOURTID,
        MISSINGEMAILADDRESS,
        MISSINGFEEDBACKCONTENT,
        MISSINGFIRSTNAME,
        MISSINGIMAGEURL,
        MISSINGLASTNAME,
        MISSINGLAWFIRMID,
        MISSINGLAWYERID,
        MISSINGMEDIADATA,
        MISSINGNUMVIOLATIONS,
        MISSINGPARAMETER,
        MISSINGPASSWORD,
        MISSINGRECIPIENTEMAIL,
        MISSINGREQUESTBODY,
        MISSINGRESOLUTIONSTATUS,
        MISSINGSENDEREMAIL,
        MISSINGSENDERPHONENUMBER,
        MISSINGSEOURL,
        MISSINGSTRIPETOKEN,
        MISSINGSUBSCRIBER,
        MISSINGTICKETISSUEDATE,
        MISSINGUSERNAME,
        MULTIPLELAWFIRMFEES,
        MULTIPLELAWFIRMPAYOUTS,
        MULTIPLEREFUNDSONCHARGE,
        MULTIPLESTRIPECUSTOMERACCOUNTSFOUND,
        MULTIPLESTRIPETRANSFERSFOUND,
        MUSTBEPOSITIVE,
        NOTIFICATIONERROR,
        NOTIFICATIONINCORRECTROLE,
        NOTIFICATIONTOOLONG,
        NOTIFICATIONTOSELF,
        NOTAUTHENTICATED,
        NOACCOUNTWITHEMAIL,
        NOCASEOWNER,
        NOCHARGESONCASE,
        NOINSURANCE,
        NOLAWFIRMAVAILABLE,
        NOSTRIPEACCOUNT,
        OWNERCASEMESSAGEMISMATCH,
        PAYMENTPLANSDENIED,
        PAYMENTPLANLEGALFEEHASCENTS,
        PAYMENTPLANNOTSUPPORTEDWITHPREPAIDCARD,
        PDFPASSWORDPROTECTED,
        PLAIDERROR,
        QBOBILLCREATIONFAILURE,
        QBOVENDORCREATIONFAILURE,
        REFERRALSNOTALLOWEDTOBEREDEEMED,
        REFUNDNOTALLOWED,
        REFUNDNOTELIGIBLE,
        REFUNDNOTELIGIBLECRIMINAL,
        REQUESTNOTWELLFORMATTED,
        RESETTOKENEXPIRED,
        RESOURCENOTFOUND,
        REVIEWALREADYEXISTS,
        ROLENOTSUPPORTED,
        S3CLIENTFAILED,
        S3SERVERFAILED,
        SAMEUSERCANNOTBEMERGED,
        SEOURLALREADYEXISTS,
        SIMILARCOURT,
        SOCIALPROFILEMISSINGEMAIL,
        SSOSERVICEPROVIDERIDNOTFOUND,
        STATENOTSUPPORTED,
        STRIPEAPICONNECTIONEXCEPTION,
        STRIPEAPIEXCEPTION,
        STRIPEAPPLICATIONFEEALREADYREFUNDED,
        STRIPEAPPLICATIONFEENOTFOUND,
        STRIPEAUTHENTICATIONEXCEPTION,
        STRIPECARDEXCEPTION,
        STRIPECONNECTACCOUNTNOTFOUND,
        STRIPEERROR,
        STRIPEFAILEDCHARGE,
        STRIPEOAUTHCONNECTFAILED,
        STRIPEOBJECTMISSINGMETADATA,
        STRIPERESOURCENOTFOUND,
        STRIPETRANSFEREXISTS,
        STRIPETRANSFERNOTFOUND,
        SUBSCRIPTIONNOTOWNEDBYUSER,
        TEMPLATENOTSUPPORTED,
        TRANSFERALREADYREVERSED,
        TRANSFERIDDOESNTMATCHCHARGE,
        TRANSFERNOTSAFE,
        TRANSFERREVERSALNOTALLOWED,
        TRANSFERTOSAMELAWFIRM,
        UNAUTHORIZED,
        UNEXPECTEDCASESTATUS,
        UNEXPECTEDNULLINPUT,
        UNEXPECTEDNUMBEROFCHARGES,
        UNKNOWN,
        URLENTITYMISMATCH,
        USERALREADYHASSECONDARYACCOUNT,
        USERALREADYLOGGEDIN,
        USERALREADYMERGED,
        USERCANTUSEOWNCODE,
        USERDOESNOTMATCHCITATION,
        USERISNOTTHEOWNER,
        USERNOTFOUND,
        VERIFICATIONLINKNOTVALID
    }
}
