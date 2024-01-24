import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles'
import BackIcon from '../../assets/back-button.png'
import { horizontalScale, moderateScale, verticalScale } from '../../styles/mixins'
import Google from '../../assets/google.png'
import Facebook from '../../assets/facebook.png'
import Apple from '../../assets/apple.png'
import Dropdown from '../../components/DropDown'

const ForgetPassword = () => {
  return (
    <View style={[styles.container, styles.alignItemsCenter]}>
      <TouchableOpacity style={[styles.alignItemsLeft, styles.alignViewCenter, {width: '85%', marginTop: verticalScale(40)}]}>
        <Image 
        source={BackIcon}
        styles={styles.backButtonIcon}
        />
      </TouchableOpacity>
        
        <View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '85%', marginTop: verticalScale(35)}]}>
            <Text style={[styles.textBlack, styles.font_40, styles.font_700]}>
                Forget Password?
            </Text>
            <Text style={[styles.font_19, styles.font_med, {color: '#5E5C5C'}]}>
                Please enter your registered email to
            </Text>
            <Text style={[styles.font_19, styles.font_med, {color: '#5E5C5C'}]}>
                reset your password
            </Text>
        </View>

    <TextInput 
        placeholder='E-mail'
        placeholderTextColor={'#686666'}
        style={[{color: '#686666', borderBottomWidth: 1, borderBottomColor: '#686666', width: moderateScale(350), marginTop: verticalScale(50)}, styles.font_22]}
    />

    <TouchableOpacity style={[styles.loginButton, styles.alignViewCenter, styles.alignItemsCenter,{backgroundColor: '#E4E3E3'}]}>
        <Text style={[styles.font_25, styles.textWhite, styles.font_600]}>
            Reset Password
        </Text>
    </TouchableOpacity>

    </View>
  )
}

export default ForgetPassword