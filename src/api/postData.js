import axios from 'axios';

export const postData = (url, values, setCookie) => {
  axios.post(url, values, {
    withCredentials: true,
    headers : {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }).then(function (response) {
    setCookie('PHPSESSID', response.data.login)
  })
  .catch(function (error) {
    console.log(error);
  });
}