import { ChangeEvent, useState } from 'react'
import { useGetData } from '../../hooks/useGetData';
import { DateRange } from '@mui/x-date-pickers-pro';
import dayjs, { Dayjs } from 'dayjs';
import { usePostDataMutate } from '../../hooks/usePostDataMutate';
import { SelectChangeEvent } from '@mui/material';
import { ReservasData } from '../../interface/ReservasData';
import { useGetDataById } from '../../hooks/useGetDataById';
import { useUpdateData } from '../../hooks/useUpdateData';
import { useRouter } from 'next/navigation';

type reservaProps = {
  id?: number
}

const today = dayjs().format('YYYY-MM-DD'); 

export const useReservaData = ({ id = null }: reservaProps) => {
  const [reservaId, setReservaId] = useState('');
  const [quartoId, setQuartoId] = useState<string | number>(0);
  const [funcionarioId, setFuncionarioId] = useState<string | number>(0);
  const [hospedeId, setHospedeId] = useState<string | number>(0);
  const [status, setStatus] = useState('Ativo');
  const [dataEntrada, setDataEntrada] = useState<string>(today);
  const [dataSaida, setDataSaida] = useState<string>(today);
  const [date, setDate] = useState<DateRange<Dayjs>>([
    dayjs(dataEntrada),
    dayjs(dataSaida)
  ]);
  const [isDataEntrada, setIsDataEntrada] = useState<boolean>(true); 
  
  
  const handleSetReserva = (value:any) => {
    setReservaId(value)
  }

  const handleSetQuartoId = (event: SelectChangeEvent<string | number>) => {
    setQuartoId(event.target.value)   
  }

  const handleSetFuncionarioId = (event: SelectChangeEvent<string | number>) => {
    setFuncionarioId(event.target.value)
  }

  const handleSetHospedeId = (event: SelectChangeEvent<string | number>) => {
    setHospedeId(event.target.value)
  }

  const handleSetStatus = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus((event.target as HTMLInputElement).value);
  }

  const handleSetDataEntrada = (value:string) => {
    setDataEntrada(value)
  }

  const handleSetDataSaida = (value:string) => {
    setDataSaida(value)
  }

  const handleSetDate = (newDate: DateRange<Dayjs>) => {
    setDate(newDate);
    const formattedStartDate = newDate[0]?.toString();
    const formattedEndDate = newDate[1]?.toString();
    if(isDataEntrada) {
      handleSetDataEntrada(formattedStartDate)
      setIsDataEntrada(false)
    } else {
      handleSetDataSaida(formattedEndDate)
      setIsDataEntrada(true);
    }
  }  

  const { data: quartosData } = useGetData({
    endpoint: '/quartos'
  })

  const { data: hospedesData } = useGetData({
    endpoint: '/hospedes'
  })

  
  const { data: funcionariosData } = useGetData({
    endpoint: '/funcionarios'
  })


  const formatDate = (date: string) => {
    const convertedDate = new Date(date),
          dia = convertedDate.getDate().toString().padStart(2, '0'),
          mes = (convertedDate.getMonth()+1).toString().padStart(2, '0'),
          ano = convertedDate.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  const { mutate } = usePostDataMutate();

  const formattedStartDate = date[0]?.toString();
  const formattedEndDate = date[1]?.toString();
  const data: ReservasData = {
    quarto: {
      id: Number(quartoId)
    },
    funcionario: {
      id: Number(funcionarioId)
    },
    hospede: {
      id: Number(hospedeId)
    },
    dataInicio: formatDate(formattedStartDate),
    dataFim: formatDate(formattedEndDate),
    status: status
  }
  
  const handleSubmitData = () => {
    mutate({endpoint: '/reservas', data: data})   
  }

  const {updateMutation} = useUpdateData();

  const router = useRouter();

  const handleUpdateData = () => {
    updateMutation.mutate({endpoint: '/reservas', id:Number(reservaId), data: {
      ...data,
      id: reservaId
    }})
    router.refresh()
  }

  return { 
    reservaId, handleSetReserva,
    quartosData, quartoId, handleSetQuartoId,
    funcionariosData,funcionarioId, handleSetFuncionarioId,
    hospedesData,hospedeId, handleSetHospedeId,
    status, handleSetStatus,
    date,
    formatDate, handleSetDate,
    handleSubmitData, handleUpdateData
  }
}