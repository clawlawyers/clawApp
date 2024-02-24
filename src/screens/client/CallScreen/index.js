import React,{useRef } from "react";
import  {
    ZegoUIKitPrebuiltCall,
    ONE_ON_ONE_VOICE_CALL_CONFIG,
    ZegoMenuBarButtonName,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import { Text, View ,Image} from 'react-native'
import {connect} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import userIcon from '../../../assets/userIcon.png'

const CallScreen = ({route}) => {
    const navigation = useNavigation();
    const {userId, userName} = route.params;
    randomUserID = String(Math.floor(Math.random() * 100000))
    return (
        <View style={{flex: 1}}>
          <ZegoUIKitPrebuiltCall
            appID={170557473}
            appSign= 'd7a3523f4b160a91a35cc6c8064f689880face4cc34c1270a3812ba1046f5825'
            userID={userId}
            userName={userName}
            callID='7880982076'
            
            config={{
              ...ONE_ON_ONE_VOICE_CALL_CONFIG,
              avatarBuilder: () => {
                return <View style={{width: '100%', height: '100%'}}>
                 <Image
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="cover"
                  source={userIcon}
                  />
                </View>
              },
              onOnlySelfInRoom: () => { navigation.navigate('ContactList') },
              onHangUp: () => {navigation.navigate('ContactList')},
            }}
          />
        </View>
    )
}


export default connect(null,{

})(CallScreen)