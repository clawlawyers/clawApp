import { View, Text, ScrollView, Image, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import NewsItem from '../../../components/NewsItem';

import styles from '../../../styles';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { verticalScale } from '../../../styles/mixins';

const NewsScreen = ({isUser}) => {
    const [newsData,setNewsData] = useState([]);
    const [newsType, setNewType] = useState(0);
    const isFocused = useIsFocused();  
  const getNews = async() => {

      var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "type": newsType
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const res = await fetch("https://claw-backend.onrender.com/api/v1/news", requestOptions);

    const response = await res.json();
    const response2 = response.data;

    let newsData = [];
      response2.map((item) =>{

        newsData.push(item);
        
      })

      setNewsData(newsData);
    }

  useEffect(() => {

    getNews();
  },[isFocused,newsType]);

  return (
    <View style={[styles.alignItemsCenter, styles.alignViewCenter,{backgroundColor:'white'}]}>
        <View style={[styles.alignViewCenter, styles.alignItemsCenter]}>
          <Image  
            source={require('../../../assets/app-icon.png')}
            style={[styles.logoStyle,{marginTop: verticalScale(30)}]} 
          />
        </View>
        <View style={[styles.alignViewCenter, styles.alignItemsLeft]}>
          <Text style={[styles.textBlack, styles.font_700, styles.font_25,]}> Latest News </Text>
        </View>
        <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#D9D9D9'}}>
           <TouchableOpacity style={newsType==0 ? styles2.activeNewsTab: styles2.inactiveNewsTab} onPress={()=>setNewType(0)}>
             <Text style={newsType==0 ? {color:'white'}: {color:'black'}}>Financial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={newsType==1 ? styles2.activeNewsTab: styles2.inactiveNewsTab} onPress={()=>setNewType(1)}>
              <Text style={newsType==1 ? {color:'white'}: {color:'black'}}>Legal</Text>
            </TouchableOpacity>
        </View>
       
        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{marginBottom:70}}
        >
      {newsData.map((item) => {
        //console.log(news)
        return(
        <NewsItem key={item._id} news={item} isOnboarding={false}/>
      )})}
      </ScrollView>
    </View>
  )
}

const styles2 = StyleSheet.create({

  activeNewsTab :{
    alignItems:'center',
    width:'50%',
    backgroundColor:'#8940FF',
     borderRightWidth:1,
     borderColor:'#D9D9D9', 
     padding:10},

  inactiveNewsTab :{
    alignItems:'center',
    width:'50%', 
    borderRightWidth:1, 
    padding:10,
    borderColor:'#D9D9D9'
  }

})

export default NewsScreen