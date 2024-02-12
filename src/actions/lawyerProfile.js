import { fetchData } from "./async-storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeVariable } from "./variables";
import{useSelector, useDispatch} from 'react-redux'
import { useContext } from "react";
const getLawyerProfileHelper = async ({ data,  dispatch }) => {

    // const {store} = useContext(ReactReduxContext);
    // console.log(' storerrrrr',store);
    // const state = useSelector(state =>state)
    // console.log('state',state);
    const userToken =await  AsyncStorage.getItem('userId');
    console.log(userToken);
    const userProfileToken = "Bearer "+userToken;
    console.log('first',userProfileToken)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", userProfileToken);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    try{
        const response = await fetch("https://claw-backend.onrender.com/api/v1/user/auth/me", requestOptions)
        const responseJSON = await response.json();
        const lawyerData = responseJSON.data;
        console.log('lawyerData',lawyerData);
        const name = lawyerData.firstName +' '+ lawyerData.lastName;
        dispatch(changeVariable('name',name));
    }catch(err){
        console.log('error', err);
    }
     

}

export const getLawyerProfile = (data, navigation) => dispatch => {
    getLawyerProfileHelper({ data,navigation, dispatch });
  };