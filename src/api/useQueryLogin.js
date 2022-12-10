import axios from 'axios';
import { useQuery } from 'react-query';

export const useQueryLogin = () => {
  const fetchLogin = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/login`
    );
    return data;
  };
  return useQuery({
    // queryKey: `${}`,
    queryFn: fetchLogin,
    staleTime: Infinity,
  });
};