import { baseUrl } from './variables';
import { CHANGEVARIABLE } from './type';
import { storeData } from './async-storage';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation();

export const registerUserHelper = async ({ data, navigation, dispatch }) => {

    const body = {
      username: data.username,
      email: data.email,
      password: data.password
    };
    console.log(body)
    // console.log('data'  , data);
    const headers = { 'Content-Type': 'application/json'};
    const config = { method: 'POST', body: JSON.stringify(body), headers };
    const url = `${baseUrl}user/signup`;
    try {
      fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.success) {
            storeData('userStatus', 'details_complete');
            console.log('api res', responseJson);
            console.log("Registration successful");
            navigation.navigate('UserFlow')
          }
          else{
            Alert.alert("Invalid details or user already registered")
            console.log(responseJson);
          }
        })
        .catch(err => {
          console.log('ee', err);
        });
    } catch (err) {
      console.log('err', err);
    }
  };
  
  export const registerUser = (data, navigation) => dispatch => {
    registerUserHelper({ data,navigation, dispatch });
  };