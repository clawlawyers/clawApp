import { View, Text, Image,TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState,useEffect, useRef } from 'react'
import styles from '../../styles'
import BackIcon from '../../assets/back-button.png'
import OTPGraphic from '../../assets/OTP-security.png';
import { moderateScale, verticalScale } from '../../styles/mixins'
import { BarIndicator} from 'react-native-indicators';
import { validatePhoneNumber} from '../../actions/authentication'
import { changeVariable } from '../../actions/variables'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';


const SignupClientScreen = (props) => {

    //console.log(props);
    const [_phoneNumber, _setphoneNumber] = useState('');
    const [confirm, setConfirm] = useState('');
    const navigation = useNavigation()   
    const [_otp,_setotp] = useState('');
    const [_OTPvisibility, setOTPvisibility] = useState(true);
    const [ isLoading, setIsLoading] = useState(false);
    const [_timer, _setTimer] = useState(0);
    const [_user, setUser] = useState();
    const pin1 = useRef();
    const pin2 = useRef();
    const pin3 = useRef();
    const pin4 = useRef();
    const pin5 = useRef();
    const pin6 = useRef();

    const [pinTxt1, setPintTxt1] = useState('');
    const [pinTxt2, setPintTxt2] = useState('');
    const [pinTxt3, setPintTxt3] = useState('');
    const [pinTxt4, setPintTxt4] = useState('');
    const [pinTxt5, setPintTxt5] = useState('');
    const [pinTxt6, setPintTxt6] = useState('');

    function onAuthStateChanged(user) {
      
       
        //setUser(user);
        //if (initializing) setInitializing(false);
        if (user) {
            _setTimer(0);
            
            setOTPvisibility(false);
            //setOTPvisibility(false);
            const data = {
                phoneNumber: _phoneNumber,
                verified: true
            }
            props.validatePhoneNumber(data,navigation)
            setIsLoading(false);
        }
      }
    
      useEffect (() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        
        console.log('subscriber',subscriber);

        return subscriber;

      },[])

      useEffect(() => {

       const interval= setInterval(() => {
            if (_timer > 0) {
              _setTimer(_timer - 1);
            }
        }, 1000)
        // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        
        // console.log('subscriber',subscriber);
        // return subscriber; // unsubscribe on unmount
        return () => {
            clearInterval(interval)
          };
      }, [_timer]);
      console.log(_timer);
    const validatePhone = async() =>{

        if(_phoneNumber.length!==10){
            //alert('Invalid number');
            ToastAndroid.show('Enter a valid phone number',ToastAndroid.CENTER);
            return;
        }

        try{

            _setTimer(60)
            setIsLoading(true);
            const pno = '+91'+_phoneNumber;
            console.log(pno);
            const res = await auth().signInWithPhoneNumber(pno);
            setConfirm(res);
            setIsLoading(false);
            //alert('otp sent');
            //navigation.navigate('AppFlow',{screen:'OTPScreen'})

        }catch(err){
            console.log(err)
            if( (err.message)=='[auth/too-many-requests] We have blocked all requests from this device due to unusual activity. Try again later.')
            ToastAndroid.show("Too many requests, try again later!",ToastAndroid.SHORT);
            else
            ToastAndroid.show("Couldn't complete request, try again later!",ToastAndroid.SHORT);
            setIsLoading(false);
        }
    }

    const handleOTP = async() =>{

       
        const OTP = pinTxt1+pinTxt2+pinTxt3+pinTxt4+pinTxt5+pinTxt6;
        
        try{
            
            setIsLoading(true);
            const res = await confirm.confirm(OTP);
            console.log(res);
           // alert('sign in successful!');
            // navigation.navigate('ClientFlow',{screen:'NewsFlow'})
            const data = {
                phoneNumber: _phoneNumber,
                verified: true
            }
            props.validatePhoneNumber(data,navigation)
            setIsLoading(false);
        }catch(err){

            ToastAndroid.show('Invalid OTP',ToastAndroid.SHORT);
            console.log(err.message)
            setIsLoading(false);
        }
    }

   

    if(confirm== '')
    {
        
        return (
            <View style={{backgroundColor:'white',flex:1,paddingHorizontal:moderateScale(30),paddingTop:moderateScale(20)}}>
                {/* <View style={[ ]}>
                    <TouchableOpacity style={[styles.alignItemsLeft, styles.alignViewCenter, ]}
                        onPress={() => navigation.navigate('Auth')}
                    >
                        <Image 
                        source={BackIcon}
                        style={{height:moderateScale(50),width:moderateScale(50)}}
                        />
                    </TouchableOpacity>
                    
                </View> */}
              
                
                <View style={[styles.alignViewCenter, styles.alignItemsLeft, { marginTop: verticalScale(35),alignItems:'center'}]}>
                    <Text style={[{color:'#8940FF',fontSize:moderateScale(32),fontWeight:'500',letterSpacing:moderateScale(0)}]}>
                        Login/Create Account
                    </Text>
                    {/* <Text style={[styles.font_22, styles.font_med, {color: '#5E5C5C'}]}>
                        Create a new account to
                    </Text>
                    <Text style={[styles.font_22, styles.font_med, {color: '#8940FF'}]}>
                        Register a CA/Lawyer
                    </Text> */}
                </View>
        
            
            <View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '100%', marginTop: verticalScale(56), marginBottom: verticalScale(15)}]}>
                <Text style={[ styles.font_med, {color: '#5E5C5C',fontSize:moderateScale(22)}]}>
                   Enter your phone number
                </Text>
            </View>
            <View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '100%',flexDirection:'row',justifyContent:'space-between'}]}>
                <TextInput value='+91' style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,width:'20%',height:45,textAlign:'center',fontSize:15,color:'black'}}/>
        
                <TextInput 
                    style={{borderColor:'rgba(137, 64, 255, 0.3)',borderWidth:1,borderRadius:10,height:45,width:'75%',textAlign:'center',fontSize:15,textAlign:'left',paddingLeft:15,color:'black'}} placeholder='Type in your phone number' 
                    value={_phoneNumber} onChangeText={(_phoneNumber) => _setphoneNumber(_phoneNumber)}
                    keyboardType='number-pad'
                    maxLength={10}
                />
            </View>
           
            <TouchableOpacity 
                style={[styles.loginButton, styles.alignViewCenter, styles.alignItemsCenter,{alignSelf:'center',marginTop:moderateScale(20)}]}
                onPress={validatePhone}
            >
               { !isLoading ?<Text style={[styles.font_25, styles.textWhite, styles.font_600,{fontWeight:'400'}]}>
                 SIGN UP
                </Text>:
                < BarIndicator color='white' size={20}/>}
            </TouchableOpacity>
            {/* <MaterialIndicator color='#8940FF' /> */}
            </View>
          )
    }

    return (

        <View style={{backgroundColor:'white',flex:1,paddingHorizontal:moderateScale(30),paddingTop:moderateScale(20)}}>
           
        <View style={[ {alignItems:'center',paddingTop:moderateScale(24)}]}>
            
            <Image source={OTPGraphic} style={{height:moderateScale(140),width:moderateScale(200)}} />
            
        </View>
      
        
        <View style={[  {width: '100%', marginTop: verticalScale(15),alignItems:'center',flexDirection:'column'}]}>
            <Text style={[styles.textBlack, {fontWeight:'bold',fontSize:moderateScale(21)}]}>
                Enter Verification Code
            </Text>
            <Text style={[styles.font_22, styles.font_med, {color: '#5E5C5C',textAlign:'center'}]}>
            6 digit code has been send to +91 {_phoneNumber}. <Text style={{textDecorationLine:'underline',color: '#8940FF',fontSize:15,fontWeight:'normal'}} onPress={() => setConfirm('')}>Edit</Text>
            </Text>
            
        </View>

    {!_OTPvisibility ?<View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '100%',flexDirection:'row',marginTop: verticalScale(30),justifyContent:'space-between'}]}>< BarIndicator color='#D9D9D9' size={50}/></View>:<View style={[styles.alignViewCenter, styles.alignItemsLeft, {width: '100%',flexDirection:'row',marginTop: verticalScale(30),justifyContent:'space-between'}]}>

        <TextInput 
            value={pinTxt1}
            ref={pin1} 
            style={styles.pinInput}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={(pinTxt1) => 
            {  
                setPintTxt1(pinTxt1);
                // _setotp(_otp+pinTxt1);
                if(pinTxt1.length >=1){
                pin2.current.focus();
                }
            }}
        />

        <TextInput 
            value={pinTxt2} 
            ref={pin2}
            style={styles.pinInput}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={(pinTxt2) => 
                {  
                    setPintTxt2(pinTxt2);
                    // _setotp(_otp+pinTxt2);
                    if(pinTxt2.length >=1){
                    pin3.current.focus();
                    }else if(pinTxt2.length<1){
                        pin1.current.focus();
                        // setPintTxt1('')
                    }
                }}
        />

        <TextInput 
            value={pinTxt3} 
            ref={pin3}
            style={styles.pinInput}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={(pinTxt3) => 
                {  
                    setPintTxt3(pinTxt3);
                    // _setotp(_otp+pinTxt3);
                    if(pinTxt3.length >=1){
                    pin4.current.focus();
                    }else if(pinTxt3.length<1){
                        pin2.current.focus();
                        // setPintTxt2('')
                    }
                }}
        />
        
        <TextInput 
            value={pinTxt4} 
            ref={pin4}
            style={styles.pinInput}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={(pinTxt4) => 
                {  
                    setPintTxt4(pinTxt4);
                    // _setotp(_otp+pinTxt4);
                    if(pinTxt4.length >=1){
                    pin5.current.focus();
                    }else if(pinTxt4.length<1){
                        pin3.current.focus();
                        // setPintTxt3('')
                    }
                }}
        />

        <TextInput 
            value={pinTxt5}
            ref={pin5}
            style={styles.pinInput}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={(pinTxt5) => 
                {  
                    setPintTxt5(pinTxt5);
                    // _setotp(_otp+pinTxt5);
                    if(pinTxt5.length >=1){
                    pin6.current.focus();
                    }else if(pinTxt5.length<1){
                        pin4.current.focus();
                        // setPintTxt4('')
                    }
                }}
        />

        <TextInput 
            value={pinTxt6} 
            ref={pin6}
            style={styles.pinInput}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={(pinTxt6) => 
                {  
                    setPintTxt6(pinTxt6);
                    // _setotp(_otp+pinTxt6);
                    if(pinTxt6.length >=1){
                        pin6.current.focus();
                    }else if(pinTxt6.length<1){
                        pin5.current.focus();
                        // setPintTxt5('')
                    }
                }}
        />
      

    </View>
   }
   <Text style={_timer>0 ?{textDecorationLine:'underline',color: '#8940FF50',fontSize:15,alignSelf:'center',marginTop:10} :{textDecorationLine:'underline',color: '#8940FF',fontSize:13,alignSelf:'center',marginTop:10}} onPress={() => validatePhone()} disabled={_timer>0 || _OTPvisibility==false ? true:false}>Resend OTP { _timer?(_timer):null}</Text>
    <TouchableOpacity 
            style={[styles.loginButton, styles.alignViewCenter, styles.alignItemsCenter,{alignSelf:'center',marginTop:15}]}
            onPress={handleOTP}
        >
            { !isLoading ?<Text style={[styles.font_25, styles.textWhite,]}>
                    Next
                    </Text>:
                < BarIndicator color='white' size={20}/>}
        </TouchableOpacity>
   
    
    </View>
  

    )
}

export default connect(null, {
    changeVariable,
    validatePhoneNumber
  })(SignupClientScreen);