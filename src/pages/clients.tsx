import {
  ClientsContainer,
  NavigationContainer,
  MainMobile,
  SectionContainer,
} from '@/styles/pages/clients'
import { CaretLeft, CaretRight } from 'phosphor-react'
import Link from 'next/link'
import { useContext } from 'react'
import { ScreenSizeContext } from '@/contexts/screenSizeContext'
import Image from 'next/image'

import imgService1 from '../assets/service1.png'
import imgService2 from '../assets/service2.png'
import imgService3 from '../assets/service3.png'
import feedback1 from '../assets/feedback1.png'
import feedback2 from '../assets/feedback2.png'
import feedback3 from '../assets/feedback3.png'

export default function Clients() {
  const { isScreenMobile } = useContext(ScreenSizeContext)

  return (
    <ClientsContainer>
      <NavigationContainer>
        <Link href="/services">
          <CaretLeft size={20} weight="bold" color="#121214" />
          Voltar
        </Link>

        <Link href="/contacts" title="ir para página de contatos">
          Contatos
          <CaretRight size={20} weight="bold" color="#121214" />
        </Link>
      </NavigationContainer>

      <h2>Trabalhos e feedbacks</h2>
      {isScreenMobile ? (
        <>
          <MainMobile>
            <SectionContainer>
              <Image
                src={imgService1}
                width={200}
                height={150}
                alt="imagem do serviço prestado"
              />
              <Image
                src={feedback1}
                width={200}
                height={100}
                alt="feedback do cliente"
              />
            </SectionContainer>

            <SectionContainer>
              <Image
                src={imgService2}
                width={200}
                height={150}
                alt="imagem do serviço prestado"
              />
              <Image
                src={feedback2}
                width={200}
                height={100}
                alt="feedback do cliente"
              />
            </SectionContainer>

            <SectionContainer>
              <Image
                src={imgService3}
                width={200}
                height={150}
                alt="imagem do serviço prestado"
              />
              <Image
                src={feedback3}
                width={200}
                height={100}
                alt="feedback do cliente"
              />
            </SectionContainer>
          </MainMobile>
          <footer>
            <p>
              Seu feedback é a nossa inspiração! Valorizamos cada opinião para
              criar unhas que refletem sua personalidade única.
            </p>
          </footer>
        </>
      ) : (
        <p>tem nada</p>
      )}
    </ClientsContainer>
  )
}
