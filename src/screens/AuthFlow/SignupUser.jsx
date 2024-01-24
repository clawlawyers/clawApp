import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles'
import BackIcon from '../../assets/back-button.png'
import { horizontalScale, moderateScale, verticalScale } from '../../styles/mixins'
import Google from '../../assets/google.png'
import Facebook from '../../assets/facebook.png'
import Apple from '../../assets/apple.png'
import Dropdown from '../../components/DropDown'

import { registerUser } from '../../actions/authentication'
import { changeVariable } from '../../actions/variables'

import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const SignupUser = (props) => {
    const [_username, _setUsername] = useState('');
    const [_email, _setEmail] = useState('');
    const [_password, _setPassword] = useState('');
    const navigation = useNavigation()
    console.log(_password)
    const handleSignup = () => {
        const data = {
          username: _username,
          email: _email,
          password: _password,
        };
        console.log(_username + " " + _email + "  " + _password)
        props.registerUser(data, navigation);
      }

  return (
    <View style={[styles.container, styles.alignViewCenter, styles.alignItemsCenter]}>
      <TouchableOpacity style={[styles.alignItemsLeft, styles.alignViewCenter, {width: '80%'}]}>
        <Image 
        source={BackIcon}
        styles={styles.backButtonIcon}
        />
      </TouchableOpacity>
        
        <View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '80%', marginTop: verticalScale(35)}]}>
            <Text style={[styles.textBlack, styles.font_50, styles.font_700]}>
                Hi!
            </Text>
            <Text style={[styles.font_22, styles.font_med, {color: '#5E5C5C'}]}>
                Create a new account!
            </Text>
        </View>

      
    <TextInput 
        placeholder='Username'
        placeholderTextColor={'#686666'}
        style={[{color: '#686666', borderBottomWidth: 1, borderBottomColor: '#686666', width: moderateScale(350), marginTop: verticalScale(53)}, styles.font_22,]}
        onChangeText={e=> _setUsername(e)}
        value={_username}
    />
    <TextInput 
        placeholder='E-mail'
        placeholderTextColor={'#686666'}
        style={[{color: '#686666', borderBottomWidth: 1, borderBottomColor: '#686666', width: moderateScale(350), marginTop: verticalScale(50)}, styles.font_22]}
        onChangeText={e=> _setEmail(e)}
        value={_email}
        keyboardType='email-address'
    />
    <TextInput 
        placeholder='Password'
        placeholderTextColor={'#686666'}
        style={[{color: '#686666', borderBottomWidth: 1, borderBottomColor: '#686666', width: moderateScale(350), marginTop: verticalScale(50)}, styles.font_22]}
        onChangeText={e=> _setPassword(e)}
        value={_password}
    />
    {/* dropdown for user or client */}

    <TouchableOpacity 
        style={[styles.loginButton, styles.alignViewCenter, styles.alignItemsCenter]}
        onPress={e=>handleSignup(e)}
    >
        <Text style={[styles.font_25, styles.textWhite, styles.font_600]}>
            SIGNUP
        </Text>
    </TouchableOpacity>

    <View style={[styles.alignItemsCenter, styles.alignViewCenter, styles.alignViaRow, {marginTop: verticalScale(47)}]}>
        <Text style={{color:'#767474'}}>
        ___________________________
        </Text>
        <Text style={[{color: '#767474', marginTop: verticalScale(10)}, styles.font_14]}>
            or
        </Text>
        <Text style={{color: '#767474'}}>
        ___________________________
        </Text>
    </View>

    <View style={[styles.justifyBetween, styles.alignItemsCenter, styles.alignViaRow]}>
        <TouchableOpacity style={[styles.alignItemsCenter, styles.alignViewCenter]}>
            <Image 
                source={Facebook}
                style={styles.socialIcon}
            />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.alignItemsCenter, styles.alignViewCenter]}>
            <Image 
                source={Google}
                style={[styles.socialIcon, {height: moderateScale(55), width: moderateScale(55)}]}
            />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.alignItemsCenter, styles.alignViewCenter]}>
            <Image 
                source={Apple}
                style={[styles.socialIcon]} 
            />
        </TouchableOpacity>
    </View>

    


    <View style={[styles.alignItemsCenter, styles.alignViewCenter, styles.alignViaRow, {marginTop: verticalScale(35)}]}> 
        <Text style={[styles.textPrimary, styles.font_20]}>
        Already have an account?
        </Text>
        <TouchableOpacity onPress={e=>navigation.navigate("Login")}>
            <Text style={[styles.textPrimary, styles.font_bold, styles.font_20]}>Sign in!</Text>
        </TouchableOpacity>
    </View>

    </View>
  )
}

export default connect(null, {
    changeVariable,
    registerUser
  })(SignupUser);