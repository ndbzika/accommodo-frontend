'use client'

import { Button, FormControl, FormControlLabel, FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, Switch, Typography } from '@mui/material'
import { useReservaData } from '../../useReservaData'
import { QuartosData } from '../../../../interface/QuartosData'
import { HospedeData } from '../../../../interface/HospedesData'
import { FuncionarioData } from '../../../../interface/FuncionariosData'
import { CalendarPicker } from '../CalendarPicker'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { MouseEventHandler } from 'react'

import styles from './styles.module.scss'

type FormProps = {
  action: string,
  id?: string
}

export const ReservaForm = ({action = '', id = null}: FormProps) => {
  const { quartosData, quartoId, handleSetQuartoId,
          hospedesData, hospedeId, handleSetHospedeId,
          funcionariosData, funcionarioId, handleSetFuncionarioId,
          status, handleSetStatus,
          date, handleSetDate,
          handleSubmitData, handleUpdateData} = useReservaData({ id: Number(id) });


  return (
    <>
      <Typography 
      component='h5'
      variant='h3'
      >
        {action} Reserva
      </Typography>

      <Grid container spacing={2} className={styles.gridContainer}>
        <Grid xs={4}>
          <FormControl className={styles.selectInput}>
            <InputLabel htmlFor='quarto'>Quarto</InputLabel>
            <Select
            label='Quarto'
            labelId='quarto'
            id='quarto'
            value={quartoId}
            onChange={handleSetQuartoId}
            >
              { Array.isArray(quartosData)
                  &&
                quartosData.map((quarto: QuartosData) => (
                      quarto.status === "Disponível"
                        &&
                      <MenuItem value={quarto.id} key={quarto.id}>
                        ID: {quarto.id} - N° {quarto.numero}
                      </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={4}>
          <FormControl className={styles.selectInput}>
            <InputLabel htmlFor='hospede'>Hospede</InputLabel>
            <Select
            label='Hospede'
            labelId='hospede'
            id='hospede'
            value={hospedeId}
            onChange={handleSetHospedeId}
            >
              { Array.isArray(hospedesData)
                  &&
                hospedesData.map((hospede: HospedeData) => (
                    <MenuItem value={hospede.id} key={hospede.id}>
                          ID: {hospede.id} - {hospede.nome}
                    </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={4}>
          <FormControl className={styles.selectInput}>
            <InputLabel htmlFor='funcionario'>Funcionario</InputLabel>
            <Select
            label='Funcionario'
            labelId='funcionario'
            id='funcionario'
            value={funcionarioId}
            onChange={handleSetFuncionarioId}
            >
              { Array.isArray(funcionariosData)
                  &&
                  funcionariosData.map((funcionario: FuncionarioData) => (
                    <MenuItem value={funcionario.id} key={funcionario.id}>
                          ID: {funcionario.id} - {funcionario.nome}
                    </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <FormControl>
        <FormLabel id='status'>Status</FormLabel>
        <RadioGroup
        aria-labelledby='status'
        name='status-radio'
        value={status}
        onChange={handleSetStatus}
        >
          <FormControlLabel value='Ativo' control={<Radio />} label='Ativo'/>
          <FormControlLabel value='Em andamento' control={<Radio />} label='Em andamento'/>
          <FormControlLabel value='Cancelado' control={<Radio />} label='Cancelado'/>
        </RadioGroup>
      </FormControl>
      
      <CalendarPicker
      date={date}
      onChangeDate={handleSetDate}
      />

      <Button 
      onClick={ action === "Cadastrar" ? handleSubmitData :
                handleUpdateData }
      >
        {action}
      </Button>
    </>
  )
}