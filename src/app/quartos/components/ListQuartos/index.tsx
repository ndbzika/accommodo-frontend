'use client'

import { QuartoCard } from '../QuartoCard';
import { useGetData } from '../../../../hooks/useGetData'
import { QuartosData } from '../../../../interface/QuartosData';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import styles from './styles.module.scss'

export const ListQuartos = () => {
  const { data } = useGetData({ endpoint: '/quartos' });

  return (
    <Container className={styles.container}>
      <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      >
        { data ? 
        Array.isArray(data) &&
        data.map((quarto: QuartosData) => (
          <Grid
          key={quarto.id}
          xs={2} sm={4} md={4}
          >
            <QuartoCard
            tipo={quarto.tipo}
            preco={quarto.preco}
            status={quarto.status}
            id={Number(quarto.id)}
            />
          </Grid>
        ))
        :
          <h1 className={styles.centerDiv}>Falha ao buscar dados, tente novamente mais tarde.</h1>
        }

        { data?.length === 0 ?
            <h1 className={styles.centerDiv}>Não há quartos</h1>
          :
            null
        }
      </Grid>
    </Container>
  )
}