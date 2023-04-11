// flickr api key: https://www.flickr.com/services/api/misc.api_keys.html || 99c1ee9202369382a53e0a650b9e9642
// Weather api key: https://home.openweathermap.org/users/sign_in || a9e49b305a5d14cc0790dbf507251ca1

function requestFlickrApi() {
    const requestOptions = {
      method: 'GET', // GET, POST, PUT, DELETE

    }
    const requestBody={
      method :'flickr.photos.search',
      api_key:'5dfa044339f2b6f8847ab60c3fec5d49',
      extras : 'url_l',
      per_peg: 5,
      text: 'json',
      nojsoncallback:1
    }

    const urlParams = new URLSearchParams(requestBody).toString();
    fetch('https://www.flickr.com/services/rest/?'+ urlParams, requestOptions)
    .then(result => result.json())
    .then((response)=>{

        console.log(response)
        const divContainer = document.getElementById('photosContainer');
        divContainer.innerHTML = '';

        const photos = response.photos.photo;
        photos.forEach((photo) => {
          divContainer.innerHTML = divContainer.innerHTML + '<img src="' + photo.url + '">'
        })
    } );
}


function requestMeteoApi() {
    
    
}