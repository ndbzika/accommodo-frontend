import { usePostDataMutate } from '../../hooks/usePostDataMutate';
import { useUpdateData } from '../../hooks/useUpdateData';
import { QuartosData } from '../../interface/QuartosData';
import { ChangeEventHandler, useState } from 'react'
import { useRouter } from 'next/navigation';

export const useQuartoData = (quartoId?: number) => {
  const [quartoStatus, setQuartoStatus] = useState<QuartoStatusType | null>(null);
  const [quartoTipo, setQuartoTipo] = useState<QuartoTipoType | null>(null);
  const [quartoNumero, setQuartoNumero] = useState<number | null>(null);
  const [quartoPreco, setQuartoPreco] = useState<number | null>(null);
  
  const handleChageQuartoStatus = (event:any, value: QuartoStatusType | null) => setQuartoStatus(value); 
  const handleChageQuartoTipo = (event:any, value: QuartoTipoType | null) => setQuartoTipo(value);
  const handleChangeQuartoNumero:ChangeEventHandler<HTMLInputElement> = (event:any, value?:number) => {
    const newNumber = parseFloat(event.target.value);
    setQuartoNumero(newNumber ?? value);
  }
  const handleChangeQuartoPreco:ChangeEventHandler<HTMLInputElement>  = (event:any, value?:number) => {
    const newPreco = parseFloat(event.target.value);
    setQuartoPreco(newPreco ?? value);
  }

  const { mutate } = usePostDataMutate();
  const { updateMutation } = useUpdateData();

  const router = useRouter();

  const data: QuartosData = {
    numero: Number(quartoNumero),
    preco: Number(quartoPreco),
    status: String(quartoStatus?.status),
    tipo: String(quartoTipo?.tipo)
  }
  const handleSumbitData = () => {
    mutate({endpoint: '/quartos', data: data})
    router.refresh()
  }

  const handleUpdateData = () => {
    updateMutation.mutate({endpoint: '/quartos', id:Number(quartoId), data: {
      ...data,
      id: data.id
    }})
    router.refresh()
  }

  return {quartoStatus, 
          quartoTipo, 
          quartoNumero, 
          quartoPreco,
          handleChageQuartoStatus,
          handleChageQuartoTipo, 
          handleChangeQuartoNumero, 
          handleChangeQuartoPreco, 
          handleSumbitData,
          handleUpdateData}
}

export interface QuartoStatusType {
  status:string
}

export interface QuartoTipoType {
  tipo: string
}

export const QuartoStatus = [
  {status: 'Manutenção'},
  {status: 'Disponível'},
  {status: 'Ocupado'}
]

export const QuartoTipo = [
  {tipo: 'Standard'},
  {tipo: 'Master'},
  {tipo: 'Deluxe'}
]