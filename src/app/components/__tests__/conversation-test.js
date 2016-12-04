import Conversation from '../conversation';
import Message from '../message';

describe('Converastion', ()=>{
  let conversation, messageData;
  const author = 'person-1';

  beforeEach(()=>{
    messageData = [
      {
        sender: author,
        content: 'message-1',
      },
      {
        sender: 'person-2',
        content: 'message-2'
      }
    ];
    conversation = mount(<Conversation author={author} messages={messageData}/>);
  });

  describe('Initialization', ()=>{
    it('takes messages', ()=>{
      expect(conversation.prop('messages')).to.eql(messageData);
      expect(conversation.prop('author')).to.eql(author);
    });
  });

  describe('Layout', ()=>{
    it('has a message for every message passed in', ()=>{
      const messages = conversation.find(Message);
      expect(messages.length).to.eql(messageData.length);
    });

    it('passes along authored to messages', ()=>{
      const authored = conversation.find('.authored');
      const received = conversation.find('.received');
      expect(authored.length).to.eql(1);
      expect(received.length).to.eql(1);
    });
  });
});
