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
import OTPScreen from './OTPScreen'

const SignupClientScreen = (props) => {
    const [_phoneNumber, _setphoneNumber] = useState('');
    const [confirm, setConfirm] = useState('');
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
            //navigation.navigate('AppFlow',{screen:'OTPScreen'})

        }catch(err){
            
            ToastAndroid.show("Couldn't complete request, try again later!",ToastAndroid.SHORT);
            console.log(err.message);
        }
    }

    const handleiotp = async() =>{

        try{
            
            console.log(otp);
            const res = await confirm.confirm(otp);
            console.log(res);
            alert('sign in successful!');
            navigation.navigate('ClientFlow',{screen:'NewFlow'})

        }catch(err){
            console.log(err.message)
        }
    }

   

    if(confirm== '')
    {
        
        return (
            <View style={[styles.container, styles.alignItemsCenter,{paddingTop:50}]}>
                <View style={[ {width: '80%'}]}>
                    <TouchableOpacity style={[styles.alignItemsLeft, styles.alignViewCenter, {width: '80%'}]}
                        onPress={() => navigation.navigate('AppFlow',{screen:'Auth'})}
                    >
                        <Image 
                        source={BackIcon}
                        styles={[styles.backButtonIcon,]}
                        />
                    </TouchableOpacity>
                    
                </View>
              
                
                <View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '80%', marginTop: verticalScale(35)}]}>
                    <Text style={[styles.textBlack, styles.font_50, styles.font_700]}>
                        Hi!
                    </Text>
                    <Text style={[styles.font_22, styles.font_med, {color: '#5E5C5C'}]}>
                        Create a new account!
                    </Text>
                    <Text style={[styles.font_22, styles.font_med, {color: '#8940FF'}]}>
                        Register a CA/Lawyer
                    </Text>
                </View>
        
            
            <View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '80%', marginTop: verticalScale(65), marginBottom: verticalScale(5)}]}>
                <Text style={[styles.font_22, styles.font_med, {color: '#5E5C5C'}]}>
                    Number
                </Text>
            </View>
            <View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '80%',flexDirection:'row',justifyContent:'space-between'}]}>
                <TextInput value='+91' style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,width:'20%',height:45,textAlign:'center',fontSize:15}}/>
        
                <TextInput style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,height:45,width:'70%',textAlign:'center',fontSize:15,textAlign:'left',paddingLeft:15}} placeholder='Type in your phone number' value={no} onChangeText={(no) => setno(no)}/>
            </View>
           
            <TouchableOpacity 
                style={[styles.loginButton, styles.alignViewCenter, styles.alignItemsCenter]}
                onPress={()=>handlepno()}
            >
                <Text style={[styles.font_25, styles.textWhite, styles.font_600]}>
                    SIGN UP
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.loginButton, styles.alignViewCenter, styles.alignItemsCenter]}
                onPress={()=>navigation.navigate('AppFlow',{screen:'OTPScreen'})}
            >
                <Text style={[styles.font_25, styles.textWhite, styles.font_600]}>
                    OTP
                </Text>
            </TouchableOpacity>
            </View>
          )
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
            4 digit code has been send to +91 {no}
            </Text>
            
        </View>

    
    <View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '80%', marginTop: verticalScale(65)}]}>
        <TextInput 
            value={otp}
            onChangeText={(otp) => setotp(otp)}
            style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,height:53,width:'100%',textAlign:'center',fontSize:15}}
        />

    </View>

    <View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '80%',flexDirection:'row',marginTop: verticalScale(65),justifyContent:'space-between'}]}>

        <TextInput 
            value='' 
            style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,width:53,height:53,textAlign:'center',fontSize:15}}
            inputMode='number'
        />

        <TextInput value='' style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,width:53,height:53,textAlign:'center',fontSize:15}}/>

        <TextInput value='' style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,width:53,height:53,textAlign:'center',fontSize:15}}/>
        
        <TextInput value='' style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,width:53,height:53,textAlign:'center',fontSize:15}}/>

        <TextInput value='' style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,width:53,height:53,textAlign:'center',fontSize:15}}/>

        <TextInput value='' style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,width:53,height:53,textAlign:'center',fontSize:15}}/>
      

    </View>
   
    <TouchableOpacity 
        style={[styles.loginButton, styles.alignViewCenter, styles.alignItemsCenter]}
        onPress={handleiotp}
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
  })(SignupClientScreen);