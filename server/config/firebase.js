// firebase requirements
let firebase = require('firebase');
let admin = require('firebase-admin');
let serviceAccount = require('./firebase.json');

// initialize firebase admin for database access
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://comp308-w2017-lesson10a.firebaseio.com"
})

// initialize firebase app
let config = {
    apiKey: "AIzaSyDinhO2hFYZ_t3J_I2b3k11ejl8FOWZTUs",
    authDomain: "comp308-w2017-lesson10a.firebaseapp.com",
    databaseURL: "https://comp308-w2017-lesson10a.firebaseio.com",
    storageBucket: "comp308-w2017-lesson10a.appspot.com",
    messagingSenderId: "435798487499"
  };
  firebase.initializeApp(config);

let firebaseDB = admin.database();

module.exports.games = firebaseDB.ref("games");

module.exports.admin = admin;

module.exports.auth = firebase.auth();
