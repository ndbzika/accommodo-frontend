'use client'

import Image from 'next/image'

import styles from './styles.module.scss'

export const Title = () => {
  return (
    <>
      <Image 
      src='/marca-accommodo.png'
      alt='Accommodo THE BEST CHOICE'
      width={540}
      height={158}
      className={styles.container}
      />
    </>
  
  )
}