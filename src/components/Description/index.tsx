'use client'

import { Box, Typography } from '@mui/material'

import styles from './styles.module.scss'
import { Title } from '../Title'
import Link from 'next/link'

export const Description = () => {
  return (
    <Box>
      <Title />

      <Typography 
      component='p' 
      className={styles.description}
      >
        O melhor sistema de gerenciamento de hotéis da America Latina!
        A melhor escolha para sua empresa e para seus funcionários.
        Adquira já para seu negócio, fale com nossa equipe:  
        <Typography component='span'>
          <Link 
          href='https://www.linkedin.com/in/flaviohenriquedev/'
          className={styles.link}
          target='_blank'
          >
            Linkedin
          </Link>
        </Typography>
      </Typography>
    </Box>
  )
}