import { HospedeData } from '@/interface/HospedesData';
import { QuartosData } from '@/interface/QuartosData';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios'

type DataProps = {
  endpoint: string
}

const API_URL = 'http://localhost:8080';

const getData = async (endpoint:string): Promise<AxiosResponse<any[]>> => {
  const res = axios.get(API_URL + endpoint);
  return res;
}

export const useGetData = ({ endpoint = ''}: DataProps) => {
  const query = useQuery({
    queryFn: () => getData(endpoint),
    queryKey: ['data-query'],
    retry: 2
  })
  

  return {
    ...query,
    data: query.data?.data
  }
}