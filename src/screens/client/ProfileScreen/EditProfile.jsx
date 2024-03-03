import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import styles from '../../../styles'
import { cases } from '../../../data/cases'
import { services } from '../../../data/services'
import background from '../../../assets/background.jpg'
import YellowStar from '../../../assets/YellowStar.png';
import PieChart from 'react-native-pie-chart'
import BackIcon from '../../../assets/back-button.png'
import SampleProfileImage from '../../../assets/userIcon.png';
import {useNavigation} from '@react-navigation/native'
import { moderateScale } from '../../../styles/mixins'
import { useSelector , connect} from 'react-redux';
import mime from 'mime';
import { launchImageLibrary } from 'react-native-image-picker'
import { updateLawyerProfile } from '../../../actions/lawyerProfile'
const EditProfile = (props) => {
  
    const navigation = useNavigation();
    const jwtToken = useSelector(state => state.variables.jwtToken);
    const [_firstName, _setFirstName] = useState('')
    const [_lastName, _setLastName] = useState('');
    const [_email, _setEmail] = useState('');
    const [_about, _setAbout] = useState('');
    const [_photo, _setPhoto] = useState({});
    const  [_photoPath, _setPhotoPath] = useState('');

    handleChoosePhoto = async() =>{
        const options = {
            
            title: 'Select Image',
            type : 'library',
            options: {
              selectionLimit : 1,
              mediaType : 'photo',
              includeBase64 :false
            },
        }

        console.log(Platform.OS);
        const res = await launchImageLibrary(options);
        console.log(res);
        const uriParts = res.assets[0].uri.split('.');
        const fileType = uriParts[uriParts.length - 1];
        const newImageUri = "file:///" + res.assets[0].uri.split("file:/").join("");
      
        _setPhoto({
            type: mime.getType(newImageUri),
            name: newImageUri.split("/").pop(),
            uri: newImageUri,
        })
        console.log('_photo',_photo);
      
        _setPhotoPath(res.assets[0].uri);
    }

    const submitProfile = () =>{

        const data = {
            firstName: _firstName,
            lastName : _lastName,
            email : _email,
            about : _about,
            photo : _photo,
            jwtToken : jwtToken 
        }

        props.updateLawyerProfile(data,navigation);

    }

  return (
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={[styles.container,{backgroundColor: 'white',}]}>
      <ImageBackground 
        source={background}
        resizeMode='cover'
        style={{justifyContent: 'flex-end', alignItems: 'center', height: 200,borderBottomRightRadius:20,borderBottomLeftRadius:20}}
      >
        <TouchableOpacity 
        style={{alignSelf:'flex-start',top:moderateScale(-90),marginLeft:moderateScale(15)}}
        onPress={() => navigation.navigate('ProfileScreen')}
        >
            <Image 
            source={BackIcon}
            style={{height:moderateScale(50),width:moderateScale(50)}}
            />
        </TouchableOpacity> 
    
        {/* <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#8940FF',paddingHorizontal:12,paddingVertical:5,borderRadius:10,alignSelf:'flex-start',bottom:moderateScale(-45)}}>
            <Image source={require('../../../assets/EditBannerIcon.png')} style={{marginVertical:3,marginRight:5}} />
            <Text style={{color:'white',fontSize:moderateScale(15)}}>Edit Banner</Text>
        </TouchableOpacity> */}
        <View style={{justifyContent: 'center', alignItems: 'center', height: moderateScale(160), width:moderateScale(160), borderRadius:80, backgroundColor: 'white',marginBottom: -75}}>
            <TouchableOpacity onPress={handleChoosePhoto}>
                <Image 
                    source={_photoPath==''?SampleProfileImage:{uri:_photoPath}}
                    style={{height: moderateScale(150), width:moderateScale(150), borderRadius: 75}}
                />
            </TouchableOpacity>
          
        </View>
      </ImageBackground>
      
      {/* name */}
      <View style={{paddingHorizontal:20,marginTop:35}}>
        <View style={[styles.alignViewCenter, styles.alignItemsCenter, {marginTop: 40, width: '100%', flexDirection:'row'}]}>
          <Text style={{fontSize:13,fontWeight:'500',color:'black'}}>Change Picture</Text>          
        </View>
      </View> 

    </View>

    <View style={{paddingHorizontal:20,marginTop:27}}>
        <Text style={{color:'black'}}>
            First Name
        </Text>
        <TextInput 
            placeholder='Enter username...' 
            style={styles2.profileTextInput} 
            value={_firstName}
            onChangeText={(fname) => _setFirstName(fname)}
        />

    </View>

    <View style={{paddingHorizontal:20,marginTop:27}}>
        <Text style={{color:'black'}}>
            Last Name
        </Text>
        <TextInput 
            placeholder='Enter username...' 
            style={styles2.profileTextInput} 
            value={_lastName}
            onChangeText={(lname) => _setLastName(lname)}
        />

    </View>


    <View style={{paddingHorizontal:20,marginTop:27}}>
        <Text style={{color:'black'}}>
            Email ID
        </Text>
        <TextInput 
            placeholder='example@gmail.com' 
            style={styles2.profileTextInput} 
            value={_email}
            onChangeText={(email) => _setEmail(email)}
        />

    </View>

    <TouchableOpacity 
        style={{backgroundColor:'#8940FF',borderRadius:10,alignItems:'center',paddingVertical:11,marginHorizontal:20,marginTop:15}}
        onPress={() => navigation.navigate('EditServices')}
    >
        <Text style={{color:'white'}}>Edit your services</Text>
    </TouchableOpacity>


    <View style={{paddingHorizontal:20,marginTop:27}}>
        <Text style={{color:'black'}}>
            About me:
        </Text>
        <TextInput 
            placeholder='...' 
            style={[styles2.profileTextInput,{height:150}]} 
            value={_about}
            onChangeText={(_about) => _setAbout(_about)}
        />

    </View>

    <TouchableOpacity 
        style={{backgroundColor:'#8940FF',borderRadius:10,alignItems:'center',paddingVertical:13,marginHorizontal:50,marginTop:20,marginBottom:50}}
        onPress={submitProfile}
    >
        <Text style={{color:'white',fontWeight:'bold'}}>Update</Text>
    </TouchableOpacity>
    </ScrollView>
  )
}

export default connect(null,{
    updateLawyerProfile
})(EditProfile);

const styles2 = StyleSheet.create({

    profileTextInput :{

        color: 'black',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#0000001A',
        marginTop:5,
        height:moderateScale(50)
    }
})