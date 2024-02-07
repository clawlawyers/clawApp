import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

const NewsItem = ({news, isOnboarding}) => {
  
  const navigation = useNavigation();
  function NewsRedirect(){
    (isOnboarding)
      navigation.navigate('NewsScreen')
  
  }
 return (
    <TouchableOpacity style={[styles.newsContainer,{width:'100%'}]} onPress={NewsRedirect}>
      <Image
        style={styles.newsImage}
        source={{uri: news.imageUrl}}
        resizeMode="cover"
      />
      <View style={[styles.alignViewCenter, styles.alignItemsLeft]}>
        <Text style={[styles.font_20, styles.font_bold, styles.textBlack]}>{news.title}</Text>
        <Text style={[styles.font_14, styles.marginB_5, styles.textBlack]}>{news.date}, {news.time}</Text>
      </View>
    </TouchableOpacity>
 );
};


export default NewsItem;