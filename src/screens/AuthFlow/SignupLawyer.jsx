import { View, Text, TouchableOpacity,TextInput, Image, ScrollView ,StyleSheet, Button, ToastAndroid, Platform} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import mime from 'mime';
import { verticalScale } from '../../styles/mixins'
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
import { Dropdown } from 'react-native-element-dropdown';
import RadioGroup from 'react-native-radio-buttons-group'; 
import React ,{useState,useMemo, useEffect} from 'react'
import styles from '../../styles'
import {connect} from 'react-redux';
import { states,cities } from '../../data/location';
import { registerUser } from '../../actions/authentication';

const  SignupLawyer = (props) => {
    
    const data = states;
    const {phoneNumber} = props.route.params;
   // const phoneNumber='7880982076'
    console.log(phoneNumber);
    const [cityData, setCityData] = useState([]);
    const navigation = useNavigation()   
    const radioButtons = useMemo(() => ([
        {
            id: 'male', 
            label: 'Male',
            value: 'option1'
        },
        {
            id: 'female',
            label: 'Female',
            value: 'option2'
        },
        {
            id :'others',
            label:'Others',
            value:'Others'
        }
    ]), []);

    const [_fname, _setFname] = useState('');
    const [_lname, _setLname] = useState('');
    const [_gender, _setGender] = useState('');
    const [_email, _setEmail] = useState('');
    const [_idState, _setidState] = useState('');
    const [_idnum, _setIdnum] = useState('');
    const [_year, _setYear] = useState('');
    const [_state, _setState] = useState('');
    const [_city, _setCity] = useState('');
    const [_stateId, _setStateId] = useState('');
    const [_pincode, _setPincode] = useState('');
    const [_photo, _setPhoto] = useState({});
    let photodet = {};
    const [_photoPath, _setPhotoPath] = useState('');
    const [isFocusState, setisFocusState] = useState(false);
    const [isFocusCity, setisFocusCity] = useState(false);

    const [selectedId, setSelectedId] = useState();
    console.log(_state,_stateId);
    console.log(_city)
    console.log(selectedId)

    const fetchCities = () =>{

        const citiesData = cities.filter(city => city.stateId == _stateId);
        console.log(citiesData);
        setCityData(citiesData);
    }
    handleChoosePhoto = async() =>{
        const options = {
            
            title: 'Select Image',
            type : 'library',
            otions: {
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
        photodet = {
            type: mime.getType(newImageUri),
            name: newImageUri.split("/").pop(),
            uri: newImageUri,
        }
        _setPhoto({
            type: mime.getType(newImageUri),
            name: newImageUri.split("/").pop(),
            uri: newImageUri,
        })
        console.log('_photo',_photo);
        console.log(photodet);
        _setPhotoPath(res.assets[0].uri);
    }

    const submitDetails = () =>{


        // console.log('selectedid',selectedId);
        // if(selectedId==1){
        //     _setGender('male');
        // }else if(selectedId==2){
        //     _setGender('female');
        // }else{
        //     _setGender('others');
        // }

        if (_fname=='' || _lname =='' || _gender=='' || _email=='' || _idState=='' || _idnum=='' || _year=='' || _state=='' || _city=='' || _pincode=='' || _photo=='' || phoneNumber=='')
        {
            // console.log(_fname, _lname , _gender, _email, _idState, _idnum, _year,_state,_city, _pincode, _photo, phoneNumber);
            ToastAndroid.show('One or more fields are empty!',ToastAndroid.CENTER);
            return;
        }
        else{

            console.log('photoooooo',_photo);
            const data = {
            
                firstName : _fname,
                lastName  : _lname,
                gender : _gender,
                email : _email,
                barCouncilState : _idState,
                barCouncilNo : _idnum,
                barCouncilYear : _year,
                state : _state,
                city : _city,
                pincode: _pincode,
                photo : _photo,
                uploaded_id : _photoPath,
                phoneNumber : phoneNumber
            }
            console.log('data',data);
           props.registerUser(data,navigation);
           console.log('first')
        }
      
        
    }

    
    useEffect(()=>{

        fetchCities();
    },[_stateId])

    return (

        <ScrollView style={[styles.container,{paddingTop:30,paddingHorizontal:25}]}>
           
            <View style={[styles.alignViewCenter, styles.alignItemsLeft, ]}>
                <Text style={[styles.textBlack, styles.font_50, styles.font_600,{marginTop:10}]}>
                    Register
                </Text>

                <View style={{paddingTop:30,width:'100%'}}>
                    <Text style={[styles.font_18,{color:'black'} ]}>
                            First Name <Text style={{color:'red'}}>*</Text>
                    </Text>
                    <TextInput 
                        style={styles2.textInput} 
                        placeholder='Type your first name'
                        value={_fname}
                        onChangeText={(_fname) => _setFname(_fname)} 
                    />
                    <Text style={{color:'#8E8E93',fontSize:10}}>As per your causelist/vakalatnama</Text>
                    
                </View>
                
                <View style={{paddingTop:20,width:'100%'}}>
                    <Text style={[styles.font_18,{color:'black'} ]}>
                            Last Name <Text style={{color:'red'}}>*</Text>
                    </Text>
                    <TextInput 
                    style={styles2.textInput} 
                    placeholder='Type your last name' 
                    value={_lname}
                        onChangeText={(_lname) => _setLname(_lname)}                    
                    />
                                       
                </View>

                <View style={{paddingTop:20,width:'100%'}}>
                    <Text style={[styles.font_18,{color:'black'} ]}>
                            Gender <Text style={{color:'red'}}>*</Text>
                    </Text>
                    
                    <RadioGroup 
                        radioButtons={radioButtons} 
                        onPress={_setGender}
                        selectedId={_gender}
                        layout='row'
                        labelStyle={{color:'black'}}
                    />
               
                </View>

                <View style={{paddingTop:20,width:'100%'}}>
                    <Text style={[styles.font_18,{color:'black'} ]}>
                            E-mail <Text style={{color:'red'}}>*</Text>
                    </Text>
                    <TextInput 
                        style={styles2.textInput} 
                        placeholder='Type your e-mail id'
                        value={_email}
                        onChangeText={(_email) => _setEmail(_email)}     
                    />
                                       
                </View>

                <View style={{paddingTop:20,width:'100%'}}>
                    <Text style={[styles.font_18,{color:'black'} ]}>
                            Bar council id <Text style={{color:'red'}}>*</Text>
                    </Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{width:'28%'}}>
                            <Text style={[styles.font_15,{color:'black'} ]}>State</Text>
                            <TextInput 
                                style={styles2.textInput} 
                                placeholder='State'
                                value={_idState}
                                onChangeText={(_idState) => _setidState(_idState)}

                            />
                        </View>
                        <View  style={{width:'34%'}}>
                            <Text style={[styles.font_15,{color:'black'} ]}>ID No.</Text>
                            <TextInput 
                                style={styles2.textInput} placeholder='928172'
                                value={_idnum}
                                onChangeText={(_idnum) => _setIdnum(_idnum)}
                                keyboardType='number-pad'                   
                            />
                        </View>
                        <View  style={{width:'28%'}}>
                            <Text style={[styles.font_15,{color:'black'} ]}>Year</Text>
                            <TextInput 
                                style={styles2.textInput} 
                                placeholder='2005' 
                                value={_year}
                                onChangeText={(_year) => _setYear(_year)}
                                keyboardType='number-pad'
                                maxLength={4}
                            />
                        </View>

                    </View>
                                       
                </View>
                
                <View style={{paddingTop:20,width:'100%'}}>
                    <Text style={[styles.font_18,{color:'black'} ]}>
                    Bar council Id certificate or ID card <Text style={{color:'red'}}>*</Text>
                    </Text>
                    <View height={163} style={{backgroundColor:'#D9D9D9',alignItems:'center',borderRadius:10,flex:1,justifyContent:'center'}}>
                        <Image source={{uri : _photoPath}} alt='' height={163}  style={{zIndex:1,position:'absolute',borderWidth:1}}/>
                    
                        <TouchableOpacity onPress={handleChoosePhoto} style={{zIndex:2,position:'absolute',alignItems:'center'}}>
                            <Image source={require('../../assets/CameraIcon.png')} height={60} width={60}/>
                            <Text style={{color:'black'}}>Upload your image</Text>
                        </TouchableOpacity>
                    </View>
                                       
                </View>

                <View style={{paddingTop:20,width:'100%'}}>
                    <Text style={[styles.font_18,{color:'black'} ]}>
                    State <Text style={{color:'red'}}>*</Text>
                    </Text>
                   
                   
                    <Dropdown
                    style={[styles2.dropdown, isFocusState && { borderColor: 'blue' }]}
                    placeholderStyle={styles2.placeholderStyle}
                    selectedTextStyle={styles2.selectedTextStyle}
                    inputSearchStyle={styles2.inputSearchStyle}
                    labelStyle={{color:'black'}}
                    itemTextStyle={{color:'black'}}
                    data={data}
                    maxHeight={300}
                    labelField="stateName"
                    valueField="stateId"
                    placeholder={!isFocusState ? 'Select state' : '...'}
                    value={data}
                    onFocus={() => setisFocusState(true)}
                    onBlur={() => setisFocusState(false)}
                    onChange={item => {
                        _setStateId(item.stateId);
                        _setState(item.stateName);
                        setisFocusState(false);
                    }}
                    />
                                            
                </View>

                <View style={{paddingTop:20,width:'100%'}}>
                    <Text style={[styles.font_18,{color:'black'} ]}>
                    City <Text style={{color:'red'}}>*</Text>
                    </Text>
                    <Dropdown
                    style={[styles2.dropdown, isFocusCity && { borderColor: 'blue' }]}
                    placeholderStyle={styles2.placeholderStyle}
                    selectedTextStyle={styles2.selectedTextStyle}
                    inputSearchStyle={styles2.inputSearchStyle}
                    labelStyle={{color:'black'}}
                    itemTextStyle={{color:'black'}}
                    data={cityData}
                    maxHeight={300}
                    labelField="cityName"
                    valueField="cityId"
                    placeholder={!isFocusCity? 'Select city' : '...'}
                    value={cityData}
                    onFocus={() => setisFocusCity(true)}
                    onBlur={() => setisFocusCity(false)}
                    onChange={item => {
                        //_setStateId(item.stateId);
                        _setCity(item.cityName);
                        setisFocusCity(false);
                    }}
                    />
                                       
                </View>

                <View style={{paddingTop:20,width:'100%'}}>
                    <Text style={[styles.font_18,{color:'black'} ]}>
                    Pincode <Text style={{color:'red'}}>*</Text>
                    </Text>
                    <TextInput 
                    style={styles2.textInput} 
                    placeholder='Enter your pincode'
                    keyboardType='number-pad'
                    maxLength={6}
                    value={_pincode}
                    onChangeText={(_pincode) => _setPincode(_pincode)}
                    />
                                       
                </View>

                <TouchableOpacity 
                    style={[styles.loginButton, styles.alignViewCenter, styles.alignItemsCenter,{alignSelf:'center',marginBottom:80}]}
                    onPress={submitDetails}
                >
                    <Text style={[styles.font_25, styles.textWhite, styles.font_600]}>
                        Next
                    </Text>
                </TouchableOpacity>
                
            </View>
        </ScrollView>   

    )
}

const styles2 = StyleSheet.create({

    inputLabel:{

        fontSize: 15,
        color:'white',
        color:'black'
    },
    input : {
        borderColor: 'grey',
        marginTop:10,
        color:'white',
        color:'black'    
    },
   
    signupLink:{

        color: 'blue',
        textAlign:'center'
    },
    container:{

        flex:1,
        justifyContent: 'center',
        backgroundColor: 'black',
        color:'black'
    },
    dropdown: {
        height: 50,
        borderColor: 'rgba(137, 64, 255, 0.3)',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginTop:20,
        color:'black'
      },
      icon: {
        marginRight: 5,
        color:'black'
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color:'black'
      },
      placeholderStyle: {
        fontSize: 16,
        color:'black'
      },
      selectedTextStyle: {
        fontSize: 16,
        color:'black'
      },
      iconStyle: {
        width: 20,
        height: 20,
        color:'black'
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color:'black'
      },
    heading : {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:30,
        marginTop:60,
        color:'black'

    },
    errorMessage : {

        fontSize: 16,
        color:'red',
        textAlign:'center'
    },
    textInput:{
        borderColor:'rgba(137, 64, 255, 0.3)',
        borderWidth:1,
        borderRadius:10,
        height:45,
        textAlign:'center',
        fontSize:15,
        textAlign:'left',
        paddingLeft:15,
        marginTop:5,
        color:'black'
    }

})

export default connect(null, {

    registerUser,
   
  })(SignupLawyer);