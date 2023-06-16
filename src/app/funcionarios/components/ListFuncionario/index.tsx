'use client'

import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useGetData } from '@/hooks/useGetData';
import { FuncionarioData } from '@/interface/FuncionariosData';
import { FuncionarioCard } from '../FuncionarioCard';

import styles from './styles.module.scss'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
}));

export const ListFuncionario = () => {
  const {data} = useGetData({endpoint:'/funcionarios'});

  return (
    <>
      <Grid container spacing={5}>
        {Array.isArray(data) && 
        data.map((funcionario: FuncionarioData) => (
          <Grid key={funcionario.id}>
            <Item>
              <FuncionarioCard 
              nome={funcionario.nome} 
              email={funcionario.email} 
              cargo={funcionario.cargo}
              telefone={funcionario.telefone}
              salario={funcionario.salario}
            />
            </Item>
          </Grid>
        ))}
      </Grid>
    </>
  )
}