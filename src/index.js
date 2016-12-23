import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import DatabaseIntercepter from './database/databaseIntercepter';
import db, { messagesRef } from './database/firebase.config';
import store from './store';
import { c } from './constants';

console.log(store.getState());

window.db = db;

messagesRef.on('value', ( snapshot ) => {
  // if snapshot.val() === null do something here

  console.log('hello there');
  store.dispatch({
    type: c.RECEIVE_MESSAGES_DATA,
    data: snapshot.val()
  });

  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <DatabaseIntercepter>
      <App />
    </DatabaseIntercepter>
  </Provider>,
  document.getElementById('container')
);

if (module.hot) {
  module.hot.accept();
}



