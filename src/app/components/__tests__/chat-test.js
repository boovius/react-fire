import Chat from '../chat';
import Conversation from '../conversation';
import Composition from '../composition';

describe('Chat', ()=> {
  let chat, messageData;
  const textInput = 'text-input';

  beforeEach(() => {
    messageData = [
      {
        sender: 'sender-1',
        content: 'message-1'
      },
      {
        sender: 'sender-2',
        content: 'message-2'
      }
    ]

    chat = mount(<Chat messages={messageData} />);
  });

  describe('Initialization', ()=> {
    it('sets messages on state to props passed in', ()=>{
      expect(chat.state('messages')).to.eql(messageData)
    });
  });

  describe('Layout', ()=> {
    it('has a conversation box', ()=> {
      const conversation = chat.find(Conversation);
      expect(conversation.length).to.eql(1);
      expect(conversation.prop('messages')).to.eql(chat.state('messages'));
    });

    it('has a composition box', ()=> {
      const composition = chat.find(Composition);
      expect(composition.length).to.eql(1);
    });
  });

  describe('Interaction', ()=> {
    describe('adding new message', ()=>{
      it('adds message to state', () => {
        const composition = chat.find(Composition);
        composition.prop('action')(textInput);

        expect(chat.state('messages').length).to.eql(3);
        expect(chat.state('messages').pop().content).to.eql(textInput);
      });
    });
  });
});
