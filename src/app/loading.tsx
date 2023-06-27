'use client'

import { Box, CircularProgress } from '@mui/material';

import styles from './styles.module.scss'

export default function Loading() {
  return (
    <Box component='span' className={styles.loadingDiv}>
      <CircularProgress className={styles.loading}/>
    </Box>
  )
}