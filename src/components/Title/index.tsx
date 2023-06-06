'use client'

import { Box, Typography } from '@mui/material'

import styles from './styles.module.scss'

export const Title = () => {
  return (
    <Box className={styles.container}>
      <Typography variant='h1' className={styles.title}>
        Accommodo
      </Typography>
      <Typography className={styles.underTitle}>THE BEST CHOICE</Typography>
    </Box>
  )
}