import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../../../styles'
import { cases } from '../../../data/cases'
import { services } from '../../../data/services'
import StockWP from '../../../assets/stock-wp.jpg'
import YellowStar from '../../../assets/YellowStar.png';
import PieChart from 'react-native-pie-chart'
// import Back from '../../../assets/back-icon.png'
import NameEditIcon from '../../../assets/NameEditIcon.png';
import SampleProfileImage from '../../../assets/SampleProfileImage.png';
import {useNavigation} from '@react-navigation/native'
import { moderateScale } from '../../../styles/mixins'

const EditProfile = () => {
  
    const navigation = useNavigation();
    const widthAndHeight = 200
  const series = [10,13,23,35,13,20];
   const sliceColor = [ '#497AF9', '#789DFB', '#E5E5E5','#497AF9','#789DFB','#E5E5E5']

  return (
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={[styles.container,{backgroundColor: 'white',}]}>
      <ImageBackground 
        source={StockWP}
        resizeMode='cover'
        style={{justifyContent: 'flex-end', alignItems: 'center', height: 200}}
      >
        <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#8940FF',paddingHorizontal:12,paddingVertical:5,borderRadius:10,alignSelf:'flex-start',bottom:moderateScale(-40)}}>
            <Image source={require('../../../assets/EditBannerIcon.png')} style={{marginVertical:3,marginRight:5}} />
            <Text style={{color:'white'}}>Edit Banner</Text>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center', height: 100, width: 100, borderRadius:50, backgroundColor: 'white',marginBottom: -50}}>
          <Image 
              source={SampleProfileImage}
              style={{height: 92, width: 92, borderRadius: 46}}
          />
        </View>
      </ImageBackground>
      
      {/* name */}
      <View style={{paddingHorizontal:20,marginTop:10}}>
        <View style={[styles.alignViewCenter, styles.alignItemsCenter, {marginTop: 40, width: '100%', flexDirection:'row'}]}>
          <Text style={{fontSize:13,fontWeight:'500',color:'black'}}>Change Picture</Text>          
        </View>
      </View> 

    </View>

    <View style={{paddingHorizontal:20,marginTop:30}}>
        <Text style={{color:'black'}}>
            Username
        </Text>
        <TextInput placeholder='Enter username...' style={styles2.profileTextInput} />

    </View>

    <View style={{paddingHorizontal:20,marginTop:30}}>
        <Text style={{color:'black'}}>
            Email ID
        </Text>
        <TextInput placeholder='example@gmail.com' style={styles2.profileTextInput} />

    </View>
    <View style={{paddingHorizontal:20,marginTop:30}}>
        <Text style={{color:'black'}}>
            Phone Number
        </Text>
        <TextInput placeholder='Enter phone number...' style={styles2.profileTextInput} />

    </View>
    <View style={{paddingHorizontal:20,marginTop:30}}>
        <Text style={{color:'black'}}>
            ICAI No.
        </Text>
        <TextInput placeholder='Enter ICAI No...' style={styles2.profileTextInput} />

    </View>

    <View style={{paddingHorizontal:20,marginTop:30}}>
        <Text style={{color:'black'}}>
            Articalship letter
        </Text>
        <TextInput placeholder='Enter Articalship letter...' style={styles2.profileTextInput} />

    </View>

    <TouchableOpacity 
        style={{backgroundColor:'#8940FF',borderRadius:10,alignItems:'center',paddingVertical:13,marginHorizontal:20,marginTop:15}}
        onPress={() => navigation.navigate('EditServices')}
    >
        <Text style={{color:'white'}}>Edit your services</Text>
    </TouchableOpacity>


    <View style={{paddingHorizontal:20,marginTop:30}}>
        <Text style={{color:'black'}}>
            About me:
        </Text>
        <TextInput placeholder='...' style={[styles2.profileTextInput,{height:150}]} />

    </View>

    <TouchableOpacity style={{backgroundColor:'#8940FF',borderRadius:10,alignItems:'center',paddingVertical:13,marginHorizontal:50,marginTop:20,marginBottom:50}}>
        <Text style={{color:'white',fontWeight:'bold'}}>Update</Text>
    </TouchableOpacity>
    </ScrollView>
  )
}

export default EditProfile;

const styles2 = StyleSheet.create({

    profileTextInput :{

        color: 'black',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#0000001A',
        marginTop:5,
        height:moderateScale(55)
    }
})