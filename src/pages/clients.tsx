import { ClientsContainer } from '@/styles/pages/clients'
import { CaretRight } from 'phosphor-react'
import Link from 'next/link'

export default function Clients() {
  return (
    <ClientsContainer>
      <Link href="/contacts" title="ir para página de contatos">
        Contatos
        <CaretRight size={20} weight="bold" color="#121214" />
      </Link>

      <h2>Página indisponível</h2>

      <p>Novidades em breve...</p>
    </ClientsContainer>
  )
}
