import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../styles'
import { horizontalScale, moderateScale, verticalScale } from '../../../styles/mixins'
import { useNavigation} from '@react-navigation/native';
const NewsDetail = ({route}) => {

    const {news} = route.params;
    console.log('news',news);
    const navigation = useNavigation();
  return (
    <View style={[styles.alignItemsCenter, styles.alignViewCenter]}>
       <View style={[styles.alignViewCenter, styles.alignItemsCenter]}>
          <Image  
            source={require('../../../assets/app-icon.png')}
            style={[styles.logoStyle,{marginTop: verticalScale(30)}]} 
          />
        </View>
        <View style={[styles.alignViewSplit, {width: '90%'}]}>
            <View style={[styles.alignViewCenter, styles.alignItemsCenter]}>

                <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
                  <Image  
                  source={require('../../../assets/back-button.png')}
                  style={[styles.backButtonIcon]} 
                  />
                </TouchableOpacity>
                
            </View>
        
            <View style={[styles.alignItemsCenter, styles.alignViewCenter, styles.alignViaRow]}>
              <TouchableOpacity>
                <Image  
                      source={require('../../../assets/share-button.png')}
                      style={[styles.backButtonIcon, {marginRight: horizontalScale(20)}]} 
                  />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image  
                  source={require('../../../assets/hamburger-button.png')}
                  style={[styles.backButtonIcon]} 
                />
              </TouchableOpacity>
            </View>
        </View>

        <View style={{marginTop:20,paddingHorizontal:20}}>
          <Text style={[styles.font_20, styles.font_bold, styles.textBlack]}>{news.title}</Text>
          <Text style={[styles.font_14, styles.marginB_5, styles.textBlack]}>{news.publishedAt.slice(0, news.publishedAt.indexOf('T'))}, {news.publishedAt.slice(news.publishedAt.indexOf('T')+1, news.publishedAt.indexOf('.'))} hours</Text>

          <Image
            style={[styles.newsImage,{width:'auto',height:moderateScale(200)}]}
            source={{uri: news.imageUrl}}
            resizeMode="cover"
          />
          <Text style={{color:'black',marginTop:15}}>{news.description}</Text>
        </View>
    </View>
  )
}

export default NewsDetail;