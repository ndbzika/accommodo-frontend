'use client'

type CustomModalProps = {
  children: ReactNode
}

import { useModal } from '@/hooks/useModal'
import { Box, Fab, Modal } from '@mui/material'
import { ReactNode } from 'react'
import AddIcon from '@mui/icons-material/Add';

import styles from './styles.module.scss'

export const ModalButton = ({children}: CustomModalProps) => {

  const {isOpen, handleOpenModal ,handleCloseModal} = useModal();

  return (
    <>
      <Fab className={styles.button} onClick={handleOpenModal}>
        <AddIcon sx={{color: '#fff'}}/>
      </Fab>
      <Modal
      open={isOpen}
      onClose={handleCloseModal}
      >
        <Box className={styles.child}>
          {children}
        </Box>
      </Modal>
    </>
  )
}