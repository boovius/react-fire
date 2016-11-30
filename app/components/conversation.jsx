import React, { Component } from 'react';
import Message from './message';

export default class Conversation extends Component {
  constructor() {
    super();
    this._renderMessages = this._renderMessages.bind(this);
  }

  _renderMessages() {
    return this.props.messages.map((m,i) => {
      let authored;
      debugger;
      if (m.author.uid === this.props.user.uid) {
        authored = true;
      } else {
        authored = false;
      }
      return(
        <Message
          key={i}
          authored={authored}
          content={m.content}
          author={m.author}
          />
      )
    });
  }

  render() {
    return(
      <div className='conversation'>
        {this._renderMessages()}
      </div>
    )
  }
}

