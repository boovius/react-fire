import React, { Component, PropTypes } from 'react';
import { messagesRef } from './firebase.config';

export default class DatabaseIntercepter extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const oldMessages = this.context.store.getState().messages;
    const newMessages = nextContext.store.getState().messages;
    console.log('old messages', oldMessages);
    console.log('new messages', newMessages);

    if (needToUpdateDB(oldMessages, newMessages)) {
      const lastIndex = newMessages.messages.length - 1;
      const newMessage = newMessages.messages[lastIndex];
      console.log(newMessage);
      return true;
    } else {
      return false
    }
  }

  render() {
    return this.props.children
  }
}

const needToUpdateDB = (oldMessages, newMessages) => {
  return oldMessages !== newMessages &&
    (oldMessages.length !== 0 || newMessages.length === 1)
}

DatabaseIntercepter.childContextTypes = {
  store: PropTypes.shape
}
