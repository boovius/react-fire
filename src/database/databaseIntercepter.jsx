import React, { Component, PropTypes } from 'react';
import { messagesRef } from './firebase.config';

export default class DatabaseIntercepter extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {

    console.log('context', this.context)
    console.log('nexContext', nextContext)
    if (this.context != nextContext) {
      console.log('update');
      return true;
    } else {
      console.log('do not update');
      return false
    }
  }

  render() {
    console.log('store', this.context.store)
    return this.props.children
  }
}

const needToUpdateDB = (oldMessages, newMessages) => {
  return oldMessages !== newMessages &&
    (oldMessages.length !== 0 || newMessages.length === 1)
}

DatabaseIntercepter.contextTypes = {
  store: PropTypes.shape.isRequired
}
