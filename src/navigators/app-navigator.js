import React, { Component } from "react";
import Splash from "../components/splash";
import Home from "../components/home";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { MainNavigator } from './main-navigator';

export const AppNavigator = StackNavigator({
  Splash: {
    screen: Splash
  },
  Main: {
    screen: MainNavigator
  }
}, {
  navigationOptions: {
    header: null
  }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
