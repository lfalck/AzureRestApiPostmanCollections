# Azure REST API Postman Collections
Postman collections to simplify interaction with the Azure REST APIs.

If you need multiple environments you can create environment variables with the same names as the collection variables and they will be overridden. If you need multiple e.g. queues, you can copy a folder and change the variables in the pre request script.

Scripts and variables are found by right clicking and selecting edit on a collection or folder.

## Azure Service Bus Messaging API

Send and receive messages using the [Service Bus Messaging API](https://docs.microsoft.com/en-us/rest/api/servicebus/service-bus-runtime-rest)

To get started, edit the collection variables **namespaceUri**, **sasKeyName** and **sasKey**. Also set the variables **queueName**, **topicName** and **subscriptionName** in the pre request script for the folders Queue and Subscription. 

[Full documentation here](https://documenter.getpostman.com/view/856851/collection/7TKhsqr)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7126fabe94138fac5f17)

## Azure Storage API

Send and receive messages using the [Queue Service API](https://docs.microsoft.com/en-us/rest/api/storageservices/operations-on-messages)

To get started, edit the collection variables **storageAccountName** and **storageSasKey**. Also set the variable **queueName** in the pre request script for the folder Queue. 

[Full documentation here](https://documenter.getpostman.com/view/856851/collection/7TKhszb)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/9f2b1af9fe8200b46c04)