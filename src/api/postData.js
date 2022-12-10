import axios from 'axios';

export const postData = (url, values) => {
  axios.post(url, values, {
    withCredentials: true,
    headers : {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}