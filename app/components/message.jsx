import React, { Component } from 'react';

export default class Message extends Component {
  constructor(){
    super();
    this._author = this._author.bind(this);
  }

  _author() {
    if (typeof(this.props.author) === 'undefined') {
      return 'N/A';
    }

    return this.props.author.match(/\b\w/g).join('');
  }

  render() {
    const classes = this.props.authored ? 'message authored' : 'message received';
    return(
      <div className='message-container'>
        <div className={classes}>
          <span className='content'>{this.props.content}</span>
          <span className='author'>{this._author()}</span>
        </div>
      </div>
    )
  }
}
