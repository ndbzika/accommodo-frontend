'use client'

import { Box } from '@mui/material'
import Link from 'next/link'

import styles from './styles.module.scss'

import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const Navbar = () => {
  return (
    <Box className={styles.container}>

      <Link href='/quartos' className={styles.links} >Quartos</Link>
      <Link href='/hospedes' className={styles.links} >Hospedes</Link>
      <Link href='/' className={styles.links} > <HomeIcon /> </Link>
      <Link href='/funcionarios' className={styles.links} >Funcionarios</Link>
      <Link href='/reservas' className={styles.links} >Reservas</Link>

    </Box>
  )
}