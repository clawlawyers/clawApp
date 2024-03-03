import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles'
import CLAW from '../../assets/app-icon.png'
import { moderateScale, verticalScale } from '../../styles/mixins'
import Graphic from '../../assets/start-screen-img.png'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';
const AuthFlow = () => {
 
    const navigation = useNavigation();
  return (

    <LinearGradient
        colors={['#8940FF', '#29085E']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{flex: 1}}
      >
    <View style={[styles.alignViewCenter, styles.alignItemsCenter,{flex:1,justifyContent:'flex-start',paddingTop:moderateScale(50)}]}>
        <View style={[styles.alignViewCenter, styles.alignItemsCenter]}>
          {/* <Image  
            source={CLAW}
            style={[styles.startLogo,{width:moderateScale(223),height:moderateScale(71),marginTop: 1}]} 
          /> */}
          <Text style={{color:'white',fontSize:moderateScale(48),fontWeight:'600'}}>Welcome</Text>
        </View>
        <Image
            source={require('../../assets/start-screen-img2.png')}
            style={{width:moderateScale(350),height:moderateScale(300),marginTop:moderateScale(15)}}
        />
        <View style={[styles.alignViewCenter, styles.alignItemsCenter]}>
            {/* <Text style={[styles.textBlack,styles.font_35, styles.font_bold ]}>
                Welcome to CLAW!
            </Text> */}
            <Text style={[styles.textWhite,{fontSize:moderateScale(30)}]}>
              find your financial and legal
              </Text>
              <Text style={[styles.textWhite,{fontSize:moderateScale(30)}]}>
              partners effortlessly.
              </Text>
        </View>
        {/* login signup button */}
        <View style={[styles.alignItemsCenter, styles.alignViewCenter]}>
           
           <TouchableOpacity onPress={()=>navigation.navigate('SignupUser')} style={[styles.loginButton, styles.alignViewCenter, styles.alignItemsCenter,{marginTop:moderateScale(30),backgroundColor:'#8940FF'}]}>
                <Text style={[styles.font_25, styles.textWhite, styles.font_600]}>
                    Get Started
                </Text>
            </TouchableOpacity>
            
        </View>
        
    </View>
    </LinearGradient>
  )
}

export default AuthFlow