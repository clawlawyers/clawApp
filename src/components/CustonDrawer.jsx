import React from 'react';
import { useNavigation } from '@react-navigation/native'
import Robot from '../assets/Robot.png';
import MenuNewIcon from '../assets/MenuNewsIcon.png';
import MenuCallIcon from '../assets/MenuCallIcon.png';
import MenuProfileIcon from '../assets/MenuProfileIcon.png';
import MenuLogoutIcon from '../assets/MenuLogoutIcon.png';
import userIcon from '../assets/userIcon.png';

import MenuArrow from '../assets/MenuArrow.png';
import {
    DrawerContentScrollView,
    DrawerItem
  } from '@react-navigation/drawer';
import { Image,View,Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { fetchData, removeData } from '../actions/async-storage';
import auth from '@react-native-firebase/auth';
import {signOut} from'@react-native-firebase/app'
import { moderateScale } from '../styles/mixins';
import {useSelector} from 'react-redux';
import * as ZIM from 'zego-zim-react-native';
import * as ZPNs from 'zego-zpns-react-native';

  function CustomDrawer(props) {

    const navigation = useNavigation();
    const firstName = useSelector(state => state.variables.firstName);
    const lastName = useSelector(state => state.variables.lastName);
    const imageUrl = useSelector(state => state.variables.photo_url);
    //console.log(imageUrl);
    const onUserLogout = async () => {
      return ZegoUIKitPrebuiltCallService.uninit()
    }
    const logout = () => {

      
      //console.log(fetchData('userId'));
      removeData('userId');
      onUserLogout()
      auth().signOut();

      navigation.navigate('InitialLandingScreen');
      console.log('logged out');
      console.log(fetchData('userId'));
    }

    return (
      <DrawerContentScrollView {...props} 
        style={{backgroundColor:'#bb91ff', }}
      >
        <View style={{backgroundColor:'#8940ff',marginTop:-4,paddingVertical:20,paddingHorizontal:30}}>
            <Image source={userIcon} style={{height:moderateScale(70),width:moderateScale(70),zIndex:1,position:'absolute',marginTop:moderateScale(50),marginLeft:moderateScale(30)}}/>
            {/* <Image source={{uri : imageUrl}} style={{height:moderateScale(70),width:moderateScale(70),zIndex:2,position:'absolute',marginTop:moderateScale(50),marginLeft:moderateScale(30)}}/> */}
            <Text style={{color:'white', fontWeight:'bold',fontSize:19,marginTop:moderateScale(100)}}>{firstName} {lastName}</Text>
        </View>
        <DrawerItem 
            label='Legal GPT' 
            onPress={() => navigation.navigate('Legal GPT')}
            icon={() => <Image source={Robot}/>}
            labelStyle={styles.labelStyle}
            style={styles.drawerItemStyle}
        />
        <DrawerItem 
            label='News' 
            onPress={() => navigation.navigate('News')}
            icon={() => <Image source={MenuNewIcon} style={styles.drawerIcon}/>}
            labelStyle={styles.labelStyle}
            style={styles.drawerItemStyle}
            
        />
        <DrawerItem 
            label='Calls' 
            onPress={() => navigation.navigate('ContactList')}
            icon={() => <Image source={MenuCallIcon} style={styles.drawerIcon}/>}
            labelStyle={styles.labelStyle}
            style={styles.drawerItemStyle}
        />
        <DrawerItem 
            label='Account' 
            onPress={() => navigation.navigate('Account')}
            icon={() => <Image source={MenuProfileIcon} style={styles.drawerIcon}/>}
            labelStyle={styles.labelStyle}
            style={styles.drawerItemStyle}
            
        />
        <DrawerItem 
            label='Log out' 
            onPress={logout}
            icon={() => <Image source={MenuLogoutIcon} style={styles.drawerIcon}/>}
            labelStyle={styles.labelStyle}
            style={styles.drawerItemStyle}
        />
        {/* <TouchableOpacity>
          <Image source={MenuLogoutIcon} />
          <Text>Log out</Text>
          <Image></Image>
        </TouchableOpacity>*/}
      </DrawerContentScrollView>
    ); 
  }

  export default CustomDrawer;

  const styles = StyleSheet.create({

    labelStyle :{
        fontWeight:'bold',
        color:'black',
        fontSize:17
    },
    drawerItemStyle:{
        borderBottomWidth:1,
        marginHorizontal:25,
        paddingVertical:5,
       
    },

    drawerIcon:{
      height:moderateScale(40),
      width:moderateScale(40),
      marginTop:moderateScale(5)
    }


  })