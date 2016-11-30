import Message from '../message';

describe.only('Message', ()=>{
  let component, messageData;

  beforeEach(()=>{
    messageData = {
      authored: true,
      content: 'content',
      author: 'First Last'
    };
    component = mount(
      <Message
        authored={messageData.authored}
        content={messageData.content}
        author={messageData.author}
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
      const content = component.find('.content');
      expect(content.text()).to.eql(messageData.content);
    });

    it('has initials of author', () => {
      const author = component.find('.author');
      expect(author.text()).to.eql('FL');
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
