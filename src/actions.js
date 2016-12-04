import { c } from './constants';

export function addMessage(text) {
  return ({
    type: c.ADD_MESSAGE,
    text
  })
}
