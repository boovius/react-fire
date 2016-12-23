import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD_killvKpFzOyxvWVZWTCGmzhj1kDNmWM",
  authDomain: "react-fire-c15e8.firebaseapp.com",
  databaseURL: "https://react-fire-c15e8.firebaseio.com",
  storageBucket: "react-fire-c15e8.appspot.com",
  messagingSenderId: "1071356880949"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export const messagesRef = db.ref('messages');

export default db;

