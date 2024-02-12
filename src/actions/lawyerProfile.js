import { fetchData } from "./async-storage";
const getLawyerProfileHelper = async ({ data,  dispatch }) => {

    const userToken = fetchData('userId');
    console.log(userToken);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzhjNDdiNmM1MmRmZDMyMzhiMDIzMiIsImVtYWlsIjoic2FuZGVlcHNhbmR5QGdtYWlsLmNvbSIsImlhdCI6MTcwNzY1NjM4MywiZXhwIjoxNzA3NzQyNzgzfQ.xFigqBnmN5lHQwxQVGwNTjy4HC5mQFOxDsyQGdT-xRU");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://claw-backend.onrender.com/api/v1/user/auth/me", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

}

export const getLawyerProfile = (data, navigation) => dispatch => {
    getLawyerProfileHelper({ data,navigation, dispatch });
  };