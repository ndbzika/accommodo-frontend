'use client'

import { useGetDataById } from '../../../hooks/useGetDataById'
import { Autocomplete, Box, Button, Container, FormControl, InputAdornment, InputLabel, Modal, OutlinedInput, TextField, Typography } from '@mui/material'
import { DeleteButton } from '../../../components/DeleteButton'
import { useDeleteData } from '../../../hooks/useDeleteData'
import { useRouter } from 'next/navigation';
import { UpdateButton } from '../../../components/UpdateButton'
import Image from 'next/image'

import styles from './styles.module.scss'
import { useModal } from '../../../hooks/useModal'
import { useQuartoData, QuartoStatusType, QuartoTipoType, QuartoTipo, QuartoStatus } from '../useQuartoData'

type PageProps = {
  params: {
    id: string
  }
}


export default function Page({ params }: PageProps) {
  const {data} = useGetDataById({endpoint: '/quartos', id: `/${params.id}`})

  const {quartoNumero,
        quartoPreco,
        quartoStatus,
        quartoTipo,    
        handleChageQuartoStatus,
        handleChageQuartoTipo,
        handleChangeQuartoNumero,
        handleChangeQuartoPreco,
        handleUpdateData} = useQuartoData(Number(params.id));

  const router = useRouter();

  const {isOpen, handleCloseModal, handleOpenModal} = useModal();

  const { handleDeleteData } = useDeleteData({
    endpoint: '/quartos', 
    id: Number(data?.id),
    router: router
  });

  return (
    <Container className={styles.container} component='main'>
      <Image src='/quarto.jpg' alt='quarto de hotel' width='500' height='300'/>


      <Typography component='h2' variant='h3' className={styles.quartoTitle}>
        Quarto n° {data?.numero}
      </Typography>


      <Box component='section'>
        <Typography className={styles.quartoData}>STATUS: {data?.status}</Typography>
        <Typography className={styles.quartoData}>TIPO: {data?.tipo}</Typography>
        <Typography className={styles.quartoData}>VALOR: R${data?.preco},00</Typography>
      </Box>

      <Box flexDirection='row' className={styles.buttons}>
        <UpdateButton
        id={Number(data?.id)}
        onClick={handleOpenModal}
        />

        <DeleteButton 
        id={Number(data?.id)}
        onClick={handleDeleteData}
        />

        <Modal open={isOpen} onClose={handleCloseModal}>
          <Box className={styles.modal}>
            <Typography variant='h3' className={styles.title} >Atualizar quarto</Typography>
        
            <FormControl className={styles.form}>
              <TextField 
              value={quartoNumero}
              onChange={handleChangeQuartoNumero}
              type='number'
              fullWidth
              helperText='Por favor coloque o número do quarto'
              label='N°'
              required
              />

            <Autocomplete
            fullWidth
            options={QuartoStatus}
            value={quartoStatus}
            onChange={handleChageQuartoStatus}
            getOptionLabel={(option:QuartoStatusType) => option.status}
            renderInput={(params) => (
              <TextField {...params} label="Status" variant='standard' />
            )}
            />

            <Autocomplete
            fullWidth
            options={QuartoTipo}
            value={quartoTipo}
            onChange={handleChageQuartoTipo}
            getOptionLabel={(option:QuartoTipoType) => option.tipo}
            renderInput={(params) => (
              <TextField {...params} label="Tipo" variant='standard' />
            )}
            />

            <FormControl fullWidth>
              <InputLabel htmlFor='outlined-adornment-amount'>Preço</InputLabel>
              <OutlinedInput
              id='outlined-adornment-amount'
              type='number'
              value={quartoPreco}
              onChange={handleChangeQuartoPreco}
              startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
              label='Preço'
              />
            </FormControl>
              
            <Button 
            variant='contained' 
            className={styles.registerButton} 
            onClick={handleUpdateData}
            >
              Atualizar
            </Button>

            </FormControl>
          </Box>
        
        </Modal>
      </Box>
    </Container>
  )
}