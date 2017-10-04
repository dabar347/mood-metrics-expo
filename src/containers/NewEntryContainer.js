import React, { Component } from 'react';
import { connect } from 'react-redux'
import NewEntryComponent from '../components/newEntry/NewEntryComponent.js'
import store from '../Store';
import { setState, newEntry } from '../actions';


function newEntryHandler(mood,value) {
  store.dispatch(newEntry(null,mood ,value));
}

class NewEntryContainer extends Component {
  static navigationOptions = {
    title: 'New Entry',
  }

  render() {
    return (
      <NewEntryComponent newEntry={newEntryHandler}/>
    );
  }
}

export default connect()(NewEntryContainer);
