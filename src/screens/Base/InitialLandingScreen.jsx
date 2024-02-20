import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation, useIsFocused} from '@react-navigation/native'
import { fetchData } from '../../actions/async-storage'
import { LocalSignIn } from '../../actions/authentication'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Connect, connect } from 'react-redux'
const InitialLandingScreen =(props) => {

//     const [Activeuser, setUser] = useState(null);
   const navigation = useNavigation();
   const isFocused = useIsFocused();
// console.log(props);
    const getActiveUser =async() => {

    //     console.log('isnide get');
    //     console.log(LocalSignIn)
    //   LocalSignIn(navigation);
        const userId = await AsyncStorage.getItem('userId');
        console.log(userId);
        if(userId){

            props.LocalSignIn(userId,navigation);
            
        }else{

            navigation.navigate('SignupFlow')
        }
   
  }
    useEffect(() =>{
      getActiveUser();
    },[isFocused]);
  return (
    <View style={{backgroundColor:'white',flex:1,justifyContent:'center'}}>
    
      <Image source={require('../../assets/app-icon.png')} style={{alignSelf:'center'}}/>
    </View>
  )
}

export default connect(null,{
  LocalSignIn
})(InitialLandingScreen);