import Message from '../message';

describe('Message', ()=>{
  let component, messageData;

  beforeEach(()=>{
    messageData = {
      authored: true,
      content: 'content'
    };
    component = mount(
      <Message
        authored={messageData.authored}
        content={messageData.content}
        />
    );
  });

  describe('Initialization', ()=>{
    it('has content and authored prope and has message class', ()=>{
      expect(component.prop('authored')).to.eql(messageData.authored);
      expect(component.prop('content')).to.eql(messageData.content);
      expect(component.find('.message').length).to.eql(1);
    });
  });

  describe('Layout', ()=>{
    it('has text of its content', ()=> {
      expect(component.text()).to.eql(messageData.content);
    });

    context('when message authored', ()=>{
      it('has authored class', ()=>{
        const message = component.find('.message')
        expect(message.hasClass('authored')).to.eql(true);
      });
    });

    context('when message not authored', ()=>{
      beforeEach(()=>{
        messageData = {
          authored: false,
          content: 'content'
        };
        component = mount(
          <Message
            authored={messageData.authored}
            content={messageData.content}
            />
        );
      });

      it('has received class', ()=>{
        const message = component.find('.message')
        expect(message.hasClass('received')).to.eql(true);
      });
    });
  });
});
