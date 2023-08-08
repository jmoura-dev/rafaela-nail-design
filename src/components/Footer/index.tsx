import Image from 'next/image'
import { FooterContainer } from './styles'

import logo from '../../assets/logo.svg'
import { AddressBook } from 'phosphor-react'
import Link from 'next/link'

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <Image src={logo} width={60} height={50} alt="Imagem de logo" />
        <Link href="/contacts">
          <AddressBook size={24} weight="fill" color="#3E5F8A" /> Marque já seu
          horário
        </Link>
      </div>
    </FooterContainer>
  )
}
