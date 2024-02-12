import { View, Text, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import React from 'react'
import messageList from '../../../data/messageList'
import Search from '../../../assets/search-icon.png'
import styles from '../../../styles'

const chatMembers = [
  {
      id: 0,
      imageUrl: "https://example.com/image3.jpg",
      name: "Alice Smith",
      lastActive: "5 minutes ago"
  },
  {
      id: 1,
      imageUrl: "https://example.com/image4.jpg",
      name: "Bob Johnson",
      lastActive: "10 minutes ago"
  },
  {
      id: 2,
      imageUrl: "https://example.com/image5.jpg",
      name: "Charlie Brown",
      lastActive: "30 minutes ago"
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
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={[styles.container, styles.paddingH_20, styles.alignViewCenter, styles.alignItemsCenter]}>
        <View style={[styles.alignViewCenter, styles.alignItemsCenter]}>
          <Text style={[styles.textBlack, styles.font_35, styles.font_700]}>Chats</Text>
        </View>

        <View style={[styles.alignViaRow, styles.alignItemsCenter, styles.alignViewCenter, styles.searchBar]}>
              <TouchableOpacity >
                <Image 
                    source={Search}
                    style={styles.searchIcon}
                />
              </TouchableOpacity>
              <TextInput
                    placeholder='Search'
                    placeholderTextColor='#999999'
                    style={[ styles.font_20,styles.marginL_10, styles.textBlack, { width: '90%'}]}
              />
                  
          </View>
          <ScrollView>
            {chatMembers.map((item) => {

              return(
                <View><Image source={item.imageUrl} style={{height:100,width:100}}/><Text>{item.name}</Text><Text>{item.lastActive}</Text></View>
              )
            })}
          </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default MessageScreen