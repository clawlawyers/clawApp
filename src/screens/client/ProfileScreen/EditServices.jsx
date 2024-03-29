import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../../../styles'
import Search from '../../../assets/search-icon.png'
import { serviceList } from '../../../data/serviceTypeList'
import {useNavigation} from '@react-navigation/native';
import { moderateScale } from '../../../styles/mixins'
import ServiceListDropDown from '../../../assets/ServiceListDropDown.png'
const EditServices = () => {
  
    const navigation = useNavigation();
    const widthAndHeight = 200
  const series = [10,13,23,35,13,20];
   const sliceColor = [ '#497AF9', '#789DFB', '#E5E5E5','#497AF9','#789DFB','#E5E5E5']

  return (
    <ScrollView style={{backgroundColor:'white',paddingHorizontal:20,paddingTop:20}}>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Image
                source={require('../../../assets/back-button.png')}
                style={{height:moderateScale(50),width:moderateScale(50)}} 
            />
        </TouchableOpacity>
        <View style={{marginTop:15}}>
            <Text style={{color:'black',fontWeight:'500',paddingVertical:6,fontSize:20}}>Edit consultation charges</Text>
            <View style={{flexDirection:'row',}}>
                <TextInput style={{borderWidth:1,borderColor:'#8940FF30',fontSize:10,height:37,width:130,borderRadius:10}}/>
                <Text style={{color:'black',fontWeight:'500',paddingVertical:6,fontSize:16,marginHorizontal:5}}>/minute</Text>
                <Image source={ServiceListDropDown} style={{height:18,width:18,alignSelf:'center'}}/>
            </View>
            <Text style={{color:'black',fontWeight:'500',paddingVertical:6,fontSize:19,marginTop:8}}>Select your services</Text>
            
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
                    style={[ styles.font_20,styles.marginL_10, styles.textBlack, { width: '90%',marginTop:moderateScale(-2)}]}
                />
            </View>

            <View style={{marginTop:10,marginBottom:20}}>

                {serviceList.map((item)=>{
                    return(
                        <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#8940FF30',borderWidth:1,paddingVertical:10,paddingHorizontal:10,borderRadius:10,marginBottom:moderateScale(10)}}>
                        <Text style={{color:'black',fontSize:moderateScale(19)}}>{item.title}</Text>
                        <TouchableOpacity style={{height:moderateScale(20),width:moderateScale(20),borderWidth:1,borderRadius:50,borderColor:'#109A48',alignSelf:'center'}}></TouchableOpacity>
                    </View>
                    )
                })}

            </View>
            
           
        </View>
        
    </ScrollView>
  )
}

export default EditServices;

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