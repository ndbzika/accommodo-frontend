import { usePostDataMutate } from '@/hooks/usePostDataMutate';
import { useUpdateData } from '@/hooks/useUpdateData';
import { HospedeData } from '@/interface/HospedesData';
import { ChangeEventHandler, useState } from 'react'

export const useHospedeData = (hospedeId ?:number) => {
  const [nomeHospede, setNomeHospede] = useState<string | null>(null);
  const [emailHospede, setEmailHospede] = useState<string | null>(null);
  const [telefoneHospede, setTelefoneHospede] = useState<string | null>(null);
  const [deleteHospedeId, setDeleteHospedeId] = useState<number | null>(null);


  const handleSetNomeHospede: ChangeEventHandler<HTMLInputElement> = (event: any) => {
    setNomeHospede(event.target.value)
  }
  const handleSetEmailHospede: ChangeEventHandler<HTMLInputElement> = (event: any) => {
    setEmailHospede(event.target.value);
  }
  const handleSetTelefoneHospede: ChangeEventHandler<HTMLInputElement> = (event: any) => {
    setTelefoneHospede(event.target.value);
  }

  const { mutate } = usePostDataMutate();
  const { updateMutation } = useUpdateData();

  const data: HospedeData = {
    nome: String(nomeHospede),
    email: String(emailHospede),
    telefone: String(telefoneHospede)
  }

  const handleSubmitData = () => {
    mutate({endpoint: '/hospedes', data: data});
    setNomeHospede(null);
    setEmailHospede(null);
    setTelefoneHospede(null);
  }

  const handleUpdateData = () => {
    updateMutation.mutate({endpoint: '/quartos', id:Number(hospedeId), data: {
      ...data,
      id: data.id
    }})
  }

  return {  nomeHospede,
            emailHospede,
            telefoneHospede,
            deleteHospedeId,
            handleSetNomeHospede,
            handleSetEmailHospede,
            handleSetTelefoneHospede,
            setDeleteHospedeId,
            handleSubmitData,
            handleUpdateData }
}
