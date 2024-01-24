import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from '../../../styles'
import BackButton from '../../../assets/back-button.png'
import Search from '../../../assets/search-icon.png'
import { horizontalScale, verticalScale } from '../../../styles/mixins'
import { useNavigation } from '@react-navigation/native'

const ContactList = () => {
    // const navigation = useNavigation();
  return (
    <View style={[styles.container, styles.paddingH_20]}>
        <View style={[styles.alignViaRow, styles.alignItemsCenter, {marginTop: verticalScale(20)}]}>
            <TouchableOpacity OnPress={e=> navigation.goBack()}>
                <Image 
                    source={BackButton}
                    style={[styles.backButtonIcon,{marginRight:horizontalScale(140) }]}
                />
            </TouchableOpacity>
            
            <Text style={[styles.textBlack, styles.font_35, styles.font_700]} >CAs</Text>
        </View>

        <View style={[styles.alignViaRow, styles.alignItemsCenter, styles.alignViewCenter,styles.searchBar, styles.marginT_20]}>
            <TouchableOpacity >
              <Image 
                  source={Search}
                  style={styles.searchIcon}
              />
            </TouchableOpacity>
            <TextInput
                  placeholder='E.g. My husband slaps me'
                  placeholderTextColor='#999999'
                  style={[ styles.font_20,styles.marginL_10, styles.textBlack, { width: '90%'}]}
            />
                
          </View>

    </View>
  )
}

export default ContactList