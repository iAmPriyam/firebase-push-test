import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBRH103OKDusQuQKNU2Pk8XTE2X1b0r03M",
    authDomain: "kai-push-test.firebaseapp.com",
    databaseURL: "https://kai-push-test.firebaseio.com",
    projectId: "kai-push-test",
    storageBucket: "kai-push-test.appspot.com",
    messagingSenderId: "623720982260",
    appId: "1:623720982260:web:168b794d69c53c1182e0a1",
    measurementId: "G-DS16SJNBMT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
