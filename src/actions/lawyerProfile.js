import { fetchData } from "./async-storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeVariable } from "./variables";
import{useSelector, useDispatch} from 'react-redux'
import { useContext } from "react";
const getLawyerProfileHelper = async ({   dispatch }) => {

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
        console.log('insid try')
        const response = await fetch("https://claw-backend.onrender.com/api/v1/user/auth/me", requestOptions)
        console.log(response)
        const responseJSON = await response.json();
        const lawyerData = responseJSON.data;
        console.log('lawyerData',lawyerData);
        // const name = lawyerData.firstName +' '+ lawyerData.lastName;
        dispatch(changeVariable('firstName',lawyerData.firstName));
        dispatch(changeVariable('lastName',lawyerData.lastName));
        dispatch(changeVariable('city',lawyerData.city));
        dispatch(changeVariable('state',lawyerData.state));
        dispatch(changeVariable('email',lawyerData.email));
        dispatch(changeVariable('photo_url',lawyerData.id_url));
        dispatch(changeVariable('state',lawyerData.state));
        dispatch(changeVariable('gender',lawyerData.gender));
        dispatch(changeVariable('phone_no',lawyerData.phoneNumber));
        dispatch(changeVariable('uid',lawyerData._id));
        dispatch(changeVariable('gender',lawyerData.gender));

    }catch(err){
        console.log('error', err);
    }
     

}

export const getLawyerProfile = () => dispatch => {
    getLawyerProfileHelper({  dispatch });
  };