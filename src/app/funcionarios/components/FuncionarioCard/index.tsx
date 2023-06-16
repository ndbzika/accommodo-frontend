import { Box, Typography } from '@mui/material'
import { FuncionarioData } from '../../../../interface/FuncionariosData';
import Image from 'next/image'

import styles from './styles.module.scss';

export const FuncionarioCard = ({ nome = '', email ='', cargo='' }: FuncionarioData) => {
  return (
    <>
      <Image
      src='/funcionario.jpg'
      alt='funcionario photo'
      width={100}
      height={100}
      />
      <Box className={styles.funcionarioInfo}>
        <Typography variant='h5' className={styles.nome} >{nome}</Typography>
        <Typography variant='body1' className={styles.email}>{email}</Typography>
        <Typography variant='body2' className={styles.cargo}>{cargo}</Typography>
      </Box>
    </>
  )
}