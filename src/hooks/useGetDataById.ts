import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type DataProps = {
  endpoint: string,
  id: string
}

const API_URL = 'https://accommodo-api.up.railway.app';

const getData = async (endpoint:string, id:string): Promise<AxiosResponse<any>> => {
  const res = axios.get(API_URL + endpoint + id);
  return res;
}

export const useGetDataById = ({ endpoint = '', id = ''}: DataProps) => {
  const query = useQuery({
    queryFn: () => getData(endpoint, id),
    queryKey: [`data-query-${endpoint}`],
    retry: 2
  })
  
  return {
    ...query,
    data: query.data?.data
  }
}