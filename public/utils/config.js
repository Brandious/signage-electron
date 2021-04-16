const firebase = require ("firebase");
require("firebase/firestore");

//2. Initialize app with the config vars
const app = firebase.initializeApp({
    apiKey: "AIzaSyB7NDGSsxxzn10mEe5vqNTC7F0bJzod22s",
    authDomain: "dssb-72fa5.firebaseapp.com",
    projectId: "dssb-72fa5",
    storageBucket: "dssb-72fa5.appspot.com",
    messagingSenderId: "873478457836",
    appId: "1:873478457836:web:6225caf80c47889c7fd8c9",
    measurementId: "G-BZJ4Q9LQQ2"
});

// const storage = firebase.storage();
const db = firebase.firestore();

module.exports = db;


