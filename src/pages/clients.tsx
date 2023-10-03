import {
  ClientsContainer,
  NavigationContainer,
  MainMobile,
  MainDesktop,
  SectionContainer,
} from '@/styles/pages/clients'
import { CaretLeft, CaretRight } from 'phosphor-react'
import Link from 'next/link'
import { useContext } from 'react'
import { ScreenSizeContext } from '@/contexts/screenSizeContext'
import Image from 'next/image'

import feedback1 from '../assets/feedback1.png'
import feedback2 from '../assets/feedback2.png'
import feedback3 from '../assets/feedback3.png'
import feedback4 from '../assets/feedback4.png'
import feedback5 from '../assets/feedback5.png'
import feedback6 from '../assets/feedback6.png'
import feedback7 from '../assets/feedback7.png'

import imgService1 from '../assets/service1.png'
import imgService2 from '../assets/service2.png'
import imgService3 from '../assets/service3.png'
import infantil from '../assets/infantil.png'
import pes from '../assets/pes.png'
import imgCarousel1 from '../assets/imageCarousel1.png'
import imgCarousel2 from '../assets/imageCarousel2.png'
import imgCarousel3 from '../assets/imageCarousel3.png'
import imgCarousel4 from '../assets/imageCarousel4.png'
import imgCarousel5 from '../assets/imageCarousel5.png'
import imgCarousel6 from '../assets/imageCarousel6.png'
import imgCarousel7 from '../assets/imageCarousel7.png'

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

            <SectionContainer>
              <Image
                src={imgCarousel3}
                width={200}
                height={150}
                alt="imagem do serviço prestado"
              />
              <Image
                src={feedback4}
                width={200}
                height={100}
                alt="feedback do cliente"
              />
            </SectionContainer>

            <SectionContainer>
              <Image
                src={infantil}
                width={200}
                height={220}
                alt="imagem do serviço prestado"
              />
            </SectionContainer>

            <SectionContainer>
              <Image
                src={pes}
                width={200}
                height={220}
                alt="imagem do serviço prestado"
              />
            </SectionContainer>

            <SectionContainer>
              <Image
                src={imgCarousel1}
                width={200}
                height={220}
                alt="imagem do serviço prestado"
              />
            </SectionContainer>

            <SectionContainer>
              <Image
                src={imgCarousel2}
                width={200}
                height={220}
                alt="imagem do serviço prestado"
              />
            </SectionContainer>

            <SectionContainer>
              <Image
                src={imgCarousel4}
                width={200}
                height={220}
                alt="imagem do serviço prestado"
              />
            </SectionContainer>

            <SectionContainer>
              <Image
                src={imgCarousel5}
                width={200}
                height={220}
                alt="imagem do serviço prestado"
              />
            </SectionContainer>

            <SectionContainer>
              <Image
                src={imgCarousel6}
                width={200}
                height={220}
                alt="imagem do serviço prestado"
              />
            </SectionContainer>

            <SectionContainer>
              <Image
                src={imgCarousel7}
                width={200}
                height={220}
                alt="imagem do serviço prestado"
              />
            </SectionContainer>

            <SectionContainer>
              <Image
                src={feedback5}
                width={200}
                height={170}
                alt="imagem do serviço prestado"
              />
            </SectionContainer>

            <SectionContainer>
              <Image
                src={feedback6}
                width={200}
                height={170}
                alt="imagem do serviço prestado"
              />
            </SectionContainer>

            <SectionContainer>
              <Image
                src={feedback7}
                width={200}
                height={170}
                alt="imagem do serviço prestado"
              />
            </SectionContainer>
          </MainMobile>
        </>
      ) : (
        <MainDesktop>
          <SectionContainer>
            <Image
              src={imgService1}
              width={300}
              height={200}
              alt="imagem do serviço prestado"
            />
            <Image
              src={feedback1}
              width={300}
              height={120}
              alt="feedback do cliente"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={imgService2}
              width={300}
              height={200}
              alt="imagem do serviço prestado"
            />
            <Image
              src={feedback2}
              width={300}
              height={120}
              alt="feedback do cliente"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={imgService3}
              width={300}
              height={200}
              alt="imagem do serviço prestado"
            />
            <Image
              src={feedback3}
              width={300}
              height={120}
              alt="feedback do cliente"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={imgCarousel3}
              width={300}
              height={200}
              alt="imagem do serviço prestado"
            />
            <Image
              src={feedback4}
              width={300}
              height={120}
              alt="feedback do cliente"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={infantil}
              width={300}
              height={300}
              alt="imagem do serviço prestado"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={pes}
              width={300}
              height={300}
              alt="imagem do serviço prestado"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={imgCarousel1}
              width={300}
              height={300}
              alt="imagem do serviço prestado"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={imgCarousel2}
              width={300}
              height={300}
              alt="imagem do serviço prestado"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={imgCarousel4}
              width={300}
              height={300}
              alt="imagem do serviço prestado"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={imgCarousel5}
              width={300}
              height={300}
              alt="imagem do serviço prestado"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={imgCarousel6}
              width={300}
              height={300}
              alt="imagem do serviço prestado"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={imgCarousel7}
              width={300}
              height={300}
              alt="imagem do serviço prestado"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={feedback5}
              width={300}
              height={300}
              alt="imagem do serviço prestado"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={feedback6}
              width={300}
              height={300}
              alt="imagem do serviço prestado"
            />
          </SectionContainer>

          <SectionContainer>
            <Image
              src={feedback7}
              width={300}
              height={300}
              alt="imagem do serviço prestado"
            />
          </SectionContainer>
        </MainDesktop>
      )}
      <footer>
        <p>
          Seu feedback é a nossa inspiração! Valorizamos cada opinião para criar
          unhas que refletem sua personalidade única.
        </p>
      </footer>
    </ClientsContainer>
  )
}
