# PortADIIL-Notification

This projetc, is a part of an Android application (portadiil). PortADIIL-Notification contain some firebase's cloud functions. 
These one allow the sending of notification by using the firebase messaging

System : 

A device send data in the firebase realm time database. These data contain : 
- The title of notification
- The text of notification 
- The topic

At this moment this is the cloud function "sendNotification" will be automaticly activate. This one will get the data added to the database,
and send to all devices registered in the topic the notification.

## Getting Started

You can not use my project in this form. Firstly you need to had your serviceAccountKey.json :
https://console.firebase.google.com/u/0/project/[your-project-name]/settings/serviceaccounts/adminsdk

You need to send your notification under "notificationRequests" key

I use the *firebase-functions* and *firebase-admin* librairies

### Prerequisites

- firebase project

## Based on

* [Youtube Video](https://www.youtube.com/watch?v=NIGUpxJloj8) - Tutoriel part 1 

## Authors

* **Justin Martin** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
