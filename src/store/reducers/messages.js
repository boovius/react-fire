import { c } from '../../constants';

export const messages = (
  state = [],
  action
) => {
  switch(action.type) {
    case c.RECEIVE_MESSAGES_DATA:
      return Object.keys(action.data).map(key => action.data[key]);
    default:
      return state;
  }
};
