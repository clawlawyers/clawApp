import { fetchData } from "./async-storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeVariable } from "./variables";
import{useSelector, useDispatch} from 'react-redux'
import { useContext } from "react";
import { format } from "prettier";
import { ToastAndroid } from "react-native";
// import { S3 } from 'aws-sdk/dist/aws-sdk-react-native';
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

    //    const imageUrl = getProfileImage(lawyerData.id_url)
    //    console.log('image fetched',imageUrl)
    fetch(lawyerData.profilePicture)
      .then(response => response.blob())
      .then(blob => {
        // Convert the blob to a data URL
        const reader = new FileReader();
        reader.onload = () => {
          console.log(reader.result);
          dispatch(changeVariable('photo_url',reader.result));
        };
        reader.readAsDataURL(blob);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
       
        dispatch(changeVariable('state',lawyerData.state));
        dispatch(changeVariable('gender',lawyerData.gender));
        dispatch(changeVariable('phone_no',lawyerData.phoneNumber));
        dispatch(changeVariable('uid',lawyerData._id));
        dispatch(changeVariable('gender',lawyerData.gender));

    }catch(err){
        console.log('error',err);
    }
     

}

// const getProfileImage = async(imagePath) =>{

    
//     const s3 = new S3({
//         accessKeyId: 'AKIAYS2NSSMRR2SJTDJV',
//         secretAccessKey: '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',
//       });

//         const params = {
//           Bucket: 'backendclaw',
//           Key:imagePath, // Specify the path to your image
//         };
//         try {
//             const data = await s3.getObject(params).promise();
//             // data.Body contains the image binary data
//             // You can then use this data to display the image
//             console.log('Image data:', data);
//           } catch (error) {
//             console.error('Error fetching image from S3:', error);
//           }
 
// }

const updateLawyerHelper = ({data, navigation, dispatch}) => {

    console.log('inside lawyer update',data.photo);

    let formdata = new FormData();
    if(data.firstName==''){
        formdata.append('firstName','')
    }else{
        formdata.append('firstName',data.firstName);
    }
    if(data.lastName==''){
        formdata.append('lastName','')
    }else{
        formdata.append('lastName',data.lastName);
    }
    if(data.email==''){
        formdata.append('email','')
    }else{
        formdata.append('email',data.email);
    }
    if(data.photo=={}){
        photo = {
            type :'',
            name : '',
            uri : ''

        }
        formdata.append('profilePicture',photo)
    }else{
        formdata.append('profilePicture',data.photo);
    }
    formdata.append("gender", "female");
    formdata.append("barCouncilState", "punjab");
    formdata.append("barCouncilNo", "123123");
    formdata.append("barCouncilYear", "2012");
    formdata.append("state", "gujarat");
    formdata.append("city", "ahmedabad");
    formdata.append("pincode", "12121");

    const myHeaders = new Headers();
    const userToken = 'Bearer ' + data.jwtToken;
    console.log(formdata,userToken)
    myHeaders.append("Authorization", userToken);

    const requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
    };
      
    fetch("https://claw-backend.onrender.com/api/v1/user/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        console.log('result ::::',result)
        ToastAndroid.show('Profile updated succesfully!',ToastAndroid.SHORT);
        navigation.navigate('ProfileScreen');
    })
    .catch((error) => {

        console.error('error ::::',error);
        ToastAndroid.show('Something went wrong!',ToastAndroid.SHORT);
    });
}



export const getLawyerProfile = () => dispatch => {
    getLawyerProfileHelper({  dispatch });
  };

export const updateLawyerProfile = (data, navigation) => dispatch =>{

    updateLawyerHelper({data,navigation,dispatch});
}