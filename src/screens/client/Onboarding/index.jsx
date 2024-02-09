import { View, Text, Image, TouchableOpacity, TextInput,KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React,{useEffect, useState} from 'react'
import styles from '../../../styles'
import Robot from '../../../assets/Robot.png';
import NewsItem from '../../../components/NewsItem'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import Search from '../../../assets/search-icon.png'
import MenuIcon from '../../../assets/MenuIcon.png'
import MessageIcon from '../../../assets/MessageIcon.png'
import CustomerServiceIcon from '../../../assets/CustomerServiceIcon.png'
const Onboarding = () => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [news, setNews] = useState();
  const [isLoading, setIsLoading] = useState(true);
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

      console.log('News data @@', newsData[0]);
      setNews(newsData[0]);
      console.log(news);
      setIsLoading(false);
    
  }

  useEffect(() => {

    getNews();
  },[isFocused]);
 
  return (
    // <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1, }}>
      <TouchableWithoutFeedback onPress={e=> Keyboard.dismiss()}>
        <View style={[styles.container, styles.paddingH_20, styles.alignViewCenter, styles.alignItemsCenter,{justifyContent:'flex-start',paddingVertical:20}]}>
          
          {/* connect with bar */}
          <View style={[{marginTop:20,flexDirection:'row',paddingBottom:0,justifyContent:'space-between',width:'100%',marginTop:20}]}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image 
                source={MenuIcon}
                styles={[styles.backButtonIcon,]}
                
              />
            </TouchableOpacity>
         
            <Image  
              source={require('../../../assets/app-icon.png')}
              style={[styles.logoStyle,]} 
            />
            <TouchableOpacity onPress={() => navigation.navigate('MessageScreen')}
            style={{marginTop:4}}>
              <Image 
                source={MessageIcon}
                styles={[styles.backButtonIcon,]}
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.alignViaRow, styles.alignItemsCenter, styles.alignViewCenter,styles.searchBar,{width:'100%'}]}>
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


          {/* get advice box */}
          <TouchableOpacity 
            style={[styles.alignViewCenter, styles.alignViewSplit, styles.adviceBox,{backgroundColor:'#8940FF',width:'100%',}]}
            onPress={()=>navigation.navigate('ContactList')}
          >
            <View style={[styles.alignItemsCenter, styles,{flexDirection:'row',justifyContent:'space-between',flex:1,paddingHorizontal:20}]}>
                <Text style={[styles.font_23, styles.font_med,styles.textWhite]}>Calls</Text>
                <View style={[styles.alignViewCenter,styles.alignItemsCenter]}>
                    
                </View>
               
            
              <Image 
                source={CustomerServiceIcon}
                style={styles.caOnboardingImage}
              />
            </View>
            <View>
            </View>
          </TouchableOpacity>
                    
          <View style={[styles.alignViewCenter, styles.alignItemsLeft,{justifyContent:'flex-start',alignSelf:'flex-start',width:'100%'}]}>
          <View style={{height:10}}></View>
            <Text style={[styles.textBlack, styles.font_700, styles.font_25,]}> Latest News </Text>
          </View>

          <View style={{height:5}}></View>
          {/* News Button */}
          <TouchableOpacity
            onPress={(e)=> navigation.navigate('News')}
            style={[styles.newsBox, styles.alignViewCenter, styles.alignItemsCenter,{width:'100%'}]} 
          >
                {isLoading?null:<NewsItem news={news} isOnboarding={true} />}
          </TouchableOpacity>

          <TouchableOpacity
                style={{
                    
                    alignItems:'center',
                    justifyContent:'space-between',
                    position:'absolute',             flex:1,
                    flexDirection:'row',      bottom:15,
                    paddingHorizontal:15,
                    paddingVertical:7,
                    right: 18,
                    backgroundColor:'#8940FF',
                    borderRadius:18,
                }}
              
                onPress={() => navigation.navigate('Legal GPT')}

          >
                <Image source={Robot}/><Text style={{color:'white',marginHorizontal:5}}>Ask GPT</Text>
            </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  )
}

export default Onboarding