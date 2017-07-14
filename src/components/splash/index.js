import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { NavigationActions } from "react-navigation";

export default class Splash extends Component {
	componentDidMount(){
		setTimeout(() => this.nav(), 500);
	}

  nav() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'MainNavigator' })
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

	render() {
    const { navigate } = this.props.navigation;

		return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Hello World</Text>
      </View>
    );
	}
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2ecc71'
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  }
})