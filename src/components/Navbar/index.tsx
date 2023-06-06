'use client'

import { Box } from '@mui/material'
import Link from 'next/link'

import styles from './styles.module.scss'

export const Navbar = () => {
  return (
    <Box className={styles.container}>

      <Link href='/quartos' className={styles.links} >Quartos</Link>
      <Link href='/hospedes' className={styles.links} >Hospedes</Link>
      <Link href='/funcionarios' className={styles.links} >Funcionarios</Link>
      <Link href='/reservas' className={styles.links} >Reservas</Link>

    </Box>
  )
}