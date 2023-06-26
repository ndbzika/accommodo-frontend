'use client'

import { Box, Container, Modal, Typography } from '@mui/material';
import { ReservasData } from '../../../interface/ReservasData'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ReservaPaper } from '../components/ReservaPaper';
import { useGetDataById } from '../../../hooks/useGetDataById';
import { useReservaData } from '../useReservaData';
import { UpdateButton } from '../../../components/UpdateButton';
import { DeleteButton } from '../../../components/DeleteButton';
import { useDeleteData } from '../../../hooks/useDeleteData';
import { useRouter } from 'next/navigation';
import { ReservaForm } from '../components/ReservaForm';
import { useModal } from '../../../hooks/useModal';

import styles from './styles.module.scss'

type PageProps = {
  params: {
    id: string
  }
}

export default function ReservaId({ params }: PageProps) {
  
  const router = useRouter();
  const { data } = useGetDataById({
    endpoint: '/reservas',
    id: `/${params.id}`
  });
  const { formatDate } = useReservaData({ id: data?.id });
  const { handleDeleteData } = useDeleteData({
    endpoint: '/reservas', 
    id: Number(data?.id),
    router: router
  });
  const {isOpen, handleOpenModal, handleCloseModal} = useModal();

  return (
    <>
      <Container className={styles.conatiner}>
        <Typography variant='h3'>
          Reserva n°{data?.id}
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid xs={2} sm={4} md={4}>
            <ReservaPaper quarto={data?.quarto}/>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <ReservaPaper hospede={data?.hospede}/>
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <ReservaPaper funcionario={data?.funcionario}/>
          </Grid>
        </Grid>
        <Typography 
        className={ data?.status === "Ativo" ? `${styles.statusAtivo}` : 
                    data?.status === "Cancelado" ? `${styles.statusCancelado}`: 
                    `${styles.statusEmAndamento}`}
        >
          Status: {data?.status}
        </Typography>
        <Typography>
          Tempo:
          <Typography component='span'>
            {formatDate(data?.dataInicio?.toString())}
            -
            {formatDate(data?.dataFim?.toString())}
            </Typography>
        </Typography>
        <Box>
          <UpdateButton
          id={data?.id}
          onClick={handleOpenModal}
          />
          <DeleteButton
          id={data?.id}
          onClick={handleDeleteData}
          />
        </Box>
      </Container>
      <Modal
      open={isOpen}
      onClose={handleCloseModal}
      >
        <Box className={styles.modalChildren}>
          <ReservaForm action='Atualizar' id={data?.id}/>
        </Box>
      </Modal>
    </>
  )
}