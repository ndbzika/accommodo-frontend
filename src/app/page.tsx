'use client'

import { Container } from '@mui/material';
import { Description } from '../components/Description';
import Image from 'next/image';

import styles from './styles.module.scss'

export default function Home() {
  return (
    <Container className={styles.body}>
      <Description />
      <Image
      alt='Image by katemangostar on Freepik'
      src='/inicial-image.png'
      width={594}
      height={420}
      />
    </Container>
  )
}
