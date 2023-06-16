import { ModalButton } from '../../../../components/ModalButton'
import { Autocomplete, Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import {useQuartoData, QuartoStatusType, QuartoTipoType, QuartoTipo, QuartoStatus} from '../../useQuartoData'
import AddIcon from '@mui/icons-material/Add';

import styles from './styles.module.scss'


export const QuartoModal = () => {
  const {quartoTipo,
        quartoNumero, 
        quartoPreco, 
        quartoStatus,
        handleChageQuartoStatus,
        handleChageQuartoTipo,
        handleChangeQuartoNumero,
        handleChangeQuartoPreco,
        handleSumbitData} = useQuartoData();

  return (
    <>
      <ModalButton 
      icon={
        <AddIcon sx={{color: '#fff'}}/>
      }
      >
        <Typography variant='h3' className={styles.title} >Cadastrar quarto</Typography>
        
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
        onClick={handleSumbitData}
        >
          Cadastrar
        </Button>

        </FormControl>
      </ModalButton>
    </>
  )
}