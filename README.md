[![license](https://img.shields.io/github/license/lfalck/AzureRestApiPostmanCollections.svg)]()
# Azure REST API Postman Collections
Postman collections to simplify interaction with the Azure REST APIs.

If you need multiple environments you can create environment variables with the same names as the collection variables and they will be overridden. If you need multiple e.g. queues, you can copy a folder and change the variables in the pre request script.

Scripts and variables are found by right clicking and selecting edit on a collection or folder.

API documentation by Microsoft copied from https://docs.microsoft.com is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## Azure Service Bus Messaging API

Send and receive messages using the [Service Bus Messaging API](https://docs.microsoft.com/en-us/rest/api/servicebus/service-bus-runtime-rest)

To get started, edit the collection variables **namespaceUri**, **sasKeyName** and **sasKey**. Also set the variables **queueName**, **topicName** and **subscriptionName** in the pre request script for the folders Queue and Subscription. 

[Full documentation here]( https://documenter.getpostman.com/view/856851/collection/RVg3f8kD)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/e76494a7358d49a18a65)

## Azure Event Hubs API

Send events using the [Event Hubs API](https://docs.microsoft.com/en-us/rest/api/eventhub/event-hubs-runtime-rest)

To get started, edit the collection variables **servicebusNamespace**, **sasKeyName** and **sasKey**. Also set the variables **eventHubPath** and **partitionId** (optional) in the pre request script for the folder Event Hub. 

[Full documentation here](https://documenter.getpostman.com/view/856851/collection/RVg3f8k7)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/ee13865ad00b3c55aebc)

## Azure Storage API

Send and receive messages using the [Queue Service API](https://docs.microsoft.com/en-us/rest/api/storageservices/operations-on-messages)    
Work with the [Blob Service API](https://docs.microsoft.com/en-us/rest/api/storageservices/blob-service-rest-api)

To get started, edit the collection variables **storageAccountName** and **storageSasKey**. 

For queues, set the variable **storageQueueName** in the pre request script for the folder Queue.    
For blobs, set the variables **storageContainerName** and **storageBlobName** in the pre request script for the folder Blob. 

[Full documentation here](https://documenter.getpostman.com/view/856851/collection/RVg3f8kE)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/b7c77fb099b35b7f1ed7)
