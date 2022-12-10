import axios from 'axios';
import { useMutation } from 'react-query';

export const useMutateLogin = (formData) => {
  const url = 'https://tadanodomain.gq:9090/v1/login'
  const useLogin = useMutation(async () => 
    await axios.post(url, formData),
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