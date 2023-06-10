'use client'

import { useGetDataById } from '@/hooks/useGetDataById'
import { Box, Container, Typography } from '@mui/material'

import styles from './styles.module.scss'
import Image from 'next/image'

type PageProps = {
  params: {
    id: string
  }
}


export default function Page({ params }: PageProps) {
  const {data} = useGetDataById({endpoint: '/quartos', id: `/${params.id}`})

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
    </Container>
  )
}