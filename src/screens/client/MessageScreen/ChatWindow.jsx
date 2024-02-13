import { View, Text, ScrollView, Touchable, TouchableOpacity,Image, FlatList, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import NewsItem from '../../../components/NewsItem';
import data from '../../../data/dummy'
import styles from '../../../styles';
import Back from '../../../assets/back-icon.png'
import { useNavigation } from '@react-navigation/native';
import leftArrow from '../../../assets/leftArrow.png'
import { verticalScale } from '../../../styles/mixins';
import firestore from '@react-native-firebase/firestore';
import GPTSendIcon from '../../../assets/GPTSendIcon.png';
import { moderateScale } from '../../../styles/mixins';

const ChatWindow = ({route})=> {

    const {name,uid,photo_url} = route.params;
    console.log(name)
    const navigation = useNavigation();
    return (
        <View style={[styles.alignItemsCenter, styles.alignViewCenter,{paddingHorizontal:20,paddingTop:20,backgroundColor:'white',flex:1}]}>
         <View style={[ {width: '100%', flexDirection:'row'},]}>
                <TouchableOpacity 
                  style={[styles.alignItemsLeft, styles.alignViewCenter, {}]}
                  onPress={() => navigation.navigate('MessageScreen')}
                >
                    <Image 
                    source={leftArrow}
                    style={{height:moderateScale(20),width:moderateScale(40),marginRight:moderateScale(10)}}
                    />
                </TouchableOpacity>    
                <Image source={photo_url} style={{height:moderateScale(40),width:moderateScale(40),marginHorizontal:moderateScale(10)}}/>  
                <Text style={{fontWeight:'bold',color:'black',fontSize:15}}>{name}</Text>      
            </View>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:25,color:'black',fontWeight:'500'}} >
              
              </Text>
              <Text style={{fontSize:12}}>
             </Text><Text style={{fontSize:12}}> 
              </Text>
            </View>
            <FlatList />
            <View style={{borderWidth:1,borderColor:'#8940FF60',borderRadius:10,width:'100%',flexDirection:'row',height:moderateScale(52)}}>
              <TextInput placeholder='' style={{width:'85%'}} />
              <TouchableOpacity style={{backgroundColor:'#8940FF',width:'12%',justifyContent:'center',alignItems:'center',borderRadius:10,margin:moderateScale(5)}}>
                <Image source={GPTSendIcon} style={{width:moderateScale(15),height:moderateScale(20)}}/>
              </TouchableOpacity>
            </View>
            
          </View>
      )
}

export default ChatWindow;