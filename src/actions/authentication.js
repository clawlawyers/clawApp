import { baseUrl,verifyUrl } from './variables';
import { CHANGEVARIABLE } from './type';
import { fetchData, storeData } from './async-storage';
import { Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import { useState } from 'react';
// const navigation = useNavigation();
// const [confirm, setConfirm] = useState('');
 const registerUserHelper = async ({ data, navigation, dispatch }) => {

  console.log('inside register');
    const body = {
      username: data.username,
      email: data.email,
      password: data.password
    };
    console.log(body)
    // console.log('data'  , data);

    //console.log('data.cno',typeofdata.barCouncilNo);
    console.log('helper data',data);
    var formdata = new FormData();
    formdata.append("firstName", data.firstName); 
    formdata.append("lastName", data.lastName); 
    formdata.append("gender", data.gender); 
    formdata.append("email", data.email); 
    formdata.append("barCouncilState", data.barCouncilState);
    formdata.append("barCouncilNo", Number(data.barCouncilNo)); 
    formdata.append("barCouncilYear", data.barCouncilYear); 
    formdata.append("state", data.state); 
    formdata.append("city", data.city); 
    formdata.append("pincode", data.pincode); 
    formdata.append("uploaded_id", data.photo); 
    formdata.append("phoneNumber", data.phoneNumber);
    console.log('form data', formdata);
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect : 'follow'
     
    };
    
    try{const res = await fetch("https://claw-backend.onrender.com/api/v1/user/signup", requestOptions);
    const response = await res.json();
    console.log('res',response);
    if(response.success){

      //storeData()
      storeData('userId',response.data.jwt);
      navigation.navigate('ClientFlow');
    }else{
      Alert.alert('Something went wrong!');
    }
    }catch(err){
      console.log('err',err);
    }
     
  };
  
  const phoneVerificationHelper = async({data, navigation}) =>{

    console.log('inside phoneverifcation')
    const body = {
     phoneNumber: data.phoneNumber,
      verified: data.verified
    };
    console.log(body)
    const headers = { 'Content-Type': 'application/json'};
    const config = { method: 'POST', body: JSON.stringify(body), headers };
    const url = `${verifyUrl}`;

    try {
      fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.success) {
            // storeData('userStatus', 'details_complete');
            storeData('userId',responseJson.data.jwt);
            
            console.log('api res', responseJson);
            console.log("Registration successful");
            if(responseJson.data.registered){
              navigation.navigate('ClientFlow')
            }else{
              navigation.navigate('SignupLawyer',{phoneNumber:data.phoneNumber})
            }}
          // }
          // else{
          //   Alert.alert("Invalid details or user already registered")
          //   console.log(responseJson);
          // }
        })
        .catch(err => {
          console.log('ee', err);
        });
    } catch (err) {
      console.log('err', err);
    }
    
}

const localSigninHelper = async({navigation}) =>{

  console.log('first')
  const userId = fetchData('userId');

  if(userId){

    navigation.navigate('ClientFlow');
  }else{

    navigation.navigate('SignupFlow');
  }

}

  export const registerUser = (data, navigation) => dispatch => {
    registerUserHelper({ data,navigation, dispatch });
  };

  export const validatePhoneNumber = (data, navigation) => dispatch=> {

    phoneVerificationHelper({data,navigation,dispatch});
  }

  export const localSignIn = (navigation) => dispatch => {

    localSigninHelper({ navigation, dispatch});
  }