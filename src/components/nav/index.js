import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  Alert
} from 'react-native';
import { Button, Divider, Avatar, Icon, Header } from 'react-native-elements';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    console.log('props', props, '===================');
  }

  render() {
    return (
      <Header
        leftComponent = {
          {/* this.props.navigation.newState.index > 0 ? (
            <View>
              <Icon 
                name='back' 
                onPress={() => { }}
                color='#fff'
                size={32}
                underlayColor='transparent'/>
            </View>
          ) : (
            <View>
              <Icon 
                name='menu' 
                onPress={() => { this.props.navigation.navigate('DrawerOpen') }}
                color='#fff'
                size={32}
                underlayColor='transparent'/>
            </View>
          ) */}
        }
        centerComponent={{ text: this.props.title, style: { color: '#fff' } }} 
        rightComponent={{ icon: 'home', color: '#fff', onPress:() => { this.showAlert() } }}
      />
    );
  }
}