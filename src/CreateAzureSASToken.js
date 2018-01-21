/**
 * Create a Azure Shared Access Signature (SAS) token valid for one minute
 * Based on https://docs.microsoft.com/en-us/rest/api/eventhub/generate-sas-token but modified to use crypto-js for compatibility with Postman
 * @param resourceUri - The full uri of the resource, e.g. https://<yournamespace>.servicebus.windows.net
 * @param sasKeyName - The name of the Shared Access Signature key
 * @param sasKey - The Shared Access Signature key
 * @returns- A Shared Access Signature token
 * {@link https://github.com/lfalck/AzureRestApiPostmanCollections GitHub}
 * 
 */
function createSharedAccessToken(resourceUri, sasKeyName, sasKey) {
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