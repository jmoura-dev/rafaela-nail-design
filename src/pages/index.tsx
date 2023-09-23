import { HomeContainerMobile, HomeContainerDesktop } from '@/styles/pages/home'
import Image from 'next/image'
import imageHome from '../assets/imageHome.png'
import Link from 'next/link'
import { CaretRight } from 'phosphor-react'

import rafaDesktop from '../assets/rafaDesktop.png'
import imgService1 from '../assets/service1.png'
import imgService2 from '../assets/service2.png'
import infantil from '../assets/infantil.png'

import { useContext } from 'react'
import { ScreenSizeContext } from '@/contexts/screenSizeContext'

export default function Home() {
  const { isScreenMobile } = useContext(ScreenSizeContext)

  return (
    <>
      {isScreenMobile ? (
        <HomeContainerMobile>
          <header>
            <Image
              src={rafaDesktop}
              alt="imagem da designer Rafaela"
              width={80}
              height={80}
            />
          </header>

          <main>
            <h1>Quem sou ?</h1>
            <p>
              Oi! Eu sou a Rafaela, uma mulher apaixonada por duas coisas:
              minhas duas filhas e o incrível mundo do design de unhas. A cada
              pincelada, vejo um sorriso se formar no rosto das minhas clientes
              quando elas veem o resultado final. É essa reação que me motiva
              todos os dias.
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
        </HomeContainerMobile>
      ) : (
        <HomeContainerDesktop>
          <div>
            <Image
              src={rafaDesktop}
              alt="imagem da designer Rafaela"
              width={230}
              height={240}
            />
            <h1>Quem sou ?</h1>
            <p>
              Oi! Eu sou a Rafaela, uma mulher apaixonada por duas coisas:
              minhas duas filhas e o incrível mundo do design de unhas. A cada
              pincelada, vejo um sorriso se formar no rosto das minhas clientes
              quando elas veem o resultado final. É essa reação que me motiva
              todos os dias.
            </p>
          </div>

          <div>
            <Image
              src={imgService1}
              alt="Imagem de demostração número 1"
              width={400}
              height={370}
            />

            <Image
              src={imgService2}
              alt="Imagem de demostração número 2"
              width={400}
              height={370}
            />

            <Image
              src={infantil}
              alt="Imagem de demostração número 3"
              width={400}
              height={370}
            />
          </div>
        </HomeContainerDesktop>
      )}
    </>
  )
}
