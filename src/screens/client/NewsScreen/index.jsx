import { View, Text, ScrollView, Touchable, TouchableOpacity,Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import NewsItem from '../../../components/NewsItem';
import data from '../../../data/dummy'
import styles from '../../../styles';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { verticalScale } from '../../../styles/mixins';

const NewsScreen = ({isUser}) => {
    const [newsData,setNewsData] = useState([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused();  
  const getNews = async() => {

      var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "type": 0
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
  },[isFocused]);

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
        <ScrollView 
          showsVerticalScrollIndicator={false}
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

export default NewsScreen