'use client'

import { FuncionarioModal } from './components/FuncionarioModal'
import { ListFuncionario } from './components/ListFuncionario'

export default function Funcionarios() {
  return (
    <>
      <ListFuncionario />
      <FuncionarioModal/>
    </>
  )
}