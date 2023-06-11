'use client'

import { useGetDataById } from '@/hooks/useGetDataById'
import { Box, Container, Typography } from '@mui/material'
import { DeleteButton } from '@/components/DeleteButton'
import { useDeleteData } from '@/hooks/useDeleteData'
import { useRouter } from 'next/navigation';
import Image from 'next/image'

import styles from './styles.module.scss'

type PageProps = {
  params: {
    id: string
  }
}


export default function Page({ params }: PageProps) {
  const {data} = useGetDataById({endpoint: '/quartos', id: `/${params.id}`})

  const router = useRouter();

  const { handleDeleteData } = useDeleteData({
    endpoint: '/quartos', 
    id: Number(data?.id),
    router: router
  });

  return (
    <Container className={styles.container}>
      <Image src='/quarto.jpg' alt='quarto de hotel' width='500' height='300'/>


      <Typography variant='h3'>
        Quarto n° {data?.numero}
      </Typography>


      <Box>
        <Typography>STATUS: {data?.status}</Typography>
        <Typography>TIPO: {data?.tipo}</Typography>
        <Typography>VALOR: R${data?.preco},00</Typography>
      </Box>
      <DeleteButton 
      id={Number(data?.id)}
      onClick={handleDeleteData}
      />
    </Container>
  )
}