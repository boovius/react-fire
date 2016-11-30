import React from 'react';
import Conversation from './conversation';
import Composition from './composition';
import * as firebase from 'firebase';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.addMessage = this.addMessage.bind(this);
    this.db = firebase.database().ref('messages');
  }

  addMessage(text) {
    const message = {
      author: {
        uid: this.props.user.uid,
        name: this.props.user.name
      },
      content: text};
    this.db.push(message);
  }

  render(){
    console.log('chat component render');
    return (
      <div className='chat'>
        <Conversation user={this.props.user} messages={this.props.messages} />
        <Composition action={this.addMessage} />
      </div>
    )
  }
}
