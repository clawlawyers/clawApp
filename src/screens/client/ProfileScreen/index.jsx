import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../../styles'
import { cases } from '../../../data/cases'
import { services } from '../../../data/services'
import StockWP from '../../../assets/stock-wp.jpg'
import Photo from '../../../assets/photo.jpg'
import PieChart from 'react-native-pie-chart'
import Back from '../../../assets/back-icon.png'
import NameEditIcon from '../../../assets/NameEditIcon.png';
import SampleProfileImage from '../../../assets/SampleProfileImage.png';
import CaseDetailComponent from '../../../components/CaseDetailComponent'
import ServiceDetailComponent from '../../../components/ServiceDetailComponent'
import RatingDetailComponent from '../../../components/RatingDetailComponent'
import { ratings } from '../../../data/ratings'
const ProfileScreen = () => {
  
    const widthAndHeight = 200
  const series = [10,13,23,35,13,20];
   const sliceColor = [ '#497AF9', '#789DFB', '#E5E5E5','#497AF9','#789DFB','#E5E5E5']

  // const setPieChart = () => {

  //   let tempSeries = [];
  //   let tempColor = [];
  //   cases.map((item) => {

  //     tempSeries.push(item.percent);
  //     tempColor.push(item.color);
  //   })
  //   setSeries(tempSeries);
  //   setSliceColor(tempColor);
    
  // }

  // console.log(series,sliceColor);
  // useEffect(() => {

  //     setPieChart();

  // },[])
  return (
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={[styles.container,{backgroundColor: 'white',}]}>
      <ImageBackground 
        source={StockWP}
        resizeMode='cover'
        style={{justifyContent: 'flex-end', alignItems: 'center', height: 200}}
      >
        <View style={{justifyContent: 'center', alignItems: 'center', height: 100, width: 100, borderRadius:50, backgroundColor: 'white',marginBottom: -50}}>
          <Image 
              source={SampleProfileImage}
              style={{height: 92, width: 92, borderRadius: 46}}
          />
        </View>
      </ImageBackground>
      
      {/* name */}
      <View style={{paddingHorizontal:20,marginTop:10}}>
        <View style={[styles.alignViewCenter, styles.alignItemsCenter, {marginTop: 50, width: '100%', flexDirection:'row',marginLeft:10}]}>
          <Text style={{fontSize:20,fontWeight:'400',color:'black'}}>Emily Smith</Text>
          <TouchableOpacity style={{marginLeft:6}}>
            <Image source={NameEditIcon} style={{height:20,width:20}} />
          </TouchableOpacity>
          
        </View>
        <Text style={{alignSelf:'center',fontSize:12}}>Lawyer</Text>
        {/* Consultation charge */}
        <View style={{backgroundColor:'#8940FF',padding:6,borderRadius:10,marginTop:20,width:220}}>
          <Text style={{color:'white'}}>Consultation Charge: Rs.200/hr</Text>
        </View>
        <View style={{backgroundColor:'#8940FF',padding:6,borderRadius:10,marginTop:5,width:130}}>
          <Text style={{color:'white'}}>20 Cases solved</Text>
        </View>

        {/* About */}
        <View style={{marginTop:10}}>

          <Text style={{color:'black',fontWeight:'500',fontSize:22}}>About me: </Text>
          <Text style={{color:'black',fontSize:12}}>
          With a passion for justice and a commitment to client success, I am a seasoned lawyer dedicated to navigating the complexities of the legal landscape. Armed with extensive experience and a strategic approach, I strive to deliver optimal outcomes for my clients. Trust in my expertise to advocate for your rights and secure the justice you deserve.
          </Text>
          
        </View>

        {/* Pie Chart */}
        <View style={{alignItems:'center',marginTop:40}}>
          <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                coverRadius={0.6}
          />
            <View style={{alignSelf:'baseline',alignItems:'flex-start',marginTop:20}}>
              <Text style={{color:'#4D4D4D',fontSize:30,fontWeight:500}}>
                Total Cases
              </Text>
              <Text style={{color:'black',fontWeight:'bold',fontSize:35,letterSpacing:1}}>4,209</Text>
              
              <View>
                <CaseDetailComponent cases={cases}/>
              </View>

              
              <View style={{width:'100%'}}>
              <Text style={{color:'black',fontSize:30,marginTop:13,fontWeight:500}}>
                Services
              </Text>
                <ServiceDetailComponent services = {services}/>
              </View>

              <View style={{width:'100%'}}>
              <Text style={{color:'black',fontSize:30,marginTop:13,fontWeight:500}}>
                Ratings
              </Text>
                <RatingDetailComponent ratings = {ratings}/>
              </View>
              
            </View>
          
        </View>
      </View>
      
      
     
      
    </View>
    </ScrollView>
  )
}

export default ProfileScreen