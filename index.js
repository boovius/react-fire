import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './app';

const firebaseConfig = {
  apiKey: "AIzaSyD_killvKpFzOyxvWVZWTCGmzhj1kDNmWM",
  authDomain: "react-fire-c15e8.firebaseapp.com",
  databaseURL: "https://react-fire-c15e8.firebaseio.com",
  storageBucket: "react-fire-c15e8.appspot.com",
  messagingSenderId: "1071356880949"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const messages = db.ref('messages');

const provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().signInWithPopup(provider).then((result) => {
  const u = result.user;
  const user = {
    uid: u.uid,
    name: u.displayName,
    email: u.email
  };
  console.log(user);

  messages.on('value', ( snapshot ) => {
    let messageData;
    if (snapshot.val() !== null) {
      console.log(snapshot.val());
      messageData = Object.keys(snapshot.val()).map(k => snapshot.val()[k]);
    } else {
      messageData = [];
    }

    ReactDOM.render(
      <App user={user} messages={messageData}/>,
      document.getElementById('container')
    );
  });

}).catch((error) => {
  console.log(error);
});

if (module.hot) {
  module.hot.accept();
}
