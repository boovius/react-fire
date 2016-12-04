import { createStore } from 'redux';
import { rootReducer } from './reducers'
import { initialState } from './initialState'

export const store = createStore(rootReducer, initialState);

