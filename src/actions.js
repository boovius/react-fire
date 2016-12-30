import { c } from './constants';

export function addMessage(text) {
  return function(dispatch) {
    const message = {
      id,
      text,
      sunk: false
    }
    dispatch(ADD_MESSAGE, message);
    messagesRef.push(message, () => {
      dispatch(SYNC_MESSAGE, message.id)
    });
  }
}
