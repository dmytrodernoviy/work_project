import React, {Component} from 'react';
import RootContainer from './root';
import {Provider} from 'react-redux'

export default class App extends Component{
  render() {
    return (
        <RootContainer />
    );
  }
}

