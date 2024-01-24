import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from '../../../styles'
import BackButton from '../../../assets/back-button.png'
import { horizontalScale, moderateScale } from '../../../styles/mixins'
import Search from '../../../assets/search-icon.png'


const data =[
  {
    id: 1,
    title: 'Corporate restructure to protect profit from sale.',
    datetime: '22',
    fixedprice: 30000,
    type: 'Lawyer',
    experience: 'Experienced',

  }
]

const ClientGigsScreen = () => {
  return (
    <View style={[styles.container, styles.padding10]}>
      <View style={[styles.alignViaRow, styles.alignItemsCenter, styles.alignViewCenter, {width: '80%'}]}>
        <Image 
          source={BackButton}
          style={{height: moderateScale(28), width: moderateScale(30.33), marginRight: horizontalScale(60)}}
          resizeMode='contain'
        />
        <Text style={[styles.font_bold, styles.font_35, styles.textBlack]}>
          Client Gigs
        </Text>
      </View>

      <View style={[styles.alignViaRow, styles.alignItemsCenter, styles.alignViewCenter,styles.searchBar,{width: '100%'}]}>
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
    </View>
  )
}

export default ClientGigsScreen