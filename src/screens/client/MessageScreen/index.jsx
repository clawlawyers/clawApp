import { View, Text, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import messageList from '../../../data/messageList'
import Search from '../../../assets/search-icon.png'
import styles from '../../../styles'
import { moderateScale } from '../../../styles/mixins'
import ProfileIcon from '../../../assets/userIcon.png';
import {useNavigation, useIsFocused} from '@react-navigation/native'
import {useSelector} from 'react-redux'
// const chatMembers = [
//   {
//       id: 0,
//       imageUrl: "https://example.com/image3.jpg",
//       name: "Alice Smith",
//       lastActive: "5 minutes ago",
//       uid : '65cbd5153ca35f1f69e2611b'
//   },
//   {
//       id: 1,
//       imageUrl: "https://example.com/image4.jpg",
//       name: "Bob Johnson",
//       lastActive: "10 minutes ago",
//       uid : '65c659c3b9090a6548f3d3fd'
//   },
//   {
//       id: 2,
//       imageUrl: "https://example.com/image5.jpg",
//       name: "Charlie Brown",
//       lastActive: "30 minutes ago",
//       uid : 'temporaryUser3'
//   },
//   {
//       id: 3,
//       imageUrl: "https://example.com/image6.jpg",
//       name: "David Williams",
//       lastActive: "1 hour ago"
//   },
//   {
//       id: 4,
//       imageUrl: "https://example.com/image7.jpg",
//       name: "Eve Davis",
//       lastActive: "2 hours ago"
//   }
// ]

 

const MessageScreen = () => {

    const navigation = useNavigation();

    const [chatMembers, setChatMembers] = useState([]);
    const isFocused = useIsFocused()
    const uid = useSelector(state => state.variables.uid);
    console.log('current user : ',uid);

    const getUsers = async() => {
  
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
    
    let userList = [];  
    const response = await fetch("https://claw-backend.onrender.com/api/v1/user/list", requestOptions)
    const responseJson = await response.json();
    
    responseJson.data.map((item) => {

      if(item._id !== uid)
      if(item.firstName){
        userList.push(item);
      }
    })

    console.log('response',userList);
      setChatMembers(userList);
      console.log('chat members', chatMembers);
    }
  
    useEffect(() => {

      getUsers();

    },[isFocused]);

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={[styles.container,{paddingHorizontal:moderateScale(20),alignItems:'center',paddingTop:moderateScale(20)}]}>
        <View style={[styles.alignViewCenter, styles.alignItemsCenter]}>
          <Text style={[styles.textBlack, styles.font_700,{fontSize:moderateScale(40)}]}>Chats</Text>
        </View>

        <View style={[styles.alignViaRow, styles.alignItemsCenter, styles.alignViewCenter, styles.searchBar,{marginTop:moderateScale(15)}]}>
              <TouchableOpacity >
                <Image 
                    source={Search}
                    style={styles.searchIcon}
                />
              </TouchableOpacity>
              <TextInput
                    placeholder='Search'
                    placeholderTextColor='#999999'
                    style={[ styles.font_20,styles.marginL_10, styles.textBlack, { width: '90%',marginBottom:-2}]}
              />
                  
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:moderateScale(15),width:'100%',paddingHorizontal:10}}>
            {chatMembers.map((item) => {

              return(
                <TouchableOpacity 
                  key={item._id}
                  style={{flexDirection:'row',justifyContent:'flex-start',marginBottom:10}} 
                  onPress={()=> navigation.navigate('ChatWindow',{
                      firstName: item.firstName,
                      lastName : item.lastName,
                      photo_url : ProfileIcon,
                      uid : item._id
                  })}
                >
                  <Image source={ProfileIcon} style={{height:moderateScale(80),width:moderateScale(80)}}/>
                  
                  <View style={{justifyContent:'center',marginLeft:moderateScale(22)}}>
                    <Text style={{fontSize:moderateScale(23),color:'black'}}>{item.firstName} {item.lastName}</Text><Text>{item.lastActive}</Text>
                  
                  </View>
                  
                </TouchableOpacity>
              )
            })}
          </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default MessageScreen