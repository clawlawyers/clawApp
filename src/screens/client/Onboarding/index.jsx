import { View, Text, Image, TouchableOpacity, TextInput,KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import styles from '../../../styles'
import searchIcon from '../../../assets/search-icon.png'
import NewsItem from '../../../components/NewsItem'
import data from '../../../data/dummy'
import { useNavigation } from '@react-navigation/native'
import CALogo from '../../../assets/ca-logo.png'
import LawyerLogo from '../../../assets/lawyer-logo.png'
import Search from '../../../assets/search-icon.png'

const Onboarding = () => {

  const navigation = useNavigation();
  return (
    // <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1, }}>
      <TouchableWithoutFeedback onPress={e=> Keyboard.dismiss()}>
        <View style={[styles.container, styles.paddingH_20, styles.alignViewCenter, styles.alignItemsCenter]}>
          {/* connect with bar */}
          <View style={[styles.alignViewCenter, styles.alignItemsCenter]}>
            <Image  
              source={require('../../../assets/app-icon.png')}
              style={styles.logoStyle} 
            />
          </View>

          <View style={[styles.alignViaRow, styles.alignItemsCenter, styles.alignViewCenter,styles.searchBar]}>
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
            style={[styles.alignViewCenter, styles.alignViewSplit, styles.adviceBox]}
            onPress={e=>navigation.navigate('ContactList')}
          >
            <View style={[styles.alignItemsCenter, styles]}>
                <Text style={[styles.font_23, styles.font_med,styles.textWhite]}>Connect with a </Text>
                <View style={[styles.alignViewCenter,styles.alignItemsCenter]}>
                    <Text style={[styles.font_23, styles.font_med,styles.textWhite]}>{'CA'}</Text>
                </View>
                {/* <View style={[styles.alignViewCenter,styles.alignItemsCenter]}>
                    <Text style={[styles.font_23, styles.font_med,styles.textWhite]}>{'Accountant)'}</Text>
                </View> */}
            </View>
            <View>
              <Image 
                source={CALogo}
                style={styles.caOnboardingImage}
              />
            </View>
            <View>
            </View>
          </TouchableOpacity>

          {/* connect lawyer */}
          <TouchableOpacity style={[styles.alignViewCenter, styles.alignViewSplit, styles.adviceBox]}>
            <View style={[styles.alignItemsCenter, styles]}>
                <Text style={[styles.font_23, styles.font_med, styles.textWhite]}>Connect with a </Text>
                <View style={[styles.alignViewCenter,styles.alignItemsCenter]}>
                    <Text style={[styles.font_23, styles.font_med, styles.textWhite]}>Lawyer</Text>
                </View>
            </View>
            <View>
            <Image 
                source={LawyerLogo}
                style={styles.lawyerOnboardingImage}
              />
            </View>
          </TouchableOpacity>

          
          <View style={[styles.alignViewCenter, styles.alignItemsLeft]}>
            <Text style={[styles.textBlack, styles.font_700, styles.font_25,]}> Latest News </Text>
          </View>
          {/* News Button */}
          <TouchableOpacity
            onPress={(e)=> navigation.navigate('NewsScreen')}
            style={[styles.newsBox, styles.alignViewCenter, styles.alignItemsCenter]} 
          >
                <NewsItem news={data['data'][0]} isOnboarding={true} />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  )
}

export default Onboarding