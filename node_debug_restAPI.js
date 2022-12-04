var axios=require('axios');

var URL="https://restcountries.com/v3.1/all";


axios.get(URL).then(function (response) {
    let CountryList=response.data;
    let StatusCode=response.status;
    console.log(CountryList);
}).catch(function (error) {
    console.log(error);
})