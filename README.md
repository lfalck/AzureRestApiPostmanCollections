[![license](https://img.shields.io/github/license/lfalck/AzureRestApiPostmanCollections.svg)]()
# Azure REST API Postman Collections
Postman collections to simplify interaction with the Azure REST APIs, focusing on those relevant for systems integration developers.

If you need multiple environments you can create environment variables with the same names as the collection variables and they will be overridden. If you need multiple e.g. queues, you can copy a request and change the path variables.

Collection variables are found by right clicking and selecting edit on a collection. Path variables are found by clicking "Params" when a request is open.

API documentation by Microsoft copied from https://docs.microsoft.com is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## Azure Service Bus Messaging API

Send and receive messages using the [Service Bus Messaging API](https://docs.microsoft.com/en-us/rest/api/servicebus/service-bus-runtime-rest)

| Variable                   | Type                     | Description                                                                       |
| -------------------------- | ------------------------ | --------------------------------------------------------------------------------- |
| servicebusNamespace        | Collection variable      | The service bus namespace name                                                    |
| sasKeyName                 | Collection variable      | Policy name from Service Bus Namespace > Shared access policies                   |
| sasKey                     | Collection variable      | Key from Service Bus Namespace > Shared access policies                           |
| queueName                  | Path variable            | Queue name from Service Bus Namespace > Queues                                    |
| topicName                  | Path variable            | Topic name from Service Bus Namespace > Topics                                    |
| subscriptionName           | Path variable            | Subscription name from Service Bus Namespace > Topics > Subscriptions             |


## Azure Event Hubs API

Send events using the [Event Hubs API](https://docs.microsoft.com/en-us/rest/api/eventhub/event-hubs-runtime-rest)

| Variable                   | Type                     | Description                                                                       |
| -------------------------- | ------------------------ | --------------------------------------------------------------------------------- |
| servicebusNamespace        | Collection variable      | The event hubs namespace name                                                     |
| sasKeyName                 | Collection variable      | Policy name from Event Hubs Namespace > Shared access policies                    |
| sasKey                     | Collection variable      | Key from Event Hubs Namespace > Shared access policies                            |
| eventHubPath               | Path variable            | Event hub name from Event Hubs Namespace > Event Hubs                             |
| partitionId                | Path variable            | Optional partition id                                                             |

## Azure Storage API

Send and receive messages using the [Queue Service API](https://docs.microsoft.com/en-us/rest/api/storageservices/operations-on-messages)  
Work with the [Blob Service API](https://docs.microsoft.com/en-us/rest/api/storageservices/blob-service-rest-api)

| Variable                   | Type                     | Description                                                                       |
| -------------------------- | ------------------------ | --------------------------------------------------------------------------------- |
| storageAccountName         | Collection variable      | The event hubs namespace name                                                     |
| storageSasTokenQueryString | Collection variable      | Query string from Storage accounts > Shared access signature with "?sv=" removed. |
| storageQueueName           | Path variable            | Queue name from Storage accounts > Queues                                         |
| storageContainerName       | Path variable            | Container name from Storage accounts > Containers                                 |
| storageBlobName            | Path variable            | Blob name from Storage accounts > Containers                                      |


## Azure Event Grid API
Send events to custom Azure Event Grid Topics

| Variable                   | Type                     | Description                                                                       |
| -------------------------- | ------------------------ | --------------------------------------------------------------------------------- |
| sasKey                     | Collection variable      | Key from Event Grid Topics > Access keys                                          |
| topic-endpoint             | Collection variable      | Topic endpoint from Event Grid Topics > Overview > Topic Endpoint                 |
