import { View, Text, ScrollView, Touchable, TouchableOpacity,Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import NewsItem from '../../../components/NewsItem';
import data from '../../../data/dummy'
import styles from '../../../styles';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import callHistory from '../../../data/callLog'
import CallListItem from '../../../components/CallListItem'
import { horizontalScale, moderateScale, verticalScale } from '../../../styles/mixins'
import {useSelector} from 'react-redux'
import {ZegoUIKitPrebuiltCall,  ONE_ON_ONE_VOICE_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

import userIcon from '../../../assets/userIcon.png'
import * as ZIM from 'zego-zim-react-native';
import * as ZPNs from 'zego-zpns-react-native';
import ZegoUIKitPrebuiltCallService, {ZegoSendCallInvitationButton,} from '@zegocloud/zego-uikit-prebuilt-call-rn';


const ContactList = () => {
    const navigation = useNavigation();   
    const [filter, setFilter] = useState('All')
    const [callData, setCallData] = useState(callHistory)
    const state = useSelector(state => state.variables);
    const isFocused = useIsFocused()
    //console.log(state)
    const [_lawyerList, _setLawyerList] = useState([]);
    const getLawyers = () => {
      
      const requestOptions = {
      method: "GET",
      redirect: "follow"
      };
    
       fetch("https://claw-backend.onrender.com/api/v1/user/list", requestOptions)
      .then((response) => response.json())
      .then((result) => {
       // console.log(result)
        let resultList = [];
        result.data.map(item => {

          if(item.firstName)
          {resultList.push(item);}
        })
        _setLawyerList(resultList);

      })
      .catch((error) => console.error(error));

    }

   console.log('lawyer list fetched', _lawyerList)

    useEffect(() => {

      onUserLogin(state.uid, state.firstName, state.lastName)
      getLawyers()
    },[isFocused])

    const onUserLogin = async (userID,fname, lname) => {

      console.log('inside onuserLogin')
      
      const name = fname+lname;
      return ZegoUIKitPrebuiltCallService.init(
        170557473, // You can get it from ZEGOCLOUD's console
        'd7a3523f4b160a91a35cc6c8064f689880face4cc34c1270a3812ba1046f5825', // You can get it from ZEGOCLOUD's console
        userID, // It can be any valid characters, but we recommend using a phone number.
        fname,
        [ZIM, ZPNs],
        {
            ringtoneConfig: {
                incomingCallFileName: 'ringtone.mp3',
                outgoingCallFileName: 'outgoing_ringtone.mp3',
            },
            notifyWhenAppRunningInBackgroundOrQuit : true,
           
            androidNotificationConfig: {
                channelID: "voice_call",
                channelName: "voice_call",
            },
    
            requireConfig : (data) => {
              return {
    
                onHangUp : duration =>{
                  console.log(duration);
                  navigation.navigate('ContactList')
                }
              }
            }
            
        });
    }
    return (
      <View style={[styles.container,]}>
        <View style={[styles.alignViewCenter, styles.alignItemsCenter]}>
            <Image  
              source={require('../../../assets/app-icon.png')}
              style={[styles.logoStyle,{marginTop: verticalScale(30)}]} 
            />
        </View>

        <View style={[styles.alignViewCenter, styles.alignItemsLeft]}>
          <Text style={[styles.textBlack, {fontWeight:'500',fontSize:moderateScale(30)}]}> Recent calls </Text>
        </View>
       
          <ScrollView style={{paddingHorizontal:moderateScale(20)}}>
            {_lawyerList.map((data, index)=>{
              // <CallListItem key={index} data={data}/>
             return(
              <View style={{flexDirection:'row',justifyContent:'space-between',padding:moderateScale(10)}} key={data._id}>
                <View style={{flexDirection:'row'}}>
                  <Image source={userIcon} style={{height:moderateScale(60),width:moderateScale(60),marginRight:moderateScale(5)}}/>
                  <View>
                    <Text style={{color:'black',marginTop:moderateScale(5)}}>{data.firstName} {data.lastName}</Text>
                  </View>
                  <Text> {data.phoneNumber}</Text>
                </View>
                <ZegoSendCallInvitationButton 
                  invitees = {[{userID : data._id, userName : data.firstName }]} 
                  isVideoCall = {false}
                  resourceID = {'voice_call'}
                />
              </View>
              )
            })}
          </ScrollView>
          {/* <ScrollView style={{paddingHorizontal:moderateScale(20)}}>
            {_lawyerList.map((data, index)=>(
              // <CallListItem key={index} data={data}/>
              <View>
                  <Text onPress={() => navigation.navigate('CallScreen',{userId : data._id, userName : data.firstName})}>{data.firstName} {data.phoneNumber}</Text>
                  <ZegoSendCallInvitationButton
                    invitees={[{userID: data._id, userName: data.firstName}]}
                    isVideoCall={false}
                    resourceID={"voice_call"} // Please fill in the resource ID name that has been configured in the ZEGOCLOUD's console here.
                />
                
              </View> 
              
              
            ))}
          </ScrollView> */}
        {/* missed call filter logic */}  
      </View>
  )
}

export default ContactList