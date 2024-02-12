import { View, Text, Image ,StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import FastImage from 'react-native-fast-image'
import RegisterAnimation from '../../assets/RegisterAnimation.gif';
import {useNavigation} from '@react-navigation/native'
export default function RegisterSplashScreen() {

  const navigation = useNavigation();

  const redirect = () => {
    
    navigation.navigate('ClientFlow');
  }

  useEffect(() => {
    setTimeout(()=>{
      redirect();
    },3000)
  })
  return (
    <View style={{backgroundColor:'white',flex:1,flexDirection:'column',alignItems:'center',paddingTop:100}}>
       <FastImage
       style={{width:250,height:150}}
        source={require('../../assets/Animation2.gif')}   
    />
      <Text style={{fontWeight:'bold',fontSize:20
    }}>Successfully Registered</Text>
    </View>
  )
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});