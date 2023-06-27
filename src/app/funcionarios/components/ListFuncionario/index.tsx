'use client'

import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useGetData } from '../../../../hooks/useGetData';
import { FuncionarioData } from '../../../../interface/FuncionariosData';
import { FuncionarioCard } from '../FuncionarioCard';

import styles from './styles.module.scss'
import { Container } from '@mui/material';

export const ListFuncionario = () => {
  const {data} = useGetData({endpoint:'/funcionarios'});

  return (
    <Container component='section' className={styles.container}>
      <Grid 
      container 
      spacing={{ xs: 2, md: 3 }} 
      columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.isArray(data) && 
        data.map((funcionario: FuncionarioData) => (
          <Grid key={funcionario.id}>           
            <FuncionarioCard 
            id={funcionario.id}
            nome={funcionario.nome} 
            email={funcionario.email} 
            cargo={funcionario.cargo}
            telefone={funcionario.telefone}
            salario={funcionario.salario}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}