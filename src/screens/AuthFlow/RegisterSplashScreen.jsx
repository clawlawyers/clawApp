import { View, Text, Image ,StyleSheet} from 'react-native'
import React from 'react'
import RegisterAnimation from '../../assets/RegisterAnimation.gif';
import Video from 'react-native-video';
export default function RegisterSplashScreen() {

  console.log(RegisterAnimation);
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      {/* <Video source={{uri :'../../assets/Animation.mp4'}}   // Can be a URL or a local file.
      
       style={styles.backgroundVideo} /> */}
      <Image source={{uri:'https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif'}} style={{height:300,width:300,borderWidth:2}}/>
      <Text>Successfully Registered</Text>
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