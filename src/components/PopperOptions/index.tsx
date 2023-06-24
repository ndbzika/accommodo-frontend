import { Button, Paper } from '@mui/material'

import styles from './styles.module.scss'
import { MouseEventHandler } from 'react'

type OptionsProps = {
  id: number | null,
  deleteFn: MouseEventHandler,
  updateFn: MouseEventHandler
}

export const PopperOptions = ({ id = null, updateFn, deleteFn}: OptionsProps) => {

  return (
    <Paper className={styles.options}>
      <Button 
      className={styles.btn}
      onClick={updateFn}
      >
        Editar
      </Button>

      <Button 
      className={styles.btn}
      onClick={deleteFn}
      >
        Deletar
      </Button>
    </Paper>
  )
}