import React, { Component } from 'react';
import { connect } from 'react-redux';
import { messages } from './firebase.config';

export class DatabaseIntercepter extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const oldMessages = this.props.messages;
    const newMessages = nextProps.messages;

    if (needToUpdateDB(oldMessages, newMessages)) {
      const lastIndex = nextProps.messages.length - 1;
      const newMessage = nextProps.messages[lastIndex];
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

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(DatabaseIntercepter);
