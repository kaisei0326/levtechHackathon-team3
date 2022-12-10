import axios from 'axios';
import { useMutation } from 'react-query';

export const useMutateLogin = (formData) => {
  const useLogin = useMutation(async () => 
    await axios.post(`${process.env.REACT_APP_API}/login`, formData),
  {
    onSuccess: (res) => {
      console.log(res);
    },
    onError: () => {
      alert('Error')
    }
  });
  return { useLogin };
};