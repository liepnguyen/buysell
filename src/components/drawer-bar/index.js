import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  Alert
} from 'react-native';
import { Button, Divider, Avatar, Icon } from 'react-native-elements';
import { DrawerItems } from "react-navigation";
import styles from './styles';

export default class DrawerBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: true, 
      username: 'liepnguyen',
      userDisplayName: 'Liep Nguyen',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' 
    };
  }

  navigateToViewProfileScreen() {
    Alert.alert('Alert Title', 'Test');
  }

  renderAvatarWithDisplayName() {
    return (
      <TouchableHighlight 
        onPress={() => {this.navigateToViewProfileScreen()}} 
        style={styles.avatarWithDisplayNameTouchable}
        underlayColor={'transparent'}>
        <View style={styles.avatarWithDisplayNameContainer}>
          <Avatar
            rounded
            source={{uri: this.state.avatar}}
            activeOpacity={0.7}
          />
          <Text style={{marginLeft: 10}}>{this.state.userDisplayName}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  renderInviteFriendButton() {
    return (
      <TouchableHighlight 
        onPress={() => {}} 
        style={styles.inviteFriendTouchable}
        underlayColor={'transparent'}>
        <View style={styles.inviteFriendContainer}>
          <Icon name='person-add' size={26}/>
          <Text style={{marginLeft: 15}}>Invite a Friend</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          {this.state.isLoggedIn ? (
            <View style={styles.userInfoContainer}>
              {/*avatar with display name*/}
              {this.renderAvatarWithDisplayName()}
              <Icon 
                style={styles.userSettingBtn}
                name='settings' 
                size={26} 
                onPress={() => {this.navigateToViewProfileScreen()}} />
            </View>
          ) : (
            <View/>
          )}
          <Button onPress={() => { console.log('hello world') }}
            backgroundColor={'#673AB7'}
            buttonStyle={styles.postNewOfferBtn}
            icon={{name: 'camera', type: 'material-community'}}
            title='Post New Offer' />
        </View>
        <Divider style={{ backgroundColor: '#95a5a6' }} />
        <ScrollView style={styles.drawerItemsContainer}><DrawerItems {...this.props} /></ScrollView>
        <View style={styles.footerContainer}>
          {/*invite a friend button*/}
          {this.renderInviteFriendButton()}
        </View>
      </View>
    );
  }
}