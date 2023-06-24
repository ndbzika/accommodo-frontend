'use client'

import { ModalButton } from '../../../../components/ModalButton'
import { useFuncionarioData } from '../../useFuncionarioData';
import {FuncionarioForm} from '../FuncionarioForm'
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export const FuncionarioModal = () => {
  return (
    <ModalButton
    icon={
      <GroupAddIcon sx={{color: '#fff'}}/>
    }>
      <>
        <FuncionarioForm action='Cadastrar' />
      </>
    </ModalButton>
  )
}