import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message';

export class Conversation extends Component {
  _renderMessages() {
    console.log(this.props.messages);
    return this.props.messages.map((m,i) => {
      let authored;
      if (m.sender === this.props.author) {
        authored = true;
      } else {
        authored = false;
      }
      return(
        <Message
          key={i}
          authored={authored}
          content={m.content}
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

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Conversation);
