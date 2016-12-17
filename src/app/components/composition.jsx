import React from 'react';
import { connect } from 'react-redux';
import { c } from '../../constants';

export const Composition = ( { dispatch }) => {
  let input;

  return(
    <div className='composition'>
      <form onSubmit={ (e) => {
        e.preventDefault();
        dispatch({
          type: c.ADD_MESSAGE,
          content: input.value
        });
        input.value = '';
      }}>
        <input
          type='text'
          ref = { node => { input = node; }}
        />
        <input type='submit'value='send'/>
      </form>
    </div>
  )
}

export default connect()(Composition);
