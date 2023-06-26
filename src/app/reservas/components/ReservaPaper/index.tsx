import { Paper, Typography } from '@mui/material'
import { FuncionarioData } from '../../../../interface/FuncionariosData'
import { HospedeData } from '../../../../interface/HospedesData'
import { QuartosData } from '../../../../interface/QuartosData'

import styles from './styles.module.scss'

type ReservaPaperData = {
  quarto?: QuartosData,
  hospede?: HospedeData,
  funcionario?: FuncionarioData
}

export const ReservaPaper = ({ quarto = null, hospede = null, funcionario = null }:ReservaPaperData) => {
  return (
    <Paper className={styles.container}>
      <Typography variant='h5' className={styles.title}>
        { quarto ? 'Quarto': null ||
          hospede ? 'Hospede' : null ||
          funcionario? 'Funcionario' : null }
      </Typography>

      <Typography>
        ID: { quarto?.id || hospede?.id || funcionario?.id }
      </Typography>

      <Typography>
        { quarto ? `N°: ${quarto?.numero}` : null || 
          hospede ? ` Nome: ${hospede?.nome}` : null || 
          funcionario ? `Nome: ${funcionario?.nome}` : null }
      </Typography>

      <Typography>
        { quarto ? `Tipo: ${quarto?.tipo}` : null || 
          hospede ? `Email: ${hospede?.email}` : null || 
          funcionario ? `Email: ${funcionario?.email}` : null }
      </Typography>

      <Typography>
        { quarto ? `Status: ${quarto?.status}` : null || 
          hospede ? `Telefone: ${hospede?.telefone}` : null || 
          funcionario ? `Telefone: ${funcionario?.telefone}` : null }
      </Typography>

      <Typography>
        { funcionario ? `Cargo: ${funcionario?.cargo}` : null }
      </Typography>
    </Paper>
  )
}