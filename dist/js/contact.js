let firebaseConfig = {
    apiKey: "AIzaSyAHQVNcB3dMtQ4B9M-WcTundSA4ogkAbnU",
    authDomain: "homework5-8e7a6.firebaseapp.com",
    projectId: "homework5-8e7a6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

let subform = document.querySelector('.reset')