'use client'


import { useModal } from '../../hooks/useModal'
import { Box, Fab, Modal } from '@mui/material'
import { ReactNode } from 'react'

import styles from './styles.module.scss'

type CustomModalProps = {
  children: ReactNode,
  icon: ReactNode
}

export const ModalButton = ({children, icon}: CustomModalProps) => {

  const {isOpen, handleOpenModal ,handleCloseModal} = useModal();

  return (
    <>
      <Fab className={styles.button} onClick={handleOpenModal}>
        {icon}
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