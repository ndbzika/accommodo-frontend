'use client'

import { ModalButton } from '../../../../components/ModalButton'
import { Box, Button, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useHospedeData } from '../../useHospedeData';

import styles from './styles.module.scss'


export const HospedeModal = () => {
  const { nomeHospede, handleSetNomeHospede,
          emailHospede, handleSetEmailHospede,
          telefoneHospede, handleSetTelefoneHospede,
          handleSubmitData } = useHospedeData();


  return (
    <ModalButton icon={
      <AddIcon sx={{color: '#fff'}}/>
    }>
      <Typography variant='h3' className={styles.title}>Cadastrar hospede</Typography>
      <Box className={styles.form}>
        <TextField
        required
        id='outlined-controlled'
        label='Nome'
        value={nomeHospede}
        onChange={handleSetNomeHospede}
        />

        <TextField
        required
        id='outlined-controlled'
        label='Email'
        value={emailHospede}
        onChange={handleSetEmailHospede}
        type='email'
        />

        <TextField
        required
        id='outlined-controlled'
        label='Telefone'
        placeholder='(xx) xxxx-xxxx'
        value={telefoneHospede}
        onChange={handleSetTelefoneHospede}
        />

        <Button 
        variant='contained' 
        className={styles.registerButton}
        onClick={handleSubmitData}
        >
          Cadastrar
        </Button>
      </Box>
    </ModalButton>
  )
}