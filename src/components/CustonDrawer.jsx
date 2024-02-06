import React from 'react';
import { useNavigation } from '@react-navigation/native'
import Robot from '../assets/Robot.png';
import MenuNewIcon from '../assets/MenuNewsIcon.png';
import MenuCallIcon from '../assets/MenuCallIcon.png';
import MenuProfileIcon from '../assets/MenuProfileIcon.png';
import MenuLogoutIcon from '../assets/MenuLogoutIcon.png';
import SampleProfileImage from '../assets/SampleProfileImage.png'
import MenuArrow from '../assets/MenuArrow.png';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { Image,View,Text } from 'react-native';
import { StyleSheet } from 'react-native';
  
  function CustomDrawer(props) {

    const navigation = useNavigation();
    return (
      <DrawerContentScrollView {...props} 
        style={{backgroundColor:'#bb91ff'}}
      >
        <View style={{backgroundColor:'#8940ff',marginTop:-4,paddingVertical:30,paddingHorizontal:40}}>
            <Image source={SampleProfileImage}/>
            <Text style={{color:'white', fontWeight:'bold',fontSize:22}}>Emily Smith</Text>
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
            icon={() => <Image source={MenuNewIcon}/>}
            labelStyle={styles.labelStyle}
            style={styles.drawerItemStyle}
            
        />
        <DrawerItem 
            label='Calls' 
            onPress={() => navigation.navigate('ContactList')}
            icon={() => <Image source={MenuCallIcon}/>}
            labelStyle={styles.labelStyle}
            style={styles.drawerItemStyle}
        />
        <DrawerItem 
            label='Account' 
            onPress={() => navigation.navigate('ProfileScreen')}
            icon={() => <Image source={MenuProfileIcon}/>}
            labelStyle={styles.labelStyle}
            style={styles.drawerItemStyle}
            
        />
        <DrawerItem 
            label='Log out' 
            onPress={() => navigation.navigate('AppFlow')}
            icon={() => <Image source={MenuLogoutIcon}/>}
            labelStyle={styles.labelStyle}
            style={styles.drawerItemStyle}
        />
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
        paddingVertical:5
    }

  })