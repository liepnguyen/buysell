import React, { Component } from "react";
import Home from "../components/home";
import DrawerBar from "../components/drawer-bar";
import { DrawerNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MainNavigator = DrawerNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon name="home" size={24} style={{ color: tintColor }} />
      )
    }
  },
  Categories: { 
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Categories',
      drawerIcon: ({ tintColor }) => (
        <Icon name="view-grid" size={24} style={{ color: tintColor }} />
      )
    }
  },
  Alerts: { 
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Alerts',
      drawerIcon: ({ tintColor }) => (
        <Icon name="alert" size={24} style={{ color: tintColor }} />
      )
    }
  },
  MyOffers: { 
    screen: Home,
    navigationOptions: {
      drawerLabel: 'My Offers',
      drawerIcon: ({ tintColor }) => (
        <Icon name="tag-multiple" size={24} style={{ color: tintColor }} />
      )
    }
  },
  HelpCenter: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Help Center',
      drawerIcon: ({ tintColor }) => (
        <Icon name="help-circle" size={24} style={{ color: tintColor }} />
      )
    }
  }
}, {
  initialRouteName: 'Home',
  contentOptions: {
    activeTintColor: '#3F51B5',
    inactiveTintColor: '#3F51B5',
    labelStyle: {fontWeight: 'normal'},
    style: {
    }
  },
  contentComponent: props => <DrawerBar {...props} />
});