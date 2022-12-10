import axios from 'axios';
import { useQuery } from 'react-query';

export const useQueryGroups = () => {
  const url = 'https://tadanodomain.gq:9090/v1/groups'
  const fetchLogin = async () => {
    const { data } = await axios.get(
      url,
      { withCredentials: true },
    );
    return data;
  };
  return useQuery({
    queryKey: `$`,
    queryFn: fetchLogin,
    staleTime: Infinity,
  });
};