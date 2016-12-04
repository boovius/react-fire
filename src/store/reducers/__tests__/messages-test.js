import { c } from '../../../constants';
import deepFreeze from 'deep-freeze';
import { messages } from '../messages';

describe.only('messages reducer', () => {
  describe(c.RECEIVE_MESSAGES_DATA, () => {
    const stateBefore = [];
    const messageData = {
      'message-1-uid': {
        author: {
          name: 'name-1',
          uid: 'author-1-uid',
        },
        content: 'message-1'
      },
      'message-2-uid': {
        author: {
          name: 'name-2',
          uid: 'author-2-uid',
        },
        content: 'message-2'
      }
    }

    const action = {
      type: c.RECEIVE_MESSAGES_DATA,
      data: messageData
    };

    const stateAfter = [
      {
        author: {
          name: 'name-1',
          uid: 'author-1-uid',
        },
        content: 'message-1'
      },
      {
        author: {
          name: 'name-2',
          uid: 'author-2-uid',
        },
        content: 'message-2'
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    it('sets messages to data received', () => {
      expect(messages(stateBefore, action)).to.eql(stateAfter);
    });
  });

  describe(c.ADD_MESSAGE, () => {
  });
});
