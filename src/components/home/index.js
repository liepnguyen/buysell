import React, { Component } from 'react';

import {
  Alert,
  View,
  Text,
  Image,
  StyleSheet,
  Button
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import Nav from '../nav'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Home Page', showText: true };
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      })
    }, 1000);
  }

  showAlert() {
    Alert.alert('Alert Title', 'Test');
  }

  render() {
    let display = this.state.showText ? this.state.text : '';
    return (
      <View style={styles.wrapper}>
        <Nav {...this.props} title={'Home Screen'}/>
        <Button title='Click me' onPress={() => { this.props.navigation.navigate('HomeScreen')}} />
        {/* <Text style={styles.title}>{display}</Text> */}
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