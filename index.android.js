import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { AppNavigator } from './src/navigators';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/app-navigator';

class App extends Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('buysell', () => App);