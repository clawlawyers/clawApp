
const getNewsHelper = async() => {

    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "type": 0
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const res = await fetch("https://claw-backend.onrender.com/api/v1/news", requestOptions);

  const response = await res.json();
  console.log('RESPONSE DATA :::::',response.data);
  const response2 = response.data;

  let newsData = [];
  console.log('RESPONSE DATA ######',response2);
    response2.map((item) =>{

      newsData.push(item);
      console.log('\nnews ::',item);
    })

    console.log('News data @@', newsData);

    return(newsData);

  // .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));

}

export const getNews = (data) => dispatch => {
    getNewsHelper({ data, dispatch });
  };