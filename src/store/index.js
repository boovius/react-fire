import { createStore } from 'redux';
import rootReducer from './reducers'
import initialState from './initialState'

export default createStore(rootReducer, initialState);

