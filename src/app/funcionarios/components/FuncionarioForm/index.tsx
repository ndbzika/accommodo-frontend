import { Box, Button, FormControl, Grid, Input, InputLabel, Typography } from '@mui/material'
import { useFuncionarioData } from '../../useFuncionarioData';

import styles from './styles.module.scss'

type FormProps = {
  action: string
  id?: number
}

export const FuncionarioForm = ({ action='',id = null }: FormProps) => {
  const { nomeFuncionario, handleSetNomeFuncionario,
    emailFuncionario, handleSetEmailFuncionario,
    telefoneFuncionario, handleSetTelefoneFuncionario,
    cargoFuncionario, handleSetCargoFuncionario,
    salarioFuncionario, handleSetSalarioFuncionario,
    handleSubmitData, handleUpdateData } = useFuncionarioData(id);

  return (
    <Box className={styles.child}>
      <Typography 
        component='h2' 
        variant='h3'
        className={styles.title}
        >
          {action} funcionário
        </Typography>

        <Box className={styles.form} component='form'>
          <Grid
          container
          spacing={{ xs: 2, md: 3 }} 
          columns={{ xs: 4, sm: 8, md: 12 }}
          className={styles.grid}
          >
            <Grid xs={8}>
              <FormControl>
                <InputLabel htmlFor='nome-funcionario'>Nome</InputLabel>
                <Input
                required
                value={nomeFuncionario}
                onChange={handleSetNomeFuncionario}
                id='nome-funcionario'
                className={styles.input}
                />
              </FormControl>
          
              <FormControl>
                <InputLabel htmlFor='email-funcionario'>Email</InputLabel>
                <Input
                required
                value={emailFuncionario}
                onChange={handleSetEmailFuncionario}
                id='email-funcionario'
                className={styles.input}
                placeholder='email@email.com'
                type='email'
                />
              </FormControl>
          
              <FormControl>
                <InputLabel htmlFor='telefone-funcionario'>Telefone</InputLabel>
                <Input
                required
                value={telefoneFuncionario}
                onChange={handleSetTelefoneFuncionario}
                id='telefone-funcionario'
                placeholder='(xx) xxxx-xxxx'
                className={styles.input}
                />
              </FormControl>
            </Grid>
          
            <Grid xs={6}>
              <FormControl>
                <InputLabel htmlFor='cargo-funcionario'>Cargo</InputLabel>
                <Input
                required
                value={cargoFuncionario}
                onChange={handleSetCargoFuncionario}
                id='cargo-funcionario'
                className={styles.input}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor='salario-funcionario'>Salario</InputLabel>
                <Input
                required
                value={salarioFuncionario}
                onChange={handleSetSalarioFuncionario}
                id='salario-funcionario'
                placeholder='Ex.: 1500'
                className={styles.input}
                type='number'
                />
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        <Button
        variant='contained'
        onClick={
          action === "Cadastrar" ?
            handleSubmitData
          :
            () => {
              handleUpdateData()
            }
        }
        sx={{backgroundColor: '#000'}}
        >
          {action}
        </Button>

    </Box>
  )
}