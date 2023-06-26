'use client'

import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { ReservasData } from '../../../../interface/ReservasData'
import { useReservaData } from '../../useReservaData'

import styles from './styles.module.scss'
import Link from 'next/link'

export const ReservaCard = ({ id = 0, quarto = null, funcionario = null, hospede = null, 
                              dataInicio = '', dataFim = '', status = '' }: ReservasData) => {
  const {formatDate} = useReservaData({ id:id });
  return (
    <>
      <Card className={styles.card}>
        <CardContent>
          <Typography 
          gutterBottom 
          component='p'
          variant='h5'
          className={styles.cardTop}
          >
            Reserva n° {id} 
            <Box component='span' className={styles.dotDivider}>
               • 
            </Box>
             {status}
          </Typography>

          <Box className={styles.idsDiv}>
            <Typography>
              ID Quarto: {quarto?.id}
            </Typography>

            <Typography>
              ID Hospede: {hospede?.id}
            </Typography>

            <Typography>
              ID Funcionario: {funcionario?.id}
            </Typography>

          </Box>

          <Typography component='p' className={styles.date}>
            Entrada: {formatDate(String(dataInicio))} 
          </Typography>
          <Typography component='p' className={styles.date}>
            Saída: {formatDate(String(dataFim))}
          </Typography>

        </CardContent>

        <CardActions>
          <Link href={`/reservas/${id}`}>       
            <Button className={styles.detailsButton}>
              Ver Detalhes
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  )
}