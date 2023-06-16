import { Button } from '@mui/material'
import { MouseEventHandler } from 'react'
import UpdateIcon from '@mui/icons-material/Update';

type UpdateButtonProps = {
  id: number | null,
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const UpdateButton = ({ id = null, onClick }:UpdateButtonProps) => {
  return (
    <Button color='success' onClick={onClick}>
      <UpdateIcon />
    </Button>
  )
}