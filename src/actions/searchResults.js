
const getSearchResultsHelper =  async({data, dispatch}) => {

    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "search_line": "i got allergy from a product which was labeled safe"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

await fetch("https://gpt.clawlaw.in/api/v1/search", requestOptions)
  .then((response) => response.text())
  .then((result) => {

    console.log('search result : ',result)
    return result;
})
  .catch((error) => console.error(error));

}

export const getSearchResults =(data) => dispatch => {

    getSearchResultsHelper({data,dispatch});
} 