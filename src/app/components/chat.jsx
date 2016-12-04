import React from 'react';
import Conversation from './conversation';
import Composition from './composition';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log('chat component render');
    return (
      <div className='chat'>
        <Conversation  />
        <Composition />
      </div>
    )
  }
}
