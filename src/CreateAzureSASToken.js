/**
 * Create a Shared Access Signature (SAS) token valid for one minute for use with the Azure Service Bus or Event Hubs REST APIs
 * Based on https://docs.microsoft.com/en-us/rest/api/eventhub/generate-sas-token but modified to use crypto-js for compatibility with Postman
 * @param resourceUri - The full uri of the resource, e.g. https://<yournamespace>.servicebus.windows.net
 * @param sasKeyName - The name of the Shared Access Signature key
 * @param sasKey - The Shared Access Signature key
 * @returns- A Shared Access Signature token
 * {@link https://github.com/lfalck/AzureRestApiPostmanCollections GitHub}
 * 
 */
function createSASToken(resourceUri, sasKeyName, sasKey) {
    if (!resourceUri || !sasKeyName || !sasKey) {
        throw "Missing required parameter";
    }
    const encoded = encodeURIComponent(resourceUri);
    const now = new Date();
    const minute = 60;
    const ttl = Math.round(now.getTime() / 1000) + minute;
    const signature = encoded + '\n' + ttl;
    const signatureUTF8 = signature.toString(CryptoJS.enc.Utf8);
    const hash = CryptoJS.HmacSHA256(signatureUTF8, sasKey).toString(CryptoJS.enc.Base64);
    return 'SharedAccessSignature sr=' + encoded + '&sig=' +
        encodeURIComponent(hash) + '&se=' + ttl + '&skn=' + sasKeyName;
}

/**
 * Create a Shared Access Signature (SAS) token query string valid for one minute for use with Azure Storage REST API
 * @param accountName - The storage account name
 * @param sasKey - The Shared Access Signature key
 * @returns- A Shared Access Signature token query string
 * {@link https://github.com/lfalck/AzureRestApiPostmanCollections GitHub}
 * 
 */
function createStorageSASTokenQueryString(accountName, sasKey) {
    if (!accountName || !sasKey) {
        throw "Missing required parameter";
    }

    const now = new Date();
    const minuteInMilliSeconds = 60000;
    const signedPermission = "rwdlacup"; //Read, Write, Delete, List, Add, Create, Update, Process
    const signedServices = "bfqt"; // Blob, File, Queue, Table
    const signedResourceTypes = "sco"; // Service, Container, Object
    const signedStart = new Date(now.getTime() - minuteInMilliSeconds).toISOString().slice(0, 19) + "Z";
    const signedExpiry = new Date(now.getTime() + minuteInMilliSeconds).toISOString().slice(0, 19) + "Z";
    const signedIP = "";
    const signedProtocol = "https";
    const signedVersion = "2017-04-17";

    const inputvalue =
        `${accountName}\n` +
        `${signedPermission}\n` +
        `${signedServices}\n` +
        `${signedResourceTypes}\n` +
        `${signedStart}\n` +
        `${signedExpiry}\n` +
        `${signedIP}\n` +
        `${signedProtocol}\n` +
        `${signedVersion}\n`;

    const key = CryptoJS.enc.Base64.parse(sasKey);
    let signature = CryptoJS.HmacSHA256(inputvalue, key);
    signature = signature.toString(CryptoJS.enc.Base64);
    signature = encodeURIComponent(signature);

    const uri =
        /*?sv=*/`${signedVersion}&` +
        `ss=${signedServices}&` +
        `srt=${signedResourceTypes}&` +
        `sp=${signedPermission}&` +
        `se=${signedExpiry}&` +
        `st=${signedStart}&` +
        `spr=${signedProtocol}&` +
        `sig=${signature}`;

    return uri;
}