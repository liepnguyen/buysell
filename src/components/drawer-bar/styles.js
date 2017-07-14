import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: '#ecf0f1',
    padding: 15,
    flexDirection: 'column'
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userSettingBtn: {    
    padding: 5,
    borderRadius: 5
  },
  postNewOfferBtn: {
    borderRadius: 4,
    marginLeft: -15,
    marginRight: -15,
    marginTop: 15
  },
  drawerItemsContainer: {
    flex: 1
  },
  footerContainer: {
    height: 50,
    backgroundColor: '#ecf0f1'
  },

  //-----------------------------------------------
  // avatar with display name
  //-----------------------------------------------
  avatarWithDisplayNameTouchable: {
    flex: 1,
  },
  avatarWithDisplayNameContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  //\----------------------------------------------

  //-----------------------------------------------
  // invite a frient button
  //-----------------------------------------------
  inviteFriendTouchable: {
    flex: 1, 
    justifyContent: 'center'
  },
  inviteFriendContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  }
  //\----------------------------------------------
});

export default styles;