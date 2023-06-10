import { QuartosData } from '@/interface/QuartosData';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

type DataProps = {
  endpoint: string,
  id: string
}

const API_URL = 'http://localhost:8080';

const getData = async (endpoint:string, id:string): Promise<AxiosResponse<QuartosData>> => {
  const res = axios.get(API_URL + endpoint + id);
  return res;
}

export const useGetDataById = ({ endpoint = '', id = ''}: DataProps) => {
  const query = useQuery({
    queryFn: () => getData(endpoint, id),
    queryKey: ['data-query'],
    retry: 2
  })
  

  return {
    ...query,
    data: query.data?.data
  }
}