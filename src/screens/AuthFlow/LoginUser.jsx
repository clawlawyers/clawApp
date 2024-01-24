import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles'
import BackIcon from '../../assets/back-button.png'
import { horizontalScale, moderateScale, verticalScale } from '../../styles/mixins'
import Google from '../../assets/google.png'
import Facebook from '../../assets/facebook.png'
import Apple from '../../assets/apple.png'
import Dropdown from '../../components/DropDown'

const LoginUser = () => {
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
                Welcome!
            </Text>
            <Text style={[styles.font_22, styles.font_med, {color: '#5E5C5C'}]}>
                Sign in to continue
            </Text>
        </View>

    <TextInput 
        placeholder='E-mail'
        placeholderTextColor={'#686666'}
        style={[{color: '#686666', borderBottomWidth: 1, borderBottomColor: '#686666', width: moderateScale(350), marginTop: verticalScale(50)}, styles.font_22]}
    />
    <TextInput 
        placeholder='Password'
        placeholderTextColor={'#686666'}
        style={[{color: '#686666', borderBottomWidth: 1, borderBottomColor: '#686666', width: moderateScale(350), marginTop: verticalScale(50)}, styles.font_22]}
    />
    {/* dropdown for user or client */}
    <View style={[styles.alignItemsCenter, styles.alignViewCenter]}>
        <Dropdown heading={'Sign up as a'}/>
    </View>

    <TouchableOpacity style={[styles.loginButton, styles.alignViewCenter, styles.alignItemsCenter]}>
        <Text style={[styles.font_25, styles.textWhite, styles.font_600]}>
            LOGIN
        </Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.alignViewCenter, styles.alignItemsCenter, {marginTop: verticalScale(16)}]}>
        <Text style={[styles.textPrimary, styles.font_w_400]}>
            Forget Password?
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
        Don't have an account?
        </Text>
        <TouchableOpacity>
            <Text style={[styles.textPrimary, styles.font_bold, styles.font_20]}>Sign up!</Text>
        </TouchableOpacity>
    </View>

    </View>
  )
}

export default LoginUser