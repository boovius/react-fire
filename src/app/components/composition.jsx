import React from 'react';
import { connect } from 'react-redux';
import { c } from '../../constants';

export const Composition = ( { dispatch }) => {
  let input;

  return(
    <div className='composition'>
      <input
        type='text'
        ref = { node => { input = node; }}
      />
      <button onClick={ () => {
        dispatch({
          type: c.ADD_MESSAGE,
          content: input.value
        });
        input.value = '';
      }}>
        send
      </button>
    </div>
  )
}

export default connect()(Composition);
