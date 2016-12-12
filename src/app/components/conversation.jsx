import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message';

export class Conversation extends Component {
  _renderMessages() {
    return this.props.messages.map((m,i) => {
      let authored;
      if (i % 2 === 0) {
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
