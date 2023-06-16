import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios'

type DataProps = {
  endpoint: string,
  data: object
}

const API_URL = 'https://accommodo-api.up.railway.app/';

const postData = async (endpoint:string, data: object): Promise<any> => {
  const res = axios.post(API_URL + endpoint, data);
  return res;
}

export const usePostDataMutate = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: async ({endpoint, data}: DataProps) => postData(endpoint, data),
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(['data-query'])
    }
  })
  

  return mutate;
}