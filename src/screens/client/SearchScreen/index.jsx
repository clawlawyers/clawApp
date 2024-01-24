import { View, Text, Touchable, TouchableOpacity, Image, TextInput, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import styles from '../../../styles'
import Search from '../../../assets/search-icon.png'

const SearchScreen = () => {
  return (
  <TouchableWithoutFeedback onPress={e=>Keyboard.dismiss()}>
      <View style={[styles.container, styles.paddingH_20, ,{backgroundColor: '#000'}]}>
        {/* searchbar */}
       <View style={[styles.alignViaRow, styles.alignItemsCenter, styles.alignViewCenter,]}>
        <TextInput
              placeholder='What Happened?'
              placeholderTextColor='#a2a5a6'
              style={[ styles.font_20,styles.marginL_10, {backgroundColor: '#e2ffeb', width: '80%', borderRadius: 10, marginRight: 5}]}
            />
            <TouchableOpacity style={styles.searchBar}>
              <Image 
                  source={Search}
                  style={{width: 30, height: 30}}
              />
          </TouchableOpacity>
       </View>
      {/* recommendations */}
       <View>

       </View>

          
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SearchScreen