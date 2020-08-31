importScripts("https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js"
);

firebase.initializeApp({
    apiKey: "AIzaSyBRH103OKDusQuQKNU2Pk8XTE2X1b0r03M",
    authDomain: "kai-push-test.firebaseapp.com",
    databaseURL: "https://kai-push-test.firebaseio.com",
    projectId: "kai-push-test",
    storageBucket: "kai-push-test.appspot.com",
    messagingSenderId: "623720982260",
    appId: "1:623720982260:web:168b794d69c53c1182e0a1",
    measurementId: "G-DS16SJNBMT",
});

const initMessaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true,
        })
        .then((windowClients) => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("my notification title");
        });
    return promiseChain;
});
self.addEventListener("notificationclick", function (event) {
    console.log(event);
});
