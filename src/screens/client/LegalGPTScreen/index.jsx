import { View, Text, ScrollView, Touchable, TouchableOpacity,Image, FlatList, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import NewsItem from '../../../components/NewsItem';
import data from '../../../data/dummy'
import styles from '../../../styles';
import Back from '../../../assets/back-icon.png'
import { useNavigation } from '@react-navigation/native';
import CLAW from '../../../assets/app-icon.png'
import { verticalScale } from '../../../styles/mixins';
import BackIcon from '../../../assets/back-button.png'
import GPTSendIcon from '../../../assets/GPTSendIcon.png';
import { moderateScale } from '../../../styles/mixins';
const LegalGPTScreen = ({isUser}) => {
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
    <View style={[styles.alignItemsCenter, styles.alignViewCenter,{paddingHorizontal:20,paddingTop:20,backgroundColor:'white',flex:1}]}>
     <View style={[styles.alignViaRow, styles.alignItemsCenter,styles.alignViewCenter, {width: '100%'},]}>
            <TouchableOpacity 
              style={[styles.alignItemsLeft, styles.alignViewCenter, {width: '100%'}]}
              onPress={() => navigation.navigate('OnboardingSnippet')}
            >
                <Image 
                source={BackIcon}
                style={{height:moderateScale(50),width:moderateScale(50)}}
                />
            </TouchableOpacity>            
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:25,color:'black',fontWeight:'500'}} >
            Legal GPT
          </Text>
          <Text style={{fontSize:12}}>
          Legal GPT- From Legal Queries to Case Insights,</Text><Text style={{fontSize:12}}> Navigate Legal Matters Effortlessly.
          </Text>
        </View>
        <FlatList />
        <View style={{borderWidth:1,borderColor:'#8940FF60',borderRadius:10,width:'100%',flexDirection:'row',height:moderateScale(52)}}>
          <TextInput placeholder='Message GPT...' style={{width:'85%'}} />
          <TouchableOpacity style={{backgroundColor:'#8940FF',width:'12%',justifyContent:'center',alignItems:'center',borderRadius:10,margin:moderateScale(5)}}>
            <Image source={GPTSendIcon} style={{width:moderateScale(15),height:moderateScale(20)}}/>
          </TouchableOpacity>
        </View>
        
      </View>
  )
}

export default LegalGPTScreen