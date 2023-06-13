'use client'

import { HospedeModal } from './components/HospedeModal'
import { ListHospedes } from './components/ListHospedes'

export default function Hospedes() {
  return (
    <>
      <ListHospedes />
      <HospedeModal />
    </>
  )
}