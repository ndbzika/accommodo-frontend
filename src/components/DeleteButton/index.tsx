import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { MouseEventHandler } from 'react';

type DeleteButtonProps = {
  id: number | null,
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const DeleteButton = ({ id = null, onClick }:DeleteButtonProps) => {
  return (
    <Button color='error' onClick={onClick}>
      <DeleteIcon />
    </Button>
  )
}