/**
 * Create a Shared Access Signature (SAS) token query string valid for one minute for use with the Azure Storage REST API
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

    //Persmissions: Read, Write, Delete, List, Add, Create, Update, Process
    const signedPermission = "rwdlacup";
    const signedServices = "bfqt"; // Blob, File, Queue, Table
    const signedResourceTypes = "sco"; // Service, Container, Object

    //Dates need to be in yyyy-dd-MMTHH:mm:ssZ format
    const now = new Date();
    const minuteInMilliSeconds = 60000;
    const signedStart = new Date(now.getTime() - minuteInMilliSeconds)
        .toISOString()
        .slice(0, 19) + "Z"; //Remove milliseconds
    const signedExpiry = new Date(now.getTime() + minuteInMilliSeconds)
        .toISOString()
        .slice(0, 19) + "Z";

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

    // The full SAS token query string is added to the sv parameter to
    // reduce the length of the request URI in Postman 
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