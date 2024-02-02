import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles'
import CLAW from '../../assets/app-icon.png'
import { verticalScale } from '../../styles/mixins'
import Graphic from '../../assets/start-screen-img.png'
import { useNavigation } from '@react-navigation/native'

const AuthFlow = () => {
    const navigation = useNavigation();
  return (
    <View style={[styles.alignViewCenter, styles.alignItemsCenter,{backgroundColor:'#FFFFFF',flex:1}]}>
        <View style={[styles.alignViewCenter, styles.alignItemsCenter]}>
          <Image  
            source={CLAW}
            style={[styles.startLogo,{marginTop: verticalScale(30)}]} 
          />
        </View>
        <Image
            source={Graphic}
            style={{}}
        />
        <View style={[styles.alignViewCenter, styles.alignItemsCenter]}>
            <Text style={[styles.textBlack,styles.font_35, styles.font_bold ]}>
                Welcome to CLAW!
            </Text>
            <Text style={[styles.textBlack,styles.font_20]}>
            Find your financial and legal partners
            </Text>
            <Text style={[styles.textBlack,styles.font_20]}>
            effortlessly.
            </Text>
        </View>
        {/* login signup button */}
        <View style={[styles.alignItemsCenter, styles.alignViewCenter]}>
            {/* <TouchableOpacity onPress={()=>navigation.navigate('AppFlow',{screen:'SignupUser'})} style={[styles.loginButton, styles.alignViewCenter, styles.alignItemsCenter]}>
                <Text style={[styles.font_25, styles.textWhite, styles.font_600]}>
                    Hire a CA/ Lawyer
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>navigation.navigate('AppFlow',{screen:'SignupUser'})}
                style={[styles.signupButton, styles.alignViewCenter, styles.alignItemsCenter]}>
                <Text style={[styles.font_25, styles.textPrimary, styles.font_600]}>
                    Register as a CA/Lawyer
                </Text>
            </TouchableOpacity> */}
           <TouchableOpacity onPress={()=>navigation.navigate('AppFlow',{screen:'SignupUser'})} style={[styles.loginButton, styles.alignViewCenter, styles.alignItemsCenter]}>
                <Text style={[styles.font_25, styles.textWhite, styles.font_600]}>
                    Get Started
                </Text>
            </TouchableOpacity>
            
        </View>
        
    </View>
  )
}

export default AuthFlow