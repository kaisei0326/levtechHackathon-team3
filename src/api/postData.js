import axios from 'axios';

export const postData = (url, values, setCookie) => {
  axios.post(url, values, {
    withCredentials: true,
    headers : {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }).then(function (response) {
    if(url === 'https://tadanodomain.gq:9090/v1/login') {
      console.log(response.data.login)
      setCookie('PHPSESSID', response.data.login)
      // window.location.reload()
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}