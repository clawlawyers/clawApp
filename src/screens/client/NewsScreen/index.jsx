import { View, Text, ScrollView, Touchable, TouchableOpacity,Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import NewsItem from '../../../components/NewsItem';
import data from '../../../data/dummy'
import styles from '../../../styles';
import Back from '../../../assets/back-icon.png'
import { useNavigation } from '@react-navigation/native';
import CLAW from '../../../assets/app-icon.png'
import { verticalScale } from '../../../styles/mixins';

const NewsScreen = ({isUser}) => {
    const [apiData,setApiData] = useState([]);
    const navigation = useNavigation();

    // const baseUrl = 'https://inshortsapi.vercel.app/news?category=business';
    //   try {
    //     fetch(baseUrl)
    //       .then(response => response.json())
    //       .then(responseJson => {
            
    //         setApiData(responseJson);
    //         // console.log(responseJson)
    //       });
    //   } catch (err) {
    //     console.log('err', err);
    //   }
    // //   setApiData(apiData.data)
    // //   console.log(apiData)
   

  return (
    <View style={[styles.alignItemsCenter, styles.alignViewCenter]}>
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
      {data['data'].map((news, id) => {
        console.log(news)
        return(
        <NewsItem key={id} news={news} isOnboarding={false}/>
      )})}
      </ScrollView>
    </View>
  )
}

export default NewsScreen