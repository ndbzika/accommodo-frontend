'use client'

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useGetData } from '../../../../hooks/useGetData'
import { ReservasData } from '../../../../interface/ReservasData';
import { ReservaCard } from '../ReservaCard';

import styles from './styles.module.scss'

export const ListReservas = () => {

  const {data} = useGetData({
    endpoint: '/reservas'
  });

  return (
    <>
      <Grid 
      container 
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      className={styles.container}
      >
        <>       
          {data ?
          Array.isArray(data) 
          &&
          data.map((reserva: ReservasData) => (
            <Grid key={reserva.id}>
              <ReservaCard
              id={reserva.id}
              quarto={reserva.quarto}
              funcionario={reserva.funcionario}
              hospede={reserva.hospede}
              dataInicio={reserva.dataInicio}
              dataFim={reserva.dataFim}
              status={reserva.status}
              />
            </Grid>
          ))

          :
            <h1>NEHUMA RESERVA CADASTRADA</h1>
          }
      </>
      </Grid>
    </>
  )
}