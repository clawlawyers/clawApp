import { View, Text, Image, Button,TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState,useEffect } from 'react'
import styles from '../../styles'
import BackIcon from '../../assets/back-button.png'
import { horizontalScale, moderateScale, verticalScale } from '../../styles/mixins'
// import Google from '../../assets/google.png'
// import Facebook from '../../assets/facebook.png'
// import Apple from '../../assets/apple.png'
// import Dropdown from '../../components/DropDown'

import { registerUser } from '../../actions/authentication'
import { changeVariable } from '../../actions/variables'

import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

const OTPScreen = (props) => {
    const [_phoneNumber, _setphoneNumber] = useState('');
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');

    const navigation = useNavigation()
    const [no, setno] = useState('');
    const [otp,setotp] = useState('');
    //const [confirm, setConfirm] = useState('');

    const handlepno = async() =>{

        try{

            const pno = '+91'+no;
            console.log(pno);
            const res = await auth().signInWithPhoneNumber(pno);
            setConfirm(res);
            console.log(res)
            alert('otp sent');
            navigation.navigate('AppFlow',{screen:'OTPScreen'})

        }catch(err){
            
            ToastAndroid.show("Couldn't complete request, try again later!",ToastAndroid.SHORT);
            console.log(err.message);
        }
    }

    const handleiotp = () =>{

        try{

        }catch(err){
            console.log(err.message)
        }
    }

   

    return (
            <View style={[styles.container, styles.alignItemsCenter,{paddingTop:50}]}>
                <View style={[ {width: '80%'}]}>
                    <TouchableOpacity style={[styles.alignItemsLeft, styles.alignViewCenter, {width: '80%'}]}
                        onPress={() => navigation.navigate('AppFlow',{screen:'SignupUser'})}
                    >
                        <Image 
                        source={BackIcon}
                        styles={[styles.backButtonIcon,]}
                        />
                    </TouchableOpacity>
                    
                </View>
              
                
                <View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '80%', marginTop: verticalScale(35)}]}>
                    <Text style={[styles.textBlack, styles.font_50, styles.font_700]}>
                    Enter OTP
                    </Text>
                    <Text style={[styles.font_22, styles.font_med, {color: '#5E5C5C'}]}>
                    4 digit code has been send to +91 9882****98
                    </Text>
                    
                </View>
        
            
            {/* <View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '80%', marginTop: verticalScale(65)}]}>
                <Text style={[styles.font_22, styles.font_med, {color: '#5E5C5C'}]}>
                    Number
                </Text>
            </View> */}
            <View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '80%',flexDirection:'row',marginTop: verticalScale(65),justifyContent:'space-between'}]}>

                <TextInput value='' style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,width:63,height:63,textAlign:'center',fontSize:15}}/>

                <TextInput value='' style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,width:63,height:63,textAlign:'center',fontSize:15}}/>

                <TextInput value='' style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,width:63,height:63,textAlign:'center',fontSize:15}}/>
                
                <TextInput value='' style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,width:63,height:63,textAlign:'center',fontSize:15}}/>
              

            </View>
           
            <TouchableOpacity 
                style={[styles.loginButton, styles.alignViewCenter, styles.alignItemsCenter]}
                onPress={{}}
            >
                <Text style={[styles.font_25, styles.textWhite, styles.font_600]}>
                    Next
                </Text>
            </TouchableOpacity>
            </View>
          )

}

export default connect(null, {
    changeVariable,
    registerUser
  })(OTPScreen);