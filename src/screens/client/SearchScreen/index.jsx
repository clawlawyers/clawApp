import { View, Text , TouchableOpacity, Image,TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import BackIcon from '../../../assets/back-button.png'
import styles from '../../../styles'
import { moderateScale } from '../../../styles/mixins'
import Search from '../../../assets/search-icon.png'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

const SearchResultScreen = (props) => {

    const {searchString} = props.route.params;
    console.log('searchString : ',searchString)
    const [_searchString, _setSearchString] = useState('');
    const [_ResultList, _setResultList] = useState([]);
    const navigation = useNavigation();

    const getSearchResults =  async(searchString) => {

        const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "search_line": _searchString
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    await fetch("https://gpt.clawlaw.in/api/v1/search", requestOptions)
      .then((response) => response.text())
      .then((result) => {
    
        console.log('search result : ',result)
        
      _setResultList(result);
    })
      .catch((error) => console.error(error));
    
    }

    useEffect(()=>{

       getSearchResults(searchString);
    },[])

    console.log('result lists : ', _ResultList)
  return (
    <View style={{flexDirection:'row',paddingHorizontal:moderateScale(20),paddingTop:moderateScale(20)}}>
      <TouchableOpacity 
        style={[styles.alignItemsLeft, styles.alignViewCenter,]}
        onPress={() => navigation.navigate('OnboardingSnippet')}
      >
        <Image 
          source={BackIcon}
          style={{height:moderateScale(50),width:moderateScale(50)}}
        />
      </TouchableOpacity>
      <View style={[localStyles.searchBar,{flexDirection:'row'}]}>
        <TouchableOpacity >
          <Image 
            source={Search}
            style={styles.searchIcon}
          />
          </TouchableOpacity>
            <TextInput
              placeholder='Search'
              placeholderTextColor='#999999'
              style={[ styles.font_19, styles.textBlack, {marginLeft:4,marginBottom:moderateScale(-2),width:'80%'}]}
              value={_searchString}
              onChangeText={(search) => _setSearchString(search)}
              onEndEditing={(_searchString) => getSearchResults(_searchString)}
            />
                
      </View>
      <ScrollView>
       {_ResultList.length>0? <View>{_ResultList.map((item) => {
          return(

            <View key={item._id}>
              <Text>{item.firstName}</Text>
            </View>
          )
        })}</View>: null}
      </ScrollView>
    </View>
  )
}

const localStyles = StyleSheet.create({

  searchBar :{
    paddingHorizontal:moderateScale(5),
    //paddingVertical:moderateScale(5),
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#E4E3E3',
    borderRadius: moderateScale(10),
    height: moderateScale(45),
    marginBottom: moderateScale(10),
    marginLeft:moderateScale(20)
  }
})
export default connect(null,{
  
})(SearchResultScreen)