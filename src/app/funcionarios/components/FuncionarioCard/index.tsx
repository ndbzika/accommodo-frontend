'use client'

import { Box, IconButton, Modal, Popper, Typography } from '@mui/material'
import { FuncionarioData } from '../../../../interface/FuncionariosData';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image'
import { useFuncionarioData } from '../../useFuncionarioData';
import { PopperOptions } from '../../../../components/PopperOptions';
import { useModal } from '../../../../hooks/useModal';

import styles from './styles.module.scss';
import { FuncionarioForm } from '../FuncionarioForm';

export const FuncionarioCard = ({ nome = '', email ='', cargo='', id=null }: FuncionarioData) => {
  const { openPopper, handleSetPopper,
          popperAnchor, handleDeleteData, 
          handleUpdateData, setDeleteFuncionarioId } = useFuncionarioData();

  const {isOpen, handleOpenModal, handleCloseModal} = useModal();

  return (
    <>
      <Image
      src='/funcionario.jpg'
      alt='funcionario photo'
      width={100}
      height={100}
      />

      <Box className={styles.funcionarioInfo}>
        <Typography variant='h5' className={styles.nome} >{nome}</Typography>
        <Typography variant='body1' className={styles.email}>{email}</Typography>
        <Typography variant='body2' className={styles.cargo}>{cargo}</Typography>
      </Box>

      <IconButton 
      aria-label='more' 
      className={styles.optionsButton}
      onClick={handleSetPopper}
      >
        <MoreVertIcon/>
      </IconButton>

      <Popper 
      open={openPopper} 
      anchorEl={popperAnchor}
      placement='bottom-start'
      >
        <PopperOptions 
        id={id} 
        deleteFn={() => {
          setDeleteFuncionarioId(id);
          handleDeleteData()
        }} 
        updateFn={handleOpenModal}
        />
      </Popper>


      <Modal open={isOpen} onClose={handleCloseModal}>
        <FuncionarioForm action='Atualizar' id={id}/>
      </Modal>
    </>
  )
}