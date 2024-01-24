import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import styles from '../../../styles'
import Logo from '../../../assets/app-icon.png'
import StockWP from '../../../assets/stock-wp.jpg'
import Photo from '../../../assets/photo.jpg'
import PieChart from 'react-native-pie-chart'
import Back from '../../../assets/back-icon.png'

const UserProfile = () => {

  const widthAndHeight = 200
  const series = [3,3,3]
  const sliceColor = [ '#6be5e8', '#41b9d4', '#2c8bb9']

  return (
    <View style={[styles.container,{backgroundColor: '#000'}]}>
      <ImageBackground 
        source={StockWP}
        resizeMode='cover'
        style={{justifyContent: 'flex-end', alignItems: 'center', height: 200}}
      >
        <View style={{justifyContent: 'center', alignItems: 'center', height: 120, width: 120, borderRadius: 10, backgroundColor: '#0dbbba',marginBottom: -20}}>
          <Image 
              source={Photo}
              style={{height: 80, width: 80, borderRadius: 40}}
          />
        </View>
      </ImageBackground>
      {/* name and experience */}
      <View style={[styles.alignViewCenter, styles.alignItemsCenter, {marginTop: 40, padding: 10, backgroundColor: '#0dbbba', width: '80%', marginLeft: 36, borderRadius: 15}]}>
        <Text>Tejasvi S Jain, 1 Year</Text>
        
      </View>
      <View style={[styles.alignViewSplit, {marginTop: 20, paddingHorizontal: 10}]}>
        <View style={[styles.alignViewCenter, styles.alignItemsCenter, {padding: 10, backgroundColor: '#0dbbba', width: '40%', borderRadius: 20}]}>
            <Text>RATING</Text>
        </View>
        <View style={[styles.alignViewCenter, styles.alignItemsCenter, {padding: 10, backgroundColor: '#0dbbba', width: '40%', borderRadius: 20}]}>
            <Text>CASES SOLVED</Text>
        </View>
      </View>
      <View style={[styles.alignViewCenter, styles.alignItemsCenter, {marginTop: 20}]}>
        <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
        />
      </View>
      <View style={[styles.alignViewCenter, styles.alignItemsCenter, {backgroundColor:'#0dbbba', width: '95%', marginLeft: 10}, styles.alignViaRow]}>
          {/* <Image source={Back} height={25} width={25}/>
          <Image source={Back} height={25} width={25}/>
          <Image source={Back} height={25} width={25}/>
          <Image source={Back} height={25} width={25}/>
          <Image source={Back} height={25} width={25}/> */}
      </View>
      
    </View>
  )
}

export default UserProfile