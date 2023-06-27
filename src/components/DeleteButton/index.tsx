import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { MouseEventHandler } from 'react';

import styles from './styles.module.scss'

type DeleteButtonProps = {
  id: number | null,
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const DeleteButton = ({ id = null, onClick }:DeleteButtonProps) => {
  return (
    <Button color='error' onClick={onClick} className={styles.deleteButton}>
      <DeleteIcon />
    </Button>
  )
}