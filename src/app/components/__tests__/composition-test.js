import Composition from '../composition';

describe('Composition', ()=>{
  let composition, action;
  const textInput = 'text-input';

  beforeEach(()=>{
    action = sinon.spy();

    composition = mount(<Composition action={action} />);
  });

  describe('Initialization', ()=>{
    it('has an action', ()=>{
      expect(composition.prop('action')).to.eql(action);
    });

    it('has empty text', ()=>{
      expect(composition.state('text')).to.eql('');
    });
  });

  describe('Layout', ()=>{
    it('has a text input', ()=>{
      const input = composition.find('input');
      expect(input.length).to.eql(1);
    });

    it('text input set to text on state', ()=>{
      composition.setState({text: textInput});

      const input = composition.find('input');
      expect(input.prop('value')).to.eql(textInput);
    });

    it('has a send button', ()=>{
      const button = composition.find('button');
      expect(button.length).to.eql(1);
    });
  });

  describe('Interaction', ()=>{
    describe('changing text', ()=>{
      it('updates text on state', ()=>{
        const input = composition.find('input');
        input.simulate('change', {target: {value: textInput}});
        expect(composition.state('text')).to.eql(textInput);
      });
    });

    describe('send', ()=>{
      context('given text has value', ()=>{
        it('sends text on state to action',()=>{
          composition.setState({text: textInput});

          const button = composition.find('button');
          button.simulate('click');

          expect(action.called).to.eql(true)
          expect(action.lastCall.args[0]).to.eql(textInput);
          expect(composition.state('text')).to.eql('');
        });
      });

      context('given text is empty', ()=>{
        const textInput = '';

        it('sends text on state to action',()=>{
          composition.setState({text: textInput});

          const button = composition.find('button');
          button.simulate('click');

          expect(action.called).to.eql(false)
        });
      });

      context('given text is null', ()=>{
        const textInput = '';

        it('sends text on state to action',()=>{
          composition.setState({text: textInput});

          const button = composition.find('button');
          button.simulate('click');

          expect(action.called).to.eql(false)
        });
      });
    });
  });
});
