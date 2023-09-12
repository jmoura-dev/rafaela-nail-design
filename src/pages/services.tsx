import {
  ImageContainer,
  NavigationContainer,
  ServicesContainer,
  MainMobile,
  MainDesktop,
} from '@/styles/pages/services'
import Image from 'next/image'

import francesa from '../assets/francesa.png'
import spa from '../assets/spa.png'
import natural from '../assets/natural.png'
import temático from '../assets/temático.png'
import { CaretLeft, CaretRight } from 'phosphor-react'
import Link from 'next/link'
import { useContext } from 'react'
import { ScreenSizeContext } from '@/contexts/screenSizeContext'

export default function Services() {
  const { isScreenMobile } = useContext(ScreenSizeContext)

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

      {isScreenMobile ? (
        <MainMobile>
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
            <span>Spa dos pés</span>
            <Image
              src={spa}
              width={200}
              height={250}
              alt="imagem de alongamento de unha"
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
        </MainMobile>
      ) : (
        <MainDesktop>
          <div>
            <ImageContainer>
              <span>Francesa</span>
              <Image
                src={francesa}
                width={300}
                height={230}
                alt="imagem de alongamento de unha"
              />
            </ImageContainer>
            <ImageContainer>
              <span>Spa dos pés</span>
              <Image
                src={spa}
                width={300}
                height={230}
                alt="imagem de alongamento de unha"
              />
            </ImageContainer>
          </div>

          <div>
            <ImageContainer>
              <span>Unhas naturais</span>
              <Image
                src={natural}
                width={300}
                height={230}
                alt="imagem de alongamento de unha"
              />
            </ImageContainer>
            <ImageContainer>
              <span>Designs temáticos</span>
              <Image
                src={temático}
                width={300}
                height={230}
                alt="imagem de alongamento de unha"
              />
            </ImageContainer>
          </div>
        </MainDesktop>
      )}

      <footer>
        <Link href="/contacts">
          <strong>Clique aqui</strong> para conhecer todos os serviços
          disponíveis ou agendar seu horário.
        </Link>
      </footer>
    </ServicesContainer>
  )
}
