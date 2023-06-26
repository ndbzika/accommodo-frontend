import { ModalButton } from '../../../../components/ModalButton'
import AddIcon from '@mui/icons-material/Add';
import { ReservaForm } from '../ReservaForm';
import { useReservaData } from '../../useReservaData';

export const ReservasModal = () => {
  return (
    <>
      <ModalButton
      icon={
        <AddIcon sx={{color: '#fff'}}/>
      }
      >
        <>
          <ReservaForm action='Cadastrar'/>
        </>
      </ModalButton>
    </>
  )
}