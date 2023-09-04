import { HomeContainer } from '@/styles/pages/home'
import Image from 'next/image'
import imageHome from '../assets/imageHome.png'
import Link from 'next/link'
import { CaretRight } from 'phosphor-react'

import rafaImg from '../assets/rafa.png'

export default function Home() {
  return (
    <HomeContainer>
      <header>
        <Image
          src={rafaImg}
          alt="imagem da designer Rafaela"
          width={80}
          height={80}
        />
      </header>

      <main>
        <h1>Quem sou ?</h1>
        <p>
          Oi! Eu sou a Rafaela, uma mulher apaixonada por duas coisas: minhas
          duas filhas e o incrível mundo do design de unhas. A cada pincelada,
          vejo um sorriso se formar no rosto das minhas clientes quando elas
          veem o resultado final. É essa reação que me motiva todos os dias.
        </p>
      </main>
      <Image
        src={imageHome}
        width={250}
        height={240}
        alt="Imagem ilustrativa de uma manicure"
        priority
      />

      <Link href="/services" title="Ir para página clientes">
        Serviços
        <CaretRight size={20} weight="bold" color="#121214" />
      </Link>
    </HomeContainer>
  )
}
