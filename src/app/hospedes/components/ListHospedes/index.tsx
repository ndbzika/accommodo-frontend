'use client'

import { TableContainer, Paper, Table, TableHead, TableCell, TableRow, TableBody, Typography, Box, TextField, Button, Modal } from '@mui/material'
import { useHospedeData } from '../../useHospedeData'
import { useGetData } from '../../../../hooks/useGetData';
import { HospedeData } from '../../../../interface/HospedesData';
import { UpdateButton } from '../../../../components/UpdateButton';
import { DeleteButton } from '../../../../components/DeleteButton';
import { useDeleteData } from '../../../../hooks/useDeleteData';
import { useRouter } from 'next/navigation';
import { useModal } from '../../../../hooks/useModal';

import styles from './styles.module.scss'

export const ListHospedes = () => {
  const router = useRouter();

  const {isOpen, handleOpenModal, handleCloseModal} = useModal();

  const { nomeHospede, handleSetNomeHospede,
          emailHospede, handleSetEmailHospede,
          telefoneHospede, handleSetTelefoneHospede,
          deleteHospedeId, setDeleteHospedeId,
          handleUpdateData  } = useHospedeData();

  const { data } = useGetData({ endpoint: '/hospedes' });

  const { handleDeleteData } = useDeleteData({
    endpoint: '/hospedes',
    id: deleteHospedeId,
    router: router
  });

  return (
    <>
      <TableContainer component={Paper} className={styles.table}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell className={styles.cellHead}>ID</TableCell>
              <TableCell className={styles.cellHead}>Nome</TableCell>
              <TableCell className={styles.cellHead}>Email</TableCell>
              <TableCell className={styles.cellHead}>Telefone</TableCell>
              <TableCell align='center' className={styles.cellHead}>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {Array.isArray(data) &&
            data.map((hospede: HospedeData) => (
              <>
                <TableRow key={hospede.id} className={styles.rowBody}>
                  <TableCell component='th' scope='row' className={styles.cellBody}>{hospede.id}</TableCell>
                  <TableCell className={styles.cellBody}>{hospede.nome}</TableCell>
                  <TableCell className={styles.cellBody}>{hospede.email}</TableCell>
                  <TableCell className={styles.cellBody}>{hospede.telefone}</TableCell>
                  <TableCell align='center' className={styles.cellBody}>
                    <Box className={styles.actions}>
                      <UpdateButton id={Number(hospede.id)}
                      onClick={handleOpenModal} 
                      />

                      <DeleteButton id={Number(hospede.id)}
                      onClick={()=> {
                        setDeleteHospedeId(Number(hospede.id))
                        handleDeleteData()
                      }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
                  <Modal open={isOpen} onClose={handleCloseModal}>
                    <Box className={styles.modal}>
                      <Typography variant='h3' className={styles.title}>Atualizar hospede</Typography>
                      <Box className={styles.updateModal}>
                        <TextField
                        required
                        id='outlined-controlled'
                        label='Nome'
                        value={nomeHospede}
                        onChange={handleSetNomeHospede}
                        />

                        <TextField
                        required
                        id='outlined-controlled'
                        label='Email'
                        value={emailHospede}
                        onChange={handleSetEmailHospede}
                        type='email'
                        />

                        <TextField
                        required
                        id='outlined-controlled'
                        label='Telefone'
                        value={telefoneHospede}
                        onChange={handleSetTelefoneHospede}
                        />

                        <Button 
                        variant='contained' 
                        className={styles.registerButton}
                        onClick={handleUpdateData}
                        >
                          Salvar
                        </Button>
                      </Box>
                    </Box>
                  </Modal>

              </>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </>
  )
}