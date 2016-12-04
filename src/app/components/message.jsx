import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    const classes = this.props.authored ? 'message authored' : 'message received';
    return(
      <div className='message-container'>
        <div className={classes}>
          {this.props.content}
        </div>
      </div>
    )
  }
}
