import {
  ImageContainer,
  NavigationContainer,
  ServicesContainer,
} from '@/styles/pages/services'
import Image from 'next/image'

import francesa from '../assets/francesa.png'
import alongamento from '../assets/alongamento.png'
import natural from '../assets/natural.png'
import temático from '../assets/temático.png'
import { CaretLeft, CaretRight } from 'phosphor-react'
import Link from 'next/link'

export default function Services() {
  return (
    <ServicesContainer>
      <h1>Serviços</h1>

      <NavigationContainer>
        <Link href="/">
          <CaretLeft size={20} weight="bold" color="#121214" />
          Voltar
        </Link>

        <Link href="/clients" title="ir para página clientes">
          Clientes
          <CaretRight size={20} weight="bold" color="#121214" />
        </Link>
      </NavigationContainer>

      <main>
        <ImageContainer>
          <span>Alongamento</span>
          <Image
            src={alongamento}
            width={200}
            height={250}
            alt="imagem de alongamento de unha"
          />
        </ImageContainer>

        <ImageContainer>
          <span>Francesa</span>
          <Image
            src={francesa}
            width={200}
            height={250}
            alt="imagem de unha francesa"
          />
        </ImageContainer>

        <ImageContainer>
          <span>Unhas naturais</span>
          <Image
            src={natural}
            width={200}
            height={250}
            alt="imagem de unha natural"
          />
        </ImageContainer>

        <ImageContainer>
          <span>Designs temáticos</span>
          <Image
            src={temático}
            width={200}
            height={250}
            alt="imagem de unha com design temático"
          />
        </ImageContainer>
      </main>

      <footer>
        <Link href="/contacts">
          <strong>Clique aqui</strong> para conhecer todos os serviços
          disponíveis ou agendar seu horário.
        </Link>
      </footer>
    </ServicesContainer>
  )
}
