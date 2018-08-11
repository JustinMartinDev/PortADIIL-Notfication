const functions = require('firebase-functions');

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://adiil-app.firebaseio.com"
});

db = admin.database();
exports.sendNotification = functions.database.ref("notificationRequests/{pushId}").onWrite(event => {

    if (!event.data.exists()) {
        return;
    }

    var request = event.data.val();

    if(request.iid) {
        var payload = {
            data: {
                title: request.title,
                body: request.body,
                cible: request.cible,
                iid: request.iid
            }
        };
    }
    else if(request.eid){
        var payload = {
            data: {
                title: request.title,
                body: request.body,
                cible: request.cible,
                eid: request.eid
            }
        };
    }
    else {
        var payload = {
            data: {
                title: request.title,
                body: request.body,
                cible: request.cible
            }
        };
    }


    admin.messaging().sendToTopic(request.topic, payload)
        .then(function (value) {
            db.ref("notificationRequests/"+request.nid).remove();
            console.log("success sent message: ", request.nid);
        })
        .catch(function (reason) {
            console.log("error sending message ", reason);
            return;
        })
});

exports.deleteUserByUID = functions.database.ref("users/{pushId}").onWrite(event => {
    if(!event.data.exists()){
        return;
    }

    var request = event.data.val();
    if(request.toDelete){
        admin.auth().deleteUser(request.uid);
        functions.database.ref("users/"+request.uid).remove();
}
})