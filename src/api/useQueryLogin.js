import axios from 'axios';
import { useQuery } from 'react-query';


export const useQueryLogin = () => {
  const url = 'https://tadanodomain.gq:9090/v1/login'

  const fetchLogin = async () => {
    const { data } = await axios.get(url);
    return data;
  };
  return useQuery({
    queryKey: `d`,
    queryFn: fetchLogin,
    staleTime: Infinity,
  });
};