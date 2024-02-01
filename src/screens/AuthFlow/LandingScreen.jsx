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

const SignupClientScreen = (props) => {
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
                <Text>Landing Screen</Text>
            </View>
          )

}

export default connect(null, {
    changeVariable,
    registerUser
  })(LandingScreen);