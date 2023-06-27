import { Button } from '@mui/material'
import { MouseEventHandler } from 'react'
import UpdateIcon from '@mui/icons-material/Update';

import styles from './styles.module.scss'

type UpdateButtonProps = {
  id: number | null,
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const UpdateButton = ({ id = null, onClick }:UpdateButtonProps) => {
  return (
    <Button color='success' onClick={onClick} className={styles.updateButton}>
      <UpdateIcon />
    </Button>
  )
}