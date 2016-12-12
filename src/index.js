import React from 'react';
import ReactDOM from 'react-dom';
import DatabaseIntercepter from './app/components/databaseIntercepter';
import App from './app';
import { Provider } from 'react-redux';
import { db } from './firebase.config';
import { store } from './store';
import { c } from './constants';

console.log(store.getState());

const messages = db.ref('messages');

messages.on('value', ( snapshot ) => {
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



