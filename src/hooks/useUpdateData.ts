import { useMutation } from '@tanstack/react-query';
import axios from 'axios'

type useUpdateDataProps = {
  endpoint: string,
  id: number | null,
  data: object
}

const API_URL = 'https://accommodo-api.up.railway.app/';

const updateData = async (endponit: string, id: number, data: object) => {
  try {
    const res = await axios.put(API_URL + endponit + `/${id}`, data)
    
    console.log('Updated sucessfuly', res.data);

    return res.data
    
  } catch (error) {
    console.log('Update error', error);
    throw new Error('Erro ao atualizar os dados');
  }
  
}

export const useUpdateData = () => {
  const updateMutation = useMutation(
    ({ endpoint = '', id = null, data = {} }: useUpdateDataProps) => updateData(endpoint, Number(id), data)
  )

  return { updateMutation }
}