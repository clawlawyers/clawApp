import { View, Text, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import messageList from '../../../data/messageList'
import Search from '../../../assets/search-icon.png'
import styles from '../../../styles'
import { moderateScale } from '../../../styles/mixins'
import ProfileIcon from '../../../assets/stock-photo.png';
import {useNavigation} from '@react-navigation/native'
const chatMembers = [
  {
      id: 0,
      imageUrl: "https://example.com/image3.jpg",
      name: "Alice Smith",
      lastActive: "5 minutes ago",
      uid : '65cbd5153ca35f1f69e2611b'
  },
  {
      id: 1,
      imageUrl: "https://example.com/image4.jpg",
      name: "Bob Johnson",
      lastActive: "10 minutes ago",
      uid : '65c659c3b9090a6548f3d3fd'
  },
  {
      id: 2,
      imageUrl: "https://example.com/image5.jpg",
      name: "Charlie Brown",
      lastActive: "30 minutes ago",
      uid : 'temporaryUser3'
  },
  {
      id: 3,
      imageUrl: "https://example.com/image6.jpg",
      name: "David Williams",
      lastActive: "1 hour ago"
  },
  {
      id: 4,
      imageUrl: "https://example.com/image7.jpg",
      name: "Eve Davis",
      lastActive: "2 hours ago"
  }
]


const MessageScreen = () => {

  const navigation = useNavigation();
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
                  style={{flexDirection:'row',justifyContent:'flex-start',marginBottom:10}} 
                  onPress={()=> navigation.navigate('ChatWindow',{
                      name: item.name,
                      photo_url : ProfileIcon,
                      uid : item.uid
                  })}
                >
                  <Image source={ProfileIcon} style={{height:moderateScale(80),width:moderateScale(80)}}/>
                  
                  <View style={{justifyContent:'center',marginLeft:moderateScale(22)}}>
                    <Text style={{fontSize:moderateScale(24),color:'black'}}>{item.name}</Text><Text>{item.lastActive}</Text>
                  
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