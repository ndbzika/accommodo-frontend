import { useRouter } from 'next/navigation';
import { useDeleteData } from '../../hooks/useDeleteData';
import { usePostDataMutate } from '../../hooks/usePostDataMutate';
import { useUpdateData } from '../../hooks/useUpdateData';
import { FuncionarioData } from '../../interface/FuncionariosData';
import { ChangeEventHandler, MouseEvent, useState } from 'react';

export const useFuncionarioData = (funcionarioId?:number) => {
  const [nomeFuncionario, setNomeFuncionario] = useState<string | null>(null);
  const [emailFuncionario, setEmailFuncionario] = useState<string | null>(null);
  const [telefoneFuncionario, setTelefoneFuncionario] = useState<string | null>(null);
  const [cargoFuncionario, setCargoFuncionario] = useState(null);
  const [salarioFuncionario, setSalarioFuncionario] = useState(null);
  const [deleteFuncionarioId, setDeleteFuncionarioId] = useState<number | null>(null);
  const [openPopper, setOpenPopper] = useState(false);
  const [popperAnchor, setPopperAnchor] = useState<null | HTMLElement>(null)

  const router = useRouter();

  const handleSetNomeFuncionario: ChangeEventHandler<HTMLInputElement> = (event: any) => {
    setNomeFuncionario(event.target.value)
  }
  const handleSetEmailFuncionario: ChangeEventHandler<HTMLInputElement> = (event: any) => {
    setEmailFuncionario(event.target.value);
  }
  const handleSetTelefoneFuncionario: ChangeEventHandler<HTMLInputElement> = (event: any) => {
    setTelefoneFuncionario(event.target.value);
  }
  const handleSetCargoFuncionario: ChangeEventHandler<HTMLInputElement> = (event: any) => {
    setCargoFuncionario(event.target.value)
  }
  const handleSetSalarioFuncionario: ChangeEventHandler<HTMLInputElement> = (event: any) => {
    setSalarioFuncionario(event.target.value)
  } 
  const handleSetPopper = (event: MouseEvent<HTMLElement>) => {
    setPopperAnchor(popperAnchor ? null : event.currentTarget)
    setOpenPopper((state) => !state)
  }

  const { mutate } = usePostDataMutate();
  const { updateMutation } = useUpdateData();

  const data: FuncionarioData = {
    nome: String(nomeFuncionario),
    email: String(emailFuncionario),
    telefone: String(telefoneFuncionario),
    cargo: String(cargoFuncionario),
    salario: Number(salarioFuncionario)
  }

  const handleSubmitData = () => {
    mutate({endpoint: '/funcionarios', data: data});
    setNomeFuncionario(null);
    setEmailFuncionario(null);
    setTelefoneFuncionario(null);
  }

  const handleUpdateData = () => {
    updateMutation.mutate({endpoint: '/funcionarios', id:Number(funcionarioId), data: {    
      ...data,
      id: data.id
    }})
  }

  const {handleDeleteData} = useDeleteData({
    endpoint: '/funcionarios',
    id: deleteFuncionarioId,
    router: router
  });

  return {  nomeFuncionario, handleSetNomeFuncionario,
            emailFuncionario, handleSetEmailFuncionario,
            telefoneFuncionario, handleSetTelefoneFuncionario,
            cargoFuncionario, handleSetCargoFuncionario,
            salarioFuncionario, handleSetSalarioFuncionario,
            openPopper, handleSetPopper,
            popperAnchor,
            handleSubmitData, handleUpdateData , handleDeleteData,
            setDeleteFuncionarioId
         }
}