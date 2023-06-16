'use client'

import { QuartoCard } from '../QuartoCard';
import { useGetData } from '../../../../hooks/useGetData'
import { QuartosData } from '../../../../interface/QuartosData';
import { Box } from '@mui/material';

import styles from './styles.module.scss'

export const ListQuartos = () => {
  const { data } = useGetData({ endpoint: '/quartos' });

  return (
    <Box className={styles.container}>
      {Array.isArray(data) && 
      data.map((quarto: QuartosData) => (
        <QuartoCard
        tipo={quarto.tipo}
        preco={quarto.preco} 
        status={quarto.status}
        id={Number(quarto.id)}
        key={quarto.id} />
      ))}
    </Box>
  )
}