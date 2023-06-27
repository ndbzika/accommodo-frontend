'use client'

import { Box, Typography } from '@mui/material'
import Link from 'next/link'

import styles from './styles.module.scss'

export const Navbar = () => {
  return (
    <Box component='header' className={styles.navbar}>
      <Typography component='h2' variant='h5'>
        Modo ADMIN
      </Typography>

      <Box className={styles.links} component='nav'>
        <Link href='/' className={styles.link} >Home</Link>
        <Link href='/quartos' className={styles.link} >Quartos</Link>
        <Link href='/hospedes' className={styles.link} >Hospedes</Link>
        <Link href='/funcionarios' className={styles.link} >Funcionarios</Link>
        <Link href='/reservas' className={styles.link} >Reservas</Link>
      </Box>
    </Box>
  )
}