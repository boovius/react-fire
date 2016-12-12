import React, { Component } from 'react';
import { connect } from 'react-redux';

export class DatabaseIntercepter extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.messages != nextProps.messages){
      debugger;
      console.log('need to update db');
      return true;
    } else {
      return false
    }
  }

  render() {
    return this.props.children
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(DatabaseIntercepter);
