import { useMutation } from '@tanstack/react-query';
import axios from 'axios'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

type useDeleteDataProps = {
  endpoint: string,
  id?: number | null,
  router: AppRouterInstance
}

const API_URL = 'https://accommodo-api.up.railway.app';

const deleteData = async (endponit: string, id: number) => {
  try {
    const res = await axios.delete(API_URL + endponit + `/${id}`)
    
    console.log('Deleted sucessfuly', res.data);

    return res.data
    
  } catch (error) {
    console.log('Delete error', error);
    throw new Error('Erro ao deletar os dados');
  }
  
}



export const useDeleteData = ({ endpoint = '', id = null, router }: useDeleteDataProps) => {
  const deleteMutation = useMutation(
    () => deleteData(endpoint, Number(id))
  )

  const handleDeleteData = async () => {
    await deleteMutation.mutate()
    router.push(endpoint)
  }

  
  return { deleteMutation, handleDeleteData }
}